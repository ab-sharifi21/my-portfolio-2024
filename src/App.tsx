import { Header, Home, Skills } from './components';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-bgColor bg-bgImage text-white">
      <div className="w-full max-w-6xl">
        <Header />

        <main className="flex flex-col items-center">
          <Home />
          <Skills />
          <Projects />
        </main>
      </div>
    </div>
  );
}

export default App;
