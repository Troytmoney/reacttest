import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"transition": "all 1s ease 0s",
	"text-shadow": "0 0 0 #e91e1e",
	"height": "159% border-box",
	"font": "1em --fontFamily-googleFredoka"
};
const overrides = {};

const SubtractButton = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		SUBTRACK
		{children}
	</Button>;
};

Object.assign(SubtractButton, { ...Button,
	defaultProps,
	overrides
});
export default SubtractButton;