import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPage } from '../actions/index';
import ReactHtmlParser from 'react-html-parser';

import { Container, Header, Grid, Image, Divider, Button } from 'semantic-ui-react';

class Page extends Component {
    componentWillMount() {
        this.props.fetchPage(this.props.params.id);
    }
    
    render() {
        const { pages } = this.props;
        
        if( !pages ) {
            return <div>Loading...</div>;
        }
        
        return (
            <main>
                <Container>
                    <article key={pages.id} className='page'>
                        <header>
                            <Header as='h2'>{ReactHtmlParser(pages.title.rendered)}</Header>
                        </header>
                        <div className='post-content' dangerouslySetInnerHTML={ { __html: pages.content.rendered } }></div>
                        <footer>
                            
                        </footer>
                    </article>
                </Container>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return { pages: state.page.pages };
}

export default connect(mapStateToProps, { fetchPage })(Page);