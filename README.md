## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


### Quick Explore
- `/app`: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
- `/app/lib`: Contains functions used in your application, such as reusable utility functions and data fetching functions.
    - `app/lib/placeholder-data.js`: Contains placeholder data.
    - `/app/lib/definitions.ts`: Contains type definitions.
- `/app/ui`: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
- `/public`: Contains all the static assets for your application, such as images.
- `/scripts`: Contains a seeding script that you'll use to populate your database in a later chapter.
- **Config Files**: You'll also notice config files such as next.config.js at the root of your application. Most of these files are created and pre-configured when you start a new project using create-next-app. You will not need to modify them in this course.

### Running the Development Server
Note: A postgres database is required for the application to store its data.  Due to complexities with using the `@vercel/postgres` package against a local database instance (see [1](https://github.com/vercel/storage/issues/123), [2](https://gal.hagever.com/posts/running-vercel-postgres-locally)), the best option is to use one hosted on Vercel.  See [Vercel Deployment](#Vercel-Deployment).
- Use node version: `nvm use`
- Install: `npm i`
- Run: `npm run dev`

### Build and Deploy (locally)
- Create build: `npm run build`
- Run: `npm run start`

### Vercel Deployment
- Follow [setting-up-your-database](https://nextjs.org/learn/dashboard-app/setting-up-your-database)
- Create AUTH_SECRET environment variable: `openssl rand -base64 32`
