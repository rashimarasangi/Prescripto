# Prescripto

A full-stack healthcare appointment & prescription management system designed to streamline interaction between administrators, doctors and patients.

## 🩺 Overview  
Prescripto provides a platform where:  
- Patients can register/login, browse doctors, book/cancel/reschedule appointments, update their profile  
- Doctors can view/manage their appointments, edit their profile, track earnings or availability  
- Administrators can manage doctors, patients, appointments and view analytics or system overview  

## 🔧 Features  
- Multi-role authentication: Admin / Doctor / Patient  
- Role-based access control  
- Book, cancel, reschedule appointments  
- Doctor profile management  
- Patient profile management  
- Admin dashboard to oversee all users & appointments  
- Responsive UI and smooth user experience  
- RESTful API for backend operations  

## 🧰 Tech Stack  
### Frontend  
- React.js  
- React Router DOM (routing)  
- Axios (HTTP requests)  
- Tailwind CSS (styling)  
- React-Toastify (notifications)  
- TanStack Query (data fetching & caching)  

### Backend  
- Node.js + Express.js  
- MongoDB (database)  
- Mongoose (ODM)  
- Bcrypt (password hashing)  
- JWT (JSON Web Tokens for authentication)  
- CORS (cross-origin resource sharing)  

## 🚀 Getting Started  
### Prerequisites  
- Node.js and npm installed  
- MongoDB instance (local or cloud)  
- (Optional) [Docker] or other environment setup  

### Installation  
1. Clone the repository:  
   ```bash
cd backend  
npm install  
cd ../frontend  
npm install  

# backend/.env  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret_key  
PORT=5000  

# frontend/.env  
REACT_APP_API_URL=http://localhost:5000/api  

# In backend directory  
npm run dev  

# In frontend directory  
npm start  

   git clone https://github.com/rashimarasangi/Prescripto.git  
   cd Prescripto  
