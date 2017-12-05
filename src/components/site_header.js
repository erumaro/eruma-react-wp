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
                                <Image alt="logo" src={`${wpglobals.themeURL}/images/eruma-go-logo-white.png`} />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Menu secondary fluid widths={4}>
                                    <Menu.Item as={Link} to='/' name='home'/>
                                    <Menu.Item as={Link} to='projects' name='projekt'/>
                                    <Menu.Item as={Link} to='blog' name='blogg'/>
                                    <Menu.Item as={Link} to={'pages/911'} name='om mig'/>
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