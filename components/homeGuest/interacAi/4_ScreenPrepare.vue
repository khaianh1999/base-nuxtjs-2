<template>
    <div
        id="story-4"
        class="circular px-[36px] content-visibility-visible relative flex flex-shrink-0 flex-col items-center justify-center text-lg h-fill-screen w-screen md:w-full text-white md:rounded-[16px] backface-hidden translateZ-0 bg-nav"
    >
        <div class="w-full title">
            <div
                class="bg-[#474747cc] py-1 text-center rounded-xl font-normal text-2xl"
            >
                What is the most valuable job in the world today?
            </div>
        </div>
        <div v-if="coundownTime" class="text-4xl text-white block text-center">
            {{ convertToMinuteSecond(coundownTime) }}
        </div>
        <div v-else class="absolute bottom-0">
            <img
                src="@/assets/images/record.png"
                alt=""
                class="cursor-pointer"
                @click="startRecord = true"
            />
        </div>
        <countdown-circle
            v-if="startRecord"
            :transform="transform"
            :startRecord="startRecord"
        ></countdown-circle>
    </div>
</template>

<script>
import CountdownCircle from "@/components/homeGuest/interacAi/CountdownCircle.vue";
export default {
    name: "VhWebIeltsFe4ScreenPrepare",
    components: {
        CountdownCircle,
    },
    props: {
        transform: {
            type: Number,
            default: 0,
        },
    },

    data() {
        return {
            coundownTime: 10,
            startRecord: false,
        };
    },

    watch: {
        transform() {
            if (this.transform === -300) {
                const intervalTime = setInterval(() => {
                    this.coundownTime--;
                    if (this.coundownTime <= 0) {
                        clearInterval(intervalTime);
                        this.$emit("next-page");
                    }
                }, 1000);
            }
        },
    },

    methods: {
        convertToMinuteSecond(seconds) {
            const minutes = Math.floor(seconds / 60); // Lấy phần nguyên của số phút
            const remainingSeconds = seconds % 60; // Lấy số giây còn lại sau khi đã chia cho 60

            // Định dạng chuỗi phút:giây
            const result =
                (minutes < 10 ? "0" : "") +
                minutes +
                ":" +
                (remainingSeconds < 10 ? "0" : "") +
                remainingSeconds;

            return result;
        },
    },
};
</script>

<style lang="scss" scoped>
#story-4 {
    .title {
        top: -483px;
        position: relative;
    }
}
</style>
