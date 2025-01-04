# Rapid Crust

Rapid crust is online pizza shop which serves from variety of cuisine with real time delivery tracking whereas user are allowed to list there respective order on priority for better accessibility  

---

## Table of Contents  
- [Installation](#installation)  
- [Technologies Used](#technologies-used)  
- [Features](#features)  
- [Folder Structure](#folder-structure)  

---

## Installation  

Follow these steps to set up the project locally:  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/Niraj21611/rapid-crust.git
   cd rapid-crust
   ```  

2. **Install dependencies**:  
   ```bash  
   npm install  
   ```  

3. **Start the development server**:  
   ```bash  
   npm run dev  
   ```  

4. **View the project in your browser**:  
    ```bash
   Open `http://localhost:5173` in your preferred browser.  
    ```

---

## Technologies Used  
- **ReactJS**: For building the user interface.  
- **Tailwind css**: For styling and responsiveness.  
- **HTML**: This is used to structure the application.  
- **Vite**: This is for the fast development and build process.  

---

## Features  
- Enabled use current location hook for retrieving current location
- Added priority feature for better accessibility
- Used redux toolkit for advanced state management

---

## Folder Structure  
```plaintext  
src/  
├── features/       # Reusable React components
├── services/       # Fetching menu and location services  
├── ui/             # UI components
├── utils/          # Helper functions 
├── App.jsx         # Main application file  
├── main.jsx        # Entry point for the React app  
├── store.js        # redux toolkit global store  
└── ...             # Other necessary files  
```  
---
