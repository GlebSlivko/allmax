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
  handleCloseAdd
}) => (
   <Dialog
    modal
    open={openAdd}
    onRequestClose={handleCloseAdd}
    autoScrollBodyContent>
    <TodoForm onSubmit={handleSubmitTodo}/>

    <div className="button-float-button">
      <FlatButton
        style = {styleFlatButtonButton}
        label="Close"
        primary
        onTouchTap={handleCloseAdd}
      />
    </div>
  </Dialog>
);

AddDialogue.propTypes = {
  handleSubmitTodo: PropTypes.func.isRequired,
  openAdd: PropTypes.bool.isRequired,
  handleCloseAdd: PropTypes.func.isRequired
};

export default AddDialogue;