<script setup lang="ts">
import type { ICustomerList } from '@/views/customer-types'

defineProps<{
  customers: Array<ICustomerList>
}>()

const emit = defineEmits<{
  (e: 'editCustomer', customer: ICustomerList): void
  (e: 'deleteCustomer', customer: ICustomerList): void
}>()
</script>
<template>
  <table class="table table-striped table-bordered">
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Email</td>
      <td>Update</td>
      <td>Delete</td>
    </tr>
    <tr v-for="customer in customers" :key="customer.id">
      <td>{{ customer.id }}</td>
      <td>{{ customer.customerName }}</td>
      <td>{{ customer.customerEmail }}</td>
      <td>
        <button class="btn btn-primary"
        style="color:black"
         @click="emit('editCustomer', customer)">Edit</button>
      </td>
      <td>
        
        <button 
        style="color:black"

         class="btn btn-danger" @click="emit('deleteCustomer', customer)">Delete</button>
      </td>
    </tr>
  </table>
</template>
