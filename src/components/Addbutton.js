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

const Addbutton = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		ADD
		{children}
	</Button>;
};

Object.assign(Addbutton, { ...Button,
	defaultProps,
	overrides
});
export default Addbutton;