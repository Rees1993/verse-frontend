import React from 'react';

import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import CardsWithTabs from '../components/CardswithTabs';
import CopyWithImage from '../components/CopyWithImage';
import GetInTouch from '../components/GetInTouch';
import Contact from '../components/Contact';

const Components = {
  Hero: Hero,
  CallToAction: CallToAction,
  Cards: CardsWithTabs,
  CopyWithImage: CopyWithImage,
  GetInTouch: GetInTouch,
  Contact: Contact,
};

export default function createElement(block) {
  if (typeof Components[block.name] !== 'undefined') {
    return React.createElement(Components[block.name], {
      key: block.name,
      data: block.component,
    });
  }
  return React.createElement(
    () => <div>The component {block.name} has not been created yet.</div>,
    { key: block.name }
  );
}
