# Urban Kicks Admin Dashboard

## Overview

Urban Kicks Admin Dashboard is a React-based Single Page Application (SPA) built for managing products in an e-commerce sneaker store. The application demonstrates modern React development practices including client-side routing, CRUD operations, state management with hooks, reusable components, testing, and responsive design.

---

## Features

- Responsive e-commerce admin dashboard
- Client-side routing using React Router
- Dynamic product search functionality
- Add new products
- Edit existing products
- Delete products
- Fetch product data from a simulated backend
- Reusable React components
- Custom React hooks
- Unit testing with Vitest and React Testing Library
- Responsive modern UI

---

## Technologies Used

- React
- Vite
- React Router DOM
- JSON Server
- Vitest
- React Testing Library
- CSS3

---

## Project Structure

```txt
src/
│
├── components/
├── pages/
├── hooks/
├── tests/
├── styles/
│
├── App.jsx
├── main.jsx
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/linetnmaina/react-ecommerce-admin-dashboard.git
```

### 2. Navigate into the Project Folder

```bash
cd react-ecommerce-admin-dashboard
```

### 3. Install Dependencies

```bash
npm install
```

---

## Running the Application

### Start the React Development Server

```bash
npm run dev
```

The frontend runs on:

```txt
https://linetmaina.github.io/react-ecommerce-admin-dashboard/
```

---

## Running the Backend Server

This project uses JSON Server as a simulated backend.

Run:

```bash
npm run server
```

Backend API:

```txt
https://urbankicks-json-server.onrender.com/products
```

---

## Running Tests

Run the testing suite using:

```bash
npm test
```

---

## CRUD Functionality

The application supports full CRUD operations:

| Operation | Description |
|---|---|
| GET | Fetch products |
| POST | Add products |
| PATCH | Edit products |
| DELETE | Remove products |

---

## Hooks Used

### Standard Hooks

- useState
- useEffect

### Custom Hook

- useProducts()

---

## Testing

The project includes tests for:

- ProductCard component
- ProductForm component
- Application navigation

---

## Known Limitations

- Backend is deployed using JSON Server on Render free tier.
- Initial loading may take a few seconds if the Render server is inactive.
- No authentication system implemented.
- Product images rely on external URLs.

---

## Future Improvements

- User authentication
- Dark mode toggle
- Product categories filtering

---

## Author

Developed by Linet Maina