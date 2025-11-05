<<<<<<< HEAD

=======
# ToyTopia – Local Kids Toy Store Platform

![ToyTopia](public/logo192.png)

ToyTopia is a React & Firebase powered web application that allows users to browse, view, and request toys from local stores. The platform includes authentication, protected routes, and a responsive design built with **TailwindCSS** and **DaisyUI**.

---

## 📌 Features

- **React Frontend**
  - React 18 with functional components and hooks
  - React Router v6 for page routing
  - React-Toastify for notifications

- **Firebase Integration**
  - Authentication (Email/Password & Google OAuth)
  - Persistent login across page reloads
  - Profile update (name & photo)
  
- **Protected Routes**
  - `/toy/:id` and `/profile` pages are protected
  - Redirects to login if user is not authenticated

- **UI/UX**
  - Responsive layout (mobile, tablet, desktop)
  - DaisyUI + TailwindCSS theme (“ToyTopia” custom colors)
  - Swiper slider for home page hero carousel
  - Interactive toy cards with view details button

- **Pages**
  - Home – displays hero slider and popular toys
  - Toy Details – toy description, price, rating, quantity, request form
  - Login & Register – Firebase auth with form validation
  - My Profile – update name and photo
  - NotFound – 404 page for invalid URLs

- **Extras / Challenges Implemented**
  - Dynamic page titles using React Helmet (optional)
  - Forgot Password functionality
  - Toast notifications for actions (login, logout, registration, form submission)

---

## 🛠 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/toy-topia.git
cd toy-topia
>>>>>>> 1ce0ff8 (third commit)
