
var elsFeaturesTabsItem = document.querySelectorAll('.features-tabs__item');
var elsFeaturesTabsLink = document.querySelectorAll('.features-tabs__link');


elsFeaturesTabsLink.forEach(function (link) {
  link.addEventListener('click', function () {

    elsFeaturesTabsItem.forEach(function (item) {
      item.classList.remove('features-tabs__item--active');
    });


    link.parentElement.classList.add('features-tabs__item--active');
  });
});


var elsFeaturesTabsItem = document.querySelectorAll('.features-tabs__item');
var elsFeaturesTabsLink = document.querySelectorAll('.features-tabs__link');

// Har bir linkka quloq klikka quloq solishni buyuramiz
elsFeaturesTabsLink.forEach(function (link) {
  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    // Avval hamma li lardan faollik klassini olib tashlaymiz
    elsFeaturesTabsItem.forEach(function (item) {
      item.classList.remove('features-tabs__item--active');
    });

    // Bosilgan link ota elementiga faollik klassini qo'shamiz
    link.parentElement.classList.add('features-tabs__item--active');
  });
});

// PANELS
  var elsTabsItem = document.querySelectorAll('.features-tabs__item');
  var elsTabsLink = document.querySelectorAll('.features-tabs__link');
  var elsPanel = document.querySelectorAll('.panels__item');
// Har bir link clickga quloq solsin. Har biriga link deb murojaat qilamiz. O'zimiz nom beramiz
elsTabsLink.forEach(function (link) {
  // Har bir linkka click reaksiyasini beramiz
  link.addEventListener('click', function (evt) {
    // Linkning tabiiy reaksiyasi (sakrash)ning oldi olinadi
    evt.preventDefault();

    // Hamma li lardan active klassni olib tashlaymiz. Har biriga item deb murojaat qilamiz
    elsTabsItem.forEach(function (item) {
      item.classList.remove('features-tabs__item--active');
    });

    // Bosilgan linkning otasiga active klassini qo'shamiz
    link.parentElement.classList.add('features-tabs__item--active');

    // Hamma panellarni yopamiz
    elsPanel.forEach(function (panel) {
      panel.classList.remove('panels__item--active');
    });

    // Bog'langan panelni topamiz
    document.querySelector(link.getAttribute('href')).classList.add('panels__item--active');
  });
});
