<template>
    <div class="frequent-question">
        <div class="container mx-auto">
            <h3 class="text-[#252525] font-bold text-[32px] text-center">
                Các câu hỏi thường gặp
            </h3>
            <div class="mt-6">
                <div id="accordion-open" data-accordion="open">
                    <h2 id="accordion-open-heading-1" class="relative z-20">
                        <button
                            type="button"
                            class="flex items-start justify-between w-full p-5 accordion-item"
                            data-accordion-target="#accordion-open-body-1"
                            aria-expanded="true"
                            aria-controls="accordion-open-body-1"
                        >
                            <b
                                class="flex items-center text-left accordion-title"
                            >
                                Học IELTS từ cấp 2 liệu có quá sớm ?
                            </b>
                            <svg
                                data-accordion-icon
                                class="w-6 h-6 rotate-180 shrink-0 ml-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-open-body-1"
                        class="hidden"
                        aria-labelledby="accordion-open-heading-1"
                    >
                        <div class="p-5 pt-8 accordion-content">
                            <p class="mb-2 text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur
                            </p>
                        </div>
                    </div>

                    <h2
                        id="accordion-open-heading-2"
                        class="mt-6 relative z-20"
                    >
                        <button
                            type="button"
                            class="flex items-start justify-between w-full p-5 accordion-item"
                            data-accordion-target="#accordion-open-body-2"
                            aria-expanded="false"
                            aria-controls="accordion-open-body-2"
                        >
                            <b
                                class="flex items-center text-left accordion-title"
                            >
                                Học IELTS từ cấp 2 liệu có quá sớm ?
                            </b>
                            <svg
                                data-accordion-icon
                                class="w-6 h-6 shrink-0 ml-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-open-body-2"
                        class="hidden"
                        aria-labelledby="accordion-open-heading-2"
                    >
                        <div class="p-5 pt-8 accordion-content">
                            <p class="mb-2 text-gray-500 dark:text-gray-400">
                                Flowbite is first conceptualized and designed
                                using the Figma software so everything you see
                                in the library has a design equivalent in our
                                Figma file.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="accordion-open-heading-3"
                        class="mt-6 relative z-20"
                    >
                        <button
                            type="button"
                            class="flex items-start justify-between w-full p-5 accordion-item"
                            data-accordion-target="#accordion-open-body-3"
                            aria-expanded="false"
                            aria-controls="accordion-open-body-3"
                        >
                            <b
                                class="flex items-center text-left accordion-title"
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea
                            </b>
                            <svg
                                data-accordion-icon
                                class="w-6 h-6 shrink-0 ml-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-open-body-3"
                        class="hidden"
                        aria-labelledby="accordion-open-heading-3"
                    >
                        <div class="p-5 pt-8 accordion-content">
                            <p class="mb-2 text-gray-500 dark:text-gray-400">
                                Learn more about these technologies:
                            </p>
                            <ul
                                class="pl-5 text-gray-500 list-disc dark:text-gray-400"
                            >
                                <li>
                                    <a
                                        href="https://flowbite.com/pro/"
                                        class="text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Flowbite Pro
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://tailwindui.com/"
                                        rel="nofollow"
                                        class="text-blue-600 dark:text-blue-500 hover:underline"
                                        >Tailwind UI</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VhWebIeltsFeFrequentQuestion",

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
.frequent-question {
    margin-top: 100px;
    margin-bottom: 100px;
}
.accordion-item {
    background: linear-gradient(90deg, #ffbf84 -14.62%, #face9a 100%);
    border-radius: 16px;
}
.accordion-content {
    background: #fafbff;
    box-shadow: 0px 8px 30px rgba(141, 92, 45, 0.1);
    margin-top: -15px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #252525;
    }
}
.accordion-title {
    font-size: 18px;
    line-height: 30px;
    color: #252525;
}
</style>
