import { useState } from "react";

export default function CommentsForm() {
    const [formData, setFormData] = useState({
        username: "@",
        remarks: "",
        ratings: 5,
    })

    let handleInputChange = (event) => {
        let onlyName = event.target.name;
        let onlyValue = event.target.value;

        setFormData((currData) => {
            currData[onlyName] = onlyValue;
            return { ...currData };
        })
    }

    let escapeReload = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "@",
            remarks: "",
            ratings: 5,
        })
    }

    return(
        <>
            <h3>Add your comment</h3>
            <form onSubmit={escapeReload}>
                <input 
                    type="text" 
                    placeholder="username" 
                    value={formData.username} 
                    name="username" 
                    onChange={handleInputChange}
                />

                <br /><br />

                <textarea 
                    placeholder="add your remarks here" 
                    value={formData.remarks} 
                    name="remarks" 
                    onChange={handleInputChange}>
                </textarea>

                <br /><br />

                <label htmlFor="ratings">Ratings</label>

                &nbsp; &nbsp;

                <input 
                    type="number" 
                    min={1} 
                    max={5} 
                    value={formData.ratings} 
                    name="ratings" 
                    id="ratings"
                    onChange={handleInputChange}
                />

                <br /><br />

                <button>comment</button>
            </form>
        </>
    );
}