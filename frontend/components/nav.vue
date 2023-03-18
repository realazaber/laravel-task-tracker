<template>
    <nav class="p-5 h-24 flex justify-between items-center">
        <Logo :width="24" :height="12" />
        <div class="flex flex-row gap-8 items-center">
            <nuxt-link class="hover:text-gray-900" to="/about">About</nuxt-link>
            <nuxt-link class="hover:text-gray-900" to="/contact">Contact Us</nuxt-link>
            <nuxt-link class="border border-2 bg-pri border-pri text-sec font-semibold rounded-md hover:rounded-lg active:rounded-xl w-20 h-12 flex justify-center items-center" to="/login">Login</nuxt-link>
        </div>
    </nav>
</template>

