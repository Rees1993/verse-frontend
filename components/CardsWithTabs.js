import { useState } from 'react';
import EntryCard from './EntryCard';

const CardsWithTabs = ({ data }) => {
  const [active, setActive] = useState(0);

  const Button = ({ id, text }) => {
    return (
      <button
        className={` ${
          id == active ? 'border-primary bg-white text-primary' : 'border-slate text-slate'
        }  relative border-b-3 px-9 py-2.5 transition-colors duration-300 hover:border-b-primary hover:bg-primary-light hover:text-primary`}
        onClick={() => setActive(id)}
      >
        {text}
      </button>
    );
  };

  return (
    <section className="mt-16 ">
      <div className="flex justify-center space-x-[30px] font-leiko">
        {[...Array(3)].map((button, key) => {
          return <Button key={key} id={key} text={`Tab ` + (key + 1)} />;
        })}
      </div>
      {/* Cards */}
      <div className="mx-auto mt-20 grid max-w-[1200px] grid-cols-3 place-items-center gap-10">
        {data.entries.map((entry) => {
          return <EntryCard key={entry.id} data={entry} />;
        })}
      </div>
    </section>
  );
};

export default CardsWithTabs;
