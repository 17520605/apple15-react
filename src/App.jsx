import Nabar from './components/Nabar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import * as Sentry from "@sentry/react";
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
const App = () => {

  return (
    <main className='bg-black'>
      <Nabar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
