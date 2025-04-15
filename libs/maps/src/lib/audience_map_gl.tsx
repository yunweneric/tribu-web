import { useEffect, useRef } from 'react';
import { AppInput } from '@tribu/forms';
import { AppLoader } from '@tribu/ui';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { AppConfig } from '@tribu/utils';

export const AudienceGLMap = () => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // AppConfig.initConfig();
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g';
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      center: [-74.0242, 40.6941],
      zoom: 10.12,
    });

    return () => {
      mapRef?.current?.remove();
    };
  }, []);
  const isLoaded = true;
  return (
    <div>
      {isLoaded ? (
        <>
          <AppInput type="text" id="" onChange={(e) => {}} />
          <div id="map-container" ref={mapContainerRef} />
        </>
      ) : (
        <AppLoader />
      )}
    </div>
  );
};
export default AudienceGLMap;
