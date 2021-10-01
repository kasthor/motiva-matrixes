import Router from "preact-router";
import { Card } from "../pages/Card";

export const Routes = () => (
  <Router>
    <Card path="/card/:brand?/:category?" />
  </Router>
);
