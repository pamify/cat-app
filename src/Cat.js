const Cat = ({ image, handleRandomClick, handleShowModal }) => {
	return (
		<>
			<div className="btn-container">
				<button className="btn" onClick={handleRandomClick}>
					Randomize
				</button>

				<button className="btn trigger" onClick={handleShowModal}>
					Click me!
				</button>
			</div>
			<div>
				<img height={'50%'} width={'50%'} src={image} alt="" />
			</div>
		</>
	);
};
export default Cat;
