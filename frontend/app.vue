<template>
  <UniversalNav/>
    <main class="phone:w-5/6 w-[90%] mt-24 min-h-[60vh] mx-auto flex flex-col justify-center items-center">
      <NuxtPage />
    </main>
  <UniversalFooter/>
</template>

<style lang="scss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer components {
    * {
      
      
              
      body {
        @apply text-accent scroll-smooth overflow-auto scrollbar-thin scrollbar-thumb-pri scrollbar-track-gray-400;

        nav {
          @apply duration-300;
        }

        h2 {
          @apply text-lg;
        }

        p {
          @apply p-3;
        }

        img {
          @apply object-contain;
        }

        .btn {
          @apply rounded-md hover:rounded-lg w-1/2 phone:w-auto text-sm phone:text-base;
        }

        form {
          @apply border rounded-md p-5 shadow-md flex flex-col w-[90%] phone:w-80;

          label {
            @apply text-base;
          }
          
          input, textarea {
            @apply border mb-3 p-3 border-2 rounded-md;  
          }
          input[type=submit] {
            @apply hover:cursor-pointer hover:drop-shadow-md active:drop-shadow-xl duration-300;
          }
        }
      }
      }
    }
  
</style>
