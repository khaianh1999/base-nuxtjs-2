<template>
    <div
        id="story-3"
        class="circular px-[36px] content-visibility-visible relative flex flex-shrink-0 items-center justify-center text-lg h-fill-screen w-screen md:w-full text-white md:rounded-[16px] backface-hidden translateZ-0 bg-nav"
    >
        <div class="w-full">
            <div class="countdown-container">
                <div class="countdown" :style="{ width: countdownWidth }"></div>
            </div>
            <div class="flex items-center justify-between relative -top-3">
                <div>{{ convertToMinuteSecond(coundownTime) }}</div>
                <div>{{ convertToMinuteSecond(totalTime) }}</div>
            </div>
            <div
                class="bg-[#474747cc] py-1 text-center rounded-xl font-normal text-2xl"
            >
                Welcom to Speaking trainning room
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VhWebIeltsFe3TrainingRoom",
    props: {
        transform: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            coundownTime: 10,
            totalTime: 10,
            widthPerSecond: 100 / 10, // Tính toán số phần trăm chiều rộng cần giảm mỗi giây
            countdownWidth: "100%", // Chiều rộng ban đầu của countdown
        };
    },

    watch: {
        transform() {
            if (this.transform === -200) {
                const intervalTime = setInterval(() => {
                    this.coundownTime--;
                    this.countdownWidth = `${
                        this.widthPerSecond * this.coundownTime - 10
                    }%`;
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
.countdown-container {
    width: 100%; /* Chiều rộng của container */
    height: 14px; /* Chiều cao của container */
    background-color: #fff; /* Màu nền của container */
    top: -23px;
    position: relative;
    width: calc(100% + 85px);
    left: -53px;
}

.countdown {
    width: 100%; /* Chiều rộng ban đầu của countdown */
    height: 100%; /* Chiều cao của countdown */
    background-color: #ff6609; /* Màu của countdown */
    transition: width 1s linear; /* Thời gian animation và cách thức thực hiện animation */
}
#story-3 {
    top: -525px;
}
</style>
