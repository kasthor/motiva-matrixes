import Router from "preact-router";
import { Card } from "../pages/Card";
import { Cover } from "../pages/Cover";
import { createHashHistory } from "history"

export const Routes = () => (
  <Router history={createHashHistory()}>
    <Card path="/card/:brand?/:category?" />
    <Cover path="/" />
  </Router>
);
