const ImageList = (props) => {
	// console.log(props.images);
	const images = props.images.map((image) => {
		return <img src={image.urls.regular} alt={'car no. 1'} />;
	});

	return <div>{images}</div>;
};

export default ImageList;
