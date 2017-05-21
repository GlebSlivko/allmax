import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddDialogue from './AddDialogue';
import ListTodo from './ListTodo';
import toastr from 'toastr';


class ListPage extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			openAdd: false
		};

		this.handleOpenAdd = this.handleOpenAdd.bind(this);
		this.handleCloseAdd = this.handleCloseAdd.bind(this);

		this.handleSubmitTodo = this.handleSubmitTodo.bind(this);
	}

	handleOpenAdd() {
		this.setState({openAdd: true});
	}

	handleCloseAdd() {
		this.setState({
			openAdd: false
		});
	}

	handleSubmitTodo(newTodo) {
		this.props.todoactions.saveTodo(newTodo);
		this.handleCloseAdd();
		toastr.success('Todo saved');

	}

	render() {
		const todos = this.props.todos;
		const styleFloatingActionButton = {
			marginTop: '2%',
			marginBottom: '2%'
		};

		return(
			<div>
				<div className="floatingActionButton">
					<FloatingActionButton 
						style={styleFloatingActionButton} 
						onTouchTap={this.handleOpenAdd}>
						<ContentAdd />
					</FloatingActionButton>

					<AddDialogue
						openAdd={this.state.openAdd}
						handleSubmitTodo={this.handleSubmitTodo}
						handleCloseAdd={this.handleCloseAdd}/>
				</div>
				<ListTodo todos={todos}/>
			</div>
		);
	}
}

ListPage.propTypes = {
	todos: PropTypes.array.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);