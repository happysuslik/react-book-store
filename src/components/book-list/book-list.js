import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import {booksLoaded} from '../../actions';
import { compose } from '../../utils';

import * as style from './book-list.module.css';

class BookList extends Component {

    componentDidMount() {
        // 1. receive data
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();

        // 2. dispatch action to store
        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
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

const mapStateToProps = ({books}) => {
   return { books }
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
