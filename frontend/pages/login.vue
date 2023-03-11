<template>
    <form>
        <label for="email">Email</label>
        <input type="email" name="email" required>
        <label for="password">Password</label>
        <input type="password" name="password" required>
        <input type="submit" value="Login">
    </form>
    <nuxt-link to="/register">Create account</nuxt-link>
</template>

