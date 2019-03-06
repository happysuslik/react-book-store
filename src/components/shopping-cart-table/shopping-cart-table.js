import React from 'react';

import * as style from './shopping-cart-table.module.css';

const ShoppingСartTable = () => {
    return (
        <div className={style.shoppingCartTable}>
            <h2>You Order</h2>
            <table className='table'>
                <thead>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Site Reliability Engineering</td>
                        <td>2</td>
                        <td>$40</td>
                        <td>
                            <button className='btn btn-outline-warning'>
                                <i className='fa fa-minus-circle'></i>
                            </button>
                            <button className='btn btn-outline-success'>
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

export default ShoppingСartTable;
