const commonIcon = new kakao.maps.MarkerImage(
  '/assets/images/common.png',
  new kakao.maps.Size(40, 40),
  {
    offset: new kakao.maps.Point(16, 34),
    alt: '일반 시민',
    shape: 'poly',
    coords: '1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33',
  },
);

const virusIcon = new kakao.maps.MarkerImage(
  '/assets/images/virus.png',
  new kakao.maps.Size(40, 40),
  {
    offset: new kakao.maps.Point(16, 34),
    alt: '감염된 시민',
    shape: 'poly',
    coords: '1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33',
  },
);

const isolationIcon = new kakao.maps.MarkerImage(
  '/assets/images/isolation.png',
  new kakao.maps.Size(40, 40),
  {
    offset: new kakao.maps.Point(16, 34),
    alt: '격리된 시민',
    shape: 'poly',
    coords: '1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33',
  },
);
