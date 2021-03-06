import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import DashboardPage from "../components/DashboardPage/DashboardPage";
import HabitTracker from "../components/HabitTracker/HabitTracker";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import ToDoList from "../components/ToDoList/ToDoList";
import MealPlanner from "../components/MealPlanner/MealPlanner";
import MonthPlanner from "../components/MonthPlanner/MonthPlanner";
import LoginPage from "../components/Login/LoginPage";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute
          path="/dashboard"
          component={DashboardPage}
          exact={true}
        />
        <PrivateRoute path="/to-do-list" component={ToDoList} />
        <PrivateRoute path="/habit-tracker" component={HabitTracker} />
        <PrivateRoute path="/meal-planner" component={MealPlanner} />
        <PrivateRoute path="/month-planner" component={MonthPlanner} />
        <Route component={NotFoundPage} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  </Router>
);

export default AppRouter;
