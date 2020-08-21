import React from "react";

const Form = ({values, inputChange}) => {
    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
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
</form>


//     <h4>Toppings</h4>
//     <label>Pepperoni
//         <input
//         type="checkbox"
//         name='pepperoni'
//         checked={values.hobbies.hiking}
//         onChange={onCheckboxChange}
//         />
//     </label>

//     <label>Sausage&nbsp;
//         <input
//         type="checkbox"
//         name='sausage'
//         checked={values.hobbies.hiking}
//         onChange={onCheckboxChange}
//         />
//     </label>


//     <label>Canadian Bacon&nbsp;
//         <input
//         type="checkbox"
//         name='canadianBacon'
//         checked={values.hobbies.hiking}
//         onChange={onCheckboxChange}
//         />
//     </label>

//     <label>Onions&nbsp;
//         <input
//         type="checkbox"
//         name='onions'
//         checked={values.hobbies.hiking}
//         onChange={onCheckboxChange}
//         />
//     </label>

//     <label>Greenpepper&nbsp;
//         <input
//         type="checkbox"
//         name='greenpepper'
//         checked={values.hobbies.hiking}
//         onChange={onCheckboxChange}
//         />
//     </label>

//     <label>Diced Tomatoes&nbsp;
//         <input
//         type="checkbox"
//         name='tomatoes'
//         checked={values.hobbies.hiking}
//         onChange={onCheckboxChange}
//         />
//     </label>

//     <label>Pineapple&nbsp;
//         <input
//         type="checkbox"
//         name='pineapple'
//         checked={values.hobbies.hiking}
//         onChange={onCheckboxChange}
//         />
//     </label>

//     <label>Black Olives&nbsp;
//         <input
//         type="checkbox"
//         name='blackOlives'
//         checked={values.hobbies.hiking}
//         onChange={onCheckboxChange}
//         />
//     </label>

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

//     <label> Special Instructions&nbsp;
//         <input
//         value={values.specialInstruction}
//         onChange={onInputChange}
//         name='specialInstruction'
//         type='specialInstruction'     
//         />
//     </label>
// </form> */}
    )

};

export default Form;

