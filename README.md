# 🏥 Hospital Management System

Hospital Management System is a full-stack web application built using the MERN stack that simplifies and digitizes hospital operations. It allows efficient management of patients, doctors, departments, and appointments through a secure and scalable system.

The application provides role-based access for Admin, Doctor, Staff, and Patient, ensuring proper control and workflow across the system. It is designed with a modern UI and production-ready backend architecture.

---


---

## 🚀 Features

- **Authentication & Authorization**
  - Secure login and signup using Clerk  
  - Session management handled by Clerk  
  - Role-based access control (Admin / Doctor / Staff / Patient)  

- **Patient Management**
  - Add, update, and manage patient records  
  - Store medical history and personal details  

- **Doctor & Department Management**
  - Manage doctor profiles and availability  
  - Organize departments for better structure  

- **Appointment System**
  - Book, reschedule, and cancel appointments  
  - Track appointment status (Scheduled / Completed / Cancelled)  

- **Payments Integration**
  - Secure payments using Razorpay  
  - Pay for appointments/services online  
  - Real-time payment verification  

- **Dashboard**
  - Role-specific dashboards with relevant data  
  - Real-time updates and overview  

- **System Features**
  - RESTful API architecture  
  - Secure backend with middleware  
  - Responsive UI using Tailwind CSS  

---

## 📊 ER Diagram

```
User
 ├── Doctor (1:1)
 ├── Patient (1:1)

Doctor ─── belongs to ─── Department

Patient ─── books ─── Appointment ─── assigned to ─── Doctor
                         │
                         ▼
                     Payment
```

---

## 🏗 System Design

### High-Level Architecture

```
Frontend (React + Vite + Tailwind)
                │
                ▼
        Backend (Node.js + Express)
                │
        ┌──────────────┬──────────────┐
        ▼              ▼              ▼
    MongoDB       Clerk Auth      Razorpay
   (Database)     (Authentication) (Payments)
```

---

### 🔄 Request Flow

1. User sends request from frontend  
2. Clerk handles authentication & session  
3. Express server receives API call  
4. Middleware verifies user role  
5. Controller processes business logic  
6. MongoDB performs database operations  
7. Razorpay handles payments (if applicable)  
8. Response returned to frontend  

---

### ⚙️ Backend Architecture

```
Routes → Controllers → Services → Models → Database
           │
           ▼
      Middleware (Auth, Validation, Errors)
```

---

## 📁 Project Structure

### Backend (`backend`)

- `config/` → Database configuration  
- `controllers/` → Business logic (users, doctors, patients, payments)  
- `middleware/` → Authentication & error handling  
- `models/` → Mongoose schemas (User, Doctor, Patient, Appointment, Department, Payment)  
- `routes/` → API endpoints (including payment routes)  
- `utils/` → Helper functions  
- `server.js` → Entry point  

---

### Frontend (`frontend`)

- `src/`
  - `assets/` → Images and static files  
  - `components/` → Reusable UI components  
  - `pages/` → Application pages  
  - `context/` → Global state management  
  - `App.jsx`, `main.jsx` → Entry files  
- `public/`  
- `vite.config.js`  

---

## ⚙️ Getting Started

### Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret
```

Run server:

```bash
npm start
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Create `.env` (if using Clerk):

```env
VITE_CLERK_PUBLISHABLE_KEY=your_key
```

---

## 🔐 Authentication (Clerk)

This project uses **Clerk** for handling authentication and user management.

- Secure login and signup  
- Session-based authentication  
- OAuth support (Google, etc.)  
- Easy route protection  

### 🔄 Auth Flow

```
User → Clerk Sign In → Session Created → Access Protected Routes
```

---

## 💳 Payments Integration (Razorpay)

This project integrates **Razorpay** for secure payment handling.

- Users can pay for appointments/services  
- Backend verifies payment signature  
- Updates appointment/payment status  

### 🔄 Payment Flow

```
User → Book Appointment → Create Order → Razorpay Checkout  
     → Payment Success → Verify Payment → Update Database
```

---

## 🛠 Technologies Used

- **Frontend**: React.js, Vite, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB, Mongoose  
- **Authentication**: Clerk  
- **Payments**: Razorpay  

---

## 🔐 Security Features

- Clerk-based authentication  
- Protected API routes  
- Role-based authorization  
- Secure payment verification (Razorpay)  
- Input validation and error handling  

---

## 🚀 Deployment

- **Frontend**: Render 
- **Backend**: Render  
- **Database**: MongoDB Atlas  

---


---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📜 License

This project is licensed under the MIT License.

---

## 📌 Summary

The Hospital Management System digitizes hospital workflows with a modern MERN architecture. With Clerk authentication and Razorpay payments integration, it represents a real-world scalable SaaS application suitable for production environments.