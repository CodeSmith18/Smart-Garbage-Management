import React, { useEffect, useRef, useCallback, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as turf from '@turf/turf';

mapboxgl.accessToken = 'pk.eyJ1Ijoicml0aWsxODciLCJhIjoiY20wOHEzNXVsMWFsbzJsczRhYjN4bmwyayJ9.MAV7j_ty1QAvYoRM1yMMqQ';

function Mapp() {
  const mapContainer = useRef(null);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-96.5108, 39.1184], // Center of the map
      zoom: 12,
    });

    map.on('load', () => {
      // Example locations
      const FromLocation = [-112.073555, 33.44793];
      const ToLocation = [-110.965274, 32.228759];
      
      const from = turf.featureCollection([turf.point(FromLocation)]);
      const to = turf.featureCollection([turf.point(ToLocation)]);
      
      map.addLayer({
        id: 'from',
        type: 'circle',
        source: {
          type: 'geojson',
          data: from,
        },
        paint: {
          'circle-radius': 10,
          'circle-color': 'blue',
          'circle-stroke-color': 'blue',
          'circle-stroke-width': 3,
        },
      });

      map.addLayer({
        id: 'to',
        type: 'circle',
        source: {
          type: 'geojson',
          data: to,
        },
        paint: {
          'circle-radius': 10,
          'circle-color': 'red',
          'circle-stroke-color': 'red',
          'circle-stroke-width': 3,
        },
      });

      // Fetch route coordinates
      fetchRoute(FromLocation, ToLocation);
    });

    async function fetchRoute(from, to) {
      try {
        const response = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${from.join(',')};${to.join(',')}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`
        );
        const data = await response.json();
        const routeCoordinates = data.routes[0].geometry.coordinates;
        setCoordinates(routeCoordinates);

        // Call optimization API
        fetchOptimizedRoute(routeCoordinates);
      } catch (error) {
        console.error('Error fetching route:', error);
      }
    }

    async function fetchOptimizedRoute(coords) {
      if (coords.length > 12) {
        coords.splice(1, coords.length - 12); // Limit to 12 coordinates
      }

      try {
        const response = await fetch(
          `https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${coords.join(';')}?overview=full&steps=true&geometries=geojson&roundtrip=false&source=first&destination=last&access_token=${mapboxgl.accessToken}`
        );
        const data = await response.json();
        const routeGeoJSON = turf.featureCollection([
          turf.feature(data.trips[0].geometry),
        ]);

        if (map.current.getSource('route')) {
          map.current.getSource('route').setData(routeGeoJSON);
        } else {
          map.current.addSource('route', {
            type: 'geojson',
            data: routeGeoJSON,
          });
          map.current.addLayer({
            id: 'routeline-active',
            type: 'line',
            source: 'route',
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#0E3464',
              'line-width': ['interpolate', ['linear'], ['zoom'], 12, 3, 22, 12],
            },
          });
        }
      } catch (error) {
        console.error('Error fetching optimized route:', error);
      }
    }
  }, []);

  return <div id="map" ref={mapContainer} style={{ width: '100%', height: '100vh' }} />;
}

export default Mapp;
