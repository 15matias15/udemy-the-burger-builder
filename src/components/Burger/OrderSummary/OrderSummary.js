import React from 'react';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}:{props.ingredients[igKey]}
                    </span>
                </li>);
        });

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                btnType='Success'
                clicked={props.purchaseContinue}>
                CONTINUE
           </Button>
            <Button
                btnType='Danger'
                clicked={props.purchaseCancelled}>
                CANCEL
           </Button>
        </>
    );
}

export default orderSummary;