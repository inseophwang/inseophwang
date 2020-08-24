import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router'
import Home from '../../components/Home'
import About from '../../components/About'
import Work from '../../components/Work'
import Contact from '../../components/Contact'

import css from './styles.css'


class App extends Component {
	render() {
		return (
			<div className="appWrapper">
				<div className="icon">
					<Link to="/">
						<img className="images" src={img} />
					</Link>
				</div>
				
				<div className="content">
					{this.props.children}
				</div>
			</div>
		)
	}
}

var appContainer = document.querySelector('#app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="work" component={Work} />
			<Route path="contact" component={Contact} />
		</Route>
	</Router>,
	appContainer
);
