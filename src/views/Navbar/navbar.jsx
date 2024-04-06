import React, {useState, useEffect} from 'react';
import appLogo from '../../assets/images/acecare_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Layout, Button, Drawer, Menu } from "antd";
import { useLocation } from "react-router-dom";
import './navbar.css'

function Navbar(props) {
    const items = [
        {
          key: "home",
          label: <a href="#home">Home</a>,
        },
        {
          key: "about",
          label: <a href="#about">About</a>,
        },
        {
          key: "doctors ",
          label:<a href="#doctors">Doctors</a>,
        },
        {
          key: "departments ",
          label: <a href="#departments">Departments</a>,
        },
        {
          key: "contactUs",
          label: <a href="#contact">Contact Us</a>,
        },
        {
          key: "book",
          label: <a href="#book">Book</a>,
        }
      ]
      const [visible, setVisible] = useState(false);
      const showDrawer = () => {
        setVisible(!visible);
      };
    
      // If you do not want to auto-close the mobile drawer when a path is selected
      // Delete or comment out the code block below
      // From here
    //   
      // Upto here
    return (
        <Layout.Header className='header-style'>
            <div className="app-logo"> 
                <img src={appLogo} alt='app-logo' className='app-logo-img'/>
                <span className='app-logo-title'>Acecare</span>
            </div>
            <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            items={items}
            className='menubar-horizontal'
            />
            <Button className="menu-btn" type="text" onClick={showDrawer}>
              <FontAwesomeIcon icon={faBars}/>
            </Button>
            <Drawer
              title={"Acecare"}
              placement="right"
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={{ zIndex: 99999 }}
            >
              <Menu mode={"inline"} items={items}/>
            </Drawer>
        </Layout.Header>
    );
}

export default Navbar;