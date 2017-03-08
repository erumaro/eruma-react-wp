import React, { Component } from "react";
import { Link } from "react-router";
import { List, Container, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchCats } from '../actions/index';

class Sidebar extends Component {
    componentWillMount() {
        this.props.fetchCats();
    }
    
    renderCats() {
        return this.props.cats.map((cat) => {
            return (
                <List.Item key={cat.id}>
                    <Link to={`categories/${cat.id}`}>{cat.name}</Link>
                </List.Item>
            )
        });
    }
    
    render() {
        return (
            <div id="secondary" className="widget-area" role="complementary">
                <Container>
                    <Grid centered columns={2}>
                        <Grid.Column as='aside'>
                            <h3>Kategorier</h3>
                            <List>{this.renderCats()}</List>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { cats: state.cats.catall };
}

export default connect(mapStateToProps, { fetchCats })(Sidebar);