import React from "react";

const Form = ({values, inputChange, checkboxChange, submit}) => {
    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }    

    const onCheckboxChange = evt => {
        const { name, isChecked } = evt.target
        checkboxChange(name, isChecked)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    

    return (
    <form>
    <label>Name&nbsp;
        <input
        value={values.name}
        onChange={onInputChange}
        name='name'
        type='name'
        />
    </label>

    <label>Size&nbsp;
        <select
        onChange={onInputChange}
        value={values.size}
        name='size'
        >
            <option value=''>- Select Pizza Size -</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
            <option value='xl'>Extra Large</option>
        </select>
    </label>

    <h4>Toppings</h4>
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

    <div>
        <label> Special Instructions&nbsp;
            <input
            value={values.specialInstruction}
            onChange={onInputChange}
            name='specialInstruction'
            type='specialInstruction'
            />
        </label>
    </div>

    <div>
        <button onClick={onSubmit}>Submit</button>
    </div>
</form>


//     <label>Gluten Free Crust (+ $1.00)&nbsp;
//         <input
//         type="radio"
//         name='glutenFree'
//         value='glutenFree'
//         checked={values.civil === 'single'}
//         onChange={onInputChange}
//         />
//     </label>

//     <label>None&nbsp;
//         <input
//         type="radio"
//         name="none"
//         value='none'
//         checked={values.civil === 'married'}
//         onChange={onInputChange}
//         />
//     </label>


// </form> */}
    )

};

export default Form;

