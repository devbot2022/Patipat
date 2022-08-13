import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';

import { Breadcrumb, Layout, Menu } from 'antd';
import ContentComp from './Content';

const { Header, Content, Footer } = Layout;

function App() {
  let menu = ['Home', 'Portfolio', 'Contact', 'About Us'];

  return (
    <Layout>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={menu.map((x)=>{
          return{key:x, label:x}})
        }
      />
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Register</Breadcrumb.Item>
        <Breadcrumb.Item>Form Register</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        <ContentComp/>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2022 Created by Patipat DevCamp2022
    </Footer>
  </Layout>
  );
}


export default App;
