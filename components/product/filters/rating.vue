<script setup>
const isOpen = ref(true)
</script>


<template>
    <div>
        <div class="cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center"
            @click="isOpen = !isOpen">
            <span>Rating</span>
            <Icon name="ion:chevron-down-outline" class="transform transition-all duration-200"
                :class="isOpen ? 'rotate-180' : ''" />
        </div>
        <Transition name="drop-down" mode="in-out">

            <div v-if="isOpen" class="mt-3 text-sm grid text-gray-500 gap-2">
                <div class="cursor-pointer flex gap-2 items-center">
                    <input id="star-five" type="radio" value="5" aria-label="5 stars" @click="radioClicked('5')" />
                    <label for="star-five">
                        <VueStarRating :rating="5" :size="16" />
                    </label>
                </div>
                <div class="cursor-pointer flex gap-2 items-center">
                    <input id="star-four" type="radio" value="4" aria-label="4 stars" @click="radioClicked('4')" />
                    <label for="star-four">
                        <VueStarRating :rating="4" :size="16" /> & Up
                    </label>
                </div>
                <div class="cursor-pointer flex gap-2 items-center">
                    <input id="star-three" type="radio" value="3" aria-label="3 stars" @click="radioClicked('3')" />
                    <label for="star-three">
                        <VueStarRating :rating="3" :size="16" /> & Up
                    </label>
                </div>
                <div class="cursor-pointer flex gap-2 items-center">
                    <input id="star-two" type="radio" value="2" aria-label="2 stars" @click="radioClicked('2')" />
                    <label for="star-two">
                        <VueStarRating :rating="2" :size="16" /> & Up
                    </label>
                </div>
                <div class="cursor-pointer flex gap-2 items-center">
                    <input id="star-one" type="radio" value="1" aria-label="1 star" @click="radioClicked('1')" />
                    <label for="star-one">
                        <VueStarRating :rating="1" :size="16" /> & Up
                    </label>
                </div>
            </div>
        </Transition>
    </div>
</template>