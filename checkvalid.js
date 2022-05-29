function checkOccupied(location, length, direction, board) {
    let i = location;
    let array = [];
    //Horizontal placement
    if (direction) {
        while(array.length < length) {
            array.push(i);
            i++;
        }
        for (let locations of array) {
            if(typeof board[locations - 1] !== 'number') {
                return false;
            } else return true;
        }
    } else {
        while (array.length < length) {
            array.push(i);
            i += 10;
        }
    }
};

module.exports = checkOccupied;