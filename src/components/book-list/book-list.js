import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc';
import {booksLoaded, booksRequested} from '../../actions';
import {compose} from '../../utils';

import * as style from './book-list.module.css';
import Spinner from "../spinner";

class BookList extends Component {

    componentDidMount() {
        const {bookstoreService, booksLoaded, booksRequested} = this.props;
        booksRequested();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data));
    }

    render() {
        const {books, isLoading} = this.props;
        if (isLoading) {
            return <Spinner />
        }
        return (
            <ul className={style.bookList}>
                {
                    books.map((book, index) => {
                        return (
                            <li key={index}><BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({books, isLoading}) => {
    return {books, isLoading}
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
