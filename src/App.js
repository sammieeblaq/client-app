import React, { Component } from "react";

// Import Router
import AppRouter from "./router/AppRouter";

// import React from 'react';
import RecipeReviewCard from "./components/Cards/Cards";
import Paper from "./components/Paper/Paper";
import SimpleBottomNavigation from "./components/Footer/Footer";



class App extends Component {

	render() {
		return (
			<div>
				<AppRouter />				
				<Paper />
				<RecipeReviewCard />
				<SimpleBottomNavigation />
			</div>
		)
	}
}

export default App;