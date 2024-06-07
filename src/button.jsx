import { useState } from "react";

export default function Button() {
    const[count, countState] = useState(0);
    console.log("you're weak");
    
    let incCount = () => {
        // count++;
        // console.log(count);
        // return count;

        // countState(count+1);
        // console.log(count);

        countState((currCount) => {
            return currCount + 1;
        });
        countState((currCount) => {
            return currCount + 1;
        });
    }

    return (
        <>
            <button onClick={incCount}>press me!</button>
            <h2>count = {count}</h2>
        </>
    );
}