// import mapboxgl from 'mapbox-gl';
// import { useEffect, useRef, useState } from 'react';

// mapboxgl.accessToken = 'pk.eyJ1Ijoicml0aWsxODciLCJhIjoiY20wODU2aWRoMDd6MTJqc2Jld3JpMWdvcyJ9.ibaRYakkovXq5U40CxTIcg';

// const Map = () => {
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(-70.9);
//     const [lat, setLat] = useState(42.35);
//     const [zoom, setZoom] = useState(9);

//     useEffect(() => {
//         if (map.current) return; // Initialize map only once
//         map.current = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: 'mapbox://styles/mapbox/streets-v12',
//             center: [lng, lat],
//             zoom: zoom
//         });

//         // Setup event listener after map initialization
//         map.current.on('move', () => {
//             setLng(map.current.getCenter().lng.toFixed(4));
//             setLat(map.current.getCenter().lat.toFixed(4));
//             setZoom(map.current.getZoom().toFixed(2));
//         });
//     }, []); // Empty dependency array to run only on the first render

//     return (
//         <div>
//             <div className='sidebar'>
//                 Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//             </div>
//             <div ref={mapContainer} className="map-container"></div>
//         </div>
//     );
// }

// export default Map;
import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const [map, setMap] = useState(null);
  const [dropoffs, setDropoffs] = useState(turf.featureCollection([]));
  const [pointHopper, setPointHopper] = useState({});

  useEffect(() => {
    const truckLocation = [-83.093, 42.376];
    const warehouseLocation = [-83.083, 42.363];
    const lastAtRestaurant = Date.now(); // Example timestamp

    // GeoJSON data for the warehouse location
    const warehouse = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: warehouseLocation,
          },
        },
      ],
    };

    // Add your access token
    mapboxgl.accessToken =
      'pk.eyJ1Ijoicml0aWsxODciLCJhIjoiY20wODU2aWRoMDd6MTJqc2Jld3JpMWdvcyJ9.ibaRYakkovXq5U40CxTIcg';

    // Initialize a map
    const mapInstance = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/light-v11', // stylesheet location
      center: truckLocation, // starting position
      zoom: 12, // starting zoom
    });

    mapInstance.on('load', () => {
      setMap(mapInstance);

      // Add a marker for the truck location
      const marker = document.createElement('div');
      marker.classList = 'truck';

      new mapboxgl.Marker(marker).setLngLat(truckLocation).addTo(mapInstance);

      // Add a circle layer for the warehouse
      mapInstance.addLayer({
        id: 'warehouse',
        type: 'circle',
        source: {
          data: warehouse,
          type: 'geojson',
        },
        paint: {
          'circle-radius': 20,
          'circle-color': 'white',
          'circle-stroke-color': '#3887be',
          'circle-stroke-width': 3,
        },
      });

      // Add a symbol layer on top of the circle layer for the warehouse
      mapInstance.addLayer({
        id: 'warehouse-symbol',
        type: 'symbol',
        source: {
          data: warehouse,
          type: 'geojson',
        },
        layout: {
          'icon-image': 'grocery', // Ensure that the icon 'grocery' is available in the sprite
          'icon-size': 1.5,
        },
        paint: {
          'text-color': '#3887be',
        },
      });

      // Add a layer for dropoff symbols
      mapInstance.addLayer({
        id: 'dropoffs-symbol',
        type: 'symbol',
        source: {
          data: dropoffs,
          type: 'geojson',
        },
        layout: {
          'icon-allow-overlap': true,
          'icon-ignore-placement': true,
          'icon-image': 'marker-15', // Use a suitable marker icon
        },
      });

      // Listen for a click on the map
      mapInstance.on('click', addWaypoints);
    });

    const addWaypoints = async (event) => {
      const coordinates = mapInstance.unproject(event.point);
      await newDropoff(coordinates);
      updateDropoffs(dropoffs);
    };

    const newDropoff = async (coordinates) => {
      const newFeature = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [coordinates.lng, coordinates.lat],
        },
      };

      setDropoffs((prevDropoffs) => {
        const updatedDropoffs = turf.featureCollection([...prevDropoffs.features, newFeature]);
        return updatedDropoffs;
      });

      // Add the new dropoff point to the pointHopper
      setPointHopper((prevPointHopper) => {
        const newPointHopper = { ...prevPointHopper };
        newPointHopper[Date.now()] = newFeature;
        return newPointHopper;
      });
    };

    const updateDropoffs = () => {
      if (mapInstance && mapInstance.getSource('dropoffs-symbol')) {
        mapInstance.getSource('dropoffs-symbol').setData(dropoffs);
      }
    };

    // Function to assemble the query URL for the Optimization API
    const assembleQueryURL = () => {
      const coordinates = [truckLocation];
      const distributions = [];
      const keepTrack = [truckLocation];

      const restJobs = Object.keys(pointHopper).map((key) => pointHopper[key]);

      if (restJobs.length > 0) {
        const needToPickUp =
          restJobs.filter((d) => d.properties.orderTime > lastAtRestaurant).length > 0;

        if (needToPickUp) {
          const restaurantIndex = coordinates.length;
          coordinates.push(warehouseLocation);
          keepTrack.push(pointHopper.warehouse);
        }

        for (const job of restJobs) {
          keepTrack.push(job);
          coordinates.push(job.geometry.coordinates);

          if (needToPickUp && job.properties.orderTime > lastAtRestaurant) {
            distributions.push(`${restaurantIndex},${coordinates.length - 1}`);
          }
        }
      }

      return `https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${coordinates.join(
        ';'
      )}?distributions=${distributions.join(
        ';'
      )}&overview=full&steps=true&geometries=geojson&source=first&access_token=${
        mapboxgl.accessToken
      }`;
    };

    return () => mapInstance.remove(); // Cleanup on unmount
  }, [dropoffs, pointHopper]);

  return <div id="map" style={{ position: 'absolute', inset: 0 }}></div>;
};

export default Map;

 


