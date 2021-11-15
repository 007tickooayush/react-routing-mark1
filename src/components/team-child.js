import React from 'react';
// import {Link} from 'react-router-dom';

const TeamChildComponent = (props)=> {
    return (
        <ul>
            <h1>Team name is {props.match.params.teamname} </h1>
        </ul>

    );
}

export default TeamChildComponent;