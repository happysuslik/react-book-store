import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import { BookStoreServiceProvider } from "./components/bookstore-service-context";

import store from './store';

const bookstoreService = new BookstoreService();

ReactDom.render(
    // giving access to redux store
    <Provider store={store}>
        <ErrorBoundry>
            {/* transmits service through ContextAPI */}
            <BookStoreServiceProvider value={bookstoreService}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </BookStoreServiceProvider>
        </ErrorBoundry>
    </Provider>, document.getElementById('root')
);
