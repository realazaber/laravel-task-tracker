<template>
    <footer class="flex flex-row justify-between p-5">
        <div>
            <UniversalLogo :width="12" :height="24" />
        </div>
        <div class="flex flex-col text-right gap-3
        ">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
            <nuxt-link to="/contact">Contact Us</nuxt-link>
            <nuxt-link to="/login">Login</nuxt-link>
        </div>
    </footer>
    <div class="text-center bg-accent text-white p-1">
        <a href="https://www.azaber.com" target="_blank">2023 Azaber</a>
    </div>
</template>

