const point = [36.902203430580876, 30.716856361340255];

function init() {
  const map = new ymaps.Map('map', {
    center: point,
    zoom: 13,
  });

  // добавление метки
  const placemark = new ymaps.Placemark(point, {
    balloonContentHeader: 'Хедер балуна',
    balloonContentBody: 'Body балуна',
    balloonContentFooter: 'Подвал',
  }, {
    iconLayout: 'default#image',
    iconImageHref: '/img/placeholder.png',
    iconImageSize: [40, 40],
    // iconImageOffset: [0, 0],
  });

  const placemark1 = new ymaps.Placemark(point, {
    balloonContent: `
    <div class="balloon">
      <div class="balloon_address">Watchers shop</div>
      <div class="balloon_contacts">
        <a href="tel:+79998889999">+79998889999</a>
      </div>
    </div>

    `,
  }, {
    iconLayout: 'default#image',
    iconImageHref: '/img/placeholder.png',
    iconImageSize: [40, 40],
    // iconImageOffset: [0, 0],
  });
  // map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  // map.controls.remove('trafficControl'); // удаляем контроль трафика
  // map.controls.remove('typeSelector'); // удаляем тип
  // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  // map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  // map.geoObjects.add(placemark);
  map.geoObjects.add(placemark1);

  // по умолчанию открытый балун
  placemark1.balloon.open();
}

ymaps.ready(init);
