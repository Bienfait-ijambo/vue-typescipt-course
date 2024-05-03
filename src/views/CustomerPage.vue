<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ICustomerInput, ICustomerList } from './customer-types'
import CustomerTable from '@/components/CustomerTable.vue'
import { useCustomerStore } from '@/stores/customer'

const customerStore = useCustomerStore()

const customerInput = ref<ICustomerInput>({
  customerName: '',
  customerEmail: ''
})

const customers: Array<ICustomerList> = [
  {
    id: 1,
    customerName: 'Ben',
    customerEmail: 'ben@gmail.com'
  }
]

async function editCustomer(customer: ICustomerList) {
  const data = await customerStore.editCustomer({
    customerName: customer.customerName,
    customerEmail: customer.customerEmail
  })
  console.log(data)
}
async function deleteCustomer(customer: ICustomerList) {
  const data = await customerStore.deleteCustomer(customer.id)
  console.log(data)
}

// const customerInput=ref<ICustomerInput>({
//   customerName:'',
//   customerEmail:''
// })
</script>

<template>
  <div class="container">
    <h1>Customer Page</h1>

    <div class="row">
      <div class="col-md-4">
        <form>
          <div class="form-group">
            <label>Customer Name</label>
            <input type="text" class="form-control" v-model="customerInput.customerName" />
          </div>
          <div class="form-group">
            <label>Customer Email</label>
            <input type="text" class="form-control" v-model="customerInput.customerEmail" />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Create Customer</button>
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <CustomerTable
          @editCustomer="editCustomer"
          @deleteCustomer="deleteCustomer"
          :customers="customers"
        />
      </div>
    </div>
  </div>
</template>
