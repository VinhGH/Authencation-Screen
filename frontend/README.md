# Private Notes - React Application

A modern, secure note-taking application built with React, Vite, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── shared/          # Reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Logo.jsx
│   │   ├── auth/            # Authentication components
│   │   │   ├── AuthBranding.jsx
│   │   │   ├── AuthForm.jsx
│   │   │   ├── AuthToggle.jsx
│   │   │   ├── PasswordInput.jsx
│   │   │   └── SocialAuthButtons.jsx
│   │   ├── dashboard/       # Dashboard components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── DashboardHeader.jsx
│   │   │   ├── WelcomeBanner.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   └── NoteGrid.jsx
│   │   └── editor/          # Editor components
│   │       ├── EditorHeader.jsx
│   │       ├── EditorCanvas.jsx
│   │       └── MetadataSidebar.jsx
│   ├── pages/               # Page components
│   │   ├── AuthPage.jsx
│   │   ├── DashboardPage.jsx
│   │   └── EditorPage.jsx
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Features

- **Authentication Page**: Beautiful split-screen design with sign in/sign up toggle
- **Dashboard**: Grid view of all notes with search and filtering
- **Note Editor**: Distraction-free writing experience with metadata sidebar
- **Dark Mode**: Full dark mode support
- **Responsive Design**: Works on mobile, tablet, and desktop

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Google Fonts** - Inter font family
- **Material Symbols** - Icon library

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Routes

- `/` - Authentication page (Sign In / Sign Up)
- `/dashboard` - Notes dashboard
- `/editor` - Create new note
- `/editor/:id` - Edit existing note

## 🌙 Dark Mode

The application uses the `dark` class on the `<html>` element to toggle dark mode. Dark mode is enabled by default.

## 📦 Dependencies

- react: ^18.3.1
- react-dom: ^18.3.1
- react-router-dom: ^6.22.0
- tailwindcss: ^3.4.17
- vite: ^5.4.11

## 🎨 Custom Theme

The Tailwind configuration includes custom colors:
- Primary: #135bec
- Background Light: #f6f6f8
- Background Dark: #101622
- Surface Dark: #192233
- Border Dark: #232f48
- Text Secondary: #92a4c9

## 📄 License

This project is for educational purposes.
