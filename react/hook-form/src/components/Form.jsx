import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("")

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("")

    const [emailError, setEmailError] = useState("")
    const [email, setEmail] = useState("");

    const [passwordError, setPasswordError] = useState("")
    const [password, setPassword] = useState("");

    const [confirmPasswordMatch, setConfirmPasswordMatch] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 3 && e.target.value.length !== 0) {
            setFirstNameError("First Name must be at least 2 characters long");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 3 && e.target.value.length !== 0) {
            setLastNameError("Last Name must be at least 2 characters long")
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 3 && e.target.value.length !== 0) {
            setEmailError("Email must be at least 2 characters long")
        } else {
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8 && e.target.value.length !== 0) {
            setPasswordError("Password must be at least 8 characters long")
        } else {
            setPasswordError("")
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if (e.target.value !== password && e.target.value.length !== 0) {
            setConfirmPasswordMatch("Passwords do not match")
        } else {
            setConfirmPasswordMatch("")
        }
        if (e.target.value.length < 8 && e.target.value.length !== 0) {
            setConfirmPasswordError("Confirm Password must be at least 8 characters long")
        } else {
            setConfirmPasswordError("")
        }
    }

    return (
        <div>
            <form>
                {
                    firstNameError ?
                        <p style={{ color: 'red' }}>{firstNameError}</p> : ''
                }
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" onChange={handleFirstName} />
                </div>
                {
                    lastNameError ?
                        <p style={{ color: 'red' }}>{lastNameError}</p> : ''
                }
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" onChange={handleLastName} />
                </div>
                {
                    emailError ?
                        <p style={{ color: 'red' }}>{emailError}</p> : ''
                }
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" onChange={handleEmail} />
                </div>
                {
                    passwordError ?
                        <p style={{ color: 'red' }}>{passwordError}</p> : ''
                }
                <div>
                    <label htmlFor="password">Password: </label>
                    <input htmlFor="password" type="text" onChange={handlePassword} />
                </div>
                {
                    confirmPasswordError ?
                        <p style={{ color: 'red' }}>{confirmPasswordError}</p> : ''
                }
                {
                    confirmPasswordMatch ?
                        <p style={{ color: 'red' }}>{confirmPasswordMatch}</p> : ''
                }
                <div>
                    <label htmlFor="confirmpassword">Confirm Password: </label>
                    <input type="text" onChange={handleConfirmPassword} />
                </div>
            </form>

            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpassword}</p>
            </div>
        </div>
    );
}

export default Form;