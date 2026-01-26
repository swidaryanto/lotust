import Hero from './components/Hero';
import StudyCases from './components/StudyCases';

function App() {
  return (
    <>
      <Hero />
      <div className="container" style={{ paddingTop: 0 }}>
        <StudyCases />
      </div>
    </>
  );
}

export default App;
