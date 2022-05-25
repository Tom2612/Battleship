function checkLocation(location, length) {
    let i = location;
    let array = [];
    let result;
    while(array.length < length) {
        array.push(i);
        i++;
    }
    console.log(array);
    // split the number here and check the first digit of first number is same as first digit of last?
    if ((location + length) % 10 !== 0) {
        for (let i = 0; i < array.length; i++) { 
            let number = array[i];
            let nextNumber = array[i+1];
            console.log(number, nextNumber)  
            if(array[i] % 10 === 0){
                if (nextNumber){
                    result = false
                } else {
                    result = true;
                } 
            }
        }
        return result;
    } else return true;
    
}