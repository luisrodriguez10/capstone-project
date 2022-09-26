import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchReviews } from '../store';

class Reviews extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.drinkId !== this.props.drinkId ){
      this.props.fetchReviews( this.props.drinkId )
    }
  }
  render() {
    const { reviews } = this.props;
    return (
      <div>
        hello
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
    auth: state.auth
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchReviews: ( idDrink ) => dispatch( fetchReviews(idDrink) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);

// Code for fetching user reviews:

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchUserReviews } from '../store';

// class UserReviews extends Component {
//   componentDidUpdate(prevProps) {
//     if (prevProps.auth !== this.props.auth ){
//       this.props.fetchUserReviews( this.props.auth.id )
//     }
//   }
//   render() {
//     const { reviews } = this.props;
//     console.log(reviews)
//     return (
//       <div>
//         hello
//       </div>
//     )

//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     reviews: state.reviews,
//     auth: state.auth
//   }
// }

// const mapDispatchToProps = ( dispatch ) => {
//   return {
//     fetchUserReviews: ( userId ) => dispatch( fetchUserReviews(userId) )
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UserReviews);