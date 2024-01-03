<template>
  <form class="bg-white rounded-lg shadow" @submit.prevent="saveChanges">
    <div class="grid gap-6 p-8 md:grid-cols-2">
      <h3 class="text-xl font-semibold col-span-full">Personal Info</h3>

      <div class="w-full">
        <label for="first-name">First name</label>
        <input placeholder="John" type="text" />
      </div>

      <div class="w-full">
        <label for="last-name">Last name</label>
        <input placeholder="Doe" type="text" />
      </div>
      <div class="w-full col-span-full">
        <label for="email">Email</label>
        <input placeholder="johndoe@email.com" type="email" />
      </div>
    </div>
    <div class="bg-white backdrop-blur-sm bg-opacity-75 border-t col-span-full p-4 sticky bottom-0 rounded-b-lg">
      <button class="rounded-md flex font-semibold bg-primary ml-auto text-white py-2 px-4 gap-4 items-center">
        <LoadingIcon v-if="loading" color="#fff" size="20" />
        <span>{{ buttonText }}</span>
      </button>
    </div>
  </form>
</template>

<script setup>


const loading = ref(false);
const buttonText = computed(() => (loading.value ? 'Updating...' : 'Update Details'));

async function saveChanges() {
  console.log("save")
}
</script>
