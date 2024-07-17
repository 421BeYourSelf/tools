import React from 'react';
import {Layout, Menu, theme} from 'antd';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Dashboard from "../page/Dashboard";
import Tools from "../page/Tools";
import Subscription from "../page/Subscription";
import Receipt from "../page/Receipt";
import NewReceipt from "../page/NewReceipt";

const {Header, Content, Footer} = Layout;
const items = [

  {
    key: "/",
    label: "工具下载"
  },
  {
    key: "/subscription",
    label: "订阅"
  },
  {
    key: "/new-receipt",
    label: "新票据"
  },
  {
    key: "/receipt",
    label: "票据"
  },
  {
    key: '/dashboard',
    label: '仪表盘',
  },
];
const ContainerLayout = () => {
  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  const navigate = useNavigate();

  const handleMenu = (e) => {
    localStorage.setItem("active-key", e.key);
    navigate(e.key);
  };

  return (
    <Layout className="layout">
      <Header
        style={{
          position: 'sticky',
          backgroundColor: '#fff',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[localStorage.getItem('active-key') || '/']}
          items={items}
          onClick={handleMenu}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '20px 40px',
        }}
      >
        <div
          style={{
            margin: '16px 0',
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/" element={<Tools/>}/>
            <Route path="/subscription" element={<Subscription/>}/>
            <Route path="/receipt" element={<Receipt/>}/>
            <Route path="/new-receipt" element={<NewReceipt/>}/>
          </Routes>
        </div>
      </Content>
    </Layout>
  );
};
export default ContainerLayout;
