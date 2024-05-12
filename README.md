# Full-stack Test Task 

This project implements a user authentication module for a web application, allowing users to sign up and sign in. It consists of both front-end and back-end components.

[Live Demo](https://pages.github.com/)

## Features

- Monorepo architecture using Turborepo
- User sign up with email, name, and password
- User sign in with email and password
- JWT authentication implementation on both front-end and back-end
- React front-end with different form submission methods for sign up and sign in
- NestJS back-end with MongoDB integration using Mongoose

## Front-end Development

The client-side of the application is built using React, with separate form submission methods for sign up and sign in to demonstrate different approaches:

- **Sign In**: Implemented using `useForm` with `react-hook-form` and `zod` for validation which is the modern and recommended way.
- **Sign Up**: Implemented using `useState` and manual handling.

## Back-end Development

The server-side of the application is built using NestJS, a framework for building efficient, reliable, and scalable server-side applications.

- **Endpoints**:
  - `POST "/api/auth/login"`: Endpoint for user sign in.
  - `POST "/api/auth/register"`: Endpoint for user sign up.
  - `GET "/api/users"`: Endpoint to retrieve user information.

## Installation

1. Clone the repository: `git clone https://github.com/6ichem/easygenerator-auth.git`
2. Install dependencies: `npm install`
3. Set up environment variables (`DATABASE_URL`, `PORT (optional)` and `JWT_SECRET`) in root directory
4. Start the server: `npm run start`
5. Access the application at `http://localhost:3000`

## Requirements

- Node.js
- MongoDB

## Nice-to-Haves

- TypeScript ✅
- Logging on the back end ✅
- Security best practices ✅
