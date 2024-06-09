import { useState } from "react";

export default function Forms() {

    // repetable or bad syntax :(
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    let handleNameChange = (event) => {
        setName(event.target.value);
    }
    let handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    // optimal or a good syntax :)
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    let handleInputChange = (event) => {
        let onlyName = event.target.name;
        let onlyValue = event.target.value;
        setFormData( (currData) => {
            currData[onlyName] = onlyValue;
            return {...currData};
        });
    }

    const [submittedName, setSubmittedName] = useState("");
    let handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        setSubmittedName(formData.username); // Updates the state with the submitted name
    }

    return(
        <>
            <h1>xlence forums</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                &nbsp; &nbsp;
                <input 
                    type="text" 
                    placeholder="Enter your username" 
                    value={formData.username} 
                    onChange={handleInputChange}
                    name="username"
                />
                <br />
                <label htmlFor="password">password</label>
                &nbsp; &nbsp;
                <input 
                    type="text" 
                    placeholder="Enter your password" 
                    value={formData.password} 
                    onChange={handleInputChange}
                    name="password"
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <hr />
            {submittedName && <h1>Welcome to our page, <strong>{submittedName}</strong>!</h1>}
        </>
    );
}
