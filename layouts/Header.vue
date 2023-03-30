<template>
    <div>
        <nav
            class="bg-[#FFA14A] border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
        >
            <div
                class="container flex flex-wrap items-center justify-between mx-auto"
            >
                <a href="https://flowbite.com/" class="flex items-center">
                    <span
                        class="self-center text-xl font-semibold whitespace-nowrap text-white"
                    >
                        LOGO HERE -- {{ $t("lang") }}
                    </span>
                </a>
                <div class="flex items-center md:order-2">
                    <button
                        id="user-menu-button"
                        type="button"
                        class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false"
                        data-dropdown-toggle="user-dropdown"
                        data-dropdown-placement="bottom"
                    >
                        <span class="sr-only">Open user menu</span>
                        <svg
                            width="14"
                            height="16"
                            viewBox="0 0 14 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 8C9.1875 8 11 6.21875 11 4C11 1.8125 9.1875 0 7 0C4.78125 0 3 1.8125 3 4C3 6.21875 4.78125 8 7 8ZM8.5625 9.5H5.40625C2.40625 9.5 0 11.9375 0 14.9375C0 15.5312 0.46875 16 1.0625 16H12.9062C13.5 16 14 15.5312 14 14.9375C14 11.9375 11.5625 9.5 8.5625 9.5Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div
                        id="user-dropdown"
                        class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                        <div class="px-4 py-3">
                            <span
                                class="block text-sm text-gray-900 dark:text-white"
                            >
                                Bonnie Green
                            </span>
                            <span
                                class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"
                            >
                                name@flowbite.com
                            </span>
                        </div>
                        <ul class="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Earnings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button
                        data-collapse-toggle="mobile-menu-2"
                        type="button"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    id="mobile-menu-2"
                    class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                >
                    <ul
                        class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[#FFA14A] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
                    >
                        <li>
                            <nuxt-link
                                to="/"
                                class="block py-2 pl-3 pr-4 text-white rounded"
                                aria-current="page"
                            >
                                Trang chủ
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link
                                to="/my-course"
                                class="block py-2 pl-3 pr-4 text-white rounded"
                                aria-current="page"
                            >
                                Khoá học của tôi
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link
                                to="/"
                                class="block py-2 pl-3 pr-4 text-white rounded"
                                aria-current="page"
                            >
                                Phòng học ảo
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link
                                to="/"
                                class="block py-2 pl-3 pr-4 text-white rounded"
                                aria-current="page"
                            >
                                Liên hệ & Tư vấn
                            </nuxt-link>
                        </li>
                        <li>
                            <button
                                id="dropdownDefaultButton"
                                data-dropdown-toggle="dropdown"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center uppercase"
                                type="button"
                            >
                                {{ $store.state.locale }}
                                <svg
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
                                        <div
                                            class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            @click="changeLang('vi')"
                                        >
                                            VI
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            @click="changeLang('en')"
                                        >
                                            EN
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { initFlowbite, Dropdown } from "flowbite";

export default {
    mounted() {
        initFlowbite();
    },

    methods: {
        changeLang(lang) {
            this.$store.commit("SET_LANG", lang);
            this.$i18n.locale = lang;
            const $targetEl = document.getElementById("dropdown");
            const $triggerEl = document.getElementById("dropdownDefaultButton");
            const dropdown = new Dropdown($targetEl, $triggerEl);
            dropdown.hide();
        },
    },
};
</script>

<style></style>
