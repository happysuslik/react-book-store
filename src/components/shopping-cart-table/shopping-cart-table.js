import React from 'react';

import * as style from './shopping-cart-table.module.css';

const ShoppingCartTable = () => {
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
                <tr>
                    <td>1</td>
                    <td>Site Reliability Engineering</td>
                    <td>2</td>
                    <td>$40</td>
                    <td className={style.groupButton}>
                        <button className='btn btn-outline-warning'>
                            <i className='fa fa-minus-circle'></i>
                        </button>
                        <button className={'btn btn-outline-success ' + style.add}>
                            <i className='fa fa-plus-circle'></i>
                        </button>
                        <button className='btn btn-outline-danger'>
                            <i className='fa fa-trash-o'></i>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>

            <div className={style.total}>
                Total: $201
            </div>
        </div>
    )
};

export default ShoppingCartTable;
