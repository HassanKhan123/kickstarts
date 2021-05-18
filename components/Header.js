import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu style={{ marginTop: 5 }}>
      <Menu.Item>Crowd Coin</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>Campaigns</Menu.Item>
        <Menu.Item>+</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
