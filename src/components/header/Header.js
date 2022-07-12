import React from "react";
export const Header = () => {
  const navMenu = document.getElementById('nav-menu')
  const navToggle = document.getElementById('nav-toggle')
  const navClose = document.getElementById('nav-close')
  if(navToggle){
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
    })
  }
  if(navClose){
    navClose.addEventListener('click', () => {
      navMenu.classList.remove("show-menu")
    })
  }
/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Aayush Dangol
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="" className="nav__link">
              <i className='bx bx-home-alt nav__icon'></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" id="nav-close"></i>
        </div>
        <div className="nav__btns">
        {/* <i class="uil uil-moon change-theme" id= "theme-button"></i> */}
          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
