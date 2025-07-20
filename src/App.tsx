import FooterSection from './sections/FooterSection'
import GradesSection from './sections/GradesSection'
import HeroSection from './sections/HeroSection'
import LibrarySection from './sections/LibrarySection'
import ScheduleSection from './sections/ScheduleSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ScheduleSection />
      <GradesSection />
      <LibrarySection />
      <FooterSection />
    </div>
  )
}

export default App
