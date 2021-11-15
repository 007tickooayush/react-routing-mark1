import React from 'react';
import {Link} from 'react-router-dom';

const TeamComponent = (props) => {

    return (
        <ul>
            <li>
                <Link to="team/team1">Team 1</Link>
            </li>
            <li>
                <Link to="team/team2">Team 2</Link>
            </li>
            <li>
                <Link to="team/team3">Team 3</Link>
            </li>
            <li>
                <Link to="team/team4">Team 4</Link>
            </li>
        </ul>

    );

}

export default TeamComponent;