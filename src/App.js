import React, { useState } from "react";
import { Link, Route, Switch } from 'react-router-dom'
import Form from "./Form"
import Home from "./Home"
import * as yup from 'yup'
import axios from 'axios'
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
  const [orders, setOrders] = useState([])
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

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked, 
      }
    })
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        debugger
        setOrders([...orders, res.data])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const submit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      specialInstruction: formValues.specialInstruction,
      toppings: Object.keys(formValues.toppings).filter( item => formValues.toppings[item]),
      }
    console.log(newOrder)
    postNewOrder(newOrder)
  }

  
  return (
    <>
      
      <div>
          <div>
            <Link to='/'> Home </Link>
          </div>
          <div>
            <Link to='/pizza' className='orderPizza' id='navOrder'> Order your Pizza now </Link>
          </div>

          <Route exact path='/'>
            <Home/>
          </Route>


          <Route path='/pizza'>
            <Form 
            values={formValues}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            submit={submit}
            />
          </Route>
      </div>
    </>
  );
};
export default App;

