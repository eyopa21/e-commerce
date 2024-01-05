<script setup>
const currentUser = useCurrentUser();


const loading = ref(false);
const buttonText = computed(() => (loading.value ? 'Updating...' : 'Update Details'));

const { user_name, last_name, first_name } = currentUser.value.currentUser

const previousState = {
  user_name,
  last_name,
  first_name
}
const State = ref(previousState)
const deepEqual = computed((obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
})

async function saveChanges() {
  console.log("save")
}
</script>

<template>
  <UForm v-if="currentUser.currentUser" :state="State" class="bg-white rounded-lg shadow" @submit="saveChanges">
    <div class="grid gap-6 p-8 md:grid-cols-2">

      <br>
      <br>


      <h3 class="text-xl font-semibold col-span-full">Personal Info
        <span class="text-xs font-normal text-primary">({{ currentUser.currentUser.email }})</span>

      </h3>

      <UFormGroup name="first-name" class="w-full">
        <label for="first-name">First name</label>
        <input v-model="State.first_name" placeholder="John" type="text" />
      </UFormGroup>

      <UFormGroup name="last-name" class="w-full">
        <label for="last-name">Last name</label>
        <input v-model="State.last_name" placeholder="Doe" type="text" />
      </UFormGroup>
      <UFormGroup name="last-name" class="w-full col-span-full">

        <label for="username">User name</label>
        <input v-model="State.user_name" placeholder="User name" type="text" />
      </UFormGroup>
    </div>
    <div class="bg-white backdrop-blur-sm bg-opacity-75 border-t col-span-full p-4 sticky bottom-0 rounded-b-lg">
      <button type="submit" :disabled="State === previousState"
        class="rounded-md flex font-semibold bg-primary ml-auto text-white py-2 px-4 gap-4 items-center disabled:opacity-20">
        <LoadingIcon v-if="loading" color="#fff" size="20" />
        <span>{{ buttonText }}</span>
      </button>
    </div>
  </UForm>
</template>


