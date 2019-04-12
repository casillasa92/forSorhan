import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// more icons here: https://materialdesignicons.com/
import EmailIcon from '@material-ui/icons/Email';
import BrushIcon from '@material-ui/icons/Brush';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default ({ content, to, label }) => (
    <div>
        <Card>
            <CardMedia
                style={{ height: 10, paddingTop: '56.25%' }}
                image="http://lorempixel.com/400/250/business/8"
                title="Title"
            />
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {content}
                </Typography>
                <Button id="jobstab" label="Jobs" component={Link} to={to}>
                    {label}
                </Button>
            </CardContent>
        </Card>
    </div>
);
