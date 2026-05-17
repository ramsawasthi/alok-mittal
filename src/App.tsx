import { ClosingSection } from './components/ClosingSection'
import { Hero } from './components/Hero'
import { ImpactCards } from './components/ImpactCards'
import { JobsAheadMemory } from './components/JobsAheadMemory'
import { JobsAheadSiteHeader } from './components/JobsAheadSiteHeader'
import { PersonalMessage } from './components/PersonalMessage'
import { SectionJourney } from './components/SectionJourney'
import { TimelineSection } from './components/TimelineSection'

export default function App() {
  return (
    <main className="min-h-svh bg-[#d8e4f2] pb-[calc(7.5rem+env(safe-area-inset-bottom))] font-sans text-gray-800 antialiased sm:pb-36">
      <JobsAheadSiteHeader />
      <div className="mx-auto max-w-6xl space-y-4 px-3 pt-4 sm:space-y-5 sm:px-4 sm:pt-5">
        <Hero />
        <JobsAheadMemory />
        <TimelineSection />
        <ImpactCards />
        <PersonalMessage />
        <ClosingSection />
      </div>
      <SectionJourney />
    </main>
  )
}
