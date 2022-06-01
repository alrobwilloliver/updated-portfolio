// Skills Icons
import goIcon from "./images/gopher.svg"
import cssIcon from "./images/css.svg"
import vueJs from "./images/vuejs.png"
import jsIcon from "./images/javascript.svg"
import nodejsIcon from "./images/Nodejs_logo.png"
import postgresql from "./images/postgresql.png"

// Social Icon
import githubIcon from "./images/github.svg"
// import codepenIcon from "./images/codepen.svg"
// import dribbbleIcon from "./images/dribbble.svg"
// import instagramIcon from "./images/instagram.svg"

// Me
import myImage from "./images/Alan5.jpg"

// Project Screenshots
import crumbs from './images/crumbs-screenshot.jpeg'

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Alan",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "applications, webpages,",
    //Line 3 For Header
    "and experiences",
  ],
  //   Header Paragraph
  headerParagraph:
    "Junior Software Engineer at Cudo Ventures.",

  //Contact Email
  contactEmail: "alrobwilloliver@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 0,
      title: "AILO",
      para: "This is my teaching content platform which gives former and prospective students an easy access way to my teaching content.",
      imageSrc: "https://media.giphy.com/media/JqHLZr2yQn4vew6l0P/giphy.gif",
      url: "https://ailearningonline.herokuapp.com",
      codeLink: "https://github.com/alrobwilloliver/englishLearningOnline"
    },
    {
      id: 1,
      title: "Crumbs", //Project Title
      para:
        "I worked for New Verve Consulting, building a Customer Relationship Management application in which I designed this advanced filtering component for customers in the premium version of the product. I learned about handling React state, React Hooks and data filtering.",
      //Project Image
      imageSrc:
        crumbs,
      //Project URL
      url: "https://marketplace.atlassian.com/apps/1222515/crumbs-simple-crm-for-jira-and-jira-service-management?tab=overview&hosting=cloud",
    },
    {
      id: 2,
      title: "More Deal Sourcing Landing Page", //Project Title
      para:
        "A property website for a business idea I had sourcing property deals for prospective investors. Includes email collection for marketing. I learned about responsive design & optimised load times, mobile friendly navbar and Node Mailer with MongoDb for email collection.",
      //Project Image
      imageSrc:
        "https://media.giphy.com/media/L06PhxtpwuSwxGWUdB/giphy.gif",
      //Project URL
      url: "https://moredealsourcing.herokuapp.com",
      codeLink: "https://github.com/alrobwilloliver/more-deal-sourcing-node-landing-page"
    },
    {
      id: 3,
      title: "Snake Game with Score Leaderboard", //Project Title
      para:
        "A classic snake game which I developed from an online tutorial adding a leaderboard and scores with a basic API. I learned JavaScript modular code, fetch post requests and using Express middleware.",
      //Project Image
      imageSrc:
        "https://media.giphy.com/media/lRLa21bv1BBtnmvyFV/giphy.gif",
      //Project URL
      url: "https://playmysnake.herokuapp.com/",
      codeLink: "https://github.com/alrobwilloliver/snakeJavascript",
    },

    /*
    To Add More Project just use this format (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
  "My name is Alan. I'm a software engineer with a passion for developing and building user focused software solutions using test driven development principles.",
  aboutParaTwo:
  "In one of my first software engineering roles with Cudo Ventures I worked on helping to configure and independently maintain a gamer crypto mining tenent on the front and back end in Javascript, contributed to developing a Crypto Liquidity Exchange microservice to ease exchange risk in Golang and Javascript, and collaborated in building and maintaining a software testing suite for the Compute Virtual Machine marketplace in Golang.",
  aboutParaThree:
  "I have an international perspective having lived in China for over 3 years prior to working in software with an interest in politics and economics.",
  aboutImage:
    myImage,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: goIcon,
      para:
        "I have professional experience in Go, particularly in native Go testing.",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "I have knowledge in CSS for styling and formatting webpages and apps.",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "I have good experience in JavaScript ES6 and have developed most of my personal projects using this coding language.",
    },
    {
      id: 4,
      img: vueJs,
      para:
        "I have knowledge in the JavaScript front end framework Vue JS.",
    },
    {
      id: 5,
      img: nodejsIcon,
      para:
        "I have knowledge in using Node JS for my backend server runtime.",
    },
    {
      id: 6,
      img: postgresql,
      para:
        "I have knowledge in Postgresql databases.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Summing Me Up",
  promotionPara:
    "I'm a full stack developer and ardent learner who is usually spending time building applications, researching precious metals investing and watching Newcastle United. I also enjoy speaking Mandarin Chinese to build on my language abilities obtained when I lived in China.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next digital experience together",
  social: [
    { img: githubIcon, url: "https://github.com/alrobwilloliver" },
    // {
    //   img: codepenIcon,
    //   url: "",
    // },
    // {
    //   img: dribbbleIcon,
    //   url: "",
    // },
    // {
    //   img: instagramIcon,
    //   url: "",
    // },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
