import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchReviews, createReview } from '../store';
import ReactStars from 'react-rating-stars-component';

class Reviews extends Component {
  constructor(){
    super();
    this.state = {
      rating: '',
      comment: '',
      error: ''
    }
    this.save = this.save.bind(this)
    this.ratingChanged = this.ratingChanged.bind(this)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.drinkId !== this.props.drinkId ){
      this.props.fetchReviews( this.props.drinkId )
    }
  }
  async save(ev){
    ev.preventDefault();
    const review = { drinkId: this.props.drinkId, userId: this.props.auth.id, comment: this.state.comment, rating: this.state.rating }
    console.log(review)
    try {
      await this.props.createReview( review )
      this.setState({ error: '' })
    }
    catch(ex){
      this.setState({ error: 'Please provide a rating to submit a review'})
    }
  }
  ratingChanged(newRating){
    console.log(newRating)
    this.setState(newRating)
  }
  render() {
    const { reviews } = this.props;
    const { rating, comment, error } = this.state;
    const { save, ratingChanged } = this;
    console.log(reviews)
    return (
      <div>
        <form onSubmit={ save }>
          <h3>Leave a review</h3>
          <ReactStars
            count={5}
            onChange={(rating)=>ratingChanged(rating)}
            size={24}
            activeColor="#ffd700"
          />
          <ul>Comment: <input value= { comment } onChange={ ev => this.setState({ comment: ev.target.value }) }/></ul>
          <button>Post Review</button>
        </form>
        { error ? error : '' }
        <ul>
          {
            reviews.map( review => {
              return (
                <li key={ review.id }>
                  <p>{ review.user.username }</p>
                  <p>{ review.createdAt.slice(0,10) }</p>
                  <p>Rating: { review.rating }</p>
                  <p>{ review.comment }</p>
                </li>
              )
            })
          }
        </ul>
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
    fetchReviews: ( idDrink ) => dispatch( fetchReviews(idDrink) ),
    createReview: ( review ) => dispatch( createReview(review) )
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