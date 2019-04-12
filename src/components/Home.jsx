/**
 * The landing page about our service, how to sign up and where to start goes here.
 */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NavCard from './NavCard';

export default () => (
    <div>
        <Grid container spacing={24} style={{ padding: 24 }}>
            <Grid item xs={3}>
                <NavCard to="/postings" content="hey click below for job postings" label="Jobs" />
            </Grid>
            <Grid item xs={3}>
                <NavCard to="/calendar" content="hey click below for events" label="Events" />
            </Grid>
            <Grid item xs={3}>
                <NavCard to="/postings" content="hey click below for job postings" label="Jobs" />
            </Grid>
            <Grid item xs={3}>
                <NavCard to="/postings" content="hey click below for job postings" label="Jobs" />
            </Grid>
        </Grid>
    </div>
);
