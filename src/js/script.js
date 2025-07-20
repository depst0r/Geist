import "/src/sass/style.scss";
import 'purecss';

const nav_items = document.querySelectorAll('.nav__item')

const dropdown_btn = document.querySelector('#dropdown-menu-btn')

const mobileNavigation = items => {
    items.forEach(item => {
        item.addEventListener('click', () => {

            items.forEach(el => {
                el.classList.remove('active-dark')
                const paths = el.querySelectorAll('path')
                paths.forEach(p => p.setAttribute('fill', 'none'))
            });

            item.classList.add('active-dark')

            const activePaths = item.querySelectorAll('path')
            activePaths.forEach(p => p.setAttribute('fill', '#fff'))
        })
    })
}

const dropdownWindowMobile = id => {
    const dropWindow = document.querySelector('.nav__dropdown-menu')
    id.addEventListener('click', () => {
        dropWindow.classList.toggle('nav__dropdown-menu-active')
    })
}


mobileNavigation(nav_items)
dropdownWindowMobile(dropdown_btn)