function setMeteorFallDistance() {
  const meteors = document.querySelector('.meteors');
  if (!meteors) return;
  meteors.style.height = `${document.documentElement.scrollHeight}px`;
  document.documentElement.style.setProperty('--meteor-fall-distance', `${document.documentElement.scrollHeight + 150}px`);
}

window.addEventListener('DOMContentLoaded', setMeteorFallDistance);
window.addEventListener('resize', setMeteorFallDistance);
window.addEventListener('scroll', setMeteorFallDistance);