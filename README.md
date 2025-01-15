# LibraryLane

**LibraryLane** is a modern e-book store designed as a full-stack project using the MERN (MongoDB, Express, React, Node.js) stack. This project demonstrates advanced concepts in web development, including dynamic data fetching, user authentication, API integration, and responsive design.

---

## Features

### 1. Home Section

- **Free Book Slider:**
  - Displays a collection of free books dynamically fetched from the database via API.
  - Each book in the slider can be viewed in detail using its unique ID.

### Free Book Section

- **Free Book Content:**
  - Displays detailed content of free books.
  - Content is dynamically fetched from the database using the book's unique ID.
  - Provides users with in-depth information and previews of free books.

### 2. Paid Books Section

- **Your Books:**
  - Lists paid books with product filters for easy navigation.
  - Books are dynamically fetched from the database via API.
  - **Access Control:**
    - If a user is not logged in, accessing paid books redirects to the login page with a toast message: *"Please login to view paid books."*
    - Authenticated users can view paid book details using the unique ID, with data fetched securely via API.

### Paid Book Section

- **Paid Book Content:**
  - Displays detailed content of paid books.
  - Content is dynamically fetched from the database using the book's unique ID.
  - **Access Control:**
    - Requires user authentication to access detailed content.
    - Redirects unauthenticated users to the login page with appropriate messaging.

### 3. User Authentication

- **Signup and Login Forms:**
  - Includes client-side validation.
  - User passwords are securely hashed using **bcrypt**.
  - Authentication tokens are generated using **JWT**.
  - Cookie-based session management ensures secure and persistent user sessions.
- **Global Authentication API:**
  - Verifies user identity and manages access to protected routes using middleware.

### 4. Dynamic Contact Form

- Fully functional contact form with real-time data handling and validation.

---

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt, cookie-based session management
- **State Management:** React Context API and Redux (optional integration)

---

## Setup and Installation

### Prerequisites

- Node.js (v14+)
- MongoDB (local or cloud-based instance)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Shuvam-2000/LibaryLane.git
   cd Client
   cd LibraryLane
   ```

2. Install dependencies:

   ```bash
   # For backend
   cd Server
   npm install

   # For frontend
   cd ../Client
   npm install
   ```

3. Configure Environment Variables:

   - Create a `.env` file in the backend directory.
   - Add the following variables:
     ```env
     JWT_SECRET=your_jwt_secret
     PORT=8000
     CLIENT_URL=http://localhost:5173
     MONGO_URL=your_mongo_connection_string
     ```

4. Start the development server:

   ```bash
   # Backend
   cd Server
   npm start

   # Frontend
   cd ../Client
   cd LibaryLane
   npm run dev
   ```

5. Open the application:

   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend: [http://localhost:8000](http://localhost:8000)

---

## Future Enhancements

1. **Payment Integration:**
   - Add payment gateways for purchasing books.
2. **Enhanced Filtering:**
   - Improve product filters for better user experience.


