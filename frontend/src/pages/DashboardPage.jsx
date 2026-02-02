import Sidebar from '../components/dashboard/Sidebar'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import WelcomeBanner from '../components/dashboard/WelcomeBanner'
import NoteGrid from '../components/dashboard/NoteGrid'

const DashboardPage = () => {
    // Sample notes data
    const notes = [
        {
            title: 'Project Alpha Ideas',
            content: `Need to focus on the encryption protocol first. Meeting with the dev team is set for Tuesday. 
Key points to discuss:
1. Zero-knowledge architecture
2. Key rotation policies
3. User recovery flows...`,
            tag: 'WORK',
            time: '2h ago'
        },
        {
            title: 'Grocery List',
            content: `- Milk (Oat)
- Eggs (Free range)
- Spinach
- Avocados
- Whole grain bread
- Coffee beans (Dark roast)`,
            tag: 'PERSONAL',
            time: '5h ago'
        },
        {
            title: 'Quarterly Review',
            content: `Q3 performance was strong. User acquisition up by 15%. 
Areas for improvement:
- Onboarding friction
- Mobile app load times
- Customer support response time...`,
            tag: 'WORK',
            time: 'Yesterday'
        },
        {
            title: 'Travel Plans: Japan',
            content: `Flight booked for Oct 15th. 
Itinerary:
- Tokyo (3 days) - Stay in Shinjuku
- Kyoto (4 days) - Visit Fushimi Inari
- Osaka (2 days) - Food tour in Dotonbori...`,
            tag: 'TRAVEL',
            time: '2 days ago'
        },
        {
            title: 'Passwords (Legacy)',
            content: `WiFi: SuperSecureNetwork123
Router Admin: admin/admin123 (Change this!)
Old Email: password1234
*Note: Migrated most of these to the password manager already.`,
            tag: 'SENSITIVE',
            time: '1 week ago'
        },
        {
            title: 'Book Recommendations',
            content: `- "Clean Code" by Robert C. Martin
- "The Pragmatic Programmer"
- "Dune" (Re-read)
- "Project Hail Mary"
Check local library first.`,
            tag: 'PERSONAL',
            time: '2 weeks ago'
        }
    ]

    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white overflow-hidden">
            <Sidebar />

            <main className="flex flex-1 flex-col overflow-hidden bg-background-light dark:bg-background-dark relative">
                <DashboardHeader />

                <div className="flex-1 overflow-y-auto px-6 py-4">
                    <WelcomeBanner />
                    <NoteGrid notes={notes} />
                </div>
            </main>
        </div>
    )
}

export default DashboardPage
