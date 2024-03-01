# Convex-with-Clerk-Template

This is a quickstart template for a nextjs app using convex as a database and clerk for authentication.

On installing convex, it will create a folder with the generated files and environment variables for the project.
The keys for clerk need to be grabbed from the dashboard. To get convex and clerk on the same page, you need to create a JWT token from inside clerk dashboard and pass it along to convex/auth.config.ts and your convex dashboard. 