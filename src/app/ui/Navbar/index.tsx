'use client';

import Link from 'next/link';
import { Menu, Button, Layout } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem'; // Direct import
const { Header } = Layout;

const Navbar = () => {
  return (
    <nav>
      <Header style={{ position: 'sticky' }}>
        <Menu mode='horizontal' style={{ float: 'right' }}>
          <MenuItem>
            <Link href='/'>Home</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/about'>About</Link>
          </MenuItem>
          <MenuItem>
            <Link href='/contact'>Contact</Link>
          </MenuItem>
          <MenuItem>
            <Button color='default' variant='filled'>
              Sign up
            </Button>
          </MenuItem>
          <MenuItem>
            <Button type='primary' color='default' variant='solid'>
              Sign in
            </Button>
          </MenuItem>
        </Menu>
      </Header>
    </nav>
  );
};

export default Navbar;
