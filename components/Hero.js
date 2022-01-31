import Image from 'next/image';
import { useState } from 'react';
import RightArrowIcon from '../components/RightArrowIcon';
import { createMarkup } from '../lib/utilties';

const Hero = ({ data }) => {
  const [hero, setHero] = useState(0);
  const points = [];

  return (
    <section className="relative font-leiko ">
      {data.slides.map((slide, key) => {
        points.push(slide.point);
        const image = slide.image[0];

        return (
          <div key={key} className={`${hero == key ? 'show' : 'hidden'} relative h-[900px] w-full`}>
            {image && (
              <img
                className="h-full w-full object-cover"
                height={image.height}
                width={image.width}
                src={image.url}
                alt={image.title}
                loading={`${key > 0 && 'lazy'}`}
              />

              /* In order to use Next/Image, need to have craft install domain in next.config.js */
              // <Image
              //   height={image.height}
              //   width={image.width}
              //   src={image.url}
              //   alt={image.title}
              //   layout="fill"
              //   objectFit="cover"
              //   loading={key == 0 ? "eager" : "lazy"}
              // />
            )}
            <div className="absolute inset-0 bg-primary/90"></div>
            <div className="absolute inset-0 mx-auto flex max-w-[580px] flex-col items-center justify-center text-center text-white">
              <h1 className=" mx-auto max-w-[540px] text-[56px] leading-[1.18]">{slide.heading}</h1>
              <div
                className="mt-[30px] max-w-xl font-tinos text-lg"
                dangerouslySetInnerHTML={createMarkup(slide.copy)}
              ></div>
              <a
                className="group relative mt-16 flex items-center justify-center "
                href={slide.button[0].link}
              >
                <span className="mr-2">{slide.button[0].text}</span>
                <RightArrowIcon />
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-width duration-200 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        );
      })}
      <div className="absolute bottom-0 flex h-16 w-full justify-center space-x-[100px] text-white">
        {points.map((point, key) => {
          return (
            <button
              key={key}
              href="#"
              className={` ${key == hero ? 'text-white' : 'text-slate-dark'} group relative flex`}
              onClick={() => setHero(key)}
            >
              <div className="space-x-1.5 ">
                <span className={`${key == hero && 'text-secondary'} group-hover:text-secondary`}>
                  {key + 1}.
                </span>
                <span className="group-hover:text-white">{point}</span>
              </div>
              <span
                className={`${
                  key == hero ? 'w-full' : 'w-0'
                } absolute bottom-0 left-0 h-[5px] bg-secondary transition-width duration-200 `}
              ></span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
