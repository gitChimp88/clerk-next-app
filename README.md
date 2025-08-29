# Clerk auth protected dashboard example

This is a small project to demonstrate how to use Clerk to sign in to a protected dashboard.

## Getting Started

First, run

```bash
npm install
```

Create an `env.local` file and paste in the following environment variables with your credentials

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<YOUR PUBLIC KEY>
CLERK_SECRET_KEY=<YOUR SECRET KEY>
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Code explanation

In the **layout.tsx** component the app is being wrapped by the `<ClerkProvider/>` component, providing Clerk functionality. The sign-in button is in **page.tsx** which provides the functionality to log in. The protected dashboard can be found under **src/app/dashboard** which uses the `<UserButton/>` to provide sign out functionality and displays user info obtained from `currentUser()`.
