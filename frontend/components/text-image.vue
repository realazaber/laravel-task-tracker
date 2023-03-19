<template>
        <div :class="`flex my-5 mx-auto justify-center ${className}`">
            <p class="w-2/3">
                {{ paragraphText }}
            </p>
            <img :src="imageUrl" :alt="altText" class="w-1/3 h-96 rounded-md">
        </div>
</template>

<script lang="ts">
    export default {
       props: {
            paragraphText: {
                type: String,
                default: ""
            },
            altText: {
                type: String,
                default: "Get It Done"
            },
            imageUrl: {
                type: String,
                default: ""
            },
            textLeft: {
                type: Boolean,
                default: true
            }
       },
       computed: {
        className() {
            if (this.textLeft == true) {
                return `flex-row`
            }
            else {
                return `flex-row-reverse`
            }
        }
       } 
    }
</script>

<style lang="scss" scoped>

</style>