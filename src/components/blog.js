import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import ReactHtmlParser from 'react-html-parser';

import { Container, Header, Grid, Image, Menu, Item, Divider } from 'semantic-ui-react';

class Blog extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    
    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <article key={post.id} className='post'>
                    <Image src={post._embedded["wp:featuredmedia"] != undefined ? post._embedded["wp:featuredmedia"][0].source_url : '../images/fashion-q-c-1800-900-8.jpg'} fluid />
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <header><Header as='h2'>{ReactHtmlParser(post.title.rendered)}</Header></header>
                            <div className='post-content'>{ReactHtmlParser(post.excerpt.rendered)}</div>
                        </Grid.Column>
                    </Grid>
                </article>
            )
        });
    }
    
    render() {
        return (
            <main>
                <Container>
                {this.renderPosts()}
                </Container>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(Blog);