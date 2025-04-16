import { useEffect, useRef, useState } from 'react';
import { AppInput } from '@tribu/forms';
import { useDebounce } from '@tribu/utils';
import { AppLoader } from '@tribu/ui';
import Map from 'react-map-gl/mapbox';
import useGeolocation from '../hooks/use_location';
import useGeocode from '../hooks/use_geocode';

export const AudienceGLMap = () => {
  const env = import.meta.env;
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { location, setLocation } = useGeolocation(false);
  const [address, setAddress] = useState('');
  const { coordinates, error, geocode } = useGeocode();
  const debouncedAddress = useDebounce(address, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  useEffect(() => {
    if (debouncedAddress) {
      geocode(debouncedAddress);
      setLocation(coordinates);
    }
  }, [debouncedAddress, geocode]);

  return (
    <div>
      <AppInput
        type="text"
        id=""
        onChange={handleChange}
        placeholder="Search city"
      />
      <div className="w-full mt-2 relative h-[40vh]">
        <Map
          onLoad={(e) => {
            e.type === 'load' && setIsLoaded(true);
            console.log(e);
          }}
          mapboxAccessToken={env.VITE_MAP_BOX_KEY}
          initialViewState={{
            longitude: location?.longitude,
            latitude: location?.latitude,
            zoom: 4,
          }}
          style={{
            width: '100%',
            height: '40vh',
            borderRadius: '0.2rem',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />

        {isLoaded ? null : (
          <AppLoader className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        )}
      </div>
    </div>
  );
};
export default AudienceGLMap;
