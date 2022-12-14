import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import MyDrink from './components/Mydrink';
import Mydrinks from './components/Mydrinks';
import Mypantry from './components/Mypantry';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';
import Reviews from './components/Reviews';
import Landingpage from './components/Landingpage';
import EditMyDrink from './components/EditMyDrink';
import Profile from './components/Profile';
import Store from './components/Store';
import { createCoordinates } from './store';
import { gapi } from 'gapi-script';
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(async (position) => {
        await this.props.createCoordinates(position.coords)
      }, (error) =>{
        console.log(error)
      });
    }

    function start(){
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: ""
      })
    }
    gapi.load('client: auth2', start);
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        {isLoggedIn ? (
         <Switch>
            <Route exact path="/" component={Landingpage}/>
         <Route exact path="/home" component={Landingpage} />
            <Route exact path="/myDrinks" component={Mydrinks} />
            <Route path="/myDrinks/:id" component={MyDrink} />
            <Route path="/editMyDrink/:id" component={EditMyDrink} />
            <Route path="/Mypantry" component={Mypantry} />
            <Route path="/Recipes" component={Recipes} />
            <Route path="/Recipe/:id" component={Recipe} />
            {/* <Route path="/Recipe/:id" component={Reviews} /> */}
            <Route path="/stores" component={Store} />
            <Route path="/profile" component={Profile} />
       </Switch>
     ) : (
       <Switch>
         {/* <Route exact path="/home" component={Landingpage} /> */}
         <Route path='/' exact component={ Landingpage } />
         <Route exact path="/home" component={Landingpage} />

         <Route path="/login" component={Login} />
         <Route path="/signup" component={Signup} />
         <Route path="/Recipes" component={Recipes} />
          <Route path="/Recipe/:id" component={Recipe} />
        <Route path="/Recipe/:id" component={Reviews} />
       </Switch>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    createCoordinates:(coordinates) => dispatch(createCoordinates(coordinates))
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
