<template>
    <div class="our-student mt-6">
        <div class="container mx-auto">
            <h3 class="text-[#252525] font-bold text-[32px] text-center">
                Học viên của chúng tôi
            </h3>
            <div class="mt-6">
                <carousel
                    :items="3"
                    :autoplay="true"
                    :nav="false"
                    :loop="true"
                    :margin="24"
                    :autoplay-hover-pause="true"
                    :autoplay-timeout="5000"
                >
                    <div
                        v-for="(item, index) in 6"
                        :key="index"
                        class="our-student-item"
                    >
                        <div class="relative overflow-hidden shadow-md">
                            <div class="px-5">
                                <div>
                                    <img
                                        src="@/assets/images/quotation.png"
                                        alt=""
                                        class="quotation"
                                    />
                                </div>
                                <div
                                    class="pt-5 text-center text-[#252525] font-normal text-base"
                                >
                                    Lorem ipsum dolor sit amet,consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna ..
                                </div>
                                <div
                                    class="text-[#252525] font-bold text-base text-right mt-8"
                                >
                                    Duy Tùng - 6.0 IELTS
                                </div>
                            </div>
                            <div class="-mt-12">
                                <div class="cicle"></div>
                                <img
                                    src="@/assets/images/teacher.png"
                                    alt=""
                                    class="relative z-30"
                                />
                            </div>
                        </div>
                    </div>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
    name: "VhWebIeltsFeOurStudents",

    components: { carousel },

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
.our-student-item {
    div {
        background: #fafbff;
        border-radius: 32px;
    }
    .cicle {
        background: linear-gradient(180deg, #ffb571 7.56%, #ffe6c0 100%);
        width: 400px;
        height: 400px;
        border-radius: 999px;
        position: absolute;
        z-index: 10;
        bottom: -44%;
        left: -37%;
    }
}
::v-deep .owl-carousel .owl-item .quotation {
    width: 55px;
    width: 41px;
}
::v-deep .owl-stage-outer {
    padding-bottom: 10px;
}
::v-deep .owl-theme .owl-dots .owl-dot span {
    width: 16px;
    height: 8px;
}
::v-deep .owl-theme .owl-dots .owl-dot.active span {
    background: #ff6609;
}
::v-deep .owl-theme .owl-dots .owl-dot span {
    background: #d9d9d9;
}
</style>
