import { gql } from "@apollo/client";

export const QUERY = gql`
query GetHomes {
  homes {
    data {
      attributes {
        header {
          title
          headerbutton {
            title
            link
            color
          }
        }
        navbar {
          title
        }
        topmain {
          title
          link
          description
          colors
          frame1 {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          frame2 {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          image {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          topbutton {
            title
            color
          }
        }
        brands {
          brandlogo {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
        categorey {
          title
          images {
            productname
            productcount
            colors
            brandlogo {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
          }
        }
        productitems {
          title
          link
          navbar {
            title
            link
            type
          }
          filterbutton {
            link
            title
            color
            type
          }
          cards {
            title
            content
            prize
            colors
            link
            cardimages {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
          }
        }
        brandBanner {
          description
          button {
            title
            link
            color
          }
          Backgroundimage {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          image2 {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
        silderProduct {
          title
          link
          navbar {
            title
            link
          }
          filterbutton {
            title
            link
            color
            type
          }
          cards {
            title
            content
            prize
            link
            colors
            cardimages {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
        }
        feedback {
          title
          colors
          cardItems {
            brandlogo {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          heading
          button {
            title
            link
            color
          }
        }
        footer {
          ... on ComponentFooterLeftContent {
            description
            colors
            title
          }
          ... on ComponentFooterFooterCatlogue {
            title
            colors
            items {
              content
              link
            }
          }
        }
        bottom {
          content
          button {
            title
            link
          }
          colors
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
}
`;
