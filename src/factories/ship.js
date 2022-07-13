const Ship = (name, length) => {
    let hits = [];
    const getName = () => name;
    const getLength = () => length;
    const hit = (location) => {
        if(!location) { 
            return hits
        }else{
            hits.push(location);
            return hits;
        }
    }
    const isSunk = () => {
        if (hits.length === length) {
            return true;
        } else {
            return false;
        }
    }
    return {
        getName,
        getLength,
        hit,
        isSunk
    }
};

//test Boat
// const patrolBoat = Ship('Patrol Boat', 2);
// patrolBoat.hit('A1');
// patrolBoat.hit('A2');


module.exports = Ship;
