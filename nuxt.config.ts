// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "nuxt-bootstrap-icons", "@nuxt/image"],
  colorMode: {
    classSuffix: "",
  },
  app: {
    head: {
      title: "Niño Deo | IT Professional",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "An IT professional that can provide various IT related products and services for you and your business.",
        },
        {
          name: "keywords",
          content:
            "IT Specialist, Web Developer, Philippines, Cavite, IT Freelance, IT Professional, Front-End Developer, Full-stack Developer, Back-End Developer, IT Consultant",
        },
        { name: "author", content: "Niño Deo Dimaangay" },
      ],
      charset: "utf-8",
    },
  },
});