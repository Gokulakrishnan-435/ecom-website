const functions = require("firebase-functions");
let express = require("express");
let cors = require("cors");
let stripe = require("stripe")(
  "sk_test_51KCgw2SIkbQ5bAdEnVRrTQEXcZTtQ4E5XGZndFlsK0wX3RoHDW0FzVzGD5xZ6sW9jQv1ZfOsT2Y2wrWMaFCebUoJ00ydf3F72H"
);
let app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) =>
  response.status(200).send("Hello from cloud")
);

app.post("/payment/create", async (request, response) => {
    let total = request.query.total;
    let paymentIntent = await stripe.paymentIntents.creat({
        amount: total,
        currency: "rupees"
    });
    response.status(201).send({
        clientSecure:paymentIntent.client_secret,
    })
})
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.api = functions.https.onRequest(app);
