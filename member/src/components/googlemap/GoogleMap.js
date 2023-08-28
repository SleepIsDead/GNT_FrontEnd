import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const mapStyle = {
  width: '100vw',
  height: '100vh',
};

function Map (){
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBnBcEFs_o9xPHgartVyWKBkhsM9-ztLYc',
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(40.712216, -74.22655),
      new google.maps.LatLng(40.74, -74.18)
    );
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapStyle={mapStyle}
      defaultZoom={12}
    //   defaultCenter=
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {locations.map(item => {
        return <Marker key={item.name} position={item.location} />;
      })}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
