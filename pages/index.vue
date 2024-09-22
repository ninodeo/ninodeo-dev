<script setup lang="ts">
const pageData = {
  heroSection:{
    greeting: "Hey there, I'm",
    name: "Niño Deo Dimaangay",
    coverage: ["Designer", "Developer", "Support"],
    intro: [
      "An IT professional that will provide various IT services for you and your business.",
      "IT Professional based in Philippines"
    ],
    contactInfo: {
      base: "Cavite, Philippines",
      cta:{
        text: "hello@ninodeo.com",
        link: "mailto:hello@ninodeo.com"
      },
      socialMedia: [
        {
          id: 1,
          social: "Facebook",
          icon: "",
          link: ""
        },
        {
          id: 2,
          social: "LinkedIn",
          icon: "",
          link: ""
        },
        {
          id: 3,
          social: "Github",
          icon: "",
          link: ""
        },
        {
          id: 4,
          social: "Google",
          icon: "",
          link: ""
        },
        {
          id: 5,
          social: "Instagram",
          icon: "",
          link: ""
        },
      ],
    },
    otherInfo:[
      {
        key: "Projects Done",
        value:"10"
      }, 
      {
        key: "Years Experience",
        value:"8"
      }, 
    ],
    img:{
      src: "",
      alt: "alt text to image"
    },
    coverImage:{
      src: "",
      alt:""
    }
  },
  aboutSection:{
    statement: "An IT professional that can provide various IT related products and services for you and your business.",
    title: {
      h2: "About Me",
      h5: "Who I am"
    },
    overview: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis ullam molestias ea beatae, eligendi non expedita iusto modi repudiandae quaerat? Incidunt ab voluptate accusamus tenetur consequatur molestiae modi maxime.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus neque ea quidem veritatis, assumenda vero porro provident, doloribus repudiandae cum ad optio explicabo veniam deleniti aperiam ut, sapiente eveniet? Ex, perspiciatis. Eius labore blanditiis, reiciendis eum, laborum unde quasi corrupti at, vel voluptas dignissimos reprehenderit quaerat ratione! Repellendus, distinctio non."
    ],
    cta: {
      text: "Learn More",
      target: "/about"
    }
  },
  valueProps:{
    h1:"You may need my services if you want to:",
    list:[
      {
        icon: "",
        info: "Create a professional website to attract investors and/or clients."
      },
      {
        icon: "",
        info: "Implement cost-effective solutions, and preventing IT problems."
      },
      {
        icon: "",
        info: "Improve your business efficiency and productivity."
      },
      {
        icon: "",
        info: "Gain competitive advantages against competitors."
      },
      {
        icon: "",
        info: "Free up your time and resources to focus on other activities."
      }
    ]
  },
  featuredServices: [
    {
      id: "01",
      category: "Design",
      briefIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cta:{
        text: "View More...",
        target: "/services#design"
      },
      list:[
        {
          productId: "",
          name: "Service Name",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet nec.",
          cover:{
            src: "",
            alt: ""
          },
        },
        {
          productId: "",
          name: "Service Name",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet nec.",
          cover:{
            src: "",
            alt: ""
          },
        },
        {
          productId: "",
          name: "Service Name",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet nec.",
          cover:{
            src: "",
            alt: ""
          },
        },
        {
          productId: "",
          name: "Service Name",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet nec.",
          cover:{
            src: "",
            alt: ""
          },
        }
      ]
    },
    {
      id: "02",
      category: "Development",
      briefIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cta:{
        text: "View More...",
        target: "/services#development"
      },
      list:[
        {
          productId: "",
          name: "Service Name",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet nec.",
          cover:{
            src: "",
            alt: ""
          },
        },
        {
          productId: "",
          name: "Service Name",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet nec.",
          cover:{
            src: "",
            alt: ""
          },
        },
        {
          productId: "",
          name: "Service Name",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet nec.",
          cover:{
            src: "",
            alt: ""
          },
        },
        {
          productId: "",
          name: "Service Name",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet nec.",
          cover:{
            src: "",
            alt: ""
          },
        }
      ]
    },
    {
      id: "03",
      category: "Support",
      briefIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cta:{
        text: "View More...",
        target: "/services#support"
      },
      list:[
        {
          productId: "",
          name: "Service Name",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet nec.",
          cover:{
            src: "",
            alt: ""
          },
        },
        {
          productId: "",
          name: "Service Name",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet nec.",
          cover:{
            src: "",
            alt: ""
          },
        },
        {
          productId: "",
          name: "Service Name",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet nec.",
          cover:{
            src: "",
            alt: ""
          },
        },
        {
          productId: "",
          name: "Service Name",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet nec.",
          cover:{
            src: "",
            alt: ""
          },
        }
      ]
    }
  ],
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
  featuredTestimonials:{
    h1: "Don't just take my word for it! Read reviews from my clients.",
    h3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium natus sapiente commodi. Aliquid sunt tempore iste repellendus explicabo dignissimos placeat, autem harum dolore reprehenderit quis! Quo totam dignissimos earum.",
    testimonials:[
      {
        reviewID: 1,
        rating: 5,
        client: {
          name: "paul Starr",
          designation: "Position",
          company: "Company Name",
          img:{
            src:"",
            alt:""
          }
        },
        title: "Review Title Goes Here",
        review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam"
      },
      {
        reviewID: 2,
        rating: 4,
        client: {
          name: "paul Starr",
          designation: "Position",
          company: "Company Name",
          img:{
            src:"",
            alt:""
          }
        },
        title: "Review Title Goes Here",
        review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam"
      },
      {
        reviewID: 3,
        rating: 5,
        client: {
          name: "paul Starr",
          designation: "Position",
          company: "Company Name",
          img:{
            src:"",
            alt:""
          }
        },
        title: "Review Title Goes Here",
        review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam"
      },
    ],
  }
}
</script>

<template>
  <main>
    <V1PageCmptsHomePageCmptsHomeHeroCmpt :props="pageData.heroSection"/>
    <V1PageCmptsHomePageCmptsHomeAboutCmpt :props="pageData.aboutSection"/>
    <V1PageCmptsHomePageCmptsHomeValPropCmpt :props="pageData.valueProps"/>
    <V1PageCmptsHomePageCmptsHomeFeaturedServicesCmpt :props="pageData.featuredServices"/>
    <V1GlobalCmptsWorkCmptsWorksSliderCmpt :props="pageData.featuredWorks"/>
    <V1PageCmptsHomePageCmptsHomeFeaturedTestimonialsCmpt :props="pageData.featuredTestimonials"/>
    <V1PageCmptsHomePageCmptsHomeFeaturedNewsUpdatesCmpt/>
    <V1PageCmptsAdsCmptsFooterAdsCmpt/>
  </main>
</template>

<style scoped></style>
