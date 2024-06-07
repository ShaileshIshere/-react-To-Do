import { useState } from "react";

export default function LikeButton() {
    const[isLiked, setIsLiked] = useState(false);
    const[clicked, setClicked] = useState(0);

    let click = () => {
        setIsLiked(!isLiked);
        setClicked(clicked+1);
    }
    return(
        <>
            <h1 onClick={click}>click = {clicked}</h1>
            <h1 onClick={click}>
                {isLiked ? (<i className="fa-solid fa-heart"></i>)
                : (<i className="fa-regular fa-heart"></i>)}
            </h1>
        </>
    );
}