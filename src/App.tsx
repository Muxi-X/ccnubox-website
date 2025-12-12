import ScrollSnapContainer from './components/ScrollSnapContainer'
import FooterSection from './sections/FooterSection'
import GradesSection from './sections/GradesSection'
import HeroSection from './sections/HeroSection'
import LibrarySection from './sections/LibrarySection'
import ScheduleSection from './sections/ScheduleSection'

function App() {
  return (
    <ScrollSnapContainer>
      <HeroSection />
      <ScheduleSection />
      <GradesSection />
      <LibrarySection />
      <FooterSection />
    </ScrollSnapContainer>
  )
}

export default App
