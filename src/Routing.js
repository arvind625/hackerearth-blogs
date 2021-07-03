import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Blogs } from './Blogs';
import { NewBlog } from './NewBlog';
import { Resume } from './Resume';
import { ShowBlog } from './ShowBlog';

export const Routes = ({ blogs, setBlogs }) => (
    <Switch>
        <Redirect
            key='NEW_BLOG'
            exact
            path={['/blog', '/new']}
            to={'/blog/new'}
        />
        <Route key='MY_RESUME' path='/' exact component={Resume} />
        <Route path='/blogs' exact component={() => <Blogs blogs={blogs} />} />
        <Route path='/blog/new' exact component={() => <NewBlog setBlogs={setBlogs} />} />
        <Route path="/blogs/:id" exact component={() => <ShowBlog />} />
    </Switch>
);