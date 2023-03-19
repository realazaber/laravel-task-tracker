<template>
    <nuxt-link to="/"><img :class="`${className}`" src="/images/logo.webp" alt="logo"></nuxt-link>
</template>

<script lang="ts">
    let className = "";
    export default {
        props: {
            height: {
                type: Number,
                default: 16
            },
            width: {
                type: Number,
                default: 24
            },
        },
        computed: {
            className() {
                return `w-${this.width} h-${this.height}`;
            }
        }
        
    }
</script>

<style lang="scss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>