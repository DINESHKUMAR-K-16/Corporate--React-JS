
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/Header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppTeams from './components/teams';
import AddTestimonials from './components/testimonials';
import AddPricing from './components/pricing';
import AddBlog from './components/blog';
import AddContact from './components/contact';
import AddFooter from './components/footer';

function App() {
  return (
    <div className="App">
     
        <header id="header">
          <AppHeader/>
        </header>
        <main>
          <AppHero/>
          <AppAbout/>
          <AppServices/>
          <AppWorks/>
          <AppTeams/>
          <AddTestimonials/>
          <AddPricing/>
          <AddBlog/>
          <AddContact/>
          <AddFooter/>

        
        </main>
      
    </div>
  );
}

export default App;
