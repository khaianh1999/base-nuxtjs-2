<template>
    <div class="container mx-auto pb-9 xl:pb-[193px] px-2 sm:px-0">
        <h1
            class="text-center text-xl md:text-2xl xl:text-4xl text-black font-bold pt-8 pb-6"
        >
            Nhiệm vụ khóa học: IELTS cơ bản lên sơ cấp 0 -3.0
        </h1>
        <Notification :bgNotification="'bg-[#FFE6D6]'" />
        <div class="flex flex-wrap justify-between gap-3 sm:gap-0">
            <div class="flex flex-wrap items-center">
                <span class="text-lg mr-4">Học theo</span>
                <div
                    class="flex items-center w-[286px] rounded-lg overflow-hidden h-[38px] leading-[38px] cursor-pointer box__shadow"
                >
                    <span
                        class="w-1/2 font-medium text-black bg-white text-center"
                        :class="{ '!bg-main text-white': tabFilter == 0 }"
                        @click="tabFilter = 0"
                    >
                        Tuần
                    </span>
                    <span
                        class="w-1/2 font-medium text-black bg-white text-center"
                        :class="{ '!bg-main text-white': tabFilter == 1 }"
                        @click="tabFilter = 1"
                    >
                        Kỹ năng
                    </span>
                </div>
            </div>
            <div class="flex flex-wrap items-center gap-3">
                <div
                    class="flex items-center justify-center rounded-[10px] bg-[#FFF] h-[40px] w-[180px] text-sm box__shadow"
                >
                    Còn <span class="font-bold ml-1">8</span>/10 lượt A.I chấm
                </div>
                <div
                    class="flex items-center justify-center rounded-[10px] bg-[#FFF] h-[40px] w-[180px] text-sm box__shadow"
                >
                    Còn <span class="font-bold ml-1">8</span>/10 lượt G.V chấm
                </div>
            </div>
        </div>
        <ListByWeek v-if="tabFilter == 0" />
        <ListBySkill v-else />
    </div>
</template>

<script>
import { initFlowbite } from "flowbite";
import Notification from "~/components/courseDetail/NotificationList.vue";
import ListByWeek from "~/components/courseDetail/ListByWeek.vue";
import ListBySkill from "~/components/courseDetail/ListBySkill.vue";

export default {
    name: "MyCourse",
    components: {
        Notification,
        ListByWeek,
        ListBySkill,
    },
    layout: "Main",
    data() {
        return {
            tabFilter: 0,
        };
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

<style lang="scss" scoped>
body {
    background: #f5f5f5;
}
</style>
