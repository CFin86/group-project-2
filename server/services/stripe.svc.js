var stripe = require('stripe')('sk_test_Sh7xZUpKnGkXDEYsMJAH2G0B');

exports.charge = function(token, amount) {
    return stripe.charges.create({
        amount: amount,
        currency: 'usd',
        source: token,
        description: 'Statement description'
    });
}