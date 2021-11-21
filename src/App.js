import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import HomeComponent from './components/home';
import HeaderComponent from './components/header';
import TeamComponent from './components/team';
import AboutComponent from './components/about';
import TeamChildComponent from './components/team-child';
import LoginComponent from './components/login';
import {PrivateRoute,PublicRoute} from './private';
import { ItemChildComponent } from './components/item-child';

const Item = (props) => {

    console.log(props.data);

    let usedData = props.data;
    // return <h1>Item Component</h1>
    return (<div>
        <h1>items component</h1>
        <ul>
            {
                usedData.map((item,index) =>{
                    return (
                        <li key={index}><Link to={'item/'+item.name} >{item.name}</Link></li>
                    )
                })
            }
        </ul>
        

    </div>);
}

const App = (props) => {
    const data = [
        {
            id: 1,
            name: 'SOLID'
        },
        {
            id: 2,
            name: 'LIQUID'
        },
        {
            id: 3,
            name: 'GAS'
        }
    ];

    return (
        <Router>
            <HeaderComponent></HeaderComponent>
            <Switch>
                <Route exact path='/' component={HomeComponent}></Route>
                {/* 'exact' keyword used to get the identical path only
                    e.g /team by exact
                    and /team/anyteam without exact
                */}
                <Route exact path='/items' render={(props) => <Item {...props} data={data} />} ></Route>
                <Route exact path='/teams' component={TeamComponent}></Route>
                <Route exact path='/team/:teamname' component={TeamChildComponent}></Route>
                <Route exact path='/item/:name' component={ItemChildComponent}></Route>
                <Route exact path='/about' component={AboutComponent}></Route>
                <Route path='/login' component={LoginComponent}></Route>
                <PrivateRoute exact path='/admin' 
                    Component={HomeComponent}
                    isAuthenticated={false} />
                <PublicRoute exact path='/login' 
                    Component={LoginComponent}
                    isAuthenticated={false} />
                <Route component={() => 'PAGE NOT FOUND'} />
            </Switch>
        </Router>
    );
}

export default App;
