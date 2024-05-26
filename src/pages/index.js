import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Text margin="0px 0px 0px 0px" font="34px --fontFamily-googleFredoka" text-align="center">
			<Strong font="700 56px Fredoka, sans-serif">
				Testing Live Counter
			</Strong>
		</Text>
		<Components.EmbedJS />
		<Button transition="all 1s ease 0s" text-shadow="0 0 0 #e91e1e" height="159% border-box" font="1em --fontFamily-googleFredoka">
			ADD
		</Button>
		<Button transition="all 1s ease 0s" text-shadow="0 0 0 #e91e1e" height="159% border-box" font="1em --fontFamily-googleFredoka">
			SUBTRACK
		</Button>
		<Components.Addabdrem />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6653970f3f24780021f73efa"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});