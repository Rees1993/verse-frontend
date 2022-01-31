import { gql } from "@apollo/client";

export const cardsComponent = gql`
  fragment cardsComponent on components_cards_BlockType {
    id
    title
    entries {
      ... on card_default_Entry {
        id
        cardThumbnail {
          title
          url
          height
          width
        }
        title
        cardAbstract
        cardButton {
          text
          link
        }
      }
    }
  }
`;
