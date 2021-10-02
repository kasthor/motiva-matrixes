import Router from "preact-router";
import { Card } from "../pages/Card";
import { Cover } from "../pages/Cover";

export const Routes = () => (
  <Router>
    <Card path="/card/:brand?/:category?" />
    <Cover path="/" />
  </Router>
);
