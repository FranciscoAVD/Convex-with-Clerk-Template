//CREATE JWT TEMPLATE IN CLERK DASHBOARD AND APPLY CHANGES
//THEN ADD JWT TO CONVEX DASHBOARD

export default {
    providers: [
      {
        domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
        applicationID: "convex",
      },
    ]
};