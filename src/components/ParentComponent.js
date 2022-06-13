import React, {useState} from "react";
import DisplayData from "./DisplayData";
import Form from "./Form";

function ParentComponent(){
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [newsletter, setNewsletter] = useState(false);
  
    function handleFirstNameChange(e){
      setFirstName(e.target.value);
    }
    function handleLastNameChange(e){
      setLastName(e.target.value);
    }
  
    function handleNewsletterChange(event) {
      setNewsletter(event.target.checked);
    }

    return (
        <div>
            <Form 
                firstName = {firstName}
                lastName = {lastName}
                newsletter = {newsletter}
                handleFirstNameChange = {handleFirstNameChange}
                handleLastNameChange = {handleLastNameChange}
                handleNewsletterChange = {handleNewsletterChange}
            />
            <DisplayData firstName={firstName} lastName={lastName}/>
        </div>
    );


}

export default ParentComponent;