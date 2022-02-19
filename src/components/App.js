import React, { Component } from 'react'
import PlayerList from './PlayerList';
import PlayerContextProvider from '../contexts/PlayerContext'
import ThemeContextProvider from '../contexts/ThemeContext'

class App extends Component {

    render() {
        return (
            <div>
                <ThemeContextProvider>
                    <PlayerContextProvider>
                        <PlayerList />
                    </PlayerContextProvider>
                </ThemeContextProvider>
            </div>
        )
    }
}


export default App;