import React from 'react';
import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required()
        .min("2", "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(["small", "medium", "large"], "Pick a size!"),
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    beef: yup.boolean(),
    mushroom: yup.boolean(),
})

export default formSchema