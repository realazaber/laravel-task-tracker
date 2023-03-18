<template>
    <div class="min-h-[100vh] w-full flex flex-row text-center items-center justify-center">
        <div class="w-1/3 text-left">        
            <h1 class="text-pri text-4xl font-bold w-full">Achieve more, stress less with Get It Done</h1>
            <p class="py-5 text-accent font-medium w-4/6">Get It Done will help you remember and complete tasks on time. 
                With features like recurring tasks, colour coding, dark mode and more.</p>
            <div class="flex py-3 gap-3">
                <nuxt-link class="border border-2 border-[#565454] rounded-md p-3 font-semibold" to="/about">Learn more</nuxt-link>
                <nuxt-link class="border border-2 border-sec bg-sec text-pri rounded-md p-3 font-semibold" to="/register">Get started</nuxt-link>
            </div>
        </div>
        <div class="w-1/3">
            <img src="/images/svgs/yellow/placeholders.svg" alt="Welcome image">
        </div>
    </div>
</template>

