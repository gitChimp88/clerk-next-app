# Clerk auth protected dashboard example

This is a small project to demonstrate how to use Clerk to sign in to a protected dashboard.

## Getting Started

First, run

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Code explanation

In the **layout.tsx** component the app is being wrapped by the `<ClerkProvider/>` component, providing Clerk functionality. The sign in and sign out buttons are in **page.tsx** which provides the functionality to log in and then displays the button to go to the dashbaord. The protected dashboard can be found under **src/app/dashboard** which uses the `<UserButton/>` to provide sign out functionality and displays user info obtained from `currentUser()`.
