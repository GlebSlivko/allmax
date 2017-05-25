import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TodoForm from './TodoForm';
import RaisedButton from 'material-ui/RaisedButton';
import { If, Then } from 'react-if';

const styleFlatButtonButton = {
  float: 'right'
};

const AddDialogue = ({ 
  handleSubmitTodo,
  openAdd, 
  handleOpenAddToggle
}) => (
   <Dialog
    modal
    open={openAdd}
    onRequestClose={handleOpenAddToggle}
    autoScrollBodyContent>
    <TodoForm onSubmit={handleSubmitTodo}/>

    <div className="button-float-button">
      <FlatButton
        style = {styleFlatButtonButton}
        label="Close"
        primary
        onTouchTap={handleOpenAddToggle}
      />
    </div>
  </Dialog>
);

AddDialogue.propTypes = {
  handleSubmitTodo: PropTypes.func.isRequired,
  openAdd: PropTypes.bool.isRequired,
  handleOpenAddToggle: PropTypes.func.isRequired
};

export default AddDialogue;