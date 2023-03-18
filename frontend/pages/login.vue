<template>
    <form class="flex flex-col">
        <input placeholder="Email" type="email" name="email" required>
        <input placeholder="Password" type="password" name="password" required>
        <input class="hover:drop-shadow-xl" type="submit" value="Login">
        <nuxt-link class="pt-3" to="/register">Create account</nuxt-link>
    </form>
</template>

