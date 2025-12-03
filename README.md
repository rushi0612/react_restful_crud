# React RESTful CRUD App

A simple and clean **CRUD (Create, Read, Update, Delete)** application built using **React, Axios, and REST API**.  
This project demonstrates how to perform full CRUD operations using a public API.

🔗 **Live Demo:**  
https://reactaxiosapi12.netlify.app/

🔗 **GitHub Repo:**  
https://github.com/rushi0612/react_restful_crud

---

## 📦 Tech Stack

- React (Functional Components + Hooks)
- Axios (HTTP Requests)
- Vite (Build Tool)
- CSS (Custom Styling)
- JSONPlaceholder (Fake REST API)

---

## 🚀 Features

✅ Fetch posts from API (Read)  
✅ Add new post using POST request (Create)  
✅ Edit existing post using PUT request (Update)  
✅ Delete post using DELETE request (Delete)  
✅ Reusable Form Component  
✅ Clean card-based UI  
✅ Real-time UI updates  

---

## 📁 Project Structure

react_restful_crud/
├── public/
├── src/
│ ├── api/
│ │ └── PostApi.jsx # Axios API functions (GET, POST, PUT, DELETE)
│ ├── components/
│ │ ├── Posts.jsx # Display, delete & edit posts
│ │ └── Form.jsx # Add & Update form
│ ├── App.jsx # Main App component
│ └── App.css # Styling
├── .gitignore
├── package.json
└── vite.config.js


---

## 🧰 Installation & Run Locally

```bash
# Clone the repository
git clone https://github.com/rushi0612/react_restful_crud.git

# Go to project folder
cd react_restful_crud

# Install dependencies
npm install

# Start development server
npm run dev
```
⚠️ Important Note (About API)

This project uses JSONPlaceholder, which is a fake REST API:

✅ GET works properly

✅ POST works but does NOT save data on server

✅ PUT works but does NOT update permanently

✅ DELETE works but does NOT delete permanently

🔁 After refreshing the page, all original data returns again.
This is expected behavior.

For real persistent CRUD, use:

MockAPI

Node.js + Express

Laravel API

🔮 Future Improvements

Real backend integration

Toast notifications

Loading & error states

Form validation

Better mobile UI

Authentication (Login/Register)
