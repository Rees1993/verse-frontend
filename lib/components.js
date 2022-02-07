import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import CardsWithTabs from '../components/CardswithTabs';
import CopyWithImage from '../components/CopyWithImage';
import GetInTouch from '../components/GetInTouch';
import Contact from '../components/Contact';

const components = {
  Hero,
  CallToAction,
  Cards: CardsWithTabs,
  CopyWithImage,
  GetInTouch,
  Contact,
};

// export default function createElement(block) {
//   if (typeof Components[block.name] !== 'undefined') {
//     return React.createElement(Components[block.name], {
//       key: block.name,
//       data: block.component,
//     });
//   }
//   return React.createElement(
//     () => <div>The component {block.name} has not been created yet.</div>,
//     { key: block.name }
//   );
// }

export default function createElement({ name, component }) {
  // Correct! JSX type can be a capitalized variable.
  const Component = components[name];
  return <Component data={component} />;
}
