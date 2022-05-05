import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Container } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Marquee from "react-fast-marquee";

export const Home: React.FC = () => {
    const [countryName, setCountryName] = useState('');
    const navigate = useNavigate();
    const getCountryName = async (e: FormEvent) => {
        e.preventDefault();
        navigate(`/details/${countryName}`);
    };

    return (
        
        <Container maxWidth="md">
            <div >
             <nav>
             <Marquee>
                <h1>Weather App</h1></Marquee></nav>
                <div className="box">
                <TextField label="Enter the country name"
                    value={countryName}
                    variant="outlined"
                    data-testid="inputbox-test-id"
                    onChange={(e) => setCountryName(e.target.value)} /> </div>
                <div className="box1">
                <Button size="medium" variant="contained" data-testid="button-testid" disabled={countryName===''} onClick={getCountryName}>
                Submit
            </Button> 
            </div>
            </div>
            
            </Container>
            
       
    );
};