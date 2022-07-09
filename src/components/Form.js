import React from 'react';


const Form = (props) => {
    const { change, submit, errors } = props;
    const { pepperoni, bacon, beef, mushroom, special, name, size } = props.values;

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        if (type === "checkbox") {
            change(name, checked)
        } else {
            change(name, value)
        }
    }


    return (
        <section className="orderForm">
            <h2 className="orderFormH2">Order your fresh baked pizza here!</h2>
            <form id="pizza-form" onSubmit={onSubmit}>
                <div></div>
                <label>
                    <p>Name: <span className="error">{errors.name}</span></p>
                    <input
                        value={name}
                        id="name-input"
                        type="text"
                        name="name"
                        onChange={onChange}>
                    </input>
                </label>
                <label>
                    <p>Size:
                        <span className="error">
                            {errors.size}
                        </span>
                    </p>
                    <select
                        value={size}
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
                        <input
                            checked={pepperoni}
                            type="checkbox"
                            name="pepperoni"
                            onChange={onChange} />
                            Pepperoni
                    </label>
                    <label>
                        <input
                            checked={bacon}
                            type="checkbox"
                            name="bacon"
                            onChange={onChange} />
                            Bacon
                    </label>
                    <label>
                        <input
                            checked={mushroom}
                            type="checkbox"
                            name="mushroom"
                            onChange={onChange} />
                            Mushroom
                    </label>
                    <label>
                        <input
                            checked={beef}
                            type="checkbox"
                            name="beef"
                            onChange={onChange} />
                            Beef
                    </label>
                </div>

                <label>
                    Special Instructions:
                    <textarea
                        value={special}
                        id="special-text"
                        type="text"
                        name="special"
                        onChange={onChange}
                        placeholder="Any allergies?" />
                </label>
                <button id="order-button" name="orderBtn" type="submit">Order!</button>
            </form>
        </section>
    )
}

export default Form;