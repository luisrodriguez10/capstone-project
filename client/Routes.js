import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import Mydrink from './components/Mydrink';
import Mypantry from './components/Mypantry';
import Recipes from './components/Recipes';
import Landingpage from './components/Landingpage';

import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" exact component={Home} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            {/* <Route path='/' exact component={ Login } /> */}
            <Route path='/home'  component={ Landingpage }/>
            <Route path='/' exact component={ Landingpage }/>

            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/Mydrink"exact component={Mydrink} />
            <Route path="/Mypantry" exact component={Mypantry} />
            <Route path="/Recipes" exact component={Recipes} />

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
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
