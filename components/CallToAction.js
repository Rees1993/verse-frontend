import { createMarkup } from '../lib/utilties';

const CallToAction = ({ data }) => {
  return (
    <section className="mx-auto mt-20 text-center font-leiko text-primary">
      <h2 className="mx-auto max-w-[720px] text-3.5xl leading-[1.18]">{data.heading}</h2>
      <div
        className="mx-auto mt-[30px] max-w-[680px] font-tinos text-lg"
        dangerouslySetInnerHTML={createMarkup(data.copy)}
      />
      <a
        href={data.button[0].link}
        className="mt-[50px] inline-block bg-primary px-9 py-3 text-white transition-colors duration-200 hover:bg-primary-hovered"
      >
        {data.button[0].text}
      </a>
    </section>
  );
};

export default CallToAction;
