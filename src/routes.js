import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/app";
import Blog from "./components/blog";
import Category from "./components/category";
import SinglePost from "./components/single_post";

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Blog} />
        <Route path="posts/:id" component={SinglePost} />
        <Route path="categories/:id" component={Category} />
    </Route>
);