<script setup>
import update_query from '../../queries/update/update-user-billing.gql'
import { ChangePasswordValidationSchema } from '../../zod/ChangePasswordSchema';
const { mutate: Update, onDone, onError, loading } = useMutation(update_query)
const currentUser = useCurrentUser();

const buttonText = computed(() => (loading.value ? 'Updating...' : 'Update Details'));

const Password = ref({
  old: '',
  new: '',
  confirm: ''
});

async function changePassword() {
  console.log("change password", State.value)


  onDone(res => {
    console.log(res)
  })
  onError(err => {
    console.log(err)
  })
}
</script>

<template>
  <UForm :schema="ChangePasswordValidationSchema" :state="Password" class="bg-white rounded-lg shadow mt-4"
    @submit.prevent="changePassword()">
    <div class="grid p-8 gap-6 md:grid-cols-2">
      <h3 class="font-semibold text-xl col-span-full">Change password</h3>
      <UFormGroup name="old_password" class="w-full">
        <label for="current-password">Current Password</label>
        <input v-model="Password.old" placeholder="••••••••••" type="text" />
      </UFormGroup>
      <br class="hidden md:block" />

      <UFormGroup name="new_password" class="w-full">
        <label for="new-password">New password</label>
        <input v-model="Password.new" placeholder="••••••••••" type="password" />
      </UFormGroup>

      <UFormGroup name="confirm_password" class="w-full">
        <label for="new-password-confirm">Confirm new password</label>
        <input v-model="Password.confirm" placeholder="••••••••••" type="password" />
      </UFormGroup>
    </div>

    <div class="bg-white backdrop-blur-sm bg-opacity-75 border-t col-span-full p-4 sticky bottom-0 rounded-b-lg">
      <button type="submit"
        class="rounded-md bg-primary flex font-semibold ml-auto text-white py-2 px-4 gap-4 items-center">
        Update password
      </button>
    </div>
  </UForm>
</template>


