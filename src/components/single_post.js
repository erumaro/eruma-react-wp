import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import ReactHtmlParser from 'react-html-parser';

import { Container, Header, Grid, Image, Divider, Button } from 'semantic-ui-react';

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
                    <article key={post.id} className='post'>
                        <header>
                            <Header as='h2'>{ReactHtmlParser(post.title.rendered)}</Header>
                        </header>
                        <div className='post-content' dangerouslySetInnerHTML={ { __html: post.content.rendered } }></div>
                        <footer>
                            
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