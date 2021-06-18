import { Menu } from 'antd';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
	    <img src={logo} width="150" style={{ padding: 0, margin: '0 25px 0 0' }} alt="logo" />
        <Menu.Item key="1" >
          <span>Item1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <span>Item2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <span>Item3</span>
        </Menu.Item>
      </Menu>
  );
}

export default App;
