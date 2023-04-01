<template>
    <div class="container mx-auto pb-8 xl:pb-[164px]">
        <div class="text-center text-black mt-8 mb-6 text-2xl font-bold">
            Listening - Tên chủ đề topic nằm ở đây
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-6">
            <div class="col-span-2">
                <!-- one question -->
                <div>
                    <div>
                        Task 1: Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry's standar Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry. Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standar
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standar Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry.
                    </div>
                    <div class="mt-5 mb-4">
                        Câu 1: Chọn đáp án đúng A, B, C, D
                    </div>
                    <!-- answer -->

                    <!-- type input radio -->
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center cursor-pointer">
                            <input
                                id="radio-1"
                                type="radio"
                                name="disabled-radio"
                                class="w-4 h-4 text-blue-600 !bg-main !border-main"
                            />
                            <label
                                for="radio-1"
                                class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                                >Đáp án 1</label
                            >
                        </div>
                        <div class="flex items-center cursor-pointer">
                            <input
                                id="radio-2"
                                checked
                                type="radio"
                                name="disabled-radio"
                                class="w-4 h-4 text-blue-600 !bg-main !border-main"
                            />
                            <label
                                for="radio-2"
                                class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                                >Đáp án 2</label
                            >
                        </div>
                        <div class="flex items-center cursor-pointer">
                            <input
                                id="radio-1"
                                type="radio"
                                name="disabled-radio"
                                class="w-4 h-4 text-blue-600 !bg-main !border-main"
                            />
                            <label
                                for="radio-1"
                                class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                                >Đáp án 3</label
                            >
                        </div>
                        <div class="flex items-center cursor-pointer">
                            <input
                                id="radio-2"
                                checked
                                type="radio"
                                name="disabled-radio"
                                class="w-4 h-4 text-blue-600 !bg-main !border-main"
                            />
                            <label
                                for="radio-2"
                                class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                                >Đáp án 4</label
                            >
                        </div>
                    </div>
                    <!-- end type input radio -->

                    <!-- end answer -->
                </div>
                <!-- end one question -->
            </div>
            <div>
                <div
                    class="text-lg font-bold text-[#191919] p-6 bg-white box__shadow rounded-[20px]"
                >
                    <div class="mb-3">Danh sách câu hỏi</div>
                    <!-- list question -->
                    <div class="flex flex-wrap gap-3">
                        <span
                            v-for="i in 30"
                            :key="i"
                            class="w-[40px] h-[36px] leading-[36px] text-center font-bold text-black bg-[#F2F5F8] rounded-xl"
                            >{{ i }}</span
                        >
                    </div>
                    <!-- end list question -->
                    <div class="flex items-center justify-between mt-5">
                        <div
                            class="text-main font-bold text-base cursor-pointer flex items-center"
                        >
                            Xem bài giảng
                            <svg
                                class="ml-1"
                                width="10"
                                height="15"
                                viewBox="0 0 10 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 14.5C1.71875 14.5 1.46875 14.4062 1.28125 14.2188C0.875 13.8438 0.875 13.1875 1.28125 12.8125L6.5625 7.5L1.28125 2.21875C0.875 1.84375 0.875 1.1875 1.28125 0.8125C1.65625 0.40625 2.3125 0.40625 2.6875 0.8125L8.6875 6.8125C9.09375 7.1875 9.09375 7.84375 8.6875 8.21875L2.6875 14.2188C2.5 14.4062 2.25 14.5 2 14.5Z"
                                    fill="#FF6609"
                                />
                            </svg>
                        </div>
                        <div
                            class="text-main font-bold text-base cursor-pointer flex items-center"
                        >
                            Lưu nháp
                            <svg
                                class="ml-1"
                                width="14"
                                height="17"
                                viewBox="0 0 14 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.4375 11.2812L2.1875 6.78125C1.96875 6.5625 1.9375 6.25 2.03125 5.96875C2.15625 5.6875 2.4375 5.53125 2.75 5.53125H5V1.53125C5 0.96875 5.4375 0.5 6 0.5H8C8.53125 0.5 9 0.96875 9 1.53125L9 5.53125H11.25C11.5313 5.53125 11.8125 5.6875 11.9375 5.96875C12.0313 6.25 12 6.5625 11.7813 6.78125L7.53125 11.2812C7.25 11.5938 6.71875 11.5938 6.4375 11.2812ZM11 16.5H3C1.3125 16.5 0 15.1562 0 13.5L0 11.5C0 10.9688 0.4375 10.5 1 10.5C1.53125 10.5 2 10.9688 2 11.5L2 13.5C2 14.0625 2.4375 14.5 3 14.5H11C11.5313 14.5 12 14.0625 12 13.5V11.5C12 10.9687 12.4375 10.5 13 10.5C13.5313 10.5 14 10.9687 14 11.5V13.5C14 15.1562 12.6563 16.5 11 16.5Z"
                                    fill="#FF6609"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PracticePage",
    layout: "Main",
    data() {
        return {};
    },

    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 500);
        });
    },

    methods: {},
};
</script>

<style lang="scss" scoped></style>
