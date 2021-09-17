import React from 'react';
import {Drawer} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../redux/store'
import useAppSelector from '../../../hooks/useAppSelector'
import {CartState} from '../../../redux/ducks/cart/types'
import {closeCart} from '../../../redux/ducks/cart/actions'

const Sidebar = () => {
  const cart = useAppSelector(state => state.cart)
  const dispatch = useDispatch()
  return (
      <Drawer
          anchor='right'
          open={cart.isOpen}
          onClose={()=>dispatch(closeCart())}
      >
        cart items
      </Drawer>
  );
};

export default Sidebar;
