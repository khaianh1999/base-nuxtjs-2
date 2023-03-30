<template>
    <div class="p-3 sm:p-5 bg-[#FAFBFF] rounded-[20px] box__shadow">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-2 sm:gap-0">
            <div class="col-span-3">
                <div class="flex flex-wrap items-center">
                    <span class="text-black text-lg font-bold mr-[50px]"
                        >Kết quả học của bạn</span
                    >
                    <div>
                        <button
                            id="dropdownDefaultButton"
                            data-dropdown-toggle="dropdown"
                            class="text-[#595959] font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center border border-[#FAFBFF] shadow"
                            type="button"
                        >
                            30 ngày gần nhất<svg
                                class="w-4 h-4 ml-2"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div
                            id="dropdown"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                            <ul
                                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >Dashboard</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >Settings</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >Earnings</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >Sign out</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    class="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 mt-4"
                >
                    <div
                        class="relative flex flex-col gap-2 py-4 px-5 rounded-[10px] bg-gradient-to-b from-[#FF7549] to-[#FF4444] text-white"
                    >
                        <img
                            class="absolute right-0 bottom-0"
                            src="@/assets/images/half_circle.png"
                            alt="svg"
                        />
                        <img
                            class="w-6 h-6"
                            src="@/assets/images/svg/svg-book2.svg"
                            alt="svg"
                        />
                        <div>
                            <span class="text-lg font-bold mr-2">12</span>
                            <span class="text-xs">Bài học hoàn thành</span>
                        </div>
                    </div>
                    <div
                        class="relative flex flex-col gap-2 py-4 px-5 rounded-[10px] bg-gradient-to-b from-[#FFB967] to-[#F58F46] text-white"
                    >
                        <img
                            class="absolute right-0 bottom-0"
                            src="@/assets/images/half_circle.png"
                            alt="svg"
                        />
                        <img
                            class="w-6 h-6"
                            src="@/assets/images/svg/svg-book.svg"
                            alt="svg"
                        />
                        <div>
                            <span class="text-lg font-bold mr-2">56</span>
                            <span class="text-xs">Bài tập hoàn thành</span>
                        </div>
                        <div class="flex items-end">
                            <span class="text-2xl font-bold flex items-end"
                                >12<span class="text-sm font-normal"
                                    >/100</span
                                ></span
                            >
                            <span
                                class="text-xs font-normal flex items-center ml-3"
                            >
                                Điểm trung bình
                            </span>
                        </div>
                    </div>
                    <div
                        class="relative flex flex-col gap-2 py-4 px-5 rounded-[10px] bg-gradient-to-b from-[#49BEFF] to-[#46A1F5] text-white"
                    >
                        <img
                            class="absolute right-0 bottom-0"
                            src="@/assets/images/half_circle.png"
                            alt="svg"
                        />
                        <div class="flex items-center">
                            <img
                                class="w-6 h-6 mr-3"
                                src="@/assets/images/svg/svg-hat.svg"
                                alt="svg"
                            />
                            <span class="text-sm font-bold"
                                >Bài thi gần nhất</span
                            >
                        </div>
                        <div class="flex items-end">
                            <span class="text-2xl font-bold flex items-end"
                                >12<span class="text-sm font-normal"
                                    >/100</span
                                ></span
                            >
                            <span
                                class="text-xs font-normal flex items-center ml-9"
                            >
                                <svg
                                    width="9"
                                    height="10"
                                    viewBox="0 0 9 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.05469 4.57422C7.9375 4.69141 7.78125 4.75 7.625 4.75C7.44922 4.75 7.29297 4.69141 7.17578 4.57422L5.125 2.52344V8.5C5.125 8.85156 4.83203 9.125 4.5 9.125C4.1875 9.125 3.875 8.85156 3.875 8.5V2.52344L1.80469 4.57422C1.57031 4.82812 1.16016 4.82812 0.925781 4.57422C0.671875 4.33984 0.671875 3.92969 0.925781 3.69531L4.05078 0.570312C4.28516 0.316406 4.69531 0.316406 4.92969 0.570312L8.05469 3.69531C8.30859 3.92969 8.30859 4.33984 8.05469 4.57422Z"
                                        fill="white"
                                    />
                                </svg>
                                12.5 điểm
                            </span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center bg__armorial justify-center mt-4">
                    <img src="@/assets/images/armorial.png" alt="img" />
                    <span class="ml-1 text-white text-sm font-bold"
                        >8 ngày học liên tiếp</span
                    >
                </div>
            </div>
            <div class="relative mt-0 sm:-mt-[65px]">
                <span
                    class="bg-[#DBE7FF] text-[#00B578] py-4 px-8 rounded-[100%] inline-block relative sm:-ml-[70px]"
                    >Excellent!
                    <span
                        class="w-[14px] h-[14px] bg-[#DBE7FF] rounded-full absolute bottom-1 right-1"
                    ></span>
                </span>
                <span
                    class="w-[10px] h-[10px] bg-[#DBE7FF] rounded-full absolute top-[50px] left-[68px]"
                ></span>
                <span
                    class="w-[8px] h-[8px] bg-[#DBE7FF] rounded-full absolute top-[60px] left-[85px]"
                ></span>
                <div class="flex justify-end">
                    <img src="@/assets/images/cat_it.png" alt="img" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg__armorial {
    background: url("~/assets/images/bg-chain.png");
    background-repeat: no-repeat;
    height: 32px;
    width: 250px;
}
</style>
