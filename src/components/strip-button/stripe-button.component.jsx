import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
const priceForStripe = price * 100;
const publishableKey = 'pk_test_nrz7Vd9sxlYbOy7VMocXvGO800G2IyyY4L';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;