# Course Registration Form (Next.js)

A course application form with an admin view, built with Next.js 15 (App Router), React, TypeScript and Tailwind CSS.

## Pages

- `/` and `/form`: application form (name, email, course) with HTML validation
- `/admin`: table of all submitted applications

## How it works

- The form is a controlled React component (`useState`); on submit, the application is appended to a list in the browser's `localStorage`
- The admin page reads that list in `useEffect` and renders it as a table, typed with a TypeScript `Application` interface

## Run

```
npm install
npm run dev
```

Open http://localhost:3000.

## Next steps

- Store applications in a database behind an API route instead of `localStorage`
- Protect `/admin` with a login
