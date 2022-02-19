import React, { Component } from 'react'
import './Player.css'
import { ThemeContext } from '../contexts/ThemeContext';


class Player extends Component {
    render() {
        return (

            <ThemeContext.Consumer>
                {(contextTheme) => {
                    const { isDarkTheme, dark, light } = contextTheme;
                    const theme = isDarkTheme ? dark : light;
                    return (
                        <div className="col-md-4 mt-4">
                            <div className="card" style={{ width: "18rem"}}>
                                <img src={this.props.player.imageURL} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title" style={{background: theme.bg, color:theme.txt}}>{this.props.player.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{this.props.player.team}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">Age: {this.props.player.age} Position: {this.props.player.position}</h6>
                                    <p className="card-text">Country: {this.props.player.country}</p>
                                </div>
                            </div>
                        </div>

                    )
                }}
                
            </ThemeContext.Consumer>
        )
    }
}

export default Player;

