/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-text">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

