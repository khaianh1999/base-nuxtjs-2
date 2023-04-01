<template>
    <div
        id="story-2"
        class="circular px-[36px] content-visibility-visible relative flex flex-shrink-0 items-center justify-center text-lg h-fill-screen w-screen md:w-full text-white md:rounded-[16px] backface-hidden translateZ-0 bg-nav"
    >
        <div class="w-full">
            <div
                class="bg-[#474747cc] py-1 text-center rounded-xl font-normal text-2xl"
            >
                Chọn trình độ của bạn
            </div>
            <div class="grid grid-cols-2 gap-4 mt-4">
                <label
                    for="default-radio-1"
                    class="bg-white cursor-pointer rounded-lg py-3 text-[#252525] font-bold text-center flex items-center justify-center"
                >
                    <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span> 0 - 2.0 </span>
                </label>
                <label
                    for="default-radio-2"
                    class="bg-white cursor-pointer rounded-lg py-3 text-[#252525] font-bold text-center flex items-center justify-center"
                >
                    <input
                        id="default-radio-2"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span> 2.5 - 4.0 </span>
                </label>
                <label
                    for="default-radio-3"
                    class="bg-white cursor-pointer rounded-lg py-3 text-[#252525] font-bold text-center flex items-center justify-center"
                >
                    <input
                        id="default-radio-3"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span> 4.5-5.0 </span>
                </label>
                <label
                    for="default-radio-4"
                    class="bg-white cursor-pointer rounded-lg py-3 text-[#252525] font-bold text-center flex items-center justify-center"
                >
                    <input
                        id="default-radio-4"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span> 5.5 - 6.0 </span>
                </label>
            </div>

            <!-- Btn Tiếp tục -->
            <div class="mt-4 w-full text-center">
                <button
                    class="btn-main py-[13px] px-[88px]"
                    @click="$emit('next-page')"
                >
                    Tiếp tục
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VhWebIeltsFe1SelectedLevel",

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped></style>
