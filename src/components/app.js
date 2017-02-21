import React, { Component } from "react";
import SiteHeader from './site_header.js'

export default class App extends Component {
    render(){
        return(
        <div>
           <SiteHeader/>
            {this.props.children}
        </div>
        )
    }
}