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
                <article key={post.id}>
                    <header><h2>{post.title.rendered}</h2></header>
                    <div>{ReactHtmlParser(post.content.rendered)}</div>
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
    return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(Blog);


/*

            <main>
               <Container>
                    <Item.Group>
                        <Item>
                            <Item.Image size='small' src='http://semantic-ui.com/images/wireframe/image.png'/>
                            <Item.Content>
                                <Item.Header as='a'>Cute Dog</Item.Header>
                                <Item.Description>
                                    <p>{description}</p>
                                    <p>
                                        Many people also have their own barometers for what makes a cute dog.
                                    </p>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                        <Divider />
                        <Item>
                            <Item.Image size='small' src='http://semantic-ui.com/images/wireframe/image.png'/>
                            <Item.Content>
                                <Item.Header as='a'>Cute Dog</Item.Header>
                                <Item.Description>
                                    <p>{description}</p>
                                    <p>
                                        Many people also have their own barometers for what makes a cute dog.
                                    </p>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                        <Divider />
                        <Item>
                            <Item.Image size='small' src='http://semantic-ui.com/images/wireframe/image.png'/>
                            <Item.Content>
                                <Item.Header as='a'>Cute Dog</Item.Header>
                                <Item.Description>
                                    <p>{description}</p>
                                    <p>
                                        Many people also have their own barometers for what makes a cute dog.
                                    </p>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Container>
            </main>
            <aside>
                <Image src="../images/fashion-q-c-1800-900-8.jpg" />
            </aside>
            <footer>
                <Container>
                    <Image src="../images/eruma-go-logo.png" size='small' centered />
                    <Menu secondary fluid widths={4}>
                        <Menu.Item name='home'/>
                        <Menu.Item name='category'/>
                        <Menu.Item name='page'/>
                        <Menu.Item name='blog'/>
                    </Menu>
                </Container>
            </footer>
*/