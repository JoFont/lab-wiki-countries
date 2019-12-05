import React, { useState, useEffect } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { fetchAll } from "./services/wiki-api";
import { Switch, Route } from "react-router-dom";
import CountryView from './views/CountryView';


const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    const res = fetchAll();
    setCountries(res);
  }, [])
  

  const handleRoute = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    console.log(key);
  }

  const menuItemStyle = {
    marginRight: "0.8rem",
  };

  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" />

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={handleRoute}>
          {countries.map(country => (
            <Menu.Item key={country.cca3}>
              <Avatar size="small" src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} style={menuItemStyle}/>
              <span className="nav-text">{country.name.common}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Switch>
            <Route path="/:country">
              <CountryView data={}/>
            </Route>
            <Route path="/">
              <CountryView />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
