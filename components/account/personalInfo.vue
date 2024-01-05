<script setup>
import update_query from '../../queries/update/update-user-account.gql'
import { UserAccountValidationSchema } from '~/zod/UserAccountSchema';
const { mutate: Update, onDone, onError, loading } = useMutation(update_query)
const currentUser = useCurrentUser();



const buttonText = computed(() => (loading.value ? 'Updating...' : 'Update Details'));
const { user_name, last_name, first_name, phone_number } = currentUser.value.currentUser


const previousState = ref({
  user_name,
  last_name,
  first_name,
  phone_number
})
const State = ref(previousState)


function saveChanges() {
  console.log("save", State.value)
  Update({ user_id: currentUser.value.id, user_name: State.value.user_name, first_name: State.value.first_name, last_name: State.value.last_name, phone_number: State.value.phone_number })
  onDone(res => {
    console.log(res)
  })
  onError(err => {
    console.log(err)
  })
}
</script>

<template>
  <UForm v-if="currentUser.currentUser" :schema="UserAccountValidationSchema" :state="State"
    class="bg-white rounded-lg shadow" @submit="saveChanges()">
    <div class="grid gap-6 p-8 md:grid-cols-2">
      {{ State }}
      <h3 class="text-xl font-semibold col-span-full">Personal Info
        <span class="text-xs font-normal text-primary">({{ currentUser.currentUser.email }})</span>
      </h3>

      <UFormGroup name="first_name" class="w-full">
        <label for="first_name">First name</label>
        <input v-model="State.first_name" placeholder="John" type="text" />
      </UFormGroup>

      <UFormGroup name="last_name" class="w-full">
        <label for="last_name">Last name</label>
        <input v-model="State.last_name" placeholder="Doe" type="text" />
      </UFormGroup>
      <UFormGroup name="user_name" class="w-full col-span-full">

        <label for="user_name">User name</label>
        <input v-model="State.user_name" placeholder="User name" type="text" />
      </UFormGroup>
      <UFormGroup name="phone_number" class="w-full col-span-full">

        <label for="phone_number">Phone number</label>
        <input v-model="State.phone_number" placeholder="0911111111" type="text" />
      </UFormGroup>
    </div>
    <div class="bg-white backdrop-blur-sm bg-opacity-75 border-t col-span-full p-4 sticky bottom-0 rounded-b-lg">
      <button type="submit"
        class="rounded-md flex font-semibold bg-primary ml-auto text-white py-2 px-4 gap-4 items-center disabled:opacity-20">
        <VueLoadingIcon v-if="loading" color="#fff" size="20" />
        <span>{{ buttonText }}</span>
      </button>
    </div>
  </UForm>
</template>


