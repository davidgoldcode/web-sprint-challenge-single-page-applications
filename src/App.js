import React, { useState } from "react";
import { Link, Route, Switch } from 'react-router-dom'
import Form from "./Form"
import Home from "./Home"
import * as yup from 'yup'
import formSchema from "./Validation/formSchema";

const initialFormValues = {
  name: '',
  size: '',
  toppings: {
      pepperoni: false,
      sausage: false,
      canadianBacon: false,
      onions: false,
      greenpepper: false,
      tomatoes: false,
      pineapple: false,
      blackOlives: false,
  },
  glutenFree: '',
  none: '',
  specialInstruction: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  glutenFree: '',
  none: '',
  specialInstruction: '',
}



const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid=> {
        setFormErrors({
          ...formErrors,
          [name]: "", 
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

      setFormValues({
        ...formValues,
        [name]: value
      })
      
  }

  
  return (
    <>
      
      <div>
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path='/pizza'>
            <Form 
            values={formValues}
            inputChange={inputChange}
            />
          </Route>



      </div>
    </>
  );
};
export default App;

