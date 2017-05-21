import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TimePicker, TextField, RadioButtonGroup, DatePicker } from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton} from 'material-ui/RadioButton';


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
          <FlatButton style={style} disabled={pristine || submitting} onTouchTap={handleSubmit} label="Save" />
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
            component={DatePicker}
            format={null}
            hintText="Day of delivery?"
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
          <Field hintText="importance" floatingLabelText="importance" name="importance" component={RadioButtonGroup}>
            <RadioButton value="pickup" label="Pickup" />
            <RadioButton value="delivery" label="Delivery" />
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