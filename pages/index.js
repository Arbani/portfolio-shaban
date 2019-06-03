import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';


import SuperComponent from '../components/SuperComponent';


//Functional Component
// Dumb components
// Get data
// return data
// const Index = () => {
  
//   return (
//   	<h1>I am Index Page</h1>
//   	)
// }


// const  Index = function() {
// 	return (
// 		<h1> I am Index Page from Normal Function </h1>
// 	)
// }


// Class component
// More functionality
// More stuff
// User Lifecycle function



class Index extends SuperComponent {

	static async getInitialProps() {
		let userData = {};

		try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      userData = response.data;
		} catch(err) {
			console.error(err);
		}

		return {initialData: [,1,2,3,4], userData};
	}

	constructor(props) {
		super(props);

		this.state = {
			title: 'I am Index Page'
		}

		//this.updateTitle = this.updateTitle.bind(this);
	}

	componentDidMount() {
    console.log('componentDidMount');

	}

	componentDidUpdate() {
    console.log('componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	updateTitle = () => {
    this.setState({title: 'I am Updated Index Page'});
	}

	render() {
		const { title } = this.state;
		const { userData, initialData } = this.props;
		//const title = this.state.title;

		return (
			<BaseLayout>
				<h1>I am Index Page from Class Component </h1>
				<h2> { title } </h2>
				<h2> { userData.title } </h2>
				<button onClick={this.updateTitle}> Change Title </button>
			</BaseLayout>
		)
	}
}



export default Index;

//<Header title={'I am a header component'}>
//  <h1> I am header subtitle </h1>
//</Header>

