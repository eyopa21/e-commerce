<script setup>
import update_query from '../../queries/update/update-user-billing.gql'
import { BillingValidationSchema } from '~/zod/BillingSchema ';
const { mutate: Update, onDone, onError, loading } = useMutation(update_query)
const currentUser = useCurrentUser();

const buttonText = computed(() => (loading.value ? 'Updating...' : 'Update Details'));

const { company_name, country, city, sub_city, address1, address2, kebele, zip_code } = currentUser.value.currentUser.billing_and_shipping_addresses[0]
const State = ref({
  company_name,
  country,
  city,
  sub_city,
  address1,
  address2,
  kebele,
  zip_code
})

async function saveChanges() {
  console.log("save", State.value)
  Update({
    user_id: currentUser.value.id,
    company_name: State.value.company_name,
    country: State.value.country,
    city: State.value.city,
    sub_city: State.value.sub_city,
    address1: State.value.address1,
    address2: State.value.address2,
    kebele: State.value.kebele,
    zip_code: State.value.zip_code
  })

  onDone(res => {
    console.log(res)
  })
  onError(err => {
    console.log(err)
  })
}
</script>


<template>
  <UForm v-if="currentUser.currentUser" :schema="BillingValidationSchema" :state="State"
    class="bg-white rounded-lg shadow" @submit="saveChanges">
    <div class="grid p-8 gap-6 md:grid-cols-2">
      <h3 class="font-semibold text-xl col-span-full">Billing</h3>

      <UFormGroup name="company_name" class="w-full">
        <label for="first-company_name">Company name</label>
        <input v-model="State.company_name" placeholder="Company name" type="text" />
      </UFormGroup>

      <UFormGroup name="country" class="w-full">
        <label for="country">Country</label>
        <input v-model="State.country" placeholder="country" type="text" />
      </UFormGroup>

      <UFormGroup name="city" class="w-full">
        <label for="city">City</label>
        <input v-model="State.city" placeholder="City" type="text" />
      </UFormGroup>

      <UFormGroup name="sub_city" class="w-full">
        <label for="sub_city">Sub city</label>
        <input v-model="State.sub_city" placeholder="Sub City" type="text" />
      </UFormGroup>

      <UFormGroup name="kebele" class="w-full">
        <label for="kebele">Kebele</label>
        <input v-model="State.kebele" placeholder="kebele" type="text" />
      </UFormGroup>

      <UFormGroup name="address1" class="w-full">
        <label for="address1">Address1</label>
        <input v-model="State.address1" placeholder="123 Main St" type="text" />
      </UFormGroup>

      <UFormGroup name="address2" class="w-full">
        <label for="address-2">Address2</label>
        <input v-model="State.address2" placeholder="Apartment, studio, or floor" type="text" />
      </UFormGroup>


      <UFormGroup name="zip_code" class="w-full">
        <label for="zip_code">Zip code</label>
        <input v-model="State.zip_code" placeholder="10001" type="text" />
      </UFormGroup>


      <!--div class="w-full">
        <label for="billing-state">State</label>
        <LazyStateSelect :default-value="customer.billing.state" :country-code="customer.billing.country" />
      </!--div>

      <div-- class="w-full">
        <label for="country">Country</label>
        <LazyCountrySelect :default-value="customer.billing.country" :allowed-countries="allowedCountries" />
      </div-->




    </div>



    <div class="bg-white backdrop-blur-sm bg-opacity-75 border-t col-span-full p-4 sticky bottom-0 rounded-b-lg">
      <button class="rounded-md flex font-semibold bg-primary ml-auto text-white py-2 px-4 gap-4 items-center">
        <VueLoadingIcon v-if="loading" color="#fff" size="20" />
        <span>{{ buttonText }}</span>
      </button>
    </div>
  </UForm>
</template>


