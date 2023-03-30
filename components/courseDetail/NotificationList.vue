<template>
    <div class="container mx-auto pb-4 xl:pb-8 px-2 sm:px-0">
        <div
            class="flex flex-wrap items-center justify-between rounded-xl py-3 px-5"
            :class="bgNotification"
        >
            <span class="text-black text-base sm:text-lg font-medium">
                Bài viết :” Tên bài viết nằm ở đây” vừa được giáo viên chấm
                xong. Xem ngay kêt quả nhé</span
            >
            <button
                class="bg-main text-white text-sm font-bold rounded py-3 px-5 cursor-pointer mx-auto sm:mx-0"
            >
                Xem ngay
            </button>
        </div>
    </div>
</template>

<script>
import { initFlowbite } from "flowbite";

export default {
    props: {
        bgNotification: {
            type: String,
            default: "bg-white",
        },
    },
    mounted() {
        initFlowbite();
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 500);
        });
    },
};
</script>

<style></style>
