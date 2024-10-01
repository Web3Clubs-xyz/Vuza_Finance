import React, { useState } from 'react';
import { Avatar, Box, Breadcrumbs, Button, Card, CardContent, CardHeader, Grid, Stack, Typography, MenuItem, Select } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Sample Data for Transactions Table
const rows = [];
const columns = [];

const GurantorPoolView = () => {
    const [isLoading, setLoading] = useState(false);
    const { guid = '' } = useParams();
    const user = JSON.parse(localStorage.getItem("user"))

    const breadcrumbs = [
        <Link key="1" to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Pools
        </Link>,
        <Typography key="3" style={{ fontWeight: 800, color: 'secondary.dark' }}>
            Guarantor Pool
        </Typography>
    ];

    return (
        <>
            <Grid container spacing={3} sx={{ marginTop: '20px' }}>
                {/* Right section - coming on top on small screens */}
                <Grid item xs={12} md={3} order={{ xs: 1, md: 2 }}>
                  
                </Grid>

                {/* Left section */}
                <Grid item xs={12} md={9} order={{ xs: 2, md: 1 }}>
                  
                </Grid>
            </Grid>
        </>
    );
};

export default GurantorPoolView;
