import React, { Component } from 'react';
import { reduxForm, Field }from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger"><strong>{this.props.errorMessage}</strong></div>
      )
    }
  }
  render() {
    const { handleSubmit } = this.props;
    console.log(this.props)
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email: </label>
          <Field name="email" component="input" type="text" placeholder="Email" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password: </label>
          <Field name="password" component="input" type="password" placeholder="Password" className="form-control"/>
          {this.props.valid ? null : <span className="error">Fix Password</span>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password: </label>
          <Field name="passwordConfirm" component="input" type="password" placeholder="Email" className="form-control"/>
        </fieldset>
        {this.renderAlert()}
        <button action="submit" disabled={!this.props.valid} className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Password must match'
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  }
}
export default connect(mapStateToProps, actions)(reduxForm({
  form: 'signup',
  validate
})(Signup));
