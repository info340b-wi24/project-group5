import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const SavedActivities = (props) => {
    return (
        <main>
            <NavBar />
            <Container>
                <Box my={4}>
                    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                        <Typography variant="h4" gutterBottom>
                            My Itinerary
                        </Typography>
                        <Button variant="contained" color="primary" component={Link} to="/itinerary-form">
                            Build Itinerary
                        </Button>
                    </Paper>

                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h4" gutterBottom>
                            View Itinerary
                        </Typography>
                        <Button variant="contained" color="primary" component={Link} to="/final-itinerary">
                            View Final Itinerary
                        </Button>
                    </Paper>
                </Box>
            </Container>
            <Footer />
        </main>
    );
};

export default SavedActivities;
