import { gql } from "@apollo/client";

export const callToActionComponent = gql`
  fragment callToActionComponent on components_callToAction_BlockType {
    id
    heading
    copy
    button {
      link
      text
    }
  }
`;
