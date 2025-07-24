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

const dropdownWindowLg = id => {
    const dropWindow = document.querySelector('.nav__lg-drop')
    id.addEventListener('click', () => {
        dropWindow.classList.toggle('nav__lg-drop-active')
    })
}

const paddingCardImg = () => {
    const cards_img = document.querySelectorAll('.work__card-img')
    Array.from(cards_img).slice(1).forEach(elem => elem.style.padding = '60px 0 60px 0')
}

paddingCardImg()

dropdownWindowLg(dropDownWindow_Lg)

mobileNavigation(nav_items)
dropdownWindowMobile(dropdown_btn)