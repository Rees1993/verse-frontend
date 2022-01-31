import Image from 'next/image';
import { createMarkup } from '../lib/utilties';
import RightArrowIcon from './RightArrowIcon';

const EntryCard = ({ data }) => {
  const thumbnail = data.cardThumbnail[0];
  return (
    <div className="flex flex-col font-leiko text-primary">
      <a className="group relative overflow-hidden" href={data.cardButton[0].link}>
        <img
          src={thumbnail.url}
          alt={thumbnail.title}
          height={thumbnail.height}
          width={thumbnail.width}
          className="transition group-hover:scale-110"
          loading="lazy"
        />
        {/* In order to use Next/Image, need to have craft install domain in next.config.js */}
        {/* <Image
          src={thumbnail.url}
          alt={thumbnail.title}
          height={thumbnail.height}
          width={thumbnail.width}
          className="transition duration-300 group-hover:scale-110"
        /> */}
      </a>

      <h2 className="mt-[30px] text-2xl leading-[1.33]">{data.title}</h2>
      <div
        className="mt-6 font-tinos"
        dangerouslySetInnerHTML={createMarkup(data.cardAbstract)}
      ></div>
      <a
        className="group relative mt-8 flex items-center self-start text-center text-primary"
        href={data.cardButton[0].link}
      >
        <span className="mr-2">{data.cardButton[0].text}</span>
        <RightArrowIcon />
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-width duration-200 group-hover:w-full"></span>
      </a>
    </div>
  );
};

export default EntryCard;
