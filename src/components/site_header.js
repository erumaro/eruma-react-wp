import React, { Component } from "react";
import { Link } from "react-router";
import { Container, Header, Grid, Image, Menu, Item, Divider } from 'semantic-ui-react';

class SiteHeader extends Component {
    render() {
        return (
            <header className='site-header'>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image alt="logo" src="../images/eruma-go-logo-white.png" />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Menu secondary fluid widths={4}>
                                    <Menu.Item as={Link} to='/' name='home'/>
                                    <Menu.Item name='category'/>
                                    <Menu.Item name='page'/>
                                    <Menu.Item name='blog'/>
                                </Menu>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </header>
        );
    }
}

export default SiteHeader;