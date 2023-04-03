<template>
    <div :class="containerClass">
      <div :class="`w-full phone:w-2/3 flex items-start mx-5 ${paragraphClass}`">
        <p>{{ paragraphText }}</p>
      </div>
      <div class="w-full phone:w-1/3 flex justify-center items-center" :class="imageClass">
        <img :src="imageUrl" :alt="altText" class="h-96 w-5/6 rounded-xl object-top" />
      </div>
    </div>
  </template>
  <script>
  import { computed } from 'vue';
  
  export default {
    props: {
      paragraphText: {
        type: String,
        default: '',
      },
      altText: {
        type: String,
        default: 'Get It Done',
      },
      imageUrl: {
        type: String,
        default: '',
      },
      textLeft: {
        type: Boolean,
        default: true,
      },
    },
    setup(props) {
      const containerClass = computed(() => `flex flex-col my-5 mx-auto justify-center items-center ${props.textLeft ? 'phone:flex-row' : 'phone:flex-row-reverse'}`);
      const paragraphClass = computed(() => `w-1/2 ${props.textLeft ? 'justify-end' : 'justify-start'}`);
      const imageClass = computed(() => `phone:justify-${props.textLeft ? 'start' : 'end'}`);
  
      return {
        containerClass,
        paragraphClass,
        imageClass,
      };
    },
  };
  </script>
  <style lang="scss" scoped>
  
  </style>