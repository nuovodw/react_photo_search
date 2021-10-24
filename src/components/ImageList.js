const ImageList = (props) => {
	console.log(props.images);
	const images = props.images.map((image) => {
		return (
			<div key={image.id}>
				<img src={image.urls.small} alt={image.description} />
				<p>{image.alt_description}</p>
				<p>{image.description}</p>
				<br />
				<br />
				<br />
			</div>
		);
	});

	return <div>{images}</div>;
};

export default ImageList;
