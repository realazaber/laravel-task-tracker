<template>
    <form class="flex flex-col">
        <h2 class="pb-5 text-xl text-center">Contact us</h2>
        <input placeholder="Name *" type="text" name="name" required>
        <input placeholder="Email *" type="email" name="email" required>
        <input placeholder="Phone" type="number" name="phone">
        <textarea placeholder="Message *" name="message" cols="30" rows="5" required></textarea>
        <input type="submit" value="Submit">
    </form>
</template>

