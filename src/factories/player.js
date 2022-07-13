const Player = (name) => {
    let possibleLocations = [];
    for(let i = 1; i < 101; i++) {
    possibleLocations.push(i);
    }
    
    const getName = () => name;

    const randomLocation = () => {
        let randomNumber = Math.floor(Math.random() * possibleLocations.length);
        let hitLocation = possibleLocations.splice(randomNumber, 1);
        return hitLocation;
    }

    return { getName, randomLocation }
}

// module.exports = Player;

export default Player;
