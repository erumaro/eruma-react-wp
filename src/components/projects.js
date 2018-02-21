import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchProjects } from '../actions/index';
import { Link } from 'react-router';

import { Container, Header, Grid, Image, Menu, Item, Divider, Button } from 'semantic-ui-react';

class Projects extends Component {
    componentWillMount() {
        this.props.fetchProjects();
    }
    
    renderProjects() {
        return this.props.projects.map((project) => {
            return (
                <article key={project.id} className='home'>
                    <Image className="featured-image" src={project._embedded["wp:featuredmedia"] != undefined ? project._embedded["wp:featuredmedia"][0].source_url : `${wpglobals.themeURL}/images/placeholder.jpg`} fluid />
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <header><Header as='h2'>{JSON.stringify(project.title.rendered)}</Header></header>
                            <div className='post-content' dangerouslySetInnerHTML={ { __html: project.excerpt.rendered } }></div>
                            <Button as={Link} to={'projects/' + project.id} color='teal'>Läs Mer</Button>
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
                {this.renderProjects()}
                </Container>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return { projects: state.projects.all };
}

export default connect(mapStateToProps, { fetchProjects })(Projects);