<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-[53px]">
            <div class="experience-ai">
                <img
                    src="@/assets/images/experience-ai.png"
                    alt=""
                    class="h-[536px] w-[453px]"
                />
                <div class="flex justify-center -mt-[130px]"></div>
                <div
                    class="flex absolute bottom-5 ease-in-out items-end duration-300 touch-pan-y backface-hidden translateZ-0 w-[533px] -ml-[36px]"
                    :style="{ transform: `translateX(${transform}%)` }"
                >
                    <!-- 1_Trải nghiệm tương tác ảo ngay -->
                    <div
                        id="story-1"
                        class="circular pb-[58px] content-visibility-visible relative flex flex-shrink-0 items-center justify-center text-lg h-fill-screen w-screen md:w-full text-white md:rounded-[16px] backface-hidden translateZ-0 bg-loyalty"
                    >
                        <button
                            class="btn-main py-[17px] px-[53px]"
                            @click="nextPage()"
                        >
                            Trải nghiệm tương tác ảo ngay
                        </button>
                    </div>

                    <!-- 2_Chọn trình độ của bạn -->
                    <SelectedLevel @next-page="nextPage()" />

                    <!-- 3_phòng luyện Nói -->
                    <TrainingRoom
                        :transform="transform"
                        @next-page="nextPage()"
                    />

                    <!-- 4_màn chuẩn bị -->
                    <ScreenPrepare
                        :transform="transform"
                        @next-page="nextPage()"
                    />

                    <!-- màn OTP -->
                    <InputOtp />
                </div>
            </div>
            <div>
                <h3 class="text-[#252525] text-4xl font-bold">
                    Nói tương tác cùng trợ lý A.I
                </h3>
                <p class="mt-2 font-normal text-[#252525] text-2xl">
                    Phòng luyện tập tương tác trực tiếp với trí tuệ nhân tạo
                </p>
                <div class="flex flex-col gap-5">
                    <div class="flex items-start mt-5">
                        <img
                            class="mr-4 w-9 h-9"
                            src="@/assets/images/svg/svg-practice.svg"
                            alt="svg"
                        />
                        <p class="text-[#252525] text-2xl font-normal">
                            Luyện tập chuyên sâu kỹ năng nói
                        </p>
                    </div>
                    <div class="flex items-start">
                        <img
                            class="mr-4 w-9 h-9"
                            src="@/assets/images/svg/svg-time.svg"
                            alt="svg"
                        />
                        <p class="text-[#252525] text-2xl font-normal">
                            Bài chấm nhanh chóng
                        </p>
                    </div>
                    <div class="flex items-start">
                        <img
                            class="mr-4 w-9 h-9"
                            src="@/assets/images/svg/svg-target.svg"
                            alt="svg"
                        />
                        <p class="text-[#252525] text-2xl font-normal">
                            Độ chính xác tới 85%
                        </p>
                    </div>
                    <div class="flex items-start">
                        <img
                            class="mr-4 w-9 h-9"
                            src="@/assets/images/svg/svg-note.svg"
                            alt="svg"
                        />
                        <p class="text-[#252525] text-2xl font-normal">
                            Thực chiến liên tục tăng cao khả năng đỗ lên tới 90%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SelectedLevel from "@/components/homeGuest/interacAi/1_SelectedLevel.vue";
import TrainingRoom from "@/components/homeGuest/interacAi/3_TrainingRoom.vue";
import ScreenPrepare from "@/components/homeGuest/interacAi/4_ScreenPrepare.vue";
import InputOtp from "@/components/homeGuest/interacAi/InputOtp.vue";

export default {
    components: {
        SelectedLevel,
        TrainingRoom,
        ScreenPrepare,
        InputOtp,
    },
    data() {
        return {
            transform: 0,
        };
    },

    created() {},

    methods: {
        nextPage() {
            this.transform -= 100;
        },
    },
};
</script>

<style scoped lang="scss">
.experience-ai {
    background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #d3d3d3 100%);
    border-radius: 32px;
    padding: 90px 36px 32px;
    overflow: hidden;
    height: 650px;
    position: relative;
}

.circular {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
}
.loading-n-active {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 5px;
    background: rgba(255, 255, 255, 0.36);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    overflow: hidden;
}
.seened {
    background: #fff !important;
}
.last-story {
    background: #fff !important;
}
.Loading {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 5px;
    background: rgba(255, 255, 255, 0.36);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    overflow: hidden;
}

.Loading:after {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 100%;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    animation: load 8s alternate;
}
.rounded-checkbox {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid white;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
}
.rounded-checkbox:checked {
    appearance: auto;
    clip-path: circle(50% at 50% 50%);
    background-color: #2f6bff;
}

@keyframes load {
    0% {
        width: 0;
        background: #d6ddde;
    }

    100% {
        width: 100%;
        background: #d6ddde;
    }
}
.no-image {
    background: linear-gradient(270deg, #e9e9e9 0%, #f5f5f5 98.12%);
}
</style>
