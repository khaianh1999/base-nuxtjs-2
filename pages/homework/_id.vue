<template>
    <div class="container mx-auto">
        <div class="text-center text-black mt-8 mb-6 text-2xl font-bold">
            Listening - Tên chủ đề topic nằm ở đây
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-6 mt-8">
            <div class="col-span-2">
                <div>
                    <iframe
                        class="rounded-lg h-[200px] md:[300px] xl:h-[415px] w-full"
                        src="https://www.youtube.com/embed/53r_V51O_hs"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                    <!-- menu list video -->
                    <div class="flex items-center justify-center">
                        <div
                            class="flex items-center rounded-lg overflow-hidden h-[38px] leading-[38px] cursor-pointer box__shadow mt-4"
                        >
                            <span
                                class="w-1/2 w-[143px] font-medium text-black bg-white text-center"
                                :class="{
                                    '!bg-main text-white': tabActive == 0,
                                }"
                                @click="tabActive = 0"
                            >
                                Video 1
                            </span>
                            <span
                                class="w-1/2 w-[143px] font-medium text-black bg-white text-center"
                                :class="{
                                    '!bg-main text-white': tabActive == 1,
                                }"
                                @click="tabActive = 1"
                            >
                                Video 2
                            </span>
                        </div>
                    </div>
                    <!-- end menu list video -->

                    <!-- description -->
                    <div class="text-base text-base mt-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <!-- end description -->
                </div>
            </div>
            <div>
                <div class="bg-white p-6 rounded-2xl box__shadow">
                    <!-- Tài liệu tham khảo -->
                    <div class="flex flex-col gap-2">
                        <div class="text-black text-lg font-bold">
                            Tài liệu tham khảo
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img
                                    src="@/assets/images/svg/svg-document.svg"
                                    alt="svg"
                                />
                                <span class="text-base text-[#5A5A5A] ml-2"
                                    >Tài liệu số 1</span
                                >
                            </div>
                            <img
                                src="@/assets/images/svg/svg-arrow-right.svg"
                                alt="svg"
                            />
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img
                                    src="@/assets/images/svg/svg-document.svg"
                                    alt="svg"
                                />
                                <span class="text-base text-[#5A5A5A] ml-2"
                                    >Tài liệu số 2</span
                                >
                            </div>
                            <img
                                src="@/assets/images/svg/svg-arrow-right.svg"
                                alt="svg"
                            />
                        </div>
                    </div>
                    <!-- end tài liệu tham khảo -->

                    <!-- Bài tập tự ôn -->
                    <div class="flex flex-col gap-2 mt-6">
                        <div class="text-black text-lg font-bold">
                            Bài tập tự ôn
                        </div>
                        <nuxt-link
                            to="/revise/1"
                            class="flex items-center justify-between"
                        >
                            <div class="flex items-center">
                                <!-- Chưa làm -->
                                <span
                                    class="w-4 h-4 rounded-full bg-[#EEEEEE] mr-2"
                                ></span>
                                <!-- đã làm -->
                                <svg
                                    class="mr-2"
                                    width="14"
                                    height="15"
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 7.25C0 3.39453 3.11719 0.25 7 0.25C10.8555 0.25 14 3.39453 14 7.25C14 11.1328 10.8555 14.25 7 14.25C3.11719 14.25 0 11.1328 0 7.25ZM10.1445 6.04687C10.4453 5.74609 10.4453 5.28125 10.1445 4.98047C9.84375 4.67969 9.37891 4.67969 9.07813 4.98047L6.125 7.93359L4.89453 6.73047C4.59375 6.42969 4.12891 6.42969 3.82813 6.73047C3.52734 7.03125 3.52734 7.49609 3.82813 7.79688L5.57813 9.54688C5.87891 9.84766 6.34375 9.84766 6.64453 9.54687L10.1445 6.04687Z"
                                        fill="#00B578"
                                    />
                                </svg>
                                <!-- chưa xong -->
                                <span
                                    class="w-4 h-4 rounded-full bg-[#FFC6A3] border-2 border-[#FF6609] mr-2"
                                ></span>

                                <span class="text-base text-[#5A5A5A] ml-2"
                                    >Bài tập số 1</span
                                >
                            </div>
                            <div class="flex items-center">
                                <div class="text-xs text-[#5A5A5A] mr-2">
                                    <span
                                        class="text-sm text-[#FF3141] font-bold"
                                        >12</span
                                    >/100 điểm
                                </div>
                                <img
                                    src="@/assets/images/svg/svg-arrow-right.svg"
                                    alt="svg"
                                />
                            </div>
                        </nuxt-link>
                        <nuxt-link
                            to="/practice/1"
                            class="flex items-center justify-between"
                        >
                            <div class="flex items-center">
                                <!-- Chưa làm -->
                                <span
                                    class="w-4 h-4 rounded-full bg-[#EEEEEE] mr-2"
                                ></span>
                                <!-- đã làm -->
                                <svg
                                    class="mr-2"
                                    width="14"
                                    height="15"
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 7.25C0 3.39453 3.11719 0.25 7 0.25C10.8555 0.25 14 3.39453 14 7.25C14 11.1328 10.8555 14.25 7 14.25C3.11719 14.25 0 11.1328 0 7.25ZM10.1445 6.04687C10.4453 5.74609 10.4453 5.28125 10.1445 4.98047C9.84375 4.67969 9.37891 4.67969 9.07813 4.98047L6.125 7.93359L4.89453 6.73047C4.59375 6.42969 4.12891 6.42969 3.82813 6.73047C3.52734 7.03125 3.52734 7.49609 3.82813 7.79688L5.57813 9.54688C5.87891 9.84766 6.34375 9.84766 6.64453 9.54687L10.1445 6.04687Z"
                                        fill="#00B578"
                                    />
                                </svg>
                                <!-- chưa xong -->
                                <span
                                    class="w-4 h-4 rounded-full bg-[#FFC6A3] border-2 border-[#FF6609] mr-2"
                                ></span>

                                <span class="text-base text-[#5A5A5A] ml-2"
                                    >Bài tập số 2</span
                                >
                            </div>
                            <div class="flex items-center">
                                <div class="text-xs text-[#5A5A5A] mr-2">
                                    <span
                                        class="text-sm text-[#FF3141] font-bold"
                                        >12</span
                                    >/100 điểm
                                </div>
                                <img
                                    src="@/assets/images/svg/svg-arrow-right.svg"
                                    alt="svg"
                                />
                            </div>
                        </nuxt-link>
                    </div>
                    <!-- end Bài tập tự ôn -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeWork",
    layout: "Main",
    data() {
        return {
            tabActive: 0,
        };
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
