import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from '@material-ui/core';

function About() {
  return (
    <div className="text-center mt-5">
    <h1>About</h1>
    <p>This project was built for practice purposes using <strong>React HOOK</strong> by React.</p><br/>
    <Link className="btn btn-outline-primary" to="https://github.com/manishkeltton/basicShopCart">
        <GitHubIcon width={"18px"}/> <span className="ml-2 mr-4">Visit Repo</span></Link>
    </div>
  );
}

export default About;
