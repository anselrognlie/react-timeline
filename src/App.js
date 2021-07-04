import React from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
    console.log('The value of timelineData is', timelineData);
    console.log('We should use timelineData in our project somehow...');

    return (
        <div>
            <header className="App-header">
                <h1 className="App-title">{ timelineData.person }</h1>
            </header>
            <main className="App-main">
                <Timeline timelineData={timelineData} />
            </main>
        </div>
    );
}

export default App;
