import React from 'react';

const Form = (props) => {
    const { values, change, submit, errors } = props;

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }

    return (
        <section>
            <h2>Order your fresh baked pizza here!</h2>
            <form id="pizza-form" onSubmit={onSubmit}>
                <div></div>
                <label>
                    <p>Name: <span className="error">{errors.name}</span></p>
                    <input
                        id="name-input"
                        type="text"
                        name="name"
                        onChange={onChange}>
                    </input>
                </label>
                <label>
                    <p>Size
                        <span className="error">
                            {errors.size}
                        </span>
                    </p>
                    <select
                        name="size"
                        id="size-dropdown"
                        onChange={onChange}>
                        <option value=''>-- Select a size --</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                <div className="toppings checkboxes">
                    <h4>Toppings</h4>
                    <label>
                        Pepperoni
                        <input
                            type="checkbox"
                            name="pepperoni"
                            checked={values.pepperoni}
                            onChange={onChange} />
                    </label>
                    <label>
                        Bacon
                        <input
                            type="checkbox"
                            name="bacon"
                            checked={values.bacon}
                            onChange={onChange} />
                    </label>
                    <label>
                        Mushroom
                        <input
                            type="checkbox"
                            name="mushroom"
                            checked={values.mushroom}
                            onChange={onChange} />
                    </label>
                    <label>
                        Beef
                        <input
                            type="checkbox"
                            name="beef"
                            checked={values.beef}
                            onChange={onChange} />
                    </label>
                </div>

                <label>
                    Special Instructions:
                    <input
                        id="special-text"
                        type="text"
                        name="special"
                        onChange={onChange} />
                </label>
                <button id="order-button" name="orderBtn">Order!</button>
            </form>
        </section>
    )
}

export default Form;