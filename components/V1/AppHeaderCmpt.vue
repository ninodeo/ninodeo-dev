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
    <div class="defaultContainer flex justify-between items-center xl:px-10">
      
      <!-- brand logo -->
      <NuxtLink to="/" id="brand" class="">
        Logo
      </NuxtLink>
      <button class="lg:hidden" type="button">Menu</button>
      <!-- start of main navigation -->
      <nav class=" hidden lg:flex flex-col lg:flex-row lg:gap-5 font-semibold py-1" id="nav">

        <!-- start of navItm -->
        <div id="navItm" v-for="(navItm,index) in navItems" :key="index" onclick="void(0)" class="group relative [&:has(a.router-link-active)]:border-b-2 border-[var(--custom-primary)] hover:border-b-2 last:btn-outline-primary last:rounded-md">

            <!--navItem link-->
            <NuxtLink :to="navItm.target" class="flex flex-row gap-3 py-3 px-3">
                {{ navItm.name }}
                
                <!-- dropdown icon -->
                <svg v-if="navItm.hasChildren" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
            </NuxtLink>
            
            <!-- start of subNavItm -->
            <ul v-if="navItm.hasChildren" id="subNav" class="hidden group-hover:block transition duration-300 md:absolute top-full left-0 md:w-48 md:shadow-lg md:rounded-b bg-light dark:bg-dark">
                <li v-for="(subNav, idx) in navItm.children" :key="idx">
                    <NuxtLink :to="subNav.target" class="flex px-4 py-3 link">
                        {{ subNav.name }}
                    </NuxtLink>
                </li>
            <!-- end of subNavItm -->
            </ul>
            
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
