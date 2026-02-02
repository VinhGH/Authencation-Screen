import express from 'express';
import {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
    getNotesStats
} from '../controllers/noteController.js';
import { protect } from '../middleware/authMiddleware.js';
import { noteValidation } from '../middleware/validationMiddleware.js';

const router = express.Router();

// All note routes are protected
router.use(protect);

// Note CRUD routes
router.route('/')
    .get(getAllNotes)
    .post(noteValidation, createNote);

router.get('/stats', getNotesStats);

router.route('/:id')
    .get(getNoteById)
    .put(updateNote)
    .delete(deleteNote);

export default router;
