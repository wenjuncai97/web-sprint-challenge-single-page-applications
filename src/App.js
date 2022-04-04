import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios';
import Form from './components/Form'
import schema from './validation/formSchema'
import * as yup from 'yup';
import "./App.css"


// ENDPOINT: 'https://reqres.in/api/orders'
const initialForm = {
  //text input
  name: '',
  //dropdown
  size: '',
  //checkboxes
  pepperoni: false,
  bacon: false,
  mushroom: false,
  pineapple: false,
  special: ''
}

const resetForm = {
  //text input
  name: '',
  //dropdown
  size: '',
  //checkboxes
  pepperoni: false,
  bacon: false,
  mushroom: false,
  pineapple: false,
  special: '',
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

  const formSubmit = () => {
    const newOrder = {
      name: form.name,
      size: form.size,
      special: form.special,
      topping: ["pepperoni", "bacon", "mushroom", "beef"].filter(topping => !!form[topping])
    }
    handleSubmit(newOrder);
  }

  const handleSubmit = (newOrder) => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        console.log(res)
        setUsers([res.data, ...users])
        setForm(initialForm)
      })
      .catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    console.log(value)
    validate(name, value);
    setForm({ ...form, [name]: value });
  }

  return (
    <>
      <div className="backgroundImg">
        <header className="frontHeader">
          <div className="navLinks">
            <Link className="homeBtn" to="/"
              id="home-button">Home</Link>
            <Link className="orderBtn" to="/pizza" id="order-pizza">Pizza!</Link>
          </div>
          <h1 className="headerH1">Lambda Pizza</h1>
        </header>
        <h2 className="homeH2">Enjoy hot pizza delivered free!</h2>
        <div className="pizza-pics">
          <img src="../img/homemadepizza.png" height='200' width='200' />
          <img src="../img/woodenpizza.png" height='250' width='250' />
          <img src="../img/dominospizza.png" height='200' width='200' />
          <img src="../img/pepperonipizza.png" height='200' width='200' />
        </div>
        </div>
        <Switch>
          <Route exact path="/pizza">
            <Form
              values={form}
              change={handleChange}
              submit={formSubmit}
              errors={formErrors} />
          </Route>
        </Switch>
    </>
  );
};
export default App;
