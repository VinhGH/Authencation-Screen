import NoteCard from './NoteCard'

const NoteGrid = ({ notes }) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-10">
            {notes.map((note, index) => (
                <NoteCard key={index} note={note} />
            ))}
        </div>
    )
}

export default NoteGrid
