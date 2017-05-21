import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import { If, Then, Else } from 'react-if';

const style = {float: 'right'};


const TodoDetail = ({thisTodo, editTodo}) => (
  <div>
    <FlatButton label="Edit" primary onClick={editTodo} style={style} />
    <p>title: {thisTodo.title}</p>
    <p>description: {thisTodo.description}</p>

    <If condition={ !thisTodo.till }>
      <Then><p>tillTime: --:-- </p></Then>
      <Else>{() => // will only be evaluated if the condition fails.
         <span>
            {typeof(thisTodo.till.time)==='string' && <p>tillTime: {new Date(thisTodo.till.time).toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' })}</p>}
            {typeof(thisTodo.till.time)==='object' && <p>tillTime: {thisTodo.till.time.toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' })}</p>}
         </span>
      }
      </Else>
    </If>
  </div>
);

TodoDetail.propTypes = {
  thisTodo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired
};

export default TodoDetail;