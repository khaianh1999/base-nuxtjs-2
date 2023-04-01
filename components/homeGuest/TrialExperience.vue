<template>
    <div>
        <div class="trial-experience mt-16">
            <div class="container mx-auto">
                <h3 class="text-[#252525] font-bold text-[32px] text-center">
                    Trải nghiệm thử nào
                </h3>
                <div class="mt-6">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 video">
                        <div class="relative h-full">
                            <div class="bg">
                                <div class="triangle-right"></div>
                                <div
                                    class="img"
                                    :style="{
                                        backgroundImage: `url(${image})`,
                                    }"
                                ></div>
                                <div class="overlay"></div>
                                <h1 class="title-video">
                                    IELTS mất gốc lên 4.0
                                </h1>
                            </div>
                        </div>
                        <div class="relative h-full">
                            <div class="bg">
                                <div class="triangle-right"></div>
                                <div
                                    class="img"
                                    :style="{
                                        backgroundImage: `url(${image})`,
                                    }"
                                ></div>
                                <div class="overlay"></div>
                                <h1 class="title-video">
                                    IELTS mục tiêu đạt 50
                                </h1>
                            </div>
                        </div>
                        <div class="relative h-full">
                            <div class="bg">
                                <div class="triangle-right"></div>
                                <div
                                    class="img"
                                    :style="{
                                        backgroundImage: `url(${image})`,
                                    }"
                                ></div>
                                <div class="overlay"></div>
                                <h1 class="title-video">
                                    IELTS mục tiêu đạt 6.0
                                </h1>
                            </div>
                        </div>
                        <div class="relative h-full">
                            <div class="bg">
                                <div class="triangle-right"></div>
                                <div
                                    class="img"
                                    :style="{
                                        backgroundImage: `url(${image})`,
                                    }"
                                ></div>
                                <div class="overlay"></div>
                                <h1 class="title-video">IELTS mục tiêu 7.0+</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IMAGE from "@/assets/images/teacher_1.png";

export default {
    name: "VhWebIeltsFeTrialExperience",

    data() {
        return {
            image: IMAGE,
        };
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
.trial-experience {
    .video > * {
        cursor: pointer;
        .triangle-right {
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 1000;
            transform: translate(-50%, -50%);
            width: 0;
            height: 0;
            border-top: 18px solid transparent;
            border-left: 32px solid #ffffff;
            border-bottom: 18px solid transparent;
        }
        border-radius: 24px;
        height: 312px;
        overflow: hidden;
        background: radial-gradient(
            93.51% 93.51% at 48.18% 93.51%,
            #faa14f 0%,
            #ffe5c6 100%
        );
    }

    .bg {
        &:hover {
            .img {
                transition: all 0.25s ease-in-out;
                -webkit-filter: blur(3px);
                -moz-filter: blur(3px);
                -ms-filter: blur(3px);
                filter: blur(3px);
            }
        }

        .img {
            display: block;
            position: absolute;
            width: 110%;
            height: 110%;
            opacity: 1;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            // background-image: url("@/assets/images/teacher_1.png");
        }

        .overlay {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                360deg,
                rgba(44, 44, 44, 0.7) 3.53%,
                rgba(95, 95, 95, 0) 83.49%
            );
        }

        .title-video {
            text-align: center;
            text-transform: uppercase;
            margin: 0;
            width: 100%;
            padding-bottom: 30px;
            color: #fafbff;
            font-weight: 700;
            font-size: 18px;
            line-height: 30px;
            position: absolute;
            bottom: 0;
        }
    }
}
</style>
