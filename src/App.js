import React, { useState, useEffect } from 'react';

import Cat from './Cat';
import Modal from './Modal';
import './App.css';

const App = () => {
	const [cats, setCats] = useState('');
  const [modal, setModal] = useState(false);

	useEffect(() => {
		getCats();
	}, []);

    const getCats = async () => {
		const response = await fetch('https://api.thecatapi.com/v1/images/search');
		const data = await response.json();
		setCats(data[0].url);
	};

    const showModal = () => {
      setModal(!modal);
    }

	return (
    <>
    {modal ? <Modal /> : null}
		<div className="App">
			<Cat image={cats} handleRandomClick={getCats} modalBool={modal} handleShowModal={showModal}/>
		</div>
    </>
	);
};

export default App;
