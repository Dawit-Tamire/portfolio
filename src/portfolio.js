/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Dawit's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Dawit Tamire Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Dawit Tamire",
  logo_name: "DawitTamire",
  nickname: "davinchi",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1ANExr6F_J9tEUZ22jHociPwzs9yBqapP/view?usp=drive_link",
  portfolio_repository: "https://github.com/Dawit-Tamire/masterPortfolio",
  githubProfile: "https://github.com/Dawit-Tamire",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Dawit-Tamire",
  // linkedin: "https://www.linkedin.com/in/dawit-hathidara-88710b138/",
  // gmail: "dawittamire98@gmail.com",
  // gitlab: "https://gitlab.com/dawittamire98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/dawit_1919",
  // instagram: "https://www.instagram.com/davinchi/"

  {
    name: "Github",
    link: "https://github.com/Dawit-Tamire",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dawit-tamire-78815b281/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:davtame3@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter.",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "AngularJS",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "hilcoe",
      iconifyClassname: "heroicons-outline:academic-cap",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://hilcoe.net",
    },
    {
      siteName: "alxafrica",
      iconifyClassname: "simple-icons:alx",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://alxafrica.com",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "HiLCoE School of Computer Science and Technology",
      subtitle: "B.Sc. in Computer Science",
      logo_path: "hilcoe logo.png",
      alt_name: "HiLCoE",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AI etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development.",
      ],
      website_link: "http://hilcoe.net",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full stack software engineering",
      subtitle: "ALX",
      logo_path: "alx logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1MhWfk1wkvxDMxhXTReNgtkoBfPu9r1wH/view?usp=drive_link",
      alt_name: "ALX Africa",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have had the opportunity to work with well-known companies like eTech s.c and INSA, where I contributed to developing and maintaining CRM software solutions and cadaster. My experience includes building efficient, user-friendly applications using modern JavaScript frameworks like React.js, Node.js, and AngularJS. I have worked on various projects involving complex CRUD operations, performance optimization, and seamless integrations to support business operations effectively.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software engineer",
          company: "eTech s.c",
          company_url: "https://www.etechsc.com",
          logo_path: "etech logo.png",
          duration: "October 2023 - current",
          location: "Addis Ababa, Ethiopia",
          description:
            "I had the opportunity to work with Etech S.C. on a CRM project, where I contributed to developing and maintaining customer relationship management software. My work involved building efficient, user-friendly applications using modern JavaScript frameworks like React.js, Node.js, and AngularJS. I focused on implementing complex CRUD operations, optimizing performance, and integrating key features to enhance business operations and improve customer engagement.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software developer",
          company: "INSA",
          company_url: "https://www.insa.gov.et",
          logo_path: "Logo_of_Ethiopian_INSA.png",
          duration: "Apr 2023 - Oct 2023",  
          location: "Addis Ababa, Ethiopia",
          description:
            "I worked as Angular web frontend developer. I built UI for admin pages with form builder to perform CRUD operation. I also built frontend and backend for admin on another project with CRUD operation that can insert and delete bulk data.",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Software developer",
    //       company: "INSA",
    //       company_url: "https://www.insa.gov.et",
    //       logo_path: "Logo_of_Ethiopian_INSA.png",
    //       duration: "Apr 2023 - Oct 2023",  
    //       location: "Addis Ababa, Ethiopia",
    //       description:
    //         "I worked as Angular web frontend developer. I built UI for admin pages with form builder to perform CRUD operation. I also built frontend and backend for admin on another project with CRUD operation that can insert and delete bulk data.",
    //       color: "#000000",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects utilize a wide range of modern technology tools. My primary experience lies in developing CRUD applications, where I build, manage, and optimize data-driven systems. I have worked extensively on deploying these applications to web platforms using robust cloud infrastructure, ensuring scalability and efficient performance.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "my pic.jpg",
    description:
      "I am available on social media. You can message me, I will reply within 24 hours. I can help you with React and Android.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.dawittamire.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Addis Ababa, Ethiopia",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
