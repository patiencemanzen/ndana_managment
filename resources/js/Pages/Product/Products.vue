<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Products from '@/Components/pages/products.vue';
import NewProductForm from './NewProductForm.vue';

defineProps({
    canView: String,
});
</script>

<template>
    <AppLayout title="Products" :canView="canView">
        <template #header>
            <div class="flex items-center justify-between">
                <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Products
                </h2>

                <NewProductForm v-if="canView" />
            </div>
        </template>

        <div class="pb-12 pt-5">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                    <Products :canView="canView" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
