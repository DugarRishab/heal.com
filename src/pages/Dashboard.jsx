import { Box, Typography, Stack, TextField } from "@mui/material";
import React, { useEffect } from "react";
import CustomTextField from "../components/CustomTextField";
import { displayMap } from "../utils/mapbox";
import "./style.css";
import locations from "../assets/dev-data/records.json";
import { useState } from "react";

const Dashboard =() =>{
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
            <div className="heading">Appointments</div>
            <div className="sub-heading">
                See all your upcoming and past appointments
            </div>

            <div className="main">
                
                
                <div className="right-col">
                    
                    
                </div>
            </div>
        </Stack>
    );
};

export default Dashboard;