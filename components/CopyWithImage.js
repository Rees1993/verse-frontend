import Image from 'next/image';
import { createMarkup } from '../lib/utilties';
import RightArrowIcon from './RightArrowIcon';

const CopyWithImage = ({ data }) => {
  const thumbnail = data.image[0];

  return (
    <section className="mt-20 bg-primary py-20 font-leiko text-white">
      <div className="mx-auto flex max-w-[1200px] items-center">
        <img
          className="w-1/2 pr-2"
          src={thumbnail.url}
          alt={thumbnail.title}
          height={thumbnail.height}
          width={thumbnail.width}
          loading="lazy"
        />
        {/* In order to use Next/Image, need to have craft install domain in next.config.js */}
        {/* <div className="w-1/2 pr-2">
          <Image
            src={thumbnail.url}
            alt={thumbnail.title}
            height={thumbnail.height}
            width={thumbnail.width}
            className="w-1/2 pr-2"
          />
        </div> */}
        <div className="w-1/2 pl-32 ">
          <h2 className="text-[56px] leading-[1.18]">{data.heading}</h2>
          <div
            className="mt-8 font-tinos text-lg"
            dangerouslySetInnerHTML={createMarkup(data.copy)}
          ></div>
          <a
            className="group relative mt-8 flex w-max items-center justify-self-start text-center"
            href={data.button[0].link}
          >
            <span className="mr-2">{data.button[0].text}</span>
            <RightArrowIcon />
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-width duration-200 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CopyWithImage;
