function generateTickets(n) {
    let arr = new Array(n);
    for(let i=0; i<n; ++i) {
        /*
        this Math thingy will generate a random no. which lies on the 
        scale of [1 - 9], means 1 to 9 ke beech m koi vi no. generate kara ke de sacta ye method
        */
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function sum(arr) {
    /*
    this method will somehow returns the entire sum of an array like IDK how the hell in the world this thing is working but yeah it is legit :)
    */
    return arr.reduce((sum, curr) => sum + curr, 0);
}

export {generateTickets, sum};