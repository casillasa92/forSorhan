import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CardList from './CardList';
import JobPostingCard from './JobPostingCard';
import Home from './Home';
import Calendar from './Calendar';
import StartupGuide from './StartupGuide/StartupGuide';
import JobPostingForm from './JobPostingForm';
import HowToStartup from './StartupGuide/HowToStartup.jsx';
import MentorMatchingForm from './MentorMatchingForm';
import JobPostDetails from './JobPostDetails';

const JobPostingPage = () => (
    <div>
        <br />

        <Button id="formbutton" variant="contained" color="primary" href="/jobPostingForm"> Post a New Job </Button>

        <CardList url="http://localhost:3001/api/showAllJobs" filterField="StartUp">
            <JobPostingCard />
        </CardList>
    </div>
);

const Routes = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/postings" component={JobPostingPage} />
        <Route path="/postings/details/:id" component={JobPostDetails} />
        <Route exact path="/howtostartup" component={StartupGuide} />
        <Route exact path="/jobPostingForm" component={JobPostingForm} />
        <Route exact path="/howtostartup" component={HowToStartup} />
        <Route exact path="/mentorMatchingForm" component={MentorMatchingForm} />
    </div>
);

export default Routes;
