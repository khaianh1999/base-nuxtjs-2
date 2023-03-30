<template>
    <div
        class="container bg-[#FAFBFF] py-4 sm:py-6 px-4 sm:px-8 rounded-[20px] box__shadow"
    >
        <div
            class="flex flex-wrap xl:flex-nowrap items-center justify-between mb-5"
        >
            <span class="text-black text-xl sm:text-2xl font-bold"
                >Khóa học IELTS cơ bản lên sơ cấp 0 -3.0</span
            >
            <button
                class="bg-main text-white text-xs sm:text-sm font-bold rounded py-3 px-3 sm:px-[49px] cursor-pointer mx-auto sm:mx-0"
            >
                Vào học
            </button>
        </div>
        <CourseResult />
        <LessonList />
        <MissionList />
    </div>
</template>

<script>
import CourseResult from "~/components/homeVip/CourseResult.vue";
import LessonList from "~/components/homeVip/LessonList.vue";
import MissionList from "~/components/homeVip/MissionList.vue";
export default {
    components: {
        CourseResult,
        LessonList,
        MissionList,
    },
};
</script>

<style></style>
