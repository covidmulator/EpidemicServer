const convertLatLng = (x, y) => {
  return {
    lat: 37.508174 + 0.000392 * x,
    lng: 127.007216 + 0.003776 * y,
  };
};

const cluster = new kakao.maps.MarkerClusterer({
  map: map,
  markers: [],
  gridSize: 35,
  minLevel: 0,
  averageCenter: true,
  disableClickZoom: true,
  styles: [{
    width : '53px', height : '52px',
    color: '#fff',
    textAlign: 'center',
    lineHeight: '54px'
  }]
});

const displayMatrix = (matrix) => {
  cluster.clear();
  const markers = [];
  for (let i = 0; i < 15; i += 1) {
    for (let j = 0; j < 15; j += 1) {
      const idx = i * 15 + j;
      if (matrix[idx]) {
        const {
          lat, lng
        } = convertLatLng(i, j);
        markers.push(new kakao.maps.Marker({
          position: new kakao.maps.LatLng(lat, lng),
          image: matrix[idx] === 1 ? virusIcon :
                 matrix[idx] === 2 ? commonIcon :
                 matrix[idx] === 3 ? isolationIcon :
                 null
        }));
      }
    }
  }
  cluster.addMarkers(markers);
};
