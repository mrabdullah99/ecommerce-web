# Ecommerce Web Application

A full-stack ecommerce platform built with **React, Node.js, Express, and MongoDB**. The application features user authentication, product management, shopping cart, Stripe payment integration, an AI-powered chatbot, and an admin panel.

## Features

- **User Authentication**: Register, login, and role-based access (user/admin)
- **Product Management**: View, add, edit, and delete products (admin only)
- **Shopping Cart**: Add or remove items, with cart persisted in the database
- **Order Management**: Place orders, view order history, and track order status
- **Payment Integration**: Secure payments using **Stripe**
- **AI Chatbot**: Product recommendations and queries using **Google Gemini AI**
- **Responsive Design**: Mobile-friendly UI using **Tailwind CSS**
- **Admin Panel**: Manage products and orders

## Tech Stack

### Backend

- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- Stripe for payments
- Cloudinary for image uploads
- Google Gemini AI for chatbot

### Frontend

- React with Vite
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling
- Framer Motion for animations
- Axios for API calls

## Installation

### Prerequisites

- Node.js v16 or higher
- MongoDB (local or cloud, e.g., MongoDB Atlas)
- Stripe account for payments
- Cloudinary account for image storage
- Google AI API key for chatbot

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with the required environment variables.

4. Start the backend server:

```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with the required environment variables.

4. Start the frontend development server:

```bash
npm run dev
```

## Usage

1. Open your browser at http://localhost:5173
2. Register a new account or login
3. Browse products, add items to the cart, and checkout
4. For admin features, register/login as an admin or update the user role directly in the database

## API Endpoints

### Authentication

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login user

### Products

- `GET /api/products` — Get all products
- `POST /api/products` — Create a product (admin only)
- `PUT /api/products/:id` — Update a product (admin only)
- `DELETE /api/products/:id` — Delete a product (admin only)

### Cart

- `GET /api/cart` — Get user cart
- `POST /api/cart` — Add item to cart
- `PUT /api/cart` — Update cart item
- `DELETE /api/cart/:id` — Remove item from cart

### Orders

- `POST /api/orders` — Create order
- `GET /api/orders` — Get user orders
- `GET /api/orders/:id` — Get order details
- `PUT /api/orders/:id` — Update order status (admin only)

### Stripe

- `POST /api/stripe/create-checkout-session` — Create Stripe checkout session

### Chatbot

- `POST /api/chatbot/chat` — Chat with AI assistant

## Project Structure

```
ecommerce-app/
│
├── backend/          # Node.js + Express API
├── frontend/         # React + Vite frontend
├── .env              # Environment variables
└── README.md         # Project documentation
```

## Acknowledgements

This project was built as a full-stack ecommerce application using modern web technologies.  
Special thanks to all the tools and libraries that made development easier, including **React**, **Node.js**, **Express**, **MongoDB**, **Tailwind CSS**, **Stripe**, and **Google Gemini AI**.  

## Contact

For any questions or feedback about this project, you can open an issue on this repository or reach out via the repository’s discussion section.

