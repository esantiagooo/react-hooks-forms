import { useState } from "react"
import Form from "./Form"
import DisplayData from "./DisplayData"



const ParentComponent = () => {
    const [firstName, setFirstName] = useState("Gianna");
    const [lastName, setLastName] = useState("Gannon");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    return (
        <div>
        <Form
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        />
        <DisplayData firstName={firstName} lastName={lastName}/>
        </div>
    )

}
export default ParentComponent