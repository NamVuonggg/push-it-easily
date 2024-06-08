import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useHomeStore = defineStore('home', () =>{

  const navSearchValue = ref();
  const selectedCountries = ref();
  const countries = ref(["America","Japan"]);
  const checked = ref(false);
  const visible = ref(false);
  const PasswordValue = ref();
  const PasswordIsConfirmed = ref(false)
  const ActiveConfirmButton = ref(true)
  const ActiveSpinner = ref(false);
  const PasswordCheck = () =>{
    if(PasswordValue.value === "1234"){
      ActiveSpinner.value = true;
      PasswordValue.value = ("");
      setTimeout(function(){
        ActiveSpinner.value = false;
      },800)
      ActiveConfirmButton.value = false;
      setTimeout(function(){
        PasswordIsConfirmed.value = true;
      },1000)
      setTimeout(function(){
        PasswordIsConfirmed.value = false;
        ActiveConfirmButton.value = true
      },5000)
    }else{
      ActiveConfirmButton.value = false;
      IncorrectPasswordMess.value = true;
      setTimeout(function(){
        IncorrectPasswordMess.value = false;
        ActiveConfirmButton.value = true;
      },1700);
      PasswordValue.value = ("");
    }
  }
  const IncorrectPasswordMess = ref(false)



    return { 
      navSearchValue, 
      selectedCountries, 
      countries, 
      visible, 
      PasswordValue, 
      PasswordIsConfirmed, 
      PasswordCheck, 
      ActiveConfirmButton,
      IncorrectPasswordMess,
      ActiveSpinner,
      checked
    }
  })