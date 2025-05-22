
document.addEventListener('click', documentActions)

function documentActions(e) {
  const targetElement = e.target

  if (targetElement.closest('.header__burger-btn')) {
    document.body.classList.toggle('menu-open')
  }
}