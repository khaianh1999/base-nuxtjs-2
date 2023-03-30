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
                            <div class="triangle-right"></div>
                            <img
                                src="@/assets/images/teacher_1.png"
                                alt=""
                                class="absolute"
                            />
                            <div class="title-video">IELTS mất gốc lên 4.0</div>
                        </div>
                        <div class="relative">
                            <div class="triangle-right"></div>
                            <img
                                src="@/assets/images/teacher_1.png"
                                alt=""
                                class="absolute"
                            />
                            <div class="title-video">IELTS mục tiêu đạt 50</div>
                        </div>
                        <div class="relative">
                            <div class="triangle-right"></div>
                            <img
                                src="@/assets/images/teacher_1.png"
                                alt=""
                                class="absolute"
                            />
                            <div class="title-video">
                                IELTS mục tiêu đạt 6.0
                            </div>
                        </div>
                        <div class="relative">
                            <div class="triangle-right"></div>
                            <img
                                src="@/assets/images/teacher_1.png"
                                alt=""
                                class="absolute"
                            />
                            <div class="title-video">IELTS mục tiêu 7.0+</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VhWebIeltsFeTrialExperience",

    data() {
        return {};
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
        img {
            height: 100%;
            object-fit: cover;
            background: linear-gradient(
                360deg,
                rgba(44, 44, 44, 0.7) 3.53%,
                rgba(95, 95, 95, 0) 83.49%
            );
            opacity: 0.9;
        }
        .title-video {
            width: 100%;
            padding-bottom: 30px;
            text-align: center;
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
