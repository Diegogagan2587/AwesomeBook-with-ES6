import showClickedSection from './switch_sections.js';

function setListenersToNavigationBar() {
  const navAnchors = document.querySelectorAll('.nav-anchors');

  navAnchors.forEach((element) => {
    element.addEventListener('click', showClickedSection);
  });
}

export default setListenersToNavigationBar;