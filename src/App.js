import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios';
import Form from './components/Form'
import schema from './validation/formSchema'
import * as yup from 'yup';

// ENDPOINT: 'https://reqres.in/api/orders'
const initialForm = {
  //text input
  name: '',
  //dropdown
  size: '',
  //checkboxes
  pepperoni: false,
  bacon: false,
  mushrooms: false,
  pineapple: false
}

const initialFormErrors = {
  name: '',
  size: ''
}

const initialUsers = []

const App = () => {

  const [users, setUsers] = useState(initialUsers)
  const [form, setForm] = useState(initialForm)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const handleSubmit = (newOrder) => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        console.log(res)
        setUsers([res.data, ...users])
      })
      .catch(err => console.error(err))
      .finally(() => setForm(initialForm))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setForm({ ...form, [name]: value });
  }

  const formSubmit = () => {
    const newOrder = {
      name: form.name,
      size: form.size,
      special: form.special,
      topping: ["pepperoni", "bacon", "mushroom", "beef"].filter(topping => !!form[topping])
    }
    handleSubmit(newOrder);
  }

  return (
    <>
      <header className="frontHeader">
        <div className="navLinks">
          <Link to="/" id="home-button">Home</Link>
          <Link to="/pizza" id="order-pizza">Pizza!</Link>
        </div>
        <h1 className="headerH1">Lambda Eats</h1>
        <Switch>
          <Route exact path="/pizza">
            <Form
              values={form}
              change={handleChange}
              submit={formSubmit}
              errors={formErrors} />
          </Route>
        </Switch>
      </header>
    </>
  );
};
export default App;
