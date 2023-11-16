import CallToAction from "../components/CallToAction";
import Features from "../components/Features";
import Footer from "../components/Footer";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Subscribe from "../components/Subscribe";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CallToAction />
        <FrequentlyAskedQuestions />
        <Subscribe />
      </main>
      <Footer/>
    </>
  );
}

export default Home;
