import { gql } from "@apollo/client";

export const copyWithImageComponent = gql`
  fragment copyWithImageComponent on components_copyWithImage_BlockType {
    id
    heading
    copy
    image {
      title
      url
      height
      width
    }
    button {
      link
      text
    }
  }
`;
