import React, { useState, useEffect } from 'react';
import Cat from './Cat';
import './App.css';

const App = () => {
	const [cats, setCats] = useState('');

	useEffect(() => {
		getCats();
	}, []);

    const getCats = async () => {
		const response = await fetch('https://api.thecatapi.com/v1/images/search');
		const data = await response.json();
		console.log('data-->', data[0]); // url of cat image
		setCats(data[0].url); 
	};

	return (
		<div className="App">
			<Cat image={cats} handleClick={getCats}/>
		</div>
	);
};

export default App;
