import { Box, Typography, Stack, TextField } from "@mui/material";
import React from 'react';

const Home = () => {
	return ( 
		<Stack
		className="section home"
		direction={"column"}
		sx={{
			width: "100%",
			maxWidth: "100%",
			marginTop: "120px",
			border: "0px solid red",
			alignItems: "center",
		}}
	>
		<div className="tagline">
			Break the stigma, <a>heal</a> for your future
		</div>
		<div className="sub-heading">
			lorem ipsum
		</div>

		<div className="main">
			
			
			<div className="right-col">
				
				
			</div>
		</div>
	</Stack>

		// <Box sx={{
		// 	width: "100%",
			
		// }}>

		// 	<Box sx={{
		// 		width: "100%",
		// 		height: "100%"
		// 	}}><img src="/assets/bg-img-1.jpeg" alt="" /></Box>
		// </Box>
	 );
}
 
export default Home;