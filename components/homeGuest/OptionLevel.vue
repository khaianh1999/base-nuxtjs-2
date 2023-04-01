<template>
    <div class="option-level">
        <div class="container mx-auto bg-level">
            <div v-if="!seeSuitable">
                <div>
                    <div class="flex items-center justify-between">
                        <div class="text-[#252525] font-bold text-[32px]">
                            Chọn trình độ của bạn hiện tại
                        </div>
                        <nuxt-link
                            to="/"
                            class="text-main font-bold text-2xl flex items-center"
                        >
                            <span>Test đầu vào</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                class="w-5 h-6 fill-[#FF6609] ml-3"
                            >
                                <path
                                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                />
                            </svg>
                        </nuxt-link>
                    </div>
                    <div class="mt-[140px]">
                        <div class="py-[6px] bg-[#fdefe3]">
                            <hr class="horizontal_dotted_line" />
                        </div>
                        <div
                            class="flex item-center justify-between mt-6 curent-level"
                        >
                            <div
                                class="absolute z-20 target"
                                :class="{
                                    'target-1': selectedLevel == 1,
                                    'target-2': selectedLevel == 2,
                                    'target-3': selectedLevel == 3,
                                    'target-4': selectedLevel == 4,
                                }"
                            >
                                <img
                                    class="cursor-pointer"
                                    :src="imgSelected"
                                    alt=""
                                />
                            </div>
                            <div
                                class="absolute top-0 cursor-pointer"
                                @click="selectedLevel = 1"
                            >
                                <div class="relative">
                                    <div
                                        class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-[#8C3200] font-bold text-lg z-40"
                                        :class="{
                                            'text-active': selectedLevel == 1,
                                        }"
                                    >
                                        0 - 3.5
                                    </div>
                                    <img :src="imgTarget" alt="" />
                                </div>
                            </div>
                            <div
                                class="absolute top-0 cursor-pointer left-[calc(25%+20px)]"
                                @click="selectedLevel = 2"
                            >
                                <div class="relative">
                                    <div
                                        class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-[#8C3200] font-bold text-lg z-40"
                                        :class="{
                                            'text-active': selectedLevel == 2,
                                        }"
                                    >
                                        4.0 - 4.5
                                    </div>
                                    <img :src="imgTarget" alt="" />
                                </div>
                            </div>
                            <div
                                class="absolute top-0 cursor-pointer left-[calc(50%+42px)]"
                                @click="selectedLevel = 3"
                            >
                                <div class="relative">
                                    <div
                                        class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-[#8C3200] font-bold text-lg z-40"
                                        :class="{
                                            'text-active': selectedLevel == 3,
                                        }"
                                    >
                                        5.0 - 5.5
                                    </div>
                                    <img :src="imgTarget" alt="" />
                                </div>
                            </div>
                            <div
                                class="absolute top-0 cursor-pointer left-[calc(75%+70px)] -mr-2"
                                @click="selectedLevel = 4"
                            >
                                <div class="relative">
                                    <div
                                        class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-[#8C3200] font-bold text-lg z-40"
                                        :class="{
                                            'text-active': selectedLevel == 4,
                                        }"
                                    >
                                        6.0 - 6.5
                                    </div>
                                    <img :src="imgTarget" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between my-6 mt-20">
                        <div class="text-[#252525] font-bold text-[32px]">
                            Mục tiêu bạn hướng tới
                        </div>
                    </div>
                    <div class="mt-[140px]">
                        <div class="py-[6px] bg-[#fdefe3]">
                            <hr class="horizontal_dotted_line" />
                        </div>
                        <div
                            class="flex item-center justify-between mt-6 curent-level"
                        >
                            <div
                                class="absolute z-20 target"
                                :class="{
                                    'target-1': selectedTarget == 1,
                                    'target-2': selectedTarget == 2,
                                    'target-3': selectedTarget == 3,
                                    'target-4': selectedTarget == 4,
                                }"
                            >
                                <img
                                    v-if="selectedTarget"
                                    class="cursor-pointer"
                                    :src="imgSelected"
                                    alt=""
                                />
                            </div>
                            <div
                                class="absolute top-0 cursor-pointer"
                                @click="selectedTarget = 1"
                            >
                                <div class="relative">
                                    <div
                                        class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-[#8C3200] font-bold text-lg z-40"
                                        :class="{
                                            'text-active': selectedTarget == 1,
                                        }"
                                    >
                                        4.0
                                    </div>
                                    <img :src="imgTarget" alt="" />
                                </div>
                            </div>
                            <div
                                class="absolute top-0 cursor-pointer left-[calc(25%+20px)]"
                                @click="selectedTarget = 2"
                            >
                                <div class="relative">
                                    <div
                                        class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-[#8C3200] font-bold text-lg z-40"
                                        :class="{
                                            'text-active': selectedTarget == 2,
                                        }"
                                    >
                                        5.0
                                    </div>
                                    <img :src="imgTarget" alt="" />
                                </div>
                            </div>
                            <div
                                class="absolute top-0 cursor-pointer left-[calc(50%+42px)]"
                                @click="selectedTarget = 3"
                            >
                                <div class="relative">
                                    <div
                                        class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-[#8C3200] font-bold text-lg z-40"
                                        :class="{
                                            'text-active': selectedTarget == 3,
                                        }"
                                    >
                                        6.0
                                    </div>
                                    <img :src="imgTarget" alt="" />
                                </div>
                            </div>
                            <div
                                class="absolute top-0 cursor-pointer left-[calc(75%+70px)] -mr-2"
                                @click="selectedTarget = 4"
                            >
                                <div class="relative">
                                    <div
                                        class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-[#8C3200] font-bold text-lg z-40"
                                        :class="{
                                            'text-active': selectedTarget == 4,
                                        }"
                                    >
                                        7.0+
                                    </div>
                                    <img :src="imgTarget" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mt-20">
                    <button
                        class="btn-main py-[17px] px-[86px]"
                        @click="seeSuitable = true"
                    >
                        Xem lộ trình phù hợp
                    </button>
                </div>
            </div>
            <div v-else class="mt-[140px] mb-[160px] w-5/6 mx-auto">
                <div class="py-[6px] bg-[#fdefe3]">
                    <hr class="horizontal_dotted_line" />
                </div>
                <div class="flex item-center justify-between mt-6 curent-level">
                    <div class="absolute z-20 target-selected">
                        <div class="relative">
                            <div
                                class="absolute text-active target-text text-[#8C3200] font-bold text-lg z-40"
                            >
                                {{ convertSelectedLevel(selectedLevel) }}
                            </div>
                            <img
                                class="cursor-pointer"
                                src="@/assets/images/target_start.png"
                                alt=""
                            />
                        </div>
                        <div class="text-center -mt-6 text-[#252525] text-2xl">
                            Trình độ của bạn hiện tại
                        </div>
                        <nuxt-link
                            to="/"
                            class="text-main flex justify-center font-bold text-2xl items-center mt-[14px] cursor-pointer"
                        >
                            <span>Test đầu vào</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                class="w-5 h-6 fill-[#FF6609] ml-3"
                            >
                                <path
                                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                />
                            </svg>
                        </nuxt-link>
                    </div>
                    <div class="absolute z-20 target-selected-end">
                        <div class="relative">
                            <div
                                class="absolute text-active target-text text-[#8C3200] font-bold text-lg z-40"
                            >
                                {{ convertSelectedTarget(selectedTarget) }}
                            </div>
                            <img
                                class="cursor-pointer"
                                src="@/assets/images/target_end.png"
                                alt=""
                            />
                        </div>
                        <div
                            class="text-center -mt-6 text-[#252525] text-2xl whitespace-nowrap"
                        >
                            Mục tiêu bạn hướng tới
                        </div>
                        <div
                            class="text-main flex justify-center font-bold text-2xl items-center mt-[14px] cursor-pointer"
                            @click="seeSuitable = false"
                        >
                            <span>Chọn lại mục tiêu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                class="w-5 h-6 fill-[#FF6609] ml-3"
                            >
                                <path
                                    d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Lộ trình học của bạn -->
            <div :class="{ 'study-path': !seeSuitable }">
                <h3 class="text-[#252525] font-bold text-3xl mt-8">
                    Lộ trình học của bạn
                </h3>
                <div v-for="(item, index) in seeSuitable ? 3 : 1" :key="index">
                    <StudyPath />
                </div>
            </div>
        </div>

        <!-- Nhận tư vấn lộ trình -->
        <getConsulting v-if="seeSuitable" />
    </div>
</template>

<script>
import StudyPath from "~/components/homeGuest/StudyPath.vue";
import IMG_TARGET from "@/assets/images/target-level.png";
import IMG_SELECTED from "@/assets/images/target_start.png";
import getConsulting from "~/components/homeGuest/getConsulting.vue";

export default {
    components: {
        StudyPath,
        getConsulting,
    },
    data() {
        return {
            selectedLevel: 1,
            selectedTarget: 1,
            seeSuitable: false,
            imgTarget: IMG_TARGET,
            imgSelected: IMG_SELECTED,
        };
    },

    watch: {
        selectedLevel(newVal) {
            if (this.selectedTarget < newVal) {
                this.selectedTarget = newVal;
            }
        },
        selectedTarget(newVal, oldVal) {
            if (newVal < this.selectedLevel) {
                this.selectedTarget = oldVal;
            }
        },
    },

    methods: {
        convertSelectedLevel(level) {
            let text = null;
            switch (level) {
                case 1:
                    text = "0 - 3.5";
                    break;
                case 2:
                    text = "4.0 - 4.5";
                    break;
                case 3:
                    text = "5.0 - 5.5";
                    break;
                case 4:
                    text = "6.0 - 6.5";
                    break;

                default:
                    text = "0 - 3.5";
                    break;
            }
            return text;
        },

        convertSelectedTarget(target) {
            let text = null;
            switch (target) {
                case 1:
                    text = "4.0";
                    break;
                case 2:
                    text = "5.0";
                    break;
                case 3:
                    text = "6.0";
                    break;
                case 4:
                    text = "7.0+";
                    break;

                default:
                    text = "4.0";
                    break;
            }
            return text;
        },
    },
};
</script>

<style lang="scss" scoped>
.bg-level {
    margin-top: 64px;
    padding: 32px 94px;
    background: linear-gradient(
        0deg,
        rgba(252, 226, 187, 0) 0%,
        rgba(255, 131, 17, 0.34) 109.92%,
        rgba(255, 131, 17, 0.5) 109.92%
    );
    border-radius: 24px;
}
.curent-level {
    margin-top: -45px;
    position: relative;
    .text-active {
        color: #00488b !important;
    }
}
.horizontal_dotted_line {
    border: none;
    border-top: 4px dashed #fff;
    color: #fdefe4;
    width: 100%;
}
.study-path {
    filter: blur(3px);
}
.target {
    top: -1px;
    margin-top: -97px;
}
.target-selected {
    top: -1px;
    left: -45px;
    margin-top: -97px;
}
.target-selected-end {
    top: -1px;
    left: 80%;
    margin-top: -97px;
    margin-right: -60px;
}
.target-1 {
    left: -37px;
}
.target-2 {
    left: calc(25% - 17px);
}
.target-3 {
    left: calc(50% + 5px);
}
.target-4 {
    left: calc(75% - -34px);
    margin-right: -40px;
}
.target-text {
    top: 50%;
    left: 50%;
    transform: translate(-80%, 65%);
}
</style>
