import React, {propTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import deepPurple100 from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: deepPurple100
	}

});

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}

App.propTypes = {
	children: React.PropTypes.object.isRequired
};


export default App;