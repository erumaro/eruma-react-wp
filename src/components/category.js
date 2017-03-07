import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchCats, fetchCat } from '../actions/index';
import ReactHtmlParser from 'react-html-parser';

import { Container, Header, Grid, Image, Menu, Item, Divider } from 'semantic-ui-react';

class Category extends Component {
    componentWillMount() {
        this.props.fetchCat(this.props.params.id);
    }
    
    renderPosts() {
        return this.props.posts.map((cat) => {
            return (
                <article key={cat.id}>
                    <header><h2>{cat.title.rendered}</h2></header>
                </article>
            )
        });
    }
    
    render() {
        return (
            <main>
                <Container>
                <h2>Blog</h2>
                {this.renderPosts()}
                </Container>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts.cat };
}

export default connect(mapStateToProps, { fetchCat })(Category);