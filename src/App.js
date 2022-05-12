import React, { useEffect } from 'react';
import './App.css';

const App = () => {

  useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    console.log('data-->', data);
  }


	return (
		<div className="App">
			<h1>Hello React!</h1>
		</div>
	);
};

export default App;
