import React, { Component } from "react";
import { Container, Header, Grid, Image, Menu, Item, Divider } from 'semantic-ui-react';

class SiteHeader extends Component {
    render() {
        return (
            <header>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image alt="logo" src="../images/eruma-go-logo.png" />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Menu secondary fluid widths={4}>
                                    <Menu.Item name='home'/>
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