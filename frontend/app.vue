<template>
  <UniversalNav/>
    <main class="w-5/6 min-h-[60vh] mx-auto flex flex-col justify-center items-center">
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
          @apply rounded-md hover:rounded-lg;
        }

        form {
          @apply border rounded-md p-5 shadow-md flex flex-col;

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
