import React,{useRef,useEffect} from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import { NavLink } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";


const nav_links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];
const Header = () => {

const headerRef= useRef(null);
const menuRef= useRef(null);
const stickyHeaderFun = ()=>{
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add("sticky__header")
    }
    else{
      headerRef.current.classList.remove("sticky__header");
    }
  })
}
useEffect(()=>{
  stickyHeaderFun();
  return () => window.removeEventListener("scroll" , stickyHeaderFun);
});

const menuToggle =()=>{ menuRef.current.classList.toggle('active__menu')}
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row> 
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>FineMart</h1>
                <p>Since 1998</p>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_icons">
              <span className="fav_icons">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart_icons">
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">1</span>
              </span>
              <span>
                <motion.img
                  src={userIcon}
                  whileTap={{ scale: 1.2 }}
                  alt="user"
                />
              </span>
              <div className="mobile_menu">
              <span onClick={menuToggle}>
                <i className="ri-menu-line"></i>{" "}
              </span>
            </div>  
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
