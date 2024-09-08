<script setup lang="ts">
const cmptData= {
  title: "Tell me about your project and goals.",
  formData: [
    {
      type: "text",
      label: "First Name *",
      name: "fname",
      placeholder: "Juan",
      required: true
    },
    {
      type: "text",
      label: "Last Name *",
      name: "lname",
      placeholder: "Dela Cruz",
      required: true
    },
    {
      type: "email",
      label: "Email Address *",
      name: "email",
      placeholder: "juandelacruz@email.com",
      required: true
    },
    {
      type: "text",
      label: "Contact Number (Optional)",
      name: "contactNum",
      placeholder: "+639 XXX XXX XXX",
    },
    {
      type: "text",
      label: "Subject *",
      name: "subject",
      placeholder: "ex. Website Design",
      required: true
    },
    {
      type: "textarea",
      label: "Message *",
      name: "message",
      placeholder: "Message Content",
      required: true
    },
  ]

}
</script>

<template>
  <section>
    <div class="defaultContainer xl:px-10 flex flex-col space-y-8">
      <h2
        class="defaultTitle ">
        {{ cmptData.title }}
      </h2>

      <form
        action=""
        class="grid grid-cols-1 md:grid-cols-2 gap-5 xl:max-w-4xl">
          
          <V1GlobalCmptsInputCmpt
            class="md:[&:nth-child(5)]:col-span-2 md:[&:nth-child(6)]:col-span-2"
            v-for="(field, index) in cmptData.formData"
            :key="index"
            :props="field"/>

          <!--start of form footer-->
          <div id="formFooter" class="col-span-2 flex flex-col space-y-5">
            <!-- start of required checkbox -->
            <div id="">
                <label 
                  for="agree" 
                  class="flex cursor-pointer items-start gap-4">
                      <div 
                      class="flex items-center">
                          &#8203;
                          <input 
                          type="checkbox" 
                          class="size-4 rounded border-gray-300" id="agree" 
                          required />
                      </div>
              
                      <div>
                          <strong 
                          class="font-medium text-lg"> 
                              * I understand that by submitting my contact details, I authorize their use for responding to my request by email and/or phone.(Required) 
                          </strong>
                      </div>
                  </label>
                <!-- end of required checkbox -->
              </div>  

              <!-- start of submit button-->
              <div>
                <button
                type="submit"
                class="btn flex items-center gap-5 btn-primary font-semibold hover:btn-outline-primary hover:border-none">
                    <h1
                    class="h1">
                        Submit
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-arrow-up-right aspect-square w-10" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </button>
                <!--end of submit button-->
              </div>

            <!--end of form footer-->
          </div>
      </form>

    </div>
  </section>
</template>

<style scoped></style>
