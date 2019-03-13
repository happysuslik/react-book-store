import React from 'react';

import * as style from './shop-header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const ShopHeader = ({ orderTotal, orderCounts }) => {
    return (
        <header className={style.shopHeader + ' row'}>
            <NavLink to='/' className={style.logo + ' text-dark'}>Book Store</NavLink>
            <NavLink to='/cart' className={style.shoppingCart}>
                <i className={style.cartIcon + ' fa fa-shopping-cart'}><span className={style.items}>{orderCounts} items (${orderTotal})</span></i>
            </NavLink>
        </header>
    )
};

const mapToStateProps = ({ shoppingCart: { orderTotal, orderCounts } }) => {
    return {
        orderTotal,
        orderCounts
    }
};

export default connect(mapToStateProps)(ShopHeader);
