<template>
    <footer class="flex flex-row justify-between p-5">
        <div>
            <Logo :width="12" :height="24" />
        </div>
        <div class="flex flex-col text-right gap-3
        ">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
            <nuxt-link to="/contact">Contact Us</nuxt-link>
            <nuxt-link to="/login">Login</nuxt-link>
        </div>
    </footer>
</template>

