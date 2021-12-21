import { useRef, useEffect } from 'react';

function Map({ address, title }) {
  const { kakao } = window;
  const restaurantAddress = address;
  const mapMark = useRef();

  const style = {
    width: '100%',
    backgroundColor: '#333',
    minHeight: '100px',
    marginTop: '10px',
  };

  useEffect(() => {
    if (restaurantAddress !== undefined) {
      getMap();
    }
  }, [address]);

  const getMap = () => {
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 6,
    };

    const map = new kakao.maps.Map(mapMark.current, mapOption);

    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(restaurantAddress, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        const marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        const infowindow = new kakao.maps.InfoWindow({
          content: `<p>${title}</p>`,
        });
        infowindow.open(map, marker);

        map.setCenter(coords);
      } else {
        console.log('정보가 정확하지 않습니다.');
      }
    });
  };

  return (
    <div ref={mapMark} style={style} className="map">
      map
    </div>
  );
}

export default Map;
