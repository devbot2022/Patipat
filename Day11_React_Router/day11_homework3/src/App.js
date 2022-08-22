
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate} from "react-router-dom";

//Page
import Home from './Page/Home';
import Department from './Page/Department';
import EmployeeDetail from './Page/EmployeeDetail';
import EmployeeData from './Page/EmployeeData';
import Error from './Page/Error';

import './App.css';
import './index.css';
import 'antd/dist/antd.css'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BarChartOutlined,
  ShopOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;



function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
    <div>
      <h1>Human Resource Management System</h1>
      <hr/>
    </div>
    <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="white"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <ShopOutlined />,
            label: <h4><Link to ='/'>Home</Link></h4>,
          },
          {
            key: '2',
            icon: <BarChartOutlined/>,
            label: <h4><Link to ='/department'>Department List</Link></h4>,
          },
          {
            key: '3',
            icon: <TeamOutlined />,
            label: <h4><Link to ='/employee'>Employee List</Link></h4>,
          },
        ]}
      />

      


    </Sider>
    <Layout className="site-layout">
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
      </Header>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
      <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/employee' element={<EmployeeData/>}/>
          <Route path='/employee/:id' element={<EmployeeDetail/>}/>
          <Route path='/department' element={<Department/>}/>
          <Route path='/marketing' element={<Marketing/>}/>
          <Route path='/sales' element={<Sales/>}/>
          <Route path='/engineer' element={<Engineer/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
      </Content>
    </Layout>
  </Layout>
  </>
  );
}





function Marketing() {
  //Redirect Data
let navigate = useNavigate();
const marketingList=[
  {id:'01', dept:'marketing', name:'Steve Maclaren'},
  {id:'02',dept:'marketing', name:'Daniel Hockey'},
  {id:'03',dept:'marketing', name:'John Navolo'}
]
return (
<>
  <h1 style={{color:'blue'}}>Marketing Team List</h1>
  <ul>
   {marketingList.map(x=>
   <li>
     {x.name} : {x.dept} <Link to={`${x.id}`}> <button onClick={()=>{navigate('/:id')}}>Employee Details</button></Link>
   </li>
   )}
  </ul>
</>
);
}

function Sales() {
  //Redirect Data
let navigate = useNavigate();
const salesList=[

  {id:'04', dept:'sales', name:'Bills Elington'},
  {id:'05',dept:'sales', name:'Arther Silva'},

]
return (
<>
  <h1 style={{color:'blue'}}>Sales Team List</h1>
  <ul>
   {salesList.map(x=>
   <li>
     {x.name} : {x.dept} <Link to={`${x.id}`}> <button onClick={()=>{navigate('/:id')}}>Employee Details</button></Link>
   </li>
   )}
  </ul>
</>
);
}

function Engineer() {
  //Redirect Data
let navigate = useNavigate();
const engineerList=[

  {id:'06',dept:'engineer', name:'Patipat Padpong'},
  {id:'07',dept:'engineer', name:'Harry Potter'},
  {id:'08',dept:'engineer', name:'Ron Wisley'}
]
return (
<>
  <h1 style={{color:'blue'}}>Engineer Team List</h1>
  <ul>
   {engineerList.map(x=>
   <li>
     {x.name} : {x.dept} <Link to={`${x.id}`}> <button onClick={()=>{navigate('/:id')}}>Employee Details</button></Link>
   </li>
   )}
  </ul>
</>
);
}


      export default App;
