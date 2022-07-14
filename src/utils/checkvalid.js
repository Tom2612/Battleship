function checkOccupied(location, length, direction, board) {
    let i = location;
    let array = [];
    let map = [];
    //Horizontal placement
    if (direction) {
        while(array.length < length) {
            array.push(i);
            i++;
        }
        //Vertical placement
    } else {
        while (array.length < length) {
            array.push(i);
            i += 10;
        }
    }
    for (let place of array) {
        if (typeof board[place - 1] !== 'number') {
            return false;
        } else map.push(typeof board[place - 1]);
    } return map.length === array.length ? true : false;
};

export default checkOccupied
//module.exports = checkOccupied;
