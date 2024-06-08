<script setup>
import { useHomeStore } from '@/stores/homeview';
import { RouterLink } from 'vue-router';
import InputOtp from 'primevue/inputotp';
const store = useHomeStore();
</script>

<template>
    <div class="flex flex-column justify-content-center align-items-center container">
        <span>Enter Password</span>
        <div class="card flex justify-content-center mt-3">
            <InputOtp v-model="store.PasswordValue" mask @keyup.enter="store.PasswordCheck"/>
        </div>
        <Message severity="success" v-if="store.PasswordIsConfirmed">Password is Correct, you have 5 seconds to click the Home Page button</Message>
        <Message severity="error" v-if="store.IncorrectPasswordMess">Incorrect Password, please try again</Message>
        <Button @click="store.PasswordCheck" class="mt-4" v-if="store.ActiveConfirmButton">Confirm</Button>
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
        animationDuration=".5s" aria-label="Custom ProgressSpinner" class="mt-3" v-if="store.ActiveSpinner"/>
        <RouterLink to="/home" v-if="store.PasswordIsConfirmed">
            <Button class="mt-4" severity="contrast">Go to Home Page <i class="pi pi-angle-right ml-2" style="font-size: 1rem"></i></Button>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
    .container{
        margin-top: 10%;
        padding: 10rem;
    }
</style>
