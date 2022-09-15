import React, { Component } from "react";
import { connect } from 'react-redux';
import { useLocation } from "react-router-dom";

class MyDrink extends Component{

    render(){
        // const location = useLocation();
        // const { drink } = location.state;
        // console.log(drink)
        console.log(this.props.location.state)
    }
}

export default connect()(MyDrink);