<script setup lang="ts">
  let scrollPosition = ref(0)
  const scrollLimit = 10
   function onScrollUpdate(){
      scrollPosition.value = window.scrollY
   }
  onMounted(()=>{
      window.addEventListener('scroll', onScrollUpdate)
  })

  const navItems = [
        {
            name: "Home",
            target: "/",
            hasChildren: false,
        },
        {
            name: "Services",
            target: "/services",
            hasChildren: false,
        },
        {
            name: "Works",
            target: "/works",
            hasChildren: false,
        },
        {
            name: "About Me",
            target: "/about",
            hasChildren: false,
        },
        {
            name: "How I Work",
            target: "/about/how-i-work",
            hasChildren: false,
        },
        {
            name: "What's New",
            target: "/whats-new",
            hasChildren: true,
            children:[
                {
                    name: "Articles",
                    target: "/whats-new/articles/",
                },
                {
                    name: "Blogs",
                    target: "/whats-new/blogs/",
                }
            ]
        },
        {
            name: "Let's Talk",
            target: "/contacts",
            hasChildren: false,
        },
    ]
</script>

<template>
  <header class="lg:sticky lg:top-0 w-full z-50 hover:shadow-lg bg-default" :class="scrollPosition > scrollLimit ? 'shadow-lg' : ''">
    
    <!-- start of defaultContainer -->
    <div class="defaultContainer flex justify-between items-center">
      
      <!-- brand logo -->
      <NuxtLink to="/" id="brand" class="">
        Logo
      </NuxtLink>
      <button class="lg:hidden" type="button">Menu</button>
      <!-- start of main navigation -->
      <nav class=" hidden lg:flex flex-col lg:flex-row lg:gap-5 font-semibold py-1" id="nav">

        <!-- start of navItm -->
        <div id="navItm" v-for="(navItm,index) in navItems" :key="index" onclick="void(0)" class="[&:has(a.router-link-active)]:border-b-2 border-[var(--custom-primary)] hover:border-b-2 last:btn-primary">
      
            <!--navItem link-->
            <NuxtLink :to="navItm.target" class="block py-3 px-3">{{ navItm.name }}</NuxtLink>
            
            <!-- start of subNavItm -->
            <div v-if="navItm.hasChildren" id="subNav">
            
            <!-- end of subNavItm -->
            </div>
            
            <!-- end of navItm -->
        </div>

      <!-- start of main navigation -->
      </nav>
      <!-- end of defaultContainer -->
    </div>
  </header>
</template>

<style scoped>
</style>
