const EmptyWrapper = (props) => {
      return props.children
}

const BodyWrapper = (props) => {
	const { children, className, ...rest } = props;
    console.log(props);
	return (
		<div className={`wrapper ${className}`} {...rest}>
			{children}
		</div>
	);
};

export {
    EmptyWrapper,
    BodyWrapper
};
