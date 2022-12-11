const got = require("got");
import got from "got";

try {
  const response = await got
    .post("https://api.flutterwave.com/v3/payments", {
      headers: {
        Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
      },
      json: {
        tx_ref: "hooli-tx-1920bbtytty",
        amount: "100",
        currency: "ZMW",
        redirect_url:
          "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
        meta: {
          consumer_id: 23,
          consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
          email: "collins@mootoholdings.com",
          phonenumber: "+260973646230",
          name: "kolichi Tutu",
        },
        customizations: {
          title: "Mooto Holdings",
          logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png",
        },
      },
    })
    .json();
} catch (err) {
  console.log(err.code);
  console.log(err.response.body);
}

// app.get('/payment-callback', async (req, res) => {
//     if (req.query.status === 'successful') {
//         const transactionDetails = await Transaction.find({ref: req.query.tx_ref});
//         const response = await flw.Transaction.verify({id: req.query.transaction_id});
//         if (
//             response.data.status === "successful"
//             && response.data.amount === transactionDetails.amount
//             && response.data.currency === "ZMW") {
//             // Success! Confirm the customer's payment
//         } else {
//             // Inform the customer their payment was unsuccessful
//         }
//     }
// );
