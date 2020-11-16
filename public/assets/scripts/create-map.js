const mapContainer = document.getElementById('map');
mapContainer.style.width = '100vw';
mapContainer.style.height = '100vh'; 
const mapOption = {
  center: new kakao.maps.LatLng(37.505840, 127.02899),
  level: 5,
};

const map = new kakao.maps.Map(mapContainer, mapOption); 
