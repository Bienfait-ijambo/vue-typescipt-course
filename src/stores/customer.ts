import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ICustomerInput } from '@/views/customer-types'

export const useCustomerStore = defineStore('customer', () => {

  function deleteCustomer(id:number): Promise<string>{
    return new Promise<string>((resolve, reject) => {
      try {
        resolve('customer deleted successfully')
      } catch (error) {
        reject(error)
      }
    })
  }

  function editCustomer(customer:ICustomerInput):Promise<ICustomerInput>{
    return new Promise<ICustomerInput>((resolve, reject) => {
      try {
        resolve(customer)
      } catch (error) {
        reject(error)
      }
    })
  }

  return {deleteCustomer,editCustomer}
})
