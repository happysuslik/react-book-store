import React from 'react';
import * as style from './bookListItem.module.css';
import {Link} from "react-router-dom";

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImage } = book;
    return (
        <div className={style.bookListItem}>
            <div className={style.bookCover}>
                <img src={coverImage} alt="cover"/>
            </div>
            <div className={style.bookDetails}>
                <Link to="/" className={style.bookTitle}>{title}</Link>
                <div className={style.bookAuthor}>{author}</div>
                <div className={style.bookPrice}>${price}</div>
                <button
                    onClick={onAddedToCart}
                    className={"btn btn-info " + style.addToCart}
                >Add to cart</button>
            </div>

        </div>
    );
};

export default BookListItem;
