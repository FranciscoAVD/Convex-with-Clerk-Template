# Convex-with-Clerk-Template

## This is a quickstart template for a NextJs app using Convex as a database and Clerk for authentication.

Install all the necessary dependencies.

On installing Convex, it will create a folder with the generated files and environment variables for the project.
The environment keys for Clerk need to be grabbed from the dashboard and into your .env.local. 

To get Convex and Clerk on the same page, you need to create a JWT Template from inside the Clerk dashboard, copy the issuer and pass it along to convex/auth.config.ts and your convex dashboard in Settings --> Environment Variables. 

There is a test on page.tsx with useConvexAuth to validate if it's working.