import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../store';
import './Profile.css'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { username, password, firstName, lastName, email } = this.props.user;
    this.setState({
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email
    });
  }
  handleChange(event) {
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { username, password, firstName, lastName, email } = this.state;
    const { user } = this.props;
    user.username = username;
    user.password = password;
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    this.props.updateUser(user);
  }
  render() {
    const { username, password, firstName, lastName, email } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className='profile'>
        <div className='myprofile'>My Profile</div>
        <br></br>
        <form onSubmit={handleSubmit}>
         
          <label htmlFor='username'>username</label>
          <input name='username' type='text' value={username} onChange={handleChange} disabled />
         

          
          <label htmlFor='password'>password</label>
          <input name='password' type='password' value={password} onChange={handleChange} disabled />
         
          <label htmlFor='firstName'>first name</label>
          <input name='firstName' type='text' value={firstName} onChange={handleChange} />
      
          <label htmlFor='lastName'>last name</label>
          <input name='lastName' type='text' value={lastName} onChange={handleChange} />
         
          <label htmlFor='email'>email</label>
          <input name='email' type='email' value={email} onChange={handleChange} /><br />
         
          
          <button>submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(updateUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
