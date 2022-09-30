import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchReviews, createReview } from '../store';
import ReactStars from 'react-rating-stars-component';
import "./Mydrinks.css"

class Reviews extends Component {
  constructor(){
    super();
    this.state = {
      rating: 0,
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
      this.setState({ comment: '', rating: 0 })
    }
    catch(ex){
      this.setState({ error: 'Please provide a rating to submit a review'})
    }
  }
  ratingChanged(newRating){
    console.log(newRating)
    this.setState({ rating: newRating })
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
            onChange={ratingChanged}
            emptyIcon={"☹"}
            filledIcon= {"🍸"}
            size={24}
            activeColor="#ca7ca7"
          />
          <ul><textarea value= { comment } onChange={ ev => this.setState({ comment: ev.target.value }) }/></ul>
          <button>Post Review</button>
        </form>
        <p className='review-error'>{ error ? error : '' }</p>
        <ul>
          {
            reviews.map( review => {
              let ratingCount = ''
              for( let i=0; i < review.rating; i++) {
                ratingCount += "🍸"
              }
              return (
                <li key={ review.id }>
                  <h3>{ review.user.username }</h3>
                  {ratingCount}
                  <p>{ review.comment }</p>
                  <p className='reviewdate'>Posted { review.createdAt.slice(0,10) }</p>
                  <hr/>
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
