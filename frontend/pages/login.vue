<template>
    <form class="flex flex-col">
        <input placeholder="Email" type="email" name="email" class="focus:border-b-4 focus:border-b-pri focus:border-t-0" required>
        <input placeholder="Password" type="password" name="password" class="focus:border-b-4 focus:border-b-thir focus:border-t-0" required>
        <input class="hover:drop-shadow-xl" type="submit" value="Login">
        <nuxt-link class="pt-3" to="/register">Create account</nuxt-link>
    </form>
</template>

