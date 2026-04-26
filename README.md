# Pressroom Resume Builder 🚀

A modern, full-stack Resume Builder application designed to help users create professional, ATS-friendly resumes effortlessly. The application features a dynamic React-based frontend for a seamless user experience and a robust Spring Boot backend for data management and high-quality PDF generation.

## 🌟 Features
- **Interactive UI:** Real-time resume preview as you type, built with React and Tailwind CSS.
- **Multiple Templates:** Choose from different professional templates (e.g., Classic, Architect).
- **PDF Export:** High-quality PDF generation using OpenHTMLToPDF.
- **Form Validation:** Robust client-side validation using React Hook Form.
- **Data Persistence:** Securely save and manage resume data using MongoDB.
- **Responsive Design:** Works smoothly on desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

### Frontend (`/frontend`)
- **Framework:** React 19
- **Styling:** Tailwind CSS, Radix UI Primitives, clsx, tailwind-merge
- **Routing:** React Router v7
- **Forms & State:** React Hook Form, @hookform/resolvers
- **HTTP Client:** Axios
- **Build Tool:** CRACO (Create React App Configuration Override)

### Backend (`/backend-java`)
- **Framework:** Spring Boot 3.2.5 (Java 17)
- **Database:** MongoDB (Spring Data MongoDB)
- **PDF Generation:** OpenHTMLToPDF, Thymeleaf, JSoup
- **Build Tool:** Maven

*(Note: The repository also contains a `/backend` directory for Python-based scripts/microservices)*

## 📂 Project Structure

```text
📦 pressroom-resume-builder
 ┣ 📂 frontend        # React.js frontend application
 ┣ 📂 backend-java    # Spring Boot Java backend
 ┣ 📂 backend         # Python scripts/services
 ┣ 📜 .gitignore      # Git ignore rules
 ┗ 📜 README.md       # Project documentation
```

## 📋 Prerequisites
Ensure you have the following installed on your local machine:
- **Node.js** (v16 or higher) & **npm** / **yarn**
- **Java Development Kit (JDK) 17**
- **Maven**
- **MongoDB** (Running locally or via MongoDB Atlas)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd pressroom-resume-builder
```

### 2. Backend Setup (Spring Boot)
1. Navigate to the Java backend directory:
   ```bash
   cd backend-java
   ```
2. Update your `application.properties` or `application.yml` with your MongoDB connection string if necessary.
3. Build and run the application:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
   *Alternatively, you can run the provided `run.ps1` script if you are on Windows.*
   The backend API will start running on `http://localhost:8080`.

### 3. Frontend Setup (React)
1. Open a new terminal instance and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install all dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   The frontend will start running on `http://localhost:3000`.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! 
Feel free to check the issues page if you want to contribute.

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).
