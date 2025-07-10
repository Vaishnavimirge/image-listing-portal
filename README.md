# Image Listing Portal

**Image Listing Portal** is a web application where users can sign up, log in, and create property listings with details like title, description, price, location, and city. Users can upload images, edit existing listings, and leave reviews and ratings for listed properties.


## ✨ Features

- User Signup, Login, and Logout
- Authentication using hashed and salted passwords
- Create new listings with:
  - Title
  - Description
  - Price
  - City and Location
  - Image Upload
- Edit and Delete Listings
- View All Listings
- Review and Rating System

## 🔧 Technologies Used

* **Node.js** and **Express.js** for the backend server
* **MongoDB** with **Mongoose** for database and object modeling
* **Passport.js** with **passport-local** and **passport-local-mongoose** for authentication
* **express-session** and **connect-mongo** for session management
* **Cloudinary** for image uploads and storage
* **EJS** templating engine with **ejs-mate** for layouts
* **connect-flash** for flash messages
* Custom error handling with Express middleware


## 📌 Notes

- Users must be logged in to create, edit, or delete listings.
- Images are uploaded and stored using a cloud storage service.
- Reviews and ratings can only be submitted by authenticated users.




