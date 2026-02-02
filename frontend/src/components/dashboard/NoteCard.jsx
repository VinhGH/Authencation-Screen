import { useNavigate } from 'react-router-dom'

const NoteCard = ({ note }) => {
    const navigate = useNavigate()

    const tagColors = {
        WORK: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
        PERSONAL: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
        TRAVEL: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
        SENSITIVE: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
    }

    return (
        <div
            onClick={() => navigate('/editor/1')}
            className="group relative flex flex-col justify-between rounded-xl bg-white dark:bg-[#1a2436] p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border border-transparent hover:border-primary/20 h-[220px] cursor-pointer"
        >
            <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-[#111418] dark:text-white line-clamp-1">
                        {note.title}
                    </h3>
                    <button className="opacity-0 group-hover:opacity-100 text-[#92a4c9] hover:text-white transition-opacity">
                        <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                    </button>
                </div>
                <p className="text-sm text-[#637588] dark:text-[#92a4c9] line-clamp-4 leading-relaxed">
                    {note.content}
                </p>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#f0f2f4] dark:border-[#2d3b55] pt-3">
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${tagColors[note.tag]}`}>
                    {note.tag}
                </span>
                <span className="text-xs text-[#92a4c9]">{note.time}</span>
            </div>
        </div>
    )
}

export default NoteCard
