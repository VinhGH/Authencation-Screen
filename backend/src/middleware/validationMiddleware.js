import { body, validationResult } from 'express-validator';

// Validation middleware - returns a middleware function
const validate = () => {
    return (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }
        next();
    };
};

// User registration validation rules
const registerValidation = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email')
        .normalizeEmail(),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    validate()
];

// User login validation rules
const loginValidation = [
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email')
        .normalizeEmail(),
    body('password')
        .notEmpty().withMessage('Password is required'),
    validate()
];

// Note validation rules
const noteValidation = [
    body('title')
        .trim()
        .notEmpty().withMessage('Title is required')
        .isLength({ max: 200 }).withMessage('Title cannot exceed 200 characters'),
    body('content')
        .trim()
        .notEmpty().withMessage('Content is required'),
    body('tag')
        .optional()
        .isIn(['WORK', 'PERSONAL', 'TRAVEL', 'SENSITIVE']).withMessage('Invalid tag'),
    validate()
];

export {
    registerValidation,
    loginValidation,
    noteValidation
};
