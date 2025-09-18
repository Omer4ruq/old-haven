import { Router, useRouter } from './components/Router.jsx';


// import { Header } from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import { Footer } from './components/Footer.jsx';
import { AssessmentPage } from './pages/AssessmentPage.jsx';
import { MissionVisionPage } from './pages/MissionVisionPage.jsx';
import { OurTargetPage } from './pages/OurTargetPage.jsx';
import Header from './components/Header.jsx';
import { DonateUsPage } from './pages/DonateUsPage.jsx';
import { ContactUsPage } from './pages/ContactUsPage.jsx';
import { RoomDetailsPage } from './pages/RoomDetailsPage.jsx';
import { AdmissionOfTheEldersPage } from './pages/AdmissionOfTheEldersPage.jsx';
import { HospitalFacilitiesPage } from './pages/HospitalFacilitiesPage.jsx';
// import MissionVisionPage from './pages/MissionVisionPage.jsx';

function AppContent() {
  const { currentPage } = useRouter();

  const renderPage = () => {
    switch (currentPage) {
      case 'assessment':
        return <AssessmentPage />;
      case 'mission-vision':
        return <MissionVisionPage />;
      case 'our-target':
        return <OurTargetPage />;
        case 'donate-us':
        return <DonateUsPage />;
      case 'contact-us':
        return <ContactUsPage />;
      case 'room-details':
        return <RoomDetailsPage />;
      case 'admission-elders':
        return <AdmissionOfTheEldersPage />;
      case 'hospital-facilities':
        return <HospitalFacilitiesPage />;
      case 'home':
      default:
        return (
          <div className="min-h-screen bg-white">
            <Header />
            <HomePage />
            <Footer />
          </div>
        );
    }
  };

  // For service pages that already include Header and Footer
  if (['assessment', 'mission-vision', 'our-target'].includes(currentPage)) {
    return renderPage();
  }

  // For home page
  return renderPage();
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}