import { gql } from "@apollo/client";

export const PRODUCTSQUERY = gql`
query GetProducts {
    products {
      data {
        attributes {
          nav
          breadcrum {
            title
            links {
              link
            }
          }
          rightdetail {
            content
            image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            sideimages {
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
          leftdetail {
            detail {
              content1
              content2
            }
            name
            image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            list {
              content1
            }
            multiplesize {
              size
            }
            taxname
            prize1
            prize2
            buy {
              title
              type
              color
            }
          }
          description {
            links {
              link
            }
            description
            description1
            description2
            description3
            description4
            text
            color
          }
          title
          cards {
            text
            subimage {
              data {
                attributes {
                  url
                  alternativeText
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
            cardbutton {
              title
              type
              color
            }
            content
            prize1
            prize2
          }
        }
      }
    }
  }
`