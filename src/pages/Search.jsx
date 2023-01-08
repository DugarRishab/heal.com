import { Box, Typography, Stack, TextField } from "@mui/material";
import React, { useEffect } from "react";
import CustomTextField from "../components/CustomTextField";
import { displayMap } from "../utils/mapbox";
import "./style.css";
import locations from "../assets/dev-data/records.json";
import { useState } from "react";

const Search = ({ setUserLocation, userLocation }) => {
	const [filteredLocations, setFilteredLocations] = useState([]);
	const [state, setState] = useState(null);
	const [city, setCity] = useState(null);
	const [district, setDistrict] = useState(null);
	const [specialization, setSpecialization] = useState(null);
	const [search, setSearch] = useState(null);
	const [warning, setWarning] = useState("Type something to see results");

	useEffect(() => {
		console.log("changes occured", state, city, specialization);
		if (!search && !specialization && !state && !city && district) {
			setFilteredLocations([]);
			setWarning("Type something to see results");
		} else if (!specialization && !state && !city && district) {
			setFilteredLocations([]);
			setWarning("Please use additional filters to optimize the results");
		} else if ((state || city || district)) {
			if (!specialization) {
				setFilteredLocations([]);
				setWarning(
					"Please give a specialization to optimze the results"
				);
			} else {
				console.log(
					locations.filter(
						(loc) =>
							loc.state.includes(state) &&
							// loc.city.includes(city) &&
							// loc.district.includes(district) &&
							loc.specialization.includes(specialization)
							// loc.name.includes(search)
					)
				);
				console.log(
					locations.filter(
						(loc) =>
							loc.state.includes(state ? state : "") &&
							loc.city.includes(city ? city : "") &&
							loc.district.includes(district ? district: "") &&
							loc.specialization.includes(specialization) &&
							loc.name.includes(search ? state: "")
					)
				);
				setFilteredLocations(
					locations.filter(
						(loc) =>
							loc.state
								.toLowerCase()
								.includes(state ? state : "") &&
							loc.city.toLowerCase().includes(city ? city : "") &&
							loc.district
								.toLowerCase()
								.includes(district ? district : "") &&
							loc.specialization
								.toLowerCase()
								.includes(specialization) &&
							loc.name.toLowerCase().includes(search ? state : "")
					)
				);
			}
		}
	}, [state, city, district, specialization, search]);

	console.log(userLocation);
	console.log(filteredLocations.length);
	// let userLocation;
	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					console.log("Latitude is :", position.coords.latitude);
					console.log("Longitude is :", position.coords.longitude);
					setUserLocation({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});
				},
				(err) => {
					console.log(err);
				}
			);
		} else {
			console.log(" Location Not Available");
		}
	}, [setUserLocation]);

	useEffect(() => {
		if(filteredLocations.length > 0)
			displayMap(filteredLocations, userLocation);
	}, [filteredLocations, userLocation]);

	

	return (
		<Stack
			className="section search"
			direction={"column"}
			sx={{
				width: "100%",
				maxWidth: "100%",
				marginTop: "100px",
				border: "0px solid red",
				alignItems: "center",
			}}
		>
			<div className="heading">Search Doctors, Make an Appointment</div>
			<div className="sub-heading">
				Discover all the best doctors, clinics and hospitals near you
				that have taken up the pledge to protect your privacy
			</div>

			<div className="main">
				<div className="left-col">
					{/* <TextField></TextField> */}
					<div className="filter-item">
						<label htmlFor="">Search</label>
						<CustomTextField
							fullWidth={true}
							placeholder="Search for Doctors, Hopitals, etc"
							onInput={(e) => setSearch(e.target.value)}
						></CustomTextField>
					</div>
					<div className="filter-item">
						<label htmlFor="">State</label>
						<CustomTextField
							fullWidth={true}
							placeholder="West Bengal"
							onInput={(e) => setState(e.target.value)}
						></CustomTextField>
					</div>
					<div className="filter-item">
						<label htmlFor="">District</label>
						<CustomTextField
							fullWidth={true}
							placeholder="Howrah, Hoogly, etc"
							onInput={(e) => setDistrict(e.target.value)}
						></CustomTextField>
					</div>
					<div className="filter-item">
						<label htmlFor="">Specialization</label>
						<CustomTextField
							fullWidth={true}
							placeholder="Oncology, cardiology, etc"
							onInput={(e) => setSpecialization(e.target.value)}
						></CustomTextField>
					</div>
				</div>
				<div className="right-col">
					{filteredLocations.length > 0 ? (
						<>
							<div className="heading">Search results</div>
							<div className="map">
								<div id="map" data-location={locations}></div>
							</div>
							<div className="results">
								{filteredLocations.map((loc) => (
									<div className="item">
										<div className="content">
											<div>
												<h3>{loc.name}</h3>
												<div className="specs">
													{loc.specialization
														.split(",")
														.map((spec) => (
															<div className="spec">
																{spec}
															</div>
														))}
												</div>
											</div>

											<div className="address">
												{loc.address}, {loc.district}
											</div>
											<a href="https://cal.com/rishabdugar/30min">
												<div className="btn">
													Make an appointment {">"}
												</div>
											</a>
										</div>
										<div className="logo"></div>
									</div>
								))}
							</div>
						</>
					) : (
						<div className="warning">{warning}</div>
					)}
				</div>
			</div>
		</Stack>
	);
};

export default Search;
