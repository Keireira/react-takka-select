const forcedBlur = () => {
	const element = document.activeElement as HTMLInputElement;

	if (element.type === 'text') {
		element.blur()
	}
};

export default forcedBlur
