import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CreateCourse from '../pages/CreateCourse';
import UpdateCourse from '../pages/UpdateCourse';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/create-course" component={CreateCourse} />
      <Route path="/update-course/:id" component={UpdateCourse} />
    </Switch>
  );
};

export default Router;
