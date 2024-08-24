// MapComponent.js
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

// Replace with your Mapbox access token
const MAPBOX_TOKEN = 'YOUR_MAPBOX_ACCESS_TOKEN';

// Example coordinates (replace these with actual values)
const sourceLongitude = -73.985664;
const sourceLatitude = 40.748514;
const destination1Longitude = -74.005941;
const destination1Latitude = 40.712776;
const destination2Longitude = -73.973056;
const destination2Latitude = 40.773597;

const MapComponent = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const directions = useRef(null);

    useEffect(() => {
        if (map.current) return; // Initialize map only once

        // Initialize the map
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [sourceLongitude, sourceLatitude], // Set initial center to source location
            zoom: 12
        });

        // Initialize the directions control
        directions.current = new MapboxDirections({
            accessToken: MAPBOX_TOKEN,
            unit: 'metric',
            profile: 'mapbox/driving'
        });

        // Add directions control to the map
        map.current.addControl(directions.current, 'top-left');

        // Set source and destinations
        directions.current.setOrigin([sourceLongitude, sourceLatitude]);
        directions.current.addDestination([destination1Longitude, destination1Latitude]);
        directions.current.addDestination([destination2Longitude, destination2Latitude]);
        // Add more destinations as needed

    }, []);

    return <div ref={mapContainer} style={{ width: '100%', height: '100vh' }} />;
};

export default MapComponent;
