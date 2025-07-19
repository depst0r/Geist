import "/src/sass/style.scss";
import 'purecss';

const nav_items = document.querySelectorAll('.nav__item');
const nav_svg = document.querySelectorAll('.nav__item-svg');


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

mobileNavigation(nav_items);