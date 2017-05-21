import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TodoDetail from './TodoDetail';
import {ListItem} from 'material-ui/List';
import InitializeTodoEditForm from './InitializeTodoEditForm';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
import {connect} from 'react-redux';
import toastr from 'toastr';


class DetailEditBox extends Component {

	constructor(props){
		super(props);

		this.state = {
			showModal: false,
			detailTodoValue: true,
			editTodoValue: null
		};

		this.toggleModal = this.toggleModal.bind(this);

		this.editTodo = this.editTodo.bind(this);
		this.updateSubmitTodo = this.updateSubmitTodo.bind(this);

	}

	updateSubmitTodo(todo) {
		this.props.todoactions.updateTodo(todo);
		this.toggleModal();
		toastr.success('Todo updated');
	}

	editTodo() {
		this.setState({
			detailTodoValue: !this.state.detailTodoValue,
			editTodoValue: !this.state.editTodoValue
		});

	}

	toggleModal() {
		this.setState({
			showModal: !this.state.showModal,
			detailTodoValue: true,
			editTodoValue: null
		});
	}

	render() {
		
		const styleForTodo = {
			margin: 'auto',
			textAlign: "center",
			width: '50%'
		};

		const styleFlatButtonButton = {
			float: 'right'
		};

		return (
			<div>
				<ListItem  style={styleForTodo} onClick={this.toggleModal}>
					{this.props.thisTodo.title}{' '}
					{this.props.thisTodo.description}{' '}
					{this.props.thisTodo.lastName}
				</ListItem>
				<Dialog 
					open={this.state.showModal}
					modal
					onRequestClose={this.toggleModal}
					autoScrollBodyContent>

					{this.state.detailTodoValue && <TodoDetail editTodo={this.editTodo} thisTodo={this.props.thisTodo}/>}
					{this.state.editTodoValue && <InitializeTodoEditForm onSubmit={this.updateSubmitTodo} editTodo={this.editTodo} thisTodo={this.props.thisTodo}/>}

					<FlatButton style={styleFlatButtonButton} label="Close" primary onClick={this.toggleModal} />
				</Dialog>
			</div>
		);
	}
}

DetailEditBox.propTypes = {
	thisTodo: PropTypes.object.isRequired,
	todoactions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		todos: state.todos
	};
}

function mapDispatchToProps(dispatch) {
	return {
		todoactions: bindActionCreators(todoActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailEditBox);
