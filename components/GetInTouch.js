const GetInTouch = ({ data }) => {
  return (
    <section className="mx-auto mt-20 max-w-3xl text-center font-leiko text-primary">
      <h2 className="text-6xl leading-[1.18]">{data.heading}</h2>
      <span className="mt-10 inline-block text-[2.5rem]">{data.abstract}</span>
    </section>
  );
};

export default GetInTouch;
