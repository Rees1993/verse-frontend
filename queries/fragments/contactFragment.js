import { gql } from "@apollo/client";

export const contactComponent = gql`
  fragment contactComponent on components_contact_BlockType {
    id
    heading
  }
`;
