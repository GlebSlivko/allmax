import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TimePicker, TextField, SelectField, DatePicker } from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';



let TodoForm = class TodoForm extends Component {
    
  render() {

    const style = {float: 'right'};
    const { handleSubmit, submitting, pristine } = this.props;
    const required = value => value ? undefined : 'Required';
    const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
    const maxLength20 = maxLength(20);
    const minLength = min => value => value && value.length < min ? `Must be ${min} characters or greater` : undefined;
    const minLength2 = minLength(2);

    return (
      <form>
        <div>
          <FlatButton primary style={style} disabled={pristine || submitting} onTouchTap={handleSubmit} label="Save" />
        </div>
        <div>
         <Field name="title"
            component={TextField}
            hintText="type title"
            floatingLabelText="title"
            validate={[ required, maxLength20, minLength2 ]}/>
        </div>
        <div>
           <Field name="description"
            component={TextField}
            hintText="type description"
            floatingLabelText="description"
            validate={[ required, maxLength20, minLength2 ]}/>
        </div>
        <div>
          <Field
            name="till.when"
            component={DatePicker}
            format={null}
            hintText="tillDate"
            floatingLabelText="tillDate"
          />
        </div>
        <div>
          <Field name="till.time"
            component={TimePicker}
            hintText="tillTime" 
            floatingLabelText="tillTime"
            format={null}
          />
        </div>
        <div>
          <Field
            name="importance"
            component={SelectField}
            hintText="importance"
            floatingLabelText="importance"
            validate={required}
          >
            <MenuItem value="usual" primaryText="usual" />
            <MenuItem value="important" primaryText="important" />
            <MenuItem value="very important" primaryText="very important" />
          </Field>
        </div>
      </form>
    );
  }
};

TodoForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired
};

// Decorate the form component
TodoForm = reduxForm({
  form: 'todo'
})(TodoForm);

export default TodoForm;
