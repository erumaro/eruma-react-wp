import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchCat } from '../actions/index';
import { Link } from 'react-router';
import ReactHtmlParser from 'react-html-parser';

import { Container, Header, Grid, Image, Menu, Item, Divider, Button } from 'semantic-ui-react';

class Blog extends Component {
    componentWillMount() {
        this.props.fetchCat(this.props.params.id);
    }
    
    renderPosts() {
        return this.props.cat.map((cat) => {
            return (
                <article key={cat.id} className='post'>
                    <Image src={cat._embedded["wp:featuredmedia"] != undefined ? cat._embedded["wp:featuredmedia"][0].source_url : `../images/fashion-q-c-1800-900-8.jpg`} fluid />
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <header><Header as='h2'>{ReactHtmlParser(cat.title.rendered)}</Header></header>
                            <div className='post-content' dangerouslySetInnerHTML={ { __html: cat.excerpt.rendered } }></div>
                            <Button as={Link} to={'posts/' + cat.id} color='teal'>Läs Mer</Button>
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
    return { cat: state.cats.cat };
}

export default connect(mapStateToProps, { fetchCat })(Blog);