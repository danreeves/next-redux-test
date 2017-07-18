import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import Page from './page';
// import Category from '../components/category';

import { initStore } from './store';
import { fetchCategory } from './actions';

class CategoryPage extends Component {
    static async getInitialProps({ store, isServer, req }) {
        const categoryId = 1;
        return store.dispatch(fetchCategory(categoryId));
    }

    render() {
        return <Page />;
    }
}

export default withRedux(initStore)(CategoryPage);
