<template>
    <select v-model="locale" aria-label="Language switcher" class="bg-white">
        <option v-for="locale in locales" :key="locale" :value="locale.code" v-html="locale.name" />
    </select>
</template>