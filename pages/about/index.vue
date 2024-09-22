<script setup lang="ts">
const pageData ={
  heroSection: {
    h6: "About Me",
    h1: "Niño Deo Dimaangay",
    h5: "Hellow, I'm Niño  a self-taught & award-winning Web Designer & Developer with over fifteen years of work experience. I started in my children's room and got pro at renowned Ran Tech Agencies",
    cta:{
      text: "Let's Talk",
      target: "/contact"
    },
    coverImage: {
      src: "",
      atl:""
    }
  },
  briefIntro:{
    welcomeRemarks: [
      "Hello, I'm <b>Jessica</b> a self-taught & award-winning <b>Web Designer & Developer</b> with over fifteen years of work experience. I started in y children's room and got pro at renowned Rant Tech Agencies."
    ],
    image: {
      src: "",
      atl:""
    },
    cta:{
      text: "Explore My Works",
      target: "/works"
    },
    trustedBy:{
      h3: "Trusted ByTrusted by World Leading Brands",
      list:[
        {
          brand: "",
          logo: "",
          link:""
        },
        {
          brand: "",
          logo: "",
          link:""
        },
        {
          brand: "",
          logo: "",
          link:""
        },
        {
          brand: "",
          logo: "",
          link:""
        },
      ]
    }
  },
  expertiseSection:{
    h2: "Solutions I Can Provide",
    h6: "My Expertise",
    overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur id reiciendis in at molestiae molestias porro, debitis quas similique vel? Architecto voluptates veritatis provident blanditiis. Aut cumque molestiae officiis quae!",
    cta:{
      text: "Hire Me",
      target: "/contacts"
    },
    expertise:[
      {
        h3:"Design",
        p:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. A fugiat dignissimos non, ab tempore maxime necessitatibus! Sunt aspernatur nulla, quae ipsa quisquam fuga deserunt reprehenderit quasi, quia quibusdam eaque odit. Excepturi porro obcaecati exercitationem facere odio maxime fugiat repellat provident?"
      },
      {
        h3:"Development",
        p:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. A fugiat dignissimos non, ab tempore maxime necessitatibus! Sunt aspernatur nulla, quae ipsa quisquam fuga deserunt reprehenderit quasi, quia quibusdam eaque odit. Excepturi porro obcaecati exercitationem facere odio maxime fugiat repellat provident?"
      }
,      {
        h3:"Support",
        p:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. A fugiat dignissimos non, ab tempore maxime necessitatibus! Sunt aspernatur nulla, quae ipsa quisquam fuga deserunt reprehenderit quasi, quia quibusdam eaque odit. Excepturi porro obcaecati exercitationem facere odio maxime fugiat repellat provident?"
      }
    ]
  },
  workSkillsSection:{
    h2:"I have experience with this technologies",
    skills:[
      {
        category: "Frontend Technologies",
        list:[
          {
            name: "VueJS",
            icon:"",
          },
          {
            name: "NuxtJS",
            icon:"",
          },
          {
            name: "ReactJS",
            icon:"",
          },
          {
            name: "Livewire",
            icon:"",
          },
          {
            name: "HTML",
            icon:"",
          },
          {
            name: "CSS",
            icon:"",
          },
          {
            name: "JavaScript",
            icon:"",
          },
          {
            name: "Bootstrap",
            icon:"",
          },
          {
            name: "TailwindCSS",
            icon:"",
          }
        ]
      },
      {
        category: "Backend Technologies",
        list:[
          {
            name: "PHP",
            icon:"",
          },
          {
            name: "Laravel",
            icon:"",
          },
          {
            name: "Symfony",
            icon:"",
          },
        ]
      },
      {
        category: "Databases",
        list:[
          {
            name: "MS SQL",
            icon:"",
          },
          {
            name: "MySQL",
            icon:"",
          },
        ]
      },
      {
        category: "Other Technologies",
        list:[
          {
            name: "Git",
            icon:"",
          },
          {
            name: "Docker",
            icon:"",
          },
          {
            name: "Penpot",
            icon:"",
          },
          {
            name: "Figma",
            icon:"",
          },
          {
            name: "WordPress",
            icon:"",
          },
        ]
      },
      {
        category: "Operating System",
        list:[
          {
            name: "Windows",
            icon:"",
          },
          {
            name: "Linux",
            icon:"",
          },
        ]
      },
      {
        category: "Multimedia",
        list:[
          {
            name: "Adobe Photoshop",
            icon:"",
          },
          {
            name: "Adobe Illustrator",
            icon:"",
          }
        ]
      },
      {
        category: "Hardware Skills",
        list:[
          {
            name: "Network Configuration",
            icon:"",
          },
          {
            name: "Tech Support & Troubleshooting",
            icon:"",
          },
          {
            name: "WLAN/LAN",
            icon:"",
          },
        ]
      },
    ]
  },
  expEducSection:{
    list:[
      {
        id: 1,
        fromYear: "",
        toYear: "",
        subject: "",
        organization: "",
        address: ""
      },
    ]
  },
  certSeminarsSection:{
    list:[
      {
        id: 1,
        subject: "",
        location: "",
        date: ""
      }
    ]
  },
  featuredWorks: [
    {
      workId: "001",
      title: "Different Hunger Website Redesign",
      slug:"",
      services: [
        "Branding & Identiy",
        "UX & UI design",
      ],
      company: "Different Hunger Corporation",
      cover: {
        src: "",
        alt: ""
      }
    },
    {
      workId: "002",
      title: "Nuetrality Hunger Website Redesign",
      slug:"",
      services: [
        "Branding & Identiy",
        "UX & UI design",
        "Conversion Optimization"
      ],
      company: "Nuetrality Company",
      cover: {
        src: "",
        alt: ""
      }
    },
    {
      workId: "003",
      title: "Similarity Hunger Website Redesign",
      slug:"",
      services: [
        "Branding & Identiy",
        "UX & UI design",
        "Conversion Optimization"
      ],
      company: "National Website Organization",
      cover: {
        src: "",
        alt: ""
      }
    },
  ],
}
</script>

<template>
  <main>

    <V1PageCmptsAboutCmptsAboutHeroCmpt :props="pageData.heroSection"/>
    <V1PageCmptsAboutCmptsAboutBriefIntroCmpt :props="pageData.briefIntro"/>
    <V1PageCmptsAboutCmptsAboutExpertiseCmpt :props="pageData.expertiseSection"/>
    <V1PageCmptsAboutCmptsAboutWorkSkillsCmpt :props="pageData.workSkillsSection"/>
    <V1PageCmptsAboutCmptsAboutEducExpCmpt :props="pageData.expEducSection"/>
    <V1PageCmptsAboutCmptsAboutCertificationCmpt/>
    <!--Download Resume BTN-->
    <V1GlobalCmptsWorkCmptsWorksSliderCmpt :props="pageData.featuredWorks"/>
    <V1PageCmptsAboutCmptsAboutLatestPostCmpt/>
    <V1PageCmptsAdsCmptsFooterAdsCmpt/>
  </main>
</template>

<style scoped></style>
