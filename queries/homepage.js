import { gql } from "@apollo/client";
import { callToActionComponent } from "./fragments/callToActionFragment";
import { cardsComponent } from "./fragments/cardsFragment";
import { copyWithImageComponent } from "./fragments/copyWithImageFragment";
import { getInTouchComponent } from "./fragments/getInTouchFragment";
import { heroComponent } from "./fragments/heroFragmentFragment";
import { contactComponent } from "./fragments/contactFragment";

export const GET_HOMEPAGE_QUERY = gql`
  ${heroComponent}
  ${callToActionComponent}
  ${copyWithImageComponent}
  ${cardsComponent}
  ${getInTouchComponent}
  ${contactComponent}
  query Homepage {
    entry(section: "homepage") {
      ... on homepage_homepage_Entry {
        id
        components {
          __typename
          ...heroComponent
          ...callToActionComponent
          ...cardsComponent
          ...copyWithImageComponent
          ...getInTouchComponent
          ...contactComponent
        }
      }
    }
  }
`;
