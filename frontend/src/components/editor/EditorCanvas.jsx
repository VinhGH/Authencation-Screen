import { useState } from 'react'

const EditorCanvas = () => {
    const [title, setTitle] = useState('Project Phoenix Documentation')
    const [content, setContent] = useState(`The Phoenix Project is designed to be a completely isolated environment for sensitive data handling. 

We need to ensure that the following protocols are met:
1. Data encryption at rest using AES-256.
2. Zero-knowledge architecture for user keys.
3. Automated session timeouts after 15 minutes of inactivity.

Current Status:
- Backend infrastructure is 90% complete.
- UI components are being migrated to the new design system.
- Security audit scheduled for next Tuesday.

Next Steps:
Review the API endpoints for potential leakage points. Ensure that no PII is returned in standard error messages.`)

    return (
        <main className="flex-1 h-full overflow-y-auto relative flex justify-center bg-background-light dark:bg-background-dark">
            <div className="w-full max-w-[800px] px-8 py-10 flex flex-col gap-6">
                {/* Title Input */}
                <div className="flex flex-col w-full">
                    <input
                        className="w-full bg-transparent border-none p-0 text-4xl font-bold text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:ring-0 focus:outline-none"
                        maxLength="100"
                        placeholder="Untitled Note"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Note Content Textarea */}
                <div className="flex-1 flex flex-col min-h-[500px]">
                    <textarea
                        className="w-full flex-1 resize-none bg-transparent border-none p-0 text-lg leading-relaxed text-slate-700 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-600 focus:ring-0 focus:outline-none"
                        placeholder="Start typing your secure note here..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
            </div>
        </main>
    )
}

export default EditorCanvas
