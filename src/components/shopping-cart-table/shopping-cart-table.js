import React from 'react';
import {connect} from 'react-redux';

import * as style from './shopping-cart-table.module.css';
import {bookAddedToCart, bookDecrease, deleteOrderFromCart} from "../../actions";

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td className={style.groupButton}>
                    <button
                        onClick={() => onDecrease(id)}
                        className='btn btn-outline-warning'>
                        <i className='fa fa-minus-circle'></i>
                    </button>
                    <button
                        onClick={() => onIncrease(id)}
                        className={'btn btn-outline-success ' + style.add}>
                        <i className='fa fa-plus-circle'></i>
                    </button>
                    <button
                        onClick={() => onDelete(id)}
                        className='btn btn-outline-danger'>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        )
    };

    return (
        <div className={style.shoppingCartTable}>
            <h2>You Order</h2>
            <table className='table'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    { items.map(renderRow) }
                </tbody>
            </table>

            <div className={style.total}>
                Total: ${total}
            </div>
        </div>
    )
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    }
};

const mapDispatchToProps = {
    onDecrease: bookDecrease,
    onIncrease: bookAddedToCart,
    onDelete: deleteOrderFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
