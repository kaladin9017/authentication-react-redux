import React, { Component } from 'react';
import { reduxForm, Field, validate } from 'redux-form'
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {

  handleFormSubmit(e) {
    return this.props.signinUser(e);
  }
  renderAlert() {
    if (this.props.errorMessage) {
      return(
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }
  render() {
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this).bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <Field name="email" component="input" type="text" placeholder="Email" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" component="input" type="password" placeholder="Password" className="form-control"/>
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

/*
  Describe the form to maintain consistancy
*/
export default connect(mapStateToProps, actions)(reduxForm({
  form: 'signin',
})(Signin));
