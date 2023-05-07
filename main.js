const navbarList = document.querySelector('.navbar__list')
const openMenu = document.querySelector('.open__navbar')
const closeMenu = document.querySelector('.close__navbar')

// Open menu navbar on click
const openNavbar = () => {
    navbarList.style.display = 'flex'
    openMenu.style.display = 'none'
    closeMenu.style.display = 'inline-block'
}

// Close menu navbar on click
const closeNavbar = () => {
    navbarList.style.display = 'none'
    closeMenu.style.display = 'none'
    openMenu.style.display = 'inline-block'
}

openMenu.addEventListener('click', openNavbar)
closeMenu.addEventListener('click', closeNavbar)

// Close menu navbar when clicking any option
if(window.innerWidth < 1024) {
    document.querySelectorAll('.navbar__list .navbar__item').forEach(navbar => {
        navbar.addEventListener('click', () => {
            closeNavbar()
        })
    })
}

// Change menu navbar color when scrolling
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolling', window.scrollY)
})

// Sidebar menu manage category
const sidebar = document.querySelector('.dashboard__category')
const showBtn = document.querySelector('.show__sidebar-menu')
const hideBtn = document.querySelector('.hide__sidebar-menu')

const showMenuSidebar = () => {
    sidebar.style.left = '0'
    showBtn.style.display = 'none'
    hideBtn.style.display = 'inline-block'
}

const hideMenuSidebar = () => {
    sidebar.style.left = '-100%'
    hideBtn.style.display = 'none'
    showBtn.style.display = 'inline-block'
}

showBtn.addEventListener('click', showMenuSidebar)
hideBtn.addEventListener('click', hideMenuSidebar)