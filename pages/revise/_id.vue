<template>
    <div class="container mx-auto pb-8 xl:pb-[164px]">
        <div class="text-center text-black mt-8 mb-6 text-2xl font-bold">
            Listening - Tên chủ đề topic nằm ở đây
        </div>
        <vs-pagination
            v-if="totalPage > 1"
            :total-pages="totalPage"
            @change="changePage"
        ></vs-pagination>
        <div
            class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 mt-8 p-8 box__shadow rounded-[28px] bg-[#FAFBFF]"
        >
            <div class="bg-[#F2F5F8] rounded-2xl py-6 px-5">
                <div class="text-lg font-bold mb-2">Đọc hiểu đoạn văn sau</div>
                <div
                    class="max-h-[200px] md:max-h-[476px] overflow-y-auto scrollbar-style"
                >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standar Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standar Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standar Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standar Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standar Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standar Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standar Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standar Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standar Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standar Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standar Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standar Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry.
                </div>
            </div>
            <div class="bg-[#F2F5F8] rounded-2xl py-6 px-5">
                <div class="text-lg font-bold mb-2">Câu 1</div>
                <div
                    class="max-h-[200px] md:max-h-[] overflow-y-auto scrollbar-style"
                >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standar Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standar Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standar Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry.
                </div>
                <div class="mt-3">
                    <div class="text-base font-bold mb-2">
                        Text phụ nếu có ở đây
                    </div>

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
                    </div>
                    <!-- end type input radio -->
                </div>
            </div>
        </div>

        <div class="flex items-center justify-between mt-[30px]">
            <nuxt-link
                to="/"
                class="text-main text-xs sm:text-base flex items-center font-bold"
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
            </nuxt-link>
            <button
                class="bg-main text-white text-xs sm:text-sm font-bold rounded py-3 px-3 sm:px-[49px] cursor-pointer"
            >
                Xem đáp án
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "RevisePage",
    layout: "Main",
    data() {
        return {
            totalPage: 20,
        };
    },

    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 500);
        });
    },

    methods: {
        changePage(page) {
            console.log("page", page);
        },
    },
};
</script>

<style lang="scss" scoped>
::v-deep .vs-pagination {
    li a {
        color: black;
        font-weight: 700;
    }
}
::v-deep .vs-pagination .vs-pagination--active a {
    background: #ff6609;
    color: white;
}
</style>
