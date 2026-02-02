import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import DashboardPage from './pages/DashboardPage'
import EditorPage from './pages/EditorPage'
import ProtectedRoute from './components/shared/ProtectedRoute'
import { isAuthenticated } from './services/authService'

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        isAuthenticated() ? <Navigate to="/dashboard" replace /> : <AuthPage />
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/editor"
                    element={
                        <ProtectedRoute>
                            <EditorPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/editor/:id"
                    element={
                        <ProtectedRoute>
                            <EditorPage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    )
}

export default App
