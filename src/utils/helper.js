function checkLocation(location, length, horizontal) {
    let i = location;
    let array = [];
    if (horizontal) {
        //Horizontal placement
        while(array.length < length) {
            array.push(i);
            i++;
        }
        let a = array[0].toString().split('');
        let b = array[array.length - 1].toString().split('');
        for (let i = 0; i <= length - 2; i++) {
            //Cycle through all coordinates except last one, false if any number is divisible by ten except last one!
            if (array[i] % 10 === 0) {
                return false;
            }
        }
        if (a[1] === 0 || a[0] === b[0]) {
            return true;
        }
        if (b.length === 1) {
            return true;
        } 
        if(location + length > 101) {
            return false
        }
        if (b[1] !== '0') {
            return false;
        }
        return true;
    } else {
        //Vertical placement
        while (array.length < length) {
            array.push(i);
            i += 10;
        }
        return (location + (length - 1 * 10) > 100 ? false : true);
    }
};

// module.exports = checkLocation;

export default checkLocation
