# 📅 Personal Event Planner (Stickify)

A React-based web application that helps users organise and manage personal and professional events such as appointments, meetings, and social gatherings. Users can register, log in, and manage their events through a simple, responsive dashboard.

---

## Features

### User Authentication
- Users can register with:
  - Name
  - Email
  - Username
  - Password
- Input validation ensures:
  - No empty fields
  - Valid email format
- Registered users can log in to access their dashboard

---

### Event Management
- Users can create new events with:
  - Event name
  - Date
  - Time
  - Description
  - Event type / priority
  - Location
- Events are displayed on the dashboard in an organised list according to date and time
- Users can:
  - Edit events
  - Delete events
- Event data updates immediately in the UI using React state

---

### Navigation
- Fixed navigation bar visible on all pages once logged in or registered
- Includes links to:
  - Dashboard
  - Add Event
  - Help

---

### State Management
- Uses React Context API to manage:
  - Logged-in user data
  - Events data across the app
- Ensures data is accessible across components without prop drilling

---

### Help Section
- Explains how to:
  - Register an account
  - Create, edit, and delete events
- Provides tips for managing and organising events effectively

---

### Responsive Design
- Fully responsive for:
  - Desktop
  - Tablet
  - Mobile
- Styled using custom CSS and React-Bootstrap for a clean UI

---

## Tech Stack
- React
- Vite
- JavaScript
- React Router
- Context API
- React-Bootstrap
- CSS

---

## Installation & Setup

1. Clone the repository 

git clone https://github.com/Tahiyya30/Stickify-Project

2. Navigate to your terminal

cd stickify

3. Install dependencies

npm install

4. Run the app in your terminal

npm run dev
