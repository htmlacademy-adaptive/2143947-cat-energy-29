const navigation = document.querySelector('.main-navigation');
const navigationToggle = navigation.querySelector('.main-navigation__toggle');

navigationToggle.addEventListener('click', (evt) => {
  if (navigation.classList.contains('main-navigation--closed')) {
    evt.preventDefault();
    navigation.classList.remove('main-navigation--closed');
  }
  else {
    evt.preventDefault();
    navigation.classList.add('main-navigation--closed');
  }
});
