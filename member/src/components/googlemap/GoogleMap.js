import React, { useEffect, useRef } from 'react'
import { GoogleMap, useLoadScript, MarkerF ,InfoWindow } from '@react-google-maps/api';
const containerStyle = {
  width: '75%',
  height: '100%',
  displa : 'inline-block',
};

const center = {
  lat: 37.5649867,
  lng: 126.985575
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 18,
}
const markers = [];



function MyComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: '',
    libraries: ["places"]
  });
  
  const [map, setMap] = React.useState(null)

  const searchInput = useRef();
  
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    const infoWindow = new window.google.maps.InfoWindow({
      content: "",
      disableAutoPan: true,
    });
    const input = searchInput.current;

    const searchBox = new window.google.maps.places.SearchBox(input);

    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });

    
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // // Clear out the old markers.
      // markers.forEach((marker) => {
      //   marker.setMap(null);
      // });
      // markers = [];
      
      // For each place, get the icon, name and location.
      const bounds = new window.google.maps.LatLngBounds();
      console.log(places)
      console.log(places[0])
      console.log(places[0].formatted_address)
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
        console.log(place.name)

        
        // const icon = {
        //   url: place.icon,
        //   size: new window.google.maps.Size(71, 71),
        //   origin: new window.google.maps.Point(0, 0),
        //   anchor: new window.google.maps.Point(17, 34),
        //   scaledSize: new window.google.maps.Size(25, 25),
        // };

        // Create a marker for each place.
        const marker = new window.google.maps.Marker({
          map,
          // icon,
          title: place.name,
          position: place.geometry.location,
          contents : place.name
        });

        marker.addListener("click", () => {
          infoWindow.setContent(place.name)
          infoWindow.open({
            anchor: marker,
            map,
          });
        })


        markers.push(marker );
        
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          // bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });

    setMap(map);
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  

  

  return isLoaded ? (
    <>
    {/* <input
      type="text"
      ref={searchInput}
    /> */}
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={OPTIONS}
    >
      {/* <MarkerF position={center}></MarkerF> */}
    </GoogleMap>
    </>
  ) : <></>
}

export default React.memo(MyComponent)

