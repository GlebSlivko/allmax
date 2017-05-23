import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { TimePicker, TextField, SelectField, DatePicker } from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';


let InitializeTodoEditForm = props => {
  
  const { handleSubmit, pristine, reset, submitting, toDetailTodo } = props;
  const style = {float: 'right'};
  const required = value => value ? undefined : 'Required';
  const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
  const maxLength20 = maxLength(20);
  const minLength = min => value => value && value.length < min ? `Must be ${min} characters or greater` : undefined;
  const minLength2 = minLength(2);

  return (
    <form>
      <div>
        <FlatButton 
          primary 
          style={style} 
          label="Save" 
          onClick={handleSubmit} 
          disabled={pristine || submitting}/>
        <FlatButton 
          primary 
          style={style} 
          label="Undo Changes" 
          disabled={pristine || submitting} 
          onClick={reset}/>
        <FlatButton 
          primary 
          style={style} 
          onClick={toDetailTodo} 
          label="Back" />
      </div>
        <div>
         <Field name="title"
            component={TextField}
            hintText="title"
            floatingLabelText="title"
            validate={[ required, maxLength20, minLength2 ]}/>
        </div>
        <div>
          <Field name="description"
            component={TextField}
            hintText="description"
            floatingLabelText="description"
            validate={[ required, maxLength20, minLength2 ]}/>
        </div>
        <div>
          <Field
            name="till.when"
            label="tillDate"
            component={DatePicker}
            format={(value) => typeof(value) === 'string' ? new Date(value) : value}
            hintText="tillDate"
            floatingLabelText="tillDate"
          />
        </div>
        <div>
          <Field name="till.time"
            component={TimePicker}
            format={(value) => typeof(value) === 'string' ? new Date(value) : value}
            hintText="tillTime" 
            floatingLabelText="tillTime"
          />
        </div>
        <div>
          <Field
            name="importance"
            component={SelectField}
            hintText="importance"
            floatingLabelText="importance"
            validate={required}>
            <MenuItem 
              value="usual" 
              primaryText="usual" />
            <MenuItem
              value="important" 
              primaryText="important" />
            <MenuItem 
              value="very important" 
              primaryText="very important" />
          </Field>
        </div>
    </form>
  );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeTodoEditForm = reduxForm({
  form: 'InitializeTodoEditForm'
})(InitializeTodoEditForm);

// You have to connect() to any reducers that you wish to connect to yourself
InitializeTodoEditForm = connect(
  (state, ownProps) => ({
    initialValues: ownProps.thisTodo
  })
)(InitializeTodoEditForm);

InitializeTodoEditForm.propTypes = {
  toDetailTodo: PropTypes.func.isRequired,
  reset: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func
};

export default InitializeTodoEditForm;