<template>
    <form action="https://formspree.io/f/mjvdevde" method="POST" class="flex flex-col">
        <h2 class="pb-5 text-xl text-center">Contact us</h2>
        <input placeholder="Name *" type="text" name="name" class="focus:border-b-4 focus:border-b-pri focus:border-t-0" required>
        <input placeholder="Email *" type="email" name="email" class="focus:border-b-4 focus:border-b-thir focus:border-t-0" required>
        <input placeholder="Phone" type="number" name="phone" class="focus:border-b-4 focus:border-b-sec focus:border-t-0">
        <textarea placeholder="Message *" name="message" cols="30" rows="5" class="focus:border-b-4 focus:border-b-pri focus:border-t-0" required></textarea>
        <input type="submit" value="Submit">
    </form>
</template>

