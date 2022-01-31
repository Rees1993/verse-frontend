import { gql } from "@apollo/client";

export const heroComponent = gql`
  fragment heroComponent on components_hero_BlockType {
    id
    slides {
      ... on slides_BlockType {
        point
        image {
          title
          url
          height
          width
        }
        heading
        copy
        button {
          link
          text
        }
      }
    }
  }
`;
