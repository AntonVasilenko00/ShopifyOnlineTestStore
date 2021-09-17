import React from 'react';
import containerStyles  from '../../../assets/styles/container.module.scss'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar} from '@material-ui/core'
import {ShoppingCartOutlined as CartIcon} from '@material-ui/icons';
import styles from './Header.module.scss'
import Sidebar from '../Sidebar/Sidebar'
import {useDispatch} from 'react-redux'
import {openCart} from '../../../redux/ducks/cart/actions'

const Header = () => {
  const dispatch = useDispatch()

  return (
      <AppBar component='header' position='static' >
      <Toolbar className={styles.toolbar}>
        <Link to='/' className={styles.logo}>Home</Link>
        <Link to='/products'>view products</Link>
        <CartIcon cursor='pointer' onClick={() => dispatch(openCart())}/>
        <Sidebar />
      </Toolbar>
      </AppBar>
  );
};

export default Header;
