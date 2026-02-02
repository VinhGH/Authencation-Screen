import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    tag: {
        type: String,
        enum: ['WORK', 'PERSONAL', 'TRAVEL', 'SENSITIVE'],
        default: 'PERSONAL'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

// Index for faster queries
noteSchema.index({ userId: 1, createdAt: -1 });

const Note = mongoose.model('Note', noteSchema);

export default Note;
