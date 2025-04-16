import { useState } from 'react';
import { Coordinates } from '../interfaces/coordinates';

const useGeocode = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  const geocode = async (address: string) => {
    const apiKey = 'YOUR_MAPBOX_API_KEY'; // Replace with your Mapbox API Key
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const { center } = data.features[0]; // 'center' contains the [longitude, latitude] array
        setCoordinates({ latitude: center[1], longitude: center[0] });
        setError(null);
      } else {
        setError('Geocoding failed. Please try another address.');
      }
      return coordinates;
    } catch (err) {
      setError('Error fetching geolocation data.');
    }
  };

  return { coordinates, error, geocode };
};

export default useGeocode;
