import React from 'react';

export const PlayerContext = React.createContext();

class PlayerContextProvider extends React.Component {
    state = {
        players: [
            {
                name: "Giannis Antetokounmpo",
                age: 27,
                team: "Milwaukee Bucks",
                position: "Forward",
                country: "Greece",
                imageURL: "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png",

            },
            {
                name: "Nicola Jokic",
                age: 27,
                team: "Denver Nuggets",
                position: "Center",
                country: "Serbia",
                imageURL: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612743/2021/260x190/203999.png",

            },
            {
                name: "Luka Doncic",
                age: 22,
                team: "Dallas Mavericks",
                position: "Forward-Guard",
                country: "Slovenia",
                imageURL: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612742/2021/260x190/1629029.png",

            },
            {
                name: "Stephen Curry",
                age: 33,
                team: "Golden State Warriors",
                position: "Guard",
                country: "USA",
                imageURL: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612744/2021/260x190/201939.png",

            },
            {
                name: "Jaylen Brown",
                age: 25,
                team: "Boston Celtics",
                position: "Guard-Forward",
                country: "USA",
                imageURL: "https://cdn.nba.com/headshots/nba/latest/1040x760/1627759.png",

            },
            {
                name: "Jayson Tatum",
                age: 23,
                team: "Boston Celtics",
                position: "Forward-Guard",
                country: "USA",
                imageURL: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png",
            }
        ]
    }
    render () {
        return (
            <PlayerContext.Provider value={this.state}>
                {this.props.children}
            </PlayerContext.Provider>
        )
    }
}

export default PlayerContextProvider;