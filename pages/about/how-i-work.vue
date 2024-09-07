<script setup lang="ts">
const pageData = {
  heroSection:{
    h6: "How I Work",
    h1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, expedita.",
    h5: "Through my experience working with diverse clients and industries, I've honed a workflow that prioritizes clear communication, collaboration, and achieving defined goals.",
    cta:{
      text: "Get In Touch",
      link: "/contacts"
    },
    coverImage:{
      src: "1",
      alt: ""
    }
  },
  workProcess: [
    {
      id: 1,
      name: "Analysis",
      overview: [
        "Dolor qui duo nonumy sit sea takimata iriure amet et tation eirmod sea magna nibh. Tempor est ea et et. Et gubergren ullamcorper nonumy at aliquam lorem labore. Nonumy lobortis autem nonumy nonumy sit elitr.",
      ],
      icon: "iconLvl1",
      qta: [
        "Facilisis gubergren tation adipiscing et et?",
        "Et et et zzril lobortis accusam at nulla magna.",
        "Sed accusam dolor diam consetetur eos at facilisis sed dolores ut sea liber.",
        "Eos odio dolore cum lorem sed eleifend placerat.",
        "Te justo ut in amet quis consetetur duo gubergren."
      ],
      steps: [
        "Et eos dolore et sadipscing consetetur.",  
        "Ut vulputate lorem nisl dolore duo aliquyam tempor lobortis ut stet dolor id.",  
        "Lorem et magna sanctus eirmod voluptua molestie stet no ipsum.",  
        "Sea exerci no stet elitr et sed elitr molestie amet.",  
        "Lorem aliquyam lorem possim eirmod iusto vel.",  
      ],
      outputs: [
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
      ]
    },
    {
      id: 2,
      name: "Design",
      overview: [
        "Dolor qui duo nonumy sit sea takimata iriure amet et tation eirmod sea magna nibh. Tempor est ea et et. Et gubergren ullamcorper nonumy at aliquam lorem labore. Nonumy lobortis autem nonumy nonumy sit elitr.",
      ],
      icon: "iconLvl1",
      qta: [
        "Facilisis gubergren tation adipiscing et et?",
        "Et et et zzril lobortis accusam at nulla magna.",
        "Sed accusam dolor diam consetetur eos at facilisis sed dolores ut sea liber.",
        "Eos odio dolore cum lorem sed eleifend placerat.",
        "Te justo ut in amet quis consetetur duo gubergren."
      ],
      steps: [
        "Et eos dolore et sadipscing consetetur.",  
        "Ut vulputate lorem nisl dolore duo aliquyam tempor lobortis ut stet dolor id.",  
        "Lorem et magna sanctus eirmod voluptua molestie stet no ipsum.",  
        "Sea exerci no stet elitr et sed elitr molestie amet.",  
        "Lorem aliquyam lorem possim eirmod iusto vel.",  
      ],
      outputs: [
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
      ]
    },
    {
      id: 3,
      name: "Development",
      overview: [
        "Dolor qui duo nonumy sit sea takimata iriure amet et tation eirmod sea magna nibh. Tempor est ea et et. Et gubergren ullamcorper nonumy at aliquam lorem labore. Nonumy lobortis autem nonumy nonumy sit elitr.",
      ],
      icon: "iconLvl1",
      qta: [
        "Facilisis gubergren tation adipiscing et et?",
        "Et et et zzril lobortis accusam at nulla magna.",
        "Sed accusam dolor diam consetetur eos at facilisis sed dolores ut sea liber.",
        "Eos odio dolore cum lorem sed eleifend placerat.",
        "Te justo ut in amet quis consetetur duo gubergren."
      ],
      steps: [
        "Et eos dolore et sadipscing consetetur.",  
        "Ut vulputate lorem nisl dolore duo aliquyam tempor lobortis ut stet dolor id.",  
        "Lorem et magna sanctus eirmod voluptua molestie stet no ipsum.",  
        "Sea exerci no stet elitr et sed elitr molestie amet.",  
        "Lorem aliquyam lorem possim eirmod iusto vel.",  
      ],
      outputs: [
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
      ]
    },
    {
      id: 4,
      name: "Testing",
      overview: [
        "Dolor qui duo nonumy sit sea takimata iriure amet et tation eirmod sea magna nibh. Tempor est ea et et. Et gubergren ullamcorper nonumy at aliquam lorem labore. Nonumy lobortis autem nonumy nonumy sit elitr.",
      ],
      icon: "iconLvl1",
      qta: [
        "Facilisis gubergren tation adipiscing et et?",
        "Et et et zzril lobortis accusam at nulla magna.",
        "Sed accusam dolor diam consetetur eos at facilisis sed dolores ut sea liber.",
        "Eos odio dolore cum lorem sed eleifend placerat.",
        "Te justo ut in amet quis consetetur duo gubergren."
      ],
      steps: [
        "Et eos dolore et sadipscing consetetur.",  
        "Ut vulputate lorem nisl dolore duo aliquyam tempor lobortis ut stet dolor id.",  
        "Lorem et magna sanctus eirmod voluptua molestie stet no ipsum.",  
        "Sea exerci no stet elitr et sed elitr molestie amet.",  
        "Lorem aliquyam lorem possim eirmod iusto vel.",  
      ],
      outputs: [
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
      ]
    },
    {
      id: 5,
      name: "Maintenance",
      overview: [
        "Dolor qui duo nonumy sit sea takimata iriure amet et tation eirmod sea magna nibh. Tempor est ea et et. Et gubergren ullamcorper nonumy at aliquam lorem labore. Nonumy lobortis autem nonumy nonumy sit elitr.",
      ],
      icon: "iconLvl1",
      qta: [
        "Facilisis gubergren tation adipiscing et et?",
        "Et et et zzril lobortis accusam at nulla magna.",
        "Sed accusam dolor diam consetetur eos at facilisis sed dolores ut sea liber.",
        "Eos odio dolore cum lorem sed eleifend placerat.",
        "Te justo ut in amet quis consetetur duo gubergren."
      ],
      steps: [
        "Et eos dolore et sadipscing consetetur.",  
        "Ut vulputate lorem nisl dolore duo aliquyam tempor lobortis ut stet dolor id.",  
        "Lorem et magna sanctus eirmod voluptua molestie stet no ipsum.",  
        "Sea exerci no stet elitr et sed elitr molestie amet.",  
        "Lorem aliquyam lorem possim eirmod iusto vel.",  
      ],
      outputs: [
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
        {
            output: "Diam sit consequat consetetur magna tempor ut magna amet ad quis et vero sanctus ipsum at.",
            img: ""
        },
      ]
    },
    
  ]
}
</script>

<template>
  <main>
    <V1HeroCmptsHeroDefaultTempCmpt
      :category="pageData.heroSection.h6"
      :title="pageData.heroSection.h1" 
      :excerpt="pageData.heroSection.h5"
      :cta="pageData.heroSection.cta"
      :cover-image="pageData.heroSection.coverImage"/>
      
    <V1PageCmptsAboutCmptsAboutWorkProcessCmpt v-for="stage in pageData.workProcess" :props="stage" :key="stage.id"/>
  </main>
</template>

<style scoped></style>
