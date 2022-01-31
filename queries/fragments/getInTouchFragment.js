import { gql } from "@apollo/client";

export const getInTouchComponent = gql`
  fragment getInTouchComponent on components_getInTouch_BlockType {
    id
    heading
    abstract
  }
`;
