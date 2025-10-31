
import React from 'react';
import { MENU_DATA } from './constants';
import MenuItemCard from './components/MenuItemCard';

const Hero = () => (
  <div className="relative h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
    <div className="absolute inset-0 bg-brand-primary bg-opacity-60"></div>
    <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
      <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter leading-tight">Confluence</h1>
      <p className="font-sans text-lg md:text-2xl mt-4 max-w-2xl">Where Worlds Collide on a Plate.</p>
    </div>
  </div>
);

const About = () => (
  <section className="py-20 px-6 md:px-12 bg-brand-bg">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-serif text-4xl font-bold text-brand-primary mb-6">A Culinary Voyage</h2>
      <p className="font-sans text-lg text-brand-text leading-relaxed">
        At Confluence, we celebrate the most significant moment in culinary history: the Columbian Exchange. Our menu is a curated journey through the transformative exchange of foods, cultures, and ideas between the Eastern and Western Hemispheres. Each dish tells a story of connection, a delicious fusion of ingredients that were once worlds apart.
      </p>
    </div>
  </section>
);

const Menu = () => (
  <section className="py-20 px-6 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="font-serif text-5xl font-bold text-brand-primary text-center mb-12">Our Menu</h2>
      {MENU_DATA.map((category) => (
        <div key={category.title} className="mb-16">
          <h3 className="font-serif text-3xl font-bold text-brand-secondary text-center mb-8 border-b-2 border-brand-accent pb-2">{category.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.items.map((item) => (
              <MenuItemCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Legacy = () => (
    <section className="py-20 px-6 md:px-12 bg-brand-bg">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-brand-primary mb-6">More Than a Meal</h2>
            <p className="font-sans text-lg text-brand-text leading-relaxed mb-10">
                The Columbian Exchange was more than just an exchange of foods. It irrevocably connected the world, bringing new technologies, animals, and knowledge, which we honor in our philosophy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-serif text-xl font-bold text-brand-primary mb-2">The Equine Advantage</h4>
                    <p className="font-sans text-brand-text">The introduction of the horse to the Americas revolutionized transportation, labor, and culture. This powerful symbol of connection and strength inspires our commitment to robust flavors and hearty, nourishing meals.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-serif text-xl font-bold text-brand-primary mb-2">The Navigator's Knowledge</h4>
                    <p className="font-sans text-brand-text">Maritime innovations like the caravel and the astrolabe made the exchange possible. We are inspired by this spirit of discovery, constantly exploring new culinary combinations and techniques to bring the best of both worlds to your table.</p>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
  <footer className="py-8 px-6 bg-brand-primary text-brand-bg">
    <div className="max-w-7xl mx-auto text-center font-sans">
      <p>&copy; {new Date().getFullYear()} Confluence Restaurant. All Rights Reserved.</p>
      <p className="text-sm text-brand-secondary mt-2">A project for AP World History, designed to showcase the profound legacies of the Columbian Exchange.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="font-sans bg-brand-bg">
      <header>
        <Hero />
      </header>
      <main>
        <About />
        <Menu />
        <Legacy />
      </main>
      <Footer />
    </div>
  );
};

export default App;
