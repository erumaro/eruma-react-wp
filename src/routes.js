import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/app";
import Blog from "./components/blog";
import CategoryList from "./components/category_list";
import Category from "./components/category";
import SinglePost from "./components/single_post";
import Page from "./components/page";
import Projects from "./components/projects";
import SingleProject from "./components/single_project";

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Blog} />
        <Route path="posts/:id" component={SinglePost} />
        <Route path="category" component={CategoryList} />
        <Route path="categories/:id" component={Category} />
        <Route path="pages/:id" component={Page} />
        <Route path="projects" component={Projects} />
        <Route path="projects/:id" component={SingleProject} />
    </Route>
);