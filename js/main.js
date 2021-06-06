
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


var elsQuestionsItem = document.querySelectorAll('.questions__item');
var elsQuestionsButton = document.querySelectorAll('.questions__item--button');


elsQuestionsButton.forEach(function (button) {
  button.addEventListener('click', function () {

    elsQuestionsItem.forEach(function (icon) {
      icon.classList.remove('questions__item--active');
    });


    button.closest('.questions__item').classList.add('questions__item--active');
  });
});