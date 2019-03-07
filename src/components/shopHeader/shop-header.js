import React from 'react';

import * as style from './shop-header.module.css';
import {NavLink} from "react-router-dom";

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className={style.shopHeader + ' row'}>
            <NavLink to='/' className={style.logo + ' text-dark'}>Book Store</NavLink>
            <NavLink to='/Cart' className={style.shoppingCart}>
                <i className={style.cartIcon + ' fa fa-shopping-cart'}><span className={style.items}>{numItems} items (${total})</span></i>
            </NavLink>
        </header>
    )
};

export default ShopHeader;
