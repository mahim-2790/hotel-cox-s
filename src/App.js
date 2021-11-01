import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Header from './Pages/Headers/Header';
import Login from './Pages/Login/Login/Login';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Footer/Footer';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import ManageAllOrder from './Pages/ManageAllOrder/ManageAllOrder/ManageAllOrder';
import MyOrder from './Pages/MyOrder/MyOrder/MyOrder';
import AddNewService from './Pages/AddNewService/AddNewService';
import { NotFound } from 'http-errors';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/placeOrder/:_id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute path="/manageroom">
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>

            <PrivateRoute path="/bookedroom">
              <MyOrder></MyOrder>
            </PrivateRoute>

            <PrivateRoute path="/addservice">
              <AddNewService></AddNewService>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
