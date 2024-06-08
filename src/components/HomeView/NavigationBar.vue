<script setup>
import { RouterLink } from 'vue-router';
import { useHomeStore } from "@/stores/homeview"

const store = useHomeStore();

</script>


<template>
    <div class="nav-container flex align-items-center justify-content-between px-5 py-3 gap-4">
        <RouterLink to ="/home" style="text-decoration: none; color: inherit;">
            <div class="flex align-items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/128/9523/9523790.png" width="40px" alt="">
                <span class="font-bold">THESIS ASSISTANT</span>
            </div>
        </RouterLink>
        <IconField iconPosition="left">
            <InputIcon class="pi pi-search"></InputIcon>
            <InputText v-model="store.navSearchValue" placeholder="Search" class="w-30rem"/>
        </IconField>
        <div class="flex gap-2">
            <RouterLink to="/" style="text-decoration: none; color: inherit;">
                <div class="card flex justify-content-center">
                    <ToggleButton v-model="store.checked" onLabel="Locked" offLabel="Unlocked" onIcon="pi pi-lock" 
                    offIcon="pi pi-lock-open" class="w-9rem" aria-label="Do you confirm" />
                </div>
            </RouterLink>
            <div class="card flex justify-content-center">
                <Dropdown v-model="store.selectedCountries" :options="store.countries" placeholder="Select a Country" class="w-20rem" />
            </div>
        </div>
    </div>
</template>


<style>

</style>