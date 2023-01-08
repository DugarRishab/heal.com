import { Box, Typography, Stack, TextField } from "@mui/material";
import React from "react";

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
			{/* <div className="sub-heading">
		
		</div> */}

			<div className="main">
				<div className="bg">
					<div className="dark"></div>
					<img
						class="hpageimage"
						src="/assets/homepageimage.jpg"
						alt=""
					/>
				</div>
				<div className="left-col">
					<p>
						No more waiting on hold or facing multiple hospital
						staff members- with Heal, you can connect with a doctor
						directly and get the care you need.{" "}
					</p>
					<br></br>
					<p>
						We are committed to breaking the stigma surrounding
						reproductive healthcare and making it more accessible to
						everyone.
					</p>
				</div>
				<div className="right-col"></div>
			</div>
			<div classname="main_features">
				<div className="features">lorem ipsum</div>
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
};

export default Home;
