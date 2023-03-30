<template>
    <div class="p-3 sm:p-5 bg-[#FAFBFF] rounded-[20px] box__shadow mt-6">
        <div class="text-black text-lg font-bold mb-4">Danh sách bài chấm</div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-0">
            <div class="flex flex-col gap-2">
                <div
                    class="flex items-start p-3 rounded-tl-lg rounded-bl-lg cursor-pointer"
                    :class="activeTab == 1 ? 'bg-[#F1F4F8]' : ''"
                    @click="activeTab = 1"
                >
                    <img src="@/assets/images/svg/svg-mic.svg" alt="svg" />
                    <div class="flex flex-col gap-[6px] ml-[10px]">
                        <div class="flex items-center gap-5">
                            <span
                                class="text-[#252525] font-bold text-xs sm:text-base whitespace-nowrap"
                                >Speaking</span
                            >
                            <span class="text-[#252525] text-xs">00:30s</span>
                            <span
                                class="text-white text-xs py-[2px] px-2 bg-[#2CA9E2] rounded-2xl inline-block whitespace-nowrap"
                                >G.V chấm</span
                            >
                        </div>
                        <div
                            class="text-ellipsis overflow-hidden sm:whitespace-nowrap w-[calc(100%-50px)]"
                        >
                            Phần 2: Tên đầu mục ở đây, nội dung thêm ở...
                        </div>
                    </div>
                </div>
                <div
                    class="flex items-start p-3 rounded-tl-lg rounded-bl-lg cursor-pointer"
                    :class="activeTab == 2 ? 'bg-[#F1F4F8]' : ''"
                    @click="activeTab = 2"
                >
                    <img src="@/assets/images/svg/svg-mic.svg" alt="svg" />
                    <div class="flex flex-col gap-[6px] ml-[10px]">
                        <div class="flex items-center gap-5">
                            <span
                                class="text-[#252525] font-bold text-xs sm:text-base whitespace-nowrap"
                                >Writing</span
                            >
                            <span class="text-[#252525] text-xs">00:30s</span>
                            <span
                                class="text-white text-xs py-[2px] px-2 bg-[#2CA9E2] rounded-2xl inline-block whitespace-nowrap"
                                >G.V chấm</span
                            >
                        </div>
                        <div
                            class="text-ellipsis overflow-hidden sm:whitespace-nowrap w-[calc(100%-50px)]"
                        >
                            Phần 2: Tên đầu mục ở đây, nội dung thêm ở...
                        </div>
                    </div>
                </div>
                <div
                    class="flex items-start p-3 rounded-tl-lg rounded-bl-lg cursor-pointer"
                    :class="activeTab == 3 ? 'bg-[#F1F4F8]' : ''"
                    @click="activeTab = 3"
                >
                    <img src="@/assets/images/svg/svg-mic.svg" alt="svg" />
                    <div class="flex flex-col gap-[6px] ml-[10px]">
                        <div class="flex items-center gap-5">
                            <span
                                class="text-[#252525] font-bold text-xs sm:text-base whitespace-nowrap"
                                >Kiểm tra định kỳ</span
                            >
                            <span class="text-[#252525] text-xs">00:30s</span>
                            <span
                                class="text-white text-xs py-[2px] px-2 bg-[#2CA9E2] rounded-2xl inline-block whitespace-nowrap"
                                >G.V chấm</span
                            >
                        </div>
                        <div
                            class="text-ellipsis overflow-hidden sm:whitespace-nowrap w-[calc(100%-50px)]"
                        >
                            Phần 2: Tên đầu mục ở đây, nội dung thêm ở...
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="col-span-2 bg-[#F1F4F8] rounded-lg py-3 sm:py-[18px] px-2 sm:px-6"
            >
                <div class="flex flex-wrap justify-between">
                    <div class="text-black text-base font-bold">
                        Điểm IELTSX
                        <span class="text-[#5A5A5A] text-xs font-normal"
                            >Hệ điểm theo chuẩn IELTSX</span
                        >
                    </div>
                    <span
                        class="flex items-center text-main text-xs cursor-pointer font-medium"
                    >
                        Chi tiết
                        <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.1875 1.16406L10.3125 5.10156C10.4297 5.21875 10.5 5.35938 10.5 5.52344C10.5 5.66406 10.4297 5.80469 10.3125 5.92188L6.1875 9.85938C5.97656 10.0703 5.60156 10.0703 5.39062 9.83594C5.17969 9.625 5.17969 9.25 5.41406 9.03906L8.53125 6.08594H0.5625C0.234375 6.08594 0 5.82812 0 5.52344C0 5.19531 0.234375 4.96094 0.5625 4.96094H8.53125L5.41406 1.98438C5.17969 1.77344 5.17969 1.39844 5.39062 1.1875C5.60156 0.953125 5.95312 0.953125 6.1875 1.16406Z"
                                fill="#FF6609"
                            />
                        </svg>
                    </span>
                </div>
                <div>
                    <span class="font-bold text-[#00B578] text-xl">80</span
                    ><span class="text-black text-sm">/100</span>
                    <span class="text-[#00B578] text-sm font-normal ml-1"
                        >Excellent!</span
                    >
                </div>
                <!-- menutab -->
                <div>
                    <div
                        class="flex item-center justify-between border-b-2 border-[#5A5A5A]"
                    >
                        <span
                            class="text-xs sm:text-base font-bold inline-block p-3 cursor-pointer relative after:absolute after:content-[''] after:left-0 after:bottom-[-2px] after:w-full after:h-[2px]"
                            :class="
                                activeComment == 1
                                    ? 'text-main after:bg-main'
                                    : 'text-[#5A5A5A] after:bg-[#5A5A5A]'
                            "
                            @click="activeComment = 1"
                            >Nhận xét chung</span
                        >
                        <span
                            class="text-xs sm:text-base font-bold inline-block p-3 cursor-pointer relative after:absolute after:content-[''] after:left-0 after:bottom-[-2px] after:w-full after:h-[2px]"
                            :class="
                                activeComment == 2
                                    ? 'text-main after:bg-main'
                                    : 'text-[#5A5A5A] after:bg-[#5A5A5A]'
                            "
                            @click="activeComment = 2"
                            >Phát âm</span
                        >
                        <span
                            class="text-xs sm:text-base font-bold inline-block p-3 cursor-pointer relative after:absolute after:content-[''] after:left-0 after:bottom-[-2px] after:w-full after:h-[2px]"
                            :class="
                                activeComment == 3
                                    ? 'text-main after:bg-main'
                                    : 'text-[#5A5A5A] after:bg-[#5A5A5A]'
                            "
                            @click="activeComment = 3"
                            >Trôi chảy</span
                        >
                        <span
                            class="text-xs sm:text-base font-bold inline-block p-3 cursor-pointer relative after:absolute after:content-[''] after:left-0 after:bottom-[-2px] after:w-full after:h-[2px]"
                            :class="
                                activeComment == 4
                                    ? 'text-main after:bg-main'
                                    : 'text-[#5A5A5A] after:bg-[#5A5A5A]'
                            "
                            @click="activeComment = 5"
                            >Từ vựng</span
                        >
                        <span
                            class="text-xs sm:text-base font-bold inline-block p-3 cursor-pointer relative after:absolute after:content-[''] after:left-0 after:bottom-[-2px] after:w-full after:h-[2px]"
                            :class="
                                activeComment == 5
                                    ? 'text-main after:bg-main'
                                    : 'text-[#5A5A5A] after:bg-[#5A5A5A]'
                            "
                            @click="activeComment = 5"
                            >Ngữ pháp</span
                        >
                    </div>
                    <div class="mt-5">
                        <div class="flex">
                            Điểm phát âm
                            <span class="font-bold text-[#FF3141] text-xl ml-3"
                                >35</span
                            >/100
                        </div>
                        <div class="text-[#252525] text-sm sm:text-base mt-3">
                            Demonstrates generally good fluency and coherence
                            while speaking but may take occasional pauses. Is
                            pro ficient in using sophisticated vocabulary and
                            idiomatic structures. Proficient in
                        </div>
                    </div>
                </div>
                <!-- end menutab -->
                <div
                    class="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 mt-5"
                >
                    <div class="py-4 px-3 rounded-[10px] bg-white">
                        <div class="text-sm text-black font-medium mb-1">
                            Số câu đúng
                        </div>
                        <div class="text-lg font-bold text-[#00B578]">12</div>
                    </div>
                    <div class="py-4 px-3 rounded-[10px] bg-white">
                        <div class="text-sm text-black font-medium mb-1">
                            Số câu sai
                        </div>
                        <div class="text-lg font-bold text-[#FF3141]">3</div>
                    </div>
                    <div class="py-4 px-3 rounded-[10px] bg-white">
                        <div class="text-sm text-black font-medium mb-1">
                            Số câu đúng
                        </div>
                        <div class="text-lg font-bold text-black">
                            12 <span class="text-xs font-normal">bạn khác</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeComment: 1,
            activeTab: 1,
        };
    },
};
</script>

<style></style>
