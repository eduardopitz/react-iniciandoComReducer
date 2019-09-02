import React from 'react';

import SongList from './SongList';
import SongDetail from './SongDetail';

import './App.scss'

const App = () => {
    return (
        <div className="container">
            <SongDetail />
            <SongList />
        </div>
    )
};

export default App;