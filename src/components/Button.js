const Button = ({ id, categoryName, onButtonClick, className }) => {
	return (
		<div className="button-container">
			<button className={className} id={id} onClick={onButtonClick}>
				{categoryName}
			</button>
			<p className="button-label">{categoryName}</p>
		</div>
	);
};

export default Button;
