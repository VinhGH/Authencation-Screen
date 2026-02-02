import * as noteService from '../services/noteService.js';

// @desc    Create new note
// @route   POST /api/notes
// @access  Private
const createNote = async (req, res) => {
    try {
        const { title, content, tag } = req.body;
        const userId = req.user._id;

        const note = await noteService.createNote({ title, content, tag }, userId);

        res.status(201).json({
            success: true,
            data: note
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Get all notes for logged in user
// @route   GET /api/notes
// @access  Private
const getAllNotes = async (req, res) => {
    try {
        const userId = req.user._id;
        const { tag } = req.query;

        const filters = tag ? { tag } : {};
        const notes = await noteService.getNotesByUser(userId, filters);

        res.status(200).json({
            success: true,
            count: notes.length,
            data: notes
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Get single note
// @route   GET /api/notes/:id
// @access  Private
const getNoteById = async (req, res) => {
    try {
        const noteId = req.params.id;
        const userId = req.user._id;

        const note = await noteService.getNoteById(noteId, userId);

        res.status(200).json({
            success: true,
            data: note
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Update note
// @route   PUT /api/notes/:id
// @access  Private
const updateNote = async (req, res) => {
    try {
        const noteId = req.params.id;
        const userId = req.user._id;
        const updateData = req.body;

        const note = await noteService.updateNote(noteId, userId, updateData);

        res.status(200).json({
            success: true,
            data: note
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Delete note
// @route   DELETE /api/notes/:id
// @access  Private
const deleteNote = async (req, res) => {
    try {
        const noteId = req.params.id;
        const userId = req.user._id;

        const result = await noteService.deleteNote(noteId, userId);

        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Get notes statistics
// @route   GET /api/notes/stats
// @access  Private
const getNotesStats = async (req, res) => {
    try {
        const userId = req.user._id;

        const stats = await noteService.getNotesStats(userId);

        res.status(200).json({
            success: true,
            data: stats
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
    getNotesStats
};
