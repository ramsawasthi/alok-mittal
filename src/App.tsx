import { ClosingSection } from './components/ClosingSection'
import { Hero } from './components/Hero'
import { ImpactCards } from './components/ImpactCards'
import { JobsAheadMemory } from './components/JobsAheadMemory'
import { PersonalMessage } from './components/PersonalMessage'
import { SectionJourney } from './components/SectionJourney'
import { TimelineSection } from './components/TimelineSection'

export default function App() {
  return (
    <main className="min-h-svh bg-void pb-[calc(7.5rem+env(safe-area-inset-bottom))] text-mist antialiased sm:pb-36">
      <Hero />
      <JobsAheadMemory />
      <TimelineSection />
      <ImpactCards />
      <PersonalMessage />
      <ClosingSection />
      <SectionJourney />
    </main>
  )
}
