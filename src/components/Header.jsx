import React from 'react'
import logo from '../assets/images/Logo-2.png'
import { Link } from 'react-router-dom'
const mainNav = [
  {
    display: "Trang chủ",
    path:"/"
  },
  {
    display: "Sản phẩm",
    path:"/catelog"
  },
  {
    display: "Phụ kiện",
    path:"/acessories"
  },
  {
    display: "Liên hệ",
    path:"/contact"
  }
]
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
            <Link to='/'>
              <img src={logo} alt =""/>
            </Link>
        </div>
        <div className="header__menu">
        <div className="header__menu__mobile-toggle">
            <i class='bx bx-menu'></i>
          </div>
          <div className="header__menu__left">
            <div className="header__menu__left__close">
              <i className="bx bx-chevron-left"></i>
            </div>
          {
            mainNav.map((item, index) =>(
              <div key={index} className="header__menu__item header__menu__left__item">
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))
          }
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu_right_item">
              <i className="bx bx-search"></i>
            </div>
            <div className="header__menu__item header__menu_right_item">
              <Link to = "/cart">
              <i className="bx bx-cart"></i>
              </Link>
            </div>
            <div className="header__menu__item header__menu_right_item">
              <i className="bx bx-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header