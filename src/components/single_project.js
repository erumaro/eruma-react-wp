import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchProject } from '../actions/index';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router';

import { Container, Header, Grid, Image, Divider, Button, List } from 'semantic-ui-react';

class SingleProject extends Component {
    componentWillMount() {
        this.props.fetchProject(this.props.params.id);
    }
    
    render() {
        const { project } = this.props;
        
        if( !project ) {
            return <div>Loading...</div>;
        }
        
        return (
            <main>
                <Container>
                    <article key={project.id} className='project single-project'>
                        <header>
                            <Image className="featured-image" src={project._embedded["wp:featuredmedia"] != undefined ? project._embedded["wp:featuredmedia"][0].source_url : `${wpglobals.themeURL}/images/placeholder.jpg`} fluid />
                            <Header as='h2'>{ReactHtmlParser(project.title.rendered)}</Header>
                        </header>
                        <div className='post-content' dangerouslySetInnerHTML={ { __html: project.content.rendered } }></div>
                        <footer>
                            <List horizontal divided>
                                <List.Item>
                                    <Image avatar src={project._embedded.author[0].avatar_urls["96"]} />
                                    <List.Content>
                                        <List.Header>Skriven av:</List.Header>
                                        <List.Content>{project._embedded.author[0].name}</List.Content>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Publicerad:</List.Header>
                                        <List.Content>{project.date}</List.Content>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Kategori:</List.Header>
                                        <List.Content><Link to={`technologies/${project._embedded["wp:term"][0][0].id}`}>{project._embedded["wp:term"][0][0].name}</Link></List.Content>
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
    return { project: state.projects.project };
}

export default connect(mapStateToProps, { fetchProject })(SingleProject);