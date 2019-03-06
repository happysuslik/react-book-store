import React from 'react';
import * as style from './bookListItem.module.css';

const BookListItem = ({ book }) => {
    const { title, author, price, coverImage } = book;
    return (
        <div className={style.bookListItem}>
            <div className={style.bookCover}>
                <img src={coverImage} alt="image"/>
            </div>
            <div className={style.bookDetails}>
                <a href="#" className={style.bookTitle}>{title}</a>
                <div className={style.bookAuthor}>{author}</div>
                <div className={style.bookPrice}>${price}</div>
                <button className={"btn btn-info " + style.addToCart}>Add to cart</button>
            </div>

        </div>
    );
};

export default BookListItem;
