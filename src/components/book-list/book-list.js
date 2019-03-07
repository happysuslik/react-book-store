import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc';
import {booksLoaded, booksRequested, booksError} from '../../actions';
import {compose} from '../../utils';

import * as style from './book-list.module.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class BookList extends Component {

    componentDidMount() {
        const {
            bookstoreService,
            booksLoaded,
            booksRequested,
            booksError
        } = this.props;
        booksRequested();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((err) => booksError(err));
    }

    render() {
        const {books, isLoading, error} = this.props;
        if (isLoading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator error={error}/>
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

const mapStateToProps = ({books, isLoading, error}) => {
    return {books, isLoading, error}
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
