# 🤖 AI Chatbot

An AI-powered chatbot application that allows users to interact with an AI model through a simple and user-friendly interface.

## 🚀 Features

* 💬 Real-time AI chat
* 👤 User authentication
* 🗄️ Store chat history
* 🤖 AI-powered responses
* 🔐 Secure API authentication
* ⚡ Fast and efficient backend API

## 🛠️ Tech Stack

### Frontend

* React.js
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* REST API

### Database

* MongoDB
* Mongoose

### AI

* AI API / LLM

### Tools

* Git
* GitHub
* Postman
* dotenv

## 📁 Project Structure

```text
AI-Chatbot/
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Go to the project directory

```bash
cd AI-Chatbot
```

### 3. Install backend dependencies

```bash
cd backend
npm install
```

### 4. Install frontend dependencies

```bash
cd ../frontend
npm install
```

## 🔐 Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
AI_API_KEY=your_ai_api_key
JWT_SECRET=your_jwt_secret
```

> Never commit your `.env` file to GitHub.

## ▶️ Run the Project

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## 🔄 How It Works

```text
User
  ↓
Frontend
  ↓
Backend API
  ↓
Authentication
  ↓
AI Service
  ↓
AI Response
  ↓
Frontend
  ↓
User
```

## 🗄️ Database

The application uses MongoDB to store application data such as:

* Users
* Conversations
* Messages

## 🔮 Future Improvements

* Streaming AI responses
* Voice input and output
* Image generation
* File/PDF chat
* Conversation search
* Multiple AI models
* Chat sharing
* Rate limiting
* Redis caching
* Production deployment

## 👨‍💻 Author

**Deepak Verma**

---

⭐ If you like this project, consider giving it a star!
