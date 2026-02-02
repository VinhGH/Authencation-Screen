import Note from '../models/noteModel.js';

// Create new note
const createNote = async (noteData, userId) => {
    const { title, content, tag } = noteData;

    const note = await Note.create({
        title,
        content,
        tag: tag || 'PERSONAL',
        userId
    });

    return note;
};

// Get all notes for a user
const getNotesByUser = async (userId, filters = {}) => {
    const query = { userId };

    // Add tag filter if provided
    if (filters.tag) {
        query.tag = filters.tag;
    }

    const notes = await Note.find(query)
        .sort({ createdAt: -1 })
        .lean();

    return notes;
};

// Get single note by ID
const getNoteById = async (noteId, userId) => {
    const note = await Note.findOne({ _id: noteId, userId });

    if (!note) {
        throw new Error('Note not found');
    }

    return note;
};

// Update note
const updateNote = async (noteId, userId, updateData) => {
    const note = await Note.findOne({ _id: noteId, userId });

    if (!note) {
        throw new Error('Note not found');
    }

    // Update fields
    if (updateData.title !== undefined) note.title = updateData.title;
    if (updateData.content !== undefined) note.content = updateData.content;
    if (updateData.tag !== undefined) note.tag = updateData.tag;

    await note.save();

    return note;
};

// Delete note
const deleteNote = async (noteId, userId) => {
    const note = await Note.findOne({ _id: noteId, userId });

    if (!note) {
        throw new Error('Note not found');
    }

    await note.deleteOne();

    return { message: 'Note deleted successfully' };
};

// Get notes statistics
const getNotesStats = async (userId) => {
    const totalNotes = await Note.countDocuments({ userId });

    const notesByTag = await Note.aggregate([
        { $match: { userId } },
        { $group: { _id: '$tag', count: { $sum: 1 } } }
    ]);

    return {
        totalNotes,
        notesByTag
    };
};

export {
    createNote,
    getNotesByUser,
    getNoteById,
    updateNote,
    deleteNote,
    getNotesStats
};
