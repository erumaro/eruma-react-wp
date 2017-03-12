import React, { Component } from "react";
import { Link } from "react-router";
import { List, Container, Grid, Header, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchCats } from '../actions/index';

class CategoryList extends Component {
    componentWillMount() {
        this.props.fetchCats();
    }
    
    renderCats() {
        return this.props.cats.map((cat) => {
            return (
                <List.Item key={cat.id}>
                    <Image src={`${directory_uri.stylesheet_directory_uri}/images/placeholder.jpg`} fluid />
                    <List.Content>
                        <List.Header as={Link} to={`categories/${cat.id}`}>{cat.name}</List.Header>
                    </List.Content>
                </List.Item>
            )
        });
    }
    
    render() {
        return (
            <main>
                <Container>
                    <article className="category-list page">
                        <header><Header as='h2'>Kategorier</Header></header>
                        <List size='massive'>{this.renderCats()}</List>
                    </article>
                </Container>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return { cats: state.cats.catall };
}

export default connect(mapStateToProps, { fetchCats })(CategoryList);