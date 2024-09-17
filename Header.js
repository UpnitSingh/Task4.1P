import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

const Header = () => (
  <Menu>
    <Menu.Item name="home">Upnit Singh</Menu.Item>
    <Menu.Item>
      <Input icon="search" placeholder="Search..." />
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item name="post" />
      <Menu.Item name="login" />
    </Menu.Menu>
  </Menu>
);

export default Header;
