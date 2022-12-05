import React from 'react'
import { Link } from 'react-router-dom'
import Grid from './Grid'
import logo from '../assets/images/Logo-2.png'
const footerAboutLinks = [
  {
    display: "Giới thiệu",
    path : "/about"
  },
  {
    display: "Liên hệ",
    path : "/about"
  },
  {
    display: "Tuyển dụng",
    path: "/about"
  },
  {
    display: "Tin tức",
    path : "/about"
  },
  {
    display: "Hệ thống cửa hàng",
    path: "/about"
  }
]
const footerCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/about"
  },
  {
    display: "Chính sách bảo hành",
    path: "/about"
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/about"
  }
]
const Footer = () => {
  return (
    <div>
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap= {10}>
          <div>
            <div className="footer__title">
              Tổng đài hỗ trợ
            </div>
            <div className="footer__content">
              <p>Liên hệ đặt hàng <strong>0463220120</strong></p>
              <p>Thắc mắc đơn hàng <strong>0463220120</strong></p>
              <p>Góp ý, khiếu nại <strong>0463220120</strong></p>
            </div>
          </div>
          <div>
            <div className="footer__title">
              Về Yolo
            </div>
            <div className="footer__content">
              {
                footerAboutLinks.map((item, index) =>(
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            
            </div>
          </div>
          <div>
            <div className="footer__title">
              Về Yolo
            </div>
            <div className="footer__content">
              {
                footerCustomerLinks.map((item, index) =>{
                  return <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                })
              }
            
            </div>
          </div>
          <div className='footer__about'>
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
            Tăng trưởng tín dụng cho cả năm nay được tăng lên thành 15,5-16% so với mục tiêu đầu năm là 14%.

Ngân hàng Nhà nước vừa phát đi thông báo về việc điều chỉnh chỉ tiêu tăng trưởng tín dụng định hướng cho năm nay, với mức tăng 1,5-2%. Việc điều chỉnh, theo cơ quan quản lý, trong bối cảnh tác động từ bên ngoài dịu bớt, thanh khoản của hệ thống các tổ chức tín dụng cải thiện hơn.
            </p>
          </div>
        </Grid>
      </div>
    </div>
  )
}

export default Footer