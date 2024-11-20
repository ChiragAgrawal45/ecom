import stripe from "stripe";
const stripeInstance = stripe(
  "sk_test_51NwfyvSD17aTRJfDwLFa5cq7aRY3hxljFYwCSZXCG3wpEx9NokfSLCijK0pCuRGXF8RxoG8ePoMqKB7KZmq4dp5z0069ZwQNlC"
);

// Define a function to create a checkout session
export const createCheckoutSession = async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((product) => {
    const { title, image, category, price, quantity } = product; // Destructure the product object
    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: title,
          images: [image],
          metadata: {
            category: category, // Correctly structure the category property
          },
        },
        unit_amount: price * 100,
      },
      quantity: quantity, // Use the correct field name "quantity"
    };
  });

  const session = await stripeInstance.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ id: session.id });
};

export default {
  createCheckoutSession,
};
