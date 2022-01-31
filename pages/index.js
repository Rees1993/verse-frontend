import client from '../lib/apolloClient';
import { GET_HOMEPAGE_QUERY } from '../queries/homepage';
import Components from '../lib/components.js';

export default function Home({ components }) {
  return components.map((component) => {
    return Components(component);
  });
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_HOMEPAGE_QUERY,
  });

  const components = [];

  data.entry.components.map((component) => {
    let componentName = component.__typename.split('_')[1];
    let fixedComponentName = componentName[0].toUpperCase() + componentName.substr(1);

    components.push({
      name: fixedComponentName,
      id: component.id,
      component,
    });
  });

  return {
    props: {
      components,
    },
  };
}
