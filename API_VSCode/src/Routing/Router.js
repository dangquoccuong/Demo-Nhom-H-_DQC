import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Detail from "../Component/Client/Detail/detail";
import Cart from "../Component/Client/Cart/cart";
import Toggle from "../Component/Client/Menu/toggle";
import NotFound from "../Component/404Error/NotFound"
import AddProduct from "../Component/Client/list_users/add_user/adduser";
import Demo from "../Component/Client/DemoTopic5/Demo";
import UpdateUser from "../Component/Client/list_users/updateUser/UpdateUser";

function Routers() {
//   const NotFoundRedirect = () => <Redirect to="/not-found" />;
  return (
    <Router>
      <Toggle />
      <Switch>
        <Route path="/" exact component={Demo} />
        <Route path="/detail" exact component={Detail} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/demoNodeApi" exact component={Demo} />
        <Route path="/addproduct" exact component={AddProduct} />
        <Route path="/updateStudent/:id" exact component={UpdateUser} />
        <Route path="/not-found" exact component={NotFound} />
        <Redirect to="/not-found" />
        {/* <Route component={NotFoundRedirect} /> */}
      </Switch>
    </Router>
  );
}

export default Routers;
