import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const rollingNumObj = reactive({
    numOne: 0,
    numTwo: 0,
    numThree: 0,
    numFour: 0
  })

  const update = () => {
    rollingNumObj.numOne = Math.floor(Math.random() * 9)
    rollingNumObj.numTwo = Math.floor(Math.random() * 9)
    rollingNumObj.numThree = Math.floor(Math.random() * 9)
    rollingNumObj.numFour = Math.floor(Math.random() * 9)
  }


  return { rollingNumObj, update }
})