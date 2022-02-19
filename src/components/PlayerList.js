import React, { Component } from 'react';
import './PlayerList.css';
import Player from './Player';
import { PlayerContext } from '../contexts/PlayerContext';
import { ThemeContext } from '../contexts/ThemeContext';

class PlayerList extends Component {

    render() {

        return (
            <ThemeContext.Consumer>
                {(contextTheme) => (
                    <PlayerContext.Consumer>
                        {contextPlayer => {
                            const { players } = contextPlayer;
                            const { changeTheme, isDarkTheme, dark, light } = contextTheme;
                            const theme = isDarkTheme ? dark : light;
                            return (
                                <div style={{ background: theme.bg, color: theme.txt }}>
                                        <button style={{width:"1350px", marginTop:"20px"}} align= "center" type="button" class="btn btn-primary" onClick={changeTheme}>Change Theme</button>
                                    <div className="container mx-auto mt-4">
                                        <div className="row">
                                            {players.map((player, i) => {
                                                return <Player player={player}
                                                    key={i}
                                                />
                                            })}
                                        </div>
                                    </div>
                                </div>

                            )
                        }}

                    </PlayerContext.Consumer>
                )}

            </ThemeContext.Consumer>
        )
    }
}

export default PlayerList;

