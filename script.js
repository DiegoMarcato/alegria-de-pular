function homeClick() {
  hideSections()
  const a = document.getElementById('home')
  const btn = document.getElementById('home-btn')

  btn.classList.add('border-blue-600')
  btn.classList.add('text-blue-600')


  a.style.display = ''
}

function servicesClick() {
  hideSections()
  const a = document.getElementById('services')
  const btn = document.getElementById('services-btn')
  btn.classList.add('border-blue-600')
  btn.classList.add('text-blue-600')
  a.style.display = ''
}

function aboutClick() {
  hideSections()
  const a = document.getElementById('about')
  const btn = document.getElementById('about-btn')
  btn.classList.add('border-blue-600')
  btn.classList.add('text-blue-600')
  a.style.display = ''
}

function hideSections() {
  const home = document.getElementById('home')
  const services = document.getElementById('services')
  const about = document.getElementById('about')


  const homeBtn = document.getElementById('home-btn')
  const servicesBtn = document.getElementById('services-btn')
  const aboutBtn = document.getElementById('about-btn')

  home.style.display = "none"
  services.style.display = "none"
  about.style.display = "none"

  homeBtn.classList.remove('border-blue-600')
  homeBtn.classList.remove('text-blue-600')

  servicesBtn.classList.remove('border-blue-600')
  servicesBtn.classList.remove('text-blue-600')

  aboutBtn.classList.remove('border-blue-600')
  aboutBtn.classList.remove('text-blue-600')
}