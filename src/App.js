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
    label: "Home",
  },
  {
    key: "about",
    label: "About",
  },
  {
    key: "doctors ",
    label: "Doctors",
  },
  {
    key: "departments ",
    label: "Departments",
  },
  {
    key: "contactUs",
    label: "Contact Us",
  },
  {
    key: "book",
    label: "Book",
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
          <scan className='app-logo-title'>Acecare</scan>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
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
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;