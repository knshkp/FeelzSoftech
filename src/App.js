import Header from "./Components/Header";
import Feature from "./Components/Feature";
import newLogo from './Images/logo.png';
import AboutUs from "./Components/AboutUs";
import TrustedClientsPage from "./Components/Client";
import ContactUsPage from "./Components/ContactUsPage";
import LoadingScreens from "./Components/LoadingScreen";
function App() {
  return (
    <div className="App">
      <LoadingScreens/>
      <Header/>
      <AboutUs/>
      <TrustedClientsPage/>
      <Feature/>
      <ContactUsPage/>
      
    </div>
  );
}

export default App;
