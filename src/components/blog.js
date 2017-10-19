import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import ReactHtmlParser from 'react-html-parser';

import { Container, Header, Grid, Image, Menu, Item, Divider, Button } from 'semantic-ui-react';

class Blog extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    
    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <article key={post.id} className='home'>
                    <Image className="featured-image" src={post._embedded["wp:featuredmedia"] != undefined ? post._embedded["wp:featuredmedia"][0].source_url : `${wpglobals.themeURL}/images/placeholder.jpg`} fluid />
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <header><Header as='h2'>{ReactHtmlParser(post.title.rendered)}</Header></header>
                            <div className='post-content' dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } }></div>
                            <Button as={Link} to={'posts/' + post.id} color='teal'>Läs Mer</Button>
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