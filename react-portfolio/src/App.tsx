import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Profile />
        <Education />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
