import React from "react";

const Form = ({values, inputChange, checkboxChange, submit}) => {
    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }    

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        debugger
        checkboxChange(name, checked)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    

    return (
    <form>
        <label>Name <br></br>
            <input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='name'
            />
        </label>

        <div>
        <label>Size <br></br>
        <select
        value={values.size}
        onChange={onInputChange}
        name='size'
        >
            <option value=''>- Select Pizza Size -</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
            <option value='xl'>Extra Large</option>
        </select>
        </label></div>

        <h4>Toppings</h4>
            <div>
            <label>Pepperoni
                <input
                type="checkbox"
                name='pepperoni'
                checked={values.toppings.pepperoni}
                onChange={onCheckboxChange}
                />
            </label>
            
            <label>Sausage&nbsp;
                <input
                type="checkbox"
                name='sausage'
                checked={values.toppings.sausage}
                onChange={onCheckboxChange}
                />
            </label>
            
            
            <label>Canadian Bacon&nbsp;
                <input
                type="checkbox"
                name='canadianBacon'
                checked={values.toppings.canadianBacon}
                onChange={onCheckboxChange}
                />
            </label>
            
            <label>Onions&nbsp;
                <input
                type="checkbox"
                name='onions'
                checked={values.toppings.onions}
                onChange={onCheckboxChange}
                />
            </label>
            </div>

            <div>
            <label>Greenpepper&nbsp;
                <input
                type="checkbox"
                name='greenpepper'
                checked={values.toppings.greenpepper}
                onChange={onCheckboxChange}
                />
            </label>
            
            <label>Diced Tomatoes&nbsp;
                <input
                type="checkbox"
                name='tomatoes'
                checked={values.toppings.tomatoes}
                onChange={onCheckboxChange}
                />
            </label>
            
            <label>Pineapple&nbsp;
                <input
                type="checkbox"
                name='pineapple'
                checked={values.toppings.pineapple}
                onChange={onCheckboxChange}
                />
            </label>
            
            <label>Black Olives&nbsp;
                <input
                type="checkbox"
                name='blackOlives'
                checked={values.toppings.blackOlives}
                onChange={onCheckboxChange}
                />
            </label>
            </div><br></br>

        <div>
            <label> Special Instructions:<br></br>
                <input
                value={values.specialInstruction}
                onChange={onInputChange}
                name='specialInstruction'
                type='specialInstruction'
                />
            </label>
        </div><br></br>

        <div>
            <button onClick={onSubmit}>Submit</button>
        </div>
</form>
    )

};

export default Form;

