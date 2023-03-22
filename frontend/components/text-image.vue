<template>
    <div :class="containerClass">
      <div :class="`w-2/3 flex items-center mx-5 ${paragraphClass}`">
        <p>{{ paragraphText }}</p>
      </div>
      <div class="w-1/3 flex" :class="imageClass">
        <img :src="imageUrl" :alt="altText" class="h-96 rounded-xl object-top" />
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
      const containerClass = computed(() => `flex my-5 mx-auto justify-center items-center ${props.textLeft ? 'flex-row' : 'flex-row-reverse'}`);
      const paragraphClass = computed(() => `w-1/2 ${props.textLeft ? 'justify-end' : 'justify-start'}`);
      const imageClass = computed(() => `justify-${props.textLeft ? 'start' : 'end'}`);
  
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