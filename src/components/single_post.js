import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router';

import { Container, Header, Grid, Image, Divider, Button, List } from 'semantic-ui-react';

class SinglePost extends Component {
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }
    
    render() {
        const { post } = this.props;
        
        if( !post ) {
            return <div>Loading...</div>;
        }
        
        return (
            <main>
                <Container>
                    <article key={post.id} className='post single-post'>
                        <header>
                            <Image className="featured-image" src={post._embedded["wp:featuredmedia"] != undefined ? post._embedded["wp:featuredmedia"][0].source_url : `${wpglobals.themeURL}/images/placeholder.jpg`} fluid />
                            <Header as='h2'>{ReactHtmlParser(post.title.rendered)}</Header>
                        </header>
                        <div className='post-content' dangerouslySetInnerHTML={ { __html: post.content.rendered } }></div>
                        <footer>
                            <List horizontal divided>
                                <List.Item>
                                    <Image avatar src={post._embedded.author[0].avatar_urls["96"]} />
                                    <List.Content>
                                        <List.Header>Skriven av:</List.Header>
                                        <List.Content>{post._embedded.author[0].name}</List.Content>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Publicerad:</List.Header>
                                        <List.Content>{post.date}</List.Content>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Kategori:</List.Header>
                                        <List.Content><Link to={`categories/${post._embedded["wp:term"][0][0].id}`}>{post._embedded["wp:term"][0][0].name}</Link></List.Content>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </footer>
                    </article>
                </Container>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(SinglePost);