import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)});
    },[])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ?
        <h1>Loading</h1> : 
        (
            <div>
                <div  className='tc container center'>
                    <h1 className='f1'>{'ROBOFRIENDS'}</h1>
                    <SearchBox searchChange={onSearchChange} />
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>

                </div>
                <div className="footer shadow-5">
                        <p className="footerText">This project was made by <a href="https://williampellas.com/">William Pellas</a> as a course project for Zero to Mastery 'The Complete Web Developer in 2023: Zero to Mastery'. Check out the <a href="https://github.com/wpellas/robofriends">GitHub repo</a>.</p>
                </div>
            </div>   
        );
    } 

export default App;