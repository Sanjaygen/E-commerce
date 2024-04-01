import { gql } from "@apollo/client";

export const TOPSQUERY = gql`
query GetGreentop{
  greentops{
   data{
     attributes{
        nav
        breadcrum{
          title
          links{
           link
         }
       }
       rightdetail{
          image{
           data{
             attributes{
               url
             }
           }
         }
         rightimages{
           image{
             data{
               attributes{
                 url
               }
             }
           }
         }
         content
       }
       leftdetail{
         details{
           content1
           content2
         }
         name
         img{
           data{
             attributes{
               url
             }
           }
         }
         lists{
           content1
         }
         multisize{
           title
           color
         }
         taxname
         prize
         buy{
           title
           link
           color
           isnew
           type
         }
       }
       description{
         link{
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
       heading
       cards{
          title
          subimage{
           data{
             attributes{
               url
             }
           }
         }
          image{
            data{
             attributes{
               url
             }
           }
         }
         cardcontnet{
           title
           link
           color
           isnew
           type
         }
         text
         color
         prize
       }
     }
   }
 }
}
`