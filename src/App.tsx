import { Contact, Header, Home, Skills } from './components';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-bgColor bg-[url('../public/bgImage.png')] bg-bgImage text-white">
      <div className="w-full max-w-6xl">
        <Header />

        <main className="flex flex-col items-center">
          <Home />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="mb-8 text-center text-xs text-slate-200">
          <p>Copyright © 2023 Abdullah Sharifi. All rights reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
