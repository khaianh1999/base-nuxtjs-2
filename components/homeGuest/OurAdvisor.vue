<template>
    <div class="our-advisor">
        <div class="container mx-auto">
            <h3 class="text-[#252525] font-bold text-[32px] text-center">
                Cố vấn của chúng tôi
            </h3>
            <div class="mt-[61px]">
                <div class="grid grid-cols-12">
                    <div class="col-span-5">
                        <div class="introduction relative">
                            <div class="absolute top-3 -left-[14px]">
                                <img
                                    src="@/assets/images/border-left.png"
                                    alt=""
                                />
                            </div>
                            <div class="box-introduction">
                                Lorem ipsum dolor sit amet,consectetur
                                adipiscing elit, sed do eiusmod tempor labore et
                                dolore magna ..incididunt ut labore et dolore
                                magna ... <br />
                                <br />
                                Lorem ipsum dolor sit amet,consectetur
                                adipiscing elit, sed do eiusmod tempor labore et
                                dolore magna ..incididunt ut labore et dolore
                                magna ...
                            </div>

                            <div class="absolute bottom-3 -right-[14px]">
                                <img
                                    src="@/assets/images/border-right.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-span-7 relative">
                        <div class="relative z-30">
                            <div class="text-center">
                                <div
                                    class="bg-advisor rounded-full w-[337px] h-[337px] flex items-center justify-center overflow-hidden mx-auto"
                                >
                                    <img
                                        :src="selectedAdvisor"
                                        alt=""
                                        class="w-[337px] h-[337px]"
                                    />
                                </div>
                                <div class="text-[#252525] mt-4">
                                    <div class="font-bold text-[32px]">
                                        Cô Thùy Chi
                                    </div>
                                    <div class="text-2xl">8.0 Overall</div>
                                </div>
                            </div>
                            <div
                                class="flex items-center justify-between mt-16"
                            >
                                <div class="-mt-32 bg-advisor-item">
                                    <img
                                        src="@/assets/images/teacher-cicle.png"
                                        alt=""
                                        @click="selectedAdvisor = ADVISOR_2"
                                    />
                                </div>
                                <div class="bg-advisor-item">
                                    <img
                                        src="@/assets/images/teacher_1.png"
                                        alt=""
                                        @click="selectedAdvisor = ADVISOR_1"
                                    />
                                </div>
                                <div class="bg-advisor-item">
                                    <img
                                        src="@/assets/images/teacher-cicle.png"
                                        alt=""
                                        @click="selectedAdvisor = ADVISOR_2"
                                    />
                                </div>
                                <div class="-mt-32 bg-advisor-item">
                                    <img
                                        src="@/assets/images/teacher_1.png"
                                        alt=""
                                        @click="selectedAdvisor = ADVISOR_1"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="bg-advisor-light">
                            <img src="@/assets/images/advisor.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import advisor1 from "@/assets/images/teacher_1.png";
import advisor2 from "@/assets/images/teacher-cicle.png";

export default {
    name: "VhWebIeltsFeOurAdvisor",

    data() {
        return {
            selectedAdvisor: advisor1,
            ADVISOR_1: advisor1,
            ADVISOR_2: advisor2,
        };
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
.our-advisor {
    background: linear-gradient(
        179.57deg,
        rgba(252, 121, 0, 0.22) 0.37%,
        rgba(255, 122, 0, 0.82) 30.35%,
        rgba(252, 226, 187, 0) 99.63%
    );
    padding-top: 56.91px;
    padding-bottom: 40px;
    .introduction {
        border: 4px solid #ffffff;
        padding: 16px;
        .box-introduction {
            padding: 16px;
            background: #ffffff99;
            font-weight: 400;
            font-size: 20px;
            line-height: 150%;
            color: #252525;
        }
    }
    .bg-advisor {
        border: 1.46078px solid #fff;
        background: linear-gradient(
            180deg,
            #ffc076 0%,
            rgba(255, 226, 200, 0.26) 100%
        );
    }
    .bg-advisor-item {
        cursor: pointer;
        width: 128px;
        height: 128px;
        overflow: hidden;
        border-radius: 999px;
        border: 1.46078px solid #fff;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.39) 0%,
            #ffffff 109.92%
        );
        img {
            width: 128px;
            height: 128px;
        }
    }
    .bg-advisor-light {
        position: absolute;
        top: 0;
        z-index: 1;
        width: 150%;
        transform: translate(-17%, -18%);
    }
}
</style>
