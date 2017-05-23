import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';


const TodoDelete = ({ onSubmit, thisTodo, toDetailTodo }) => (
   <div>
    <h1>Are you sure?</h1>
     <FlatButton
        label="Cancel"
        primary
        onTouchTap={toDetailTodo}
      />
      <FlatButton
        label="Delete"
        primary
        onTouchTap={() => onSubmit(thisTodo)}
      />
   </div>
);

TodoDelete.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  thisTodo: PropTypes.object.isRequired,
  toDetailTodo: PropTypes.func.isRequired
};

export default TodoDelete;