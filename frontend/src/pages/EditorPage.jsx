import EditorHeader from '../components/editor/EditorHeader'
import EditorCanvas from '../components/editor/EditorCanvas'
import MetadataSidebar from '../components/editor/MetadataSidebar'

const EditorPage = () => {
    return (
        <div className="flex flex-col h-screen w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-hidden transition-colors duration-200">
            <EditorHeader />

            <div className="flex flex-1 overflow-hidden">
                <EditorCanvas />
                <MetadataSidebar />
            </div>
        </div>
    )
}

export default EditorPage
