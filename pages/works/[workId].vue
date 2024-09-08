<script setup lang="ts">
const pageData = {
    name: "Praesent dolor diam commodo",
    client: "The Business Name, Address",
    links: [
        {
            name: "",
            icon: "",
            link: ""
        },
    ],
    team: [
        {
            name: "Juan Dela Cruz",
            role: "UX/UI Designer"
        },
        {
            name: "Juan Dela Cruz",
            role: "Full Stack Developer"
        }
    ],
    services: [
        "UI/UX", "Back-End", "Front-End", "Graphic Design", "Animation"
    ],
    date: "February 25th, 2022",
    thumbnail: {
        source: "",
        alt:""
    },
    overview: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veritatis minima dolorum aperiam saepe ratione eius perspiciatis, sequi facilis. Quod aspernatur incidunt vel dolores consequuntur quam in amet at veritatis nulla enim ratione fuga aliquam natus similique, nemo quia est rem obcaecati maiores voluptatum. Nisi ut aperiam vel commodi accusamus.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veritatis minima dolorum aperiam saepe ratione eius perspiciatis, sequi facilis. Quod aspernatur incidunt vel dolores consequuntur quam in amet at veritatis nulla enim ratione fuga aliquam natus similique, nemo quia est rem obcaecati maiores voluptatum. Nisi ut aperiam vel commodi accusamus.",
    ],
    challenges: {
        desc: [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, nam dignissimos quos molestiae optio numquam repudiandae nisi! Reprehenderit ab corrupti repellat sapiente, hic temporibus eius id, eum consectetur quod esse?",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, nam dignissimos quos molestiae optio numquam repudiandae nisi! Reprehenderit ab corrupti repellat sapiente, hic temporibus eius id, eum consectetur quod esse?",
        ],
        list:[
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, beatae.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, beatae.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, beatae.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, beatae.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, beatae.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, beatae.",
        ]
    },
    solutions: [
        "Elitr gubergren tincidunt ex dolor gubergren stet magna et ex sed aliquyam et wisi sed magna ea ipsum. Et no in consetetur at exerci sadipscing sadipscing dolor clita et est duo sanctus et at. Invidunt diam ea odio labore lorem odio et et blandit dolore magna accusam consectetuer et nulla. Mazim autem sit vel. Elitr magna blandit nonummy justo ut stet sanctus ut lorem clita sit erat voluptua tempor dolor invidunt lobortis. Eirmod lorem nonumy veniam amet. Clita ipsum sit. Dolore sanctus possim feugiat esse. Sea lorem et consequat dolor sadipscing lorem amet dolor lorem tation at dolor diam et takimata sanctus dolore. Sed ipsum stet sed liber sanctus ut ut consequat voluptua dolor.",
        "Vulputate facilisis gubergren in amet dolore dolores facilisis lorem augue. Sea erat est nonummy takimata et at consetetur lobortis labore no sadipscing rebum feugiat qui erat lorem sea. Ea lorem nulla diam adipiscing vero facilisis labore clita sed ea illum sadipscing. Lorem dolore takimata dolor invidunt erat stet sit lorem sit amet. Vel diam takimata voluptua lorem adipiscing odio et. Elit sed et est duo amet esse illum dolore nulla et dolor lobortis ea.",
        "At blandit eum et ut doming delenit te lorem elitr ipsum sed. Accumsan dolor stet eos magna labore liber est sit dolores labore imperdiet sit nonumy nulla dolores. Amet ad sea nulla voluptua clita no minim no nonumy vel eum sit voluptua duis sea erat."
    ],
    gallery:[
        {
          id: 1,
          source: "",
          alt:""
        },
        {
          id: 2,
          source: "",
          alt:""
        },
        {
          id: 3,
          source: "",
          alt:""
        },
        {
          id: 4,
          source: "",
          alt:""
        },
        {
          id: 5,
          source: "",
          alt:""
        },
        {
          id: 6,
          source: "",
          alt:""
        }
    ]

}
</script>

<template>
  <main>
    <V1PageCmptsWorkCmptsWorkProfileCmptsWorkProfileHeaderCmpt
      class="pt-16"
      :name="pageData.name"
      :client="pageData.client"
      :links="pageData.links"
      :team="pageData.team"
      :services="pageData.services"
      :date="pageData.date"/>

    <V1PageCmptsWorkCmptsWorkProfileCmptsWorkProfileOverviewCmpt
      :thumbnail="pageData.thumbnail"
      :overview="pageData.overview"/>
    
    <V1PageCmptsWorkCmptsWorkProfileCmptsWorkProfileChallengesCmpt
      :challenges="pageData.challenges"/>  

    <V1PageCmptsAdsCmptsAdsDefaultTemp class="[&>.defaultContainer]:xl:px-10"/>

    <V1PageCmptsWorkCmptsWorkProfileCmptsWorkProfileSolutionCmpt
      :solutions="pageData.solutions" />

    <V1PageCmptsWorkCmptsWorkProfileCmptsWorkProfileGalleryCmpt
      :gallery="pageData.gallery" />

    <V1PageCmptsAdsCmptsFooterAdsCmpt/>
  </main>
</template>

<style scoped></style>
