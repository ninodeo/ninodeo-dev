<script setup lang="ts">
const pageData= {
  heroSection:{
    h6: "FAQs",
    h1:"Frequently Asked Questions",
    h5: "Quick answer to the questions that you may have. Can't find what you're looking for? Feel free to get in touch with me to discuss your ideas.",
    cta:{
      isButton: true,
      text: "Get In Touch",
      link: "/contacts"
    },
  },
  questions: [
    {
      id: 1,
      topic: "General Topic",
      slug:"general_topic_1",
      faqs:[
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
      ]
    },
    {
      id: 2,
      topic: "General Topic",
      slug:"general_topic_2",
      faqs:[
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
      ]
    },
    {
      id: 3,
      topic: "General Topic",
      slug:"general_topic_3",
      faqs:[
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
      ]
    },
    {
      id: 4,
      topic: "General Topic",
      slug:"general_topic_4",
      faqs:[
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
      ]
    },
    {
      id: 5,
      topic: "General Topic",
      slug:"general_topic_5",
      faqs:[
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
      ]
    },
    {
      id: 6,
      topic: "General Topic",
      slug:"general_topic_6",
      faqs:[
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
        {
          question:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt?",
          answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatibus magnam! Hic iusto nulla impedit id consectetur. Dicta, cupiditate magnam maxime ad repellat suscipit totam modi tempore, distinctio, dignissimos optio?"
        },
      ]
    }
  ]
}
</script>

<template>
  <main>
    <V1HeroCmptsHeroDefaultTempCmpt
      :category="pageData.heroSection.h6"
      :title="pageData.heroSection.h1" 
      :excerpt="pageData.heroSection.h5"
      :cta="pageData.heroSection.cta"/>

    <section>
      <!--start of defaultContainer-->
      <div
        class="defaultContainer px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <!-- start of content directory -->
        <div
          id="tableContentContainer"
          class="hidden lg:block lg:relative col-span-3">
            <div class="flex flex-col space-y-5 sticky top-[10vh]">
              <div class="flex flex-col items-start">
                <h5 class="defaultTitle border-b-2 border-[var(--custom-primary)] pb-3">
                  Table of Contents
                </h5>
                
              </div>
              
              <div class="flex flex-col font-bold">
                <a
                  class="link link-dark dark:link-light hover:bg-slate-200 dark:hover:bg-slate-800 p-3"
                  v-for="(topic, index) in pageData.questions"
                  :key="index"
                  :href="'#'+topic.slug">
                  {{ topic.topic }} {{ topic.id }}
                </a>
              </div>
            </div>
          <!-- end of content directory -->
        </div>

        <!--start of main content container-->
        <div
          id="listProper"
          class="col-span-9 flex flex-col space-y-20">

          <V1PageCmptsAboutCmptsAboutFaqCategoryCmpt
            v-for="(category,id) in pageData.questions"
            :key="id"
            :props="category"
             />

          <!--end of main content container-->
        </div>

        <!--end of defaultContainer-->
      </div>

    </section>

    <V1PageCmptsAdsCmptsFooterAdsCmpt/>
    
  </main>
</template>

<style scoped></style>
