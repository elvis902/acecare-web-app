import './App.css';
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import InlineSVG from 'react-inlinesvg';
import appLogo from './assets/images/acecare_logo.png'
import Home from './views/home/home';


const { Header, Content, Footer } = Layout;
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
// const items = new Array(3).fill(null).map((_, index) => ({
//   key: String(index + 1),
//   label: `nav ${index + 1}`,
// }));
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header className='header-style'>
        <div className="app-logo"> 
          <img src={appLogo} alt='app-logo' className='app-logo-img'/>
          <span className='app-logo-title'>Acecare</span>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={items}
          className='navbar-style'
        />
      </Header>
      <Content className='content-style'>
        <Home/>
  
        
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Copyright ©{new Date().getFullYear()} Created by AceCare
      </Footer>
    </Layout>
  );
};
export default App;