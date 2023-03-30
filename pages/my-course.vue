<template>
    <div>
        <div class="bg-gradient-to-b from-[#fca350] to-[#ffffff]">
            <h1
                class="text-center text-xl md:text-2xl xl:text-4xl text-black font-bold pt-8 pb-6"
            >
                Các khóa học của tôi
            </h1>
            <!-- notification -->
            <Notification />
            <!-- end notification -->
            <!-- filter course -->
            <div
                class="container mx-auto flex items-center gap-6 pb-6 px-2 sm:px-0"
            >
                <button
                    class="bg-main text-white text-sx sm:text-2xl font-medium rounded-xl py-3 px-6"
                >
                    Khóa IELT 0-3.0
                </button>
                <button
                    class="bg-[#FAFBFF] text-black text-sx sm:text-2xl font-medium rounded-xl py-3 px-6"
                >
                    Khóa Speaking 3.0 -5.0
                </button>
            </div>
            <!-- end filter course -->
        </div>
        <div class="container mx-auto">
            <CourseDetail />
            <CourseRelate />
        </div>
    </div>
</template>
<script>
import { initFlowbite } from "flowbite";
import Notification from "~/components/courseDetail/NotificationList.vue";
import CourseDetail from "~/components/homeVip/CourseDetail.vue";
import CourseRelate from "~/components/homeVip/CourseRelate.vue";
export default {
    name: "MyCourse",
    components: {
        Notification,
        CourseDetail,
        CourseRelate,
    },
    layout: "Main",
    mounted() {
        initFlowbite();
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 500);
        });
    },
};
</script>
