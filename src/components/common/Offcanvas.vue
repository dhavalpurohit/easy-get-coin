<script lang="ts" setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
<template>
    <div>
        <!-- Offcanvas button -->
        <button @click="isOpen = !isOpen" class="fixed inset-0 bg-black opacity-25 z-40">Open</button>

        <!-- Offcanvas menu -->
        <div v-if="isOpen"
            class="fixed inset-y-0 left-0 w-64 bg-white shadow z-50 transform transition-transform duration-300">
            <!-- Close button -->
            <button @click="isOpen = false" class="absolute top-0 right-0 mt-4 mr-4">
                <svg class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            <!-- Offcanvas content -->
            <div class="p-4">
                <!-- Your offcanvas menu items here -->
                <ul>
                    <li><a href="#">Menu Item 1</a></li>
                    <li><a href="#">Menu Item 2</a></li>
                    <li><a href="#">Menu Item 3</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* Add transition classes */
.transition-transform {
    transition-property: transform;
}

.transition-opacity {
    transition-property: opacity;
}
</style>