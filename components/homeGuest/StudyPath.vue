<template>
    <div class="mt-8 box">
        <div class="grid grid-cols-12 mt-5">
            <div
                class="col-span-7 bg-course pt-6 rounded-tl-3xl rounded-bl-3xl"
            >
                <div class="text-[#8C3200] font-bold text-2xl px-6 leading-9">
                    Khóa học 1: IELTS cơ bản lên 1.0 -> 3.0 (nội dung không dài
                    quá 2 dòng)
                </div>
                <div class="relative course mt-4 pt-3">
                    <div class="relative bottom-0">
                        <img src="@/assets/images/teacher.png" alt="" />
                        <div class="absolute top-0 right-0">
                            <div
                                class="name-course flex flex-col justify-center items-center shadow-md"
                            >
                                <div>0.0 - 3.0</div>
                                <div>IELTS</div>
                            </div>
                            <div
                                class="price-course flex flex-col justify-center items-center shadow-md"
                            >
                                <div class="promotion text-[28px]">
                                    1.299.000đ
                                </div>
                                <div
                                    class="origin text-sm line-through font-normal"
                                >
                                    1.599.000đ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="col-span-5 p-[22px] pt-0 bg-white rounded-tr-3xl rounded-br-3xl"
            >
                <div class="flex flex-col justify-between h-full">
                    <ul class="content-study">
                        <li>Đầu vào : <b>Mọi trình độ</b></li>
                        <li>Giáo trình chuyên sâu : <b>20</b></li>
                        <li>
                            Buổi kiểm tra đánh giá tự đánh giá tự động bằng AI:
                            <b>50</b>
                        </li>
                        <li>
                            Buổi kiểm tra đánh giá tự động bằng AI: <b>5</b>
                        </li>
                        <li>Lộ trình học chi tiết</li>
                    </ul>

                    <div class="flex justify-start mt-6">
                        <button class="btn-main py-[13px] px-[82px] text-base">
                            Chi tiết khóa học
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VhWebIeltsFeStudyPath",

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style scoped lang="scss">
.box {
    border-radius: 24px;
    box-shadow: 0px 8px 30px rgba(141, 92, 45, 0.1);
}
.bg-course {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(180deg, #f6e5ca 0%, #ffb673 100%);
}
ul.content-study {
    list-style-type: disc;
    list-style-position: outside;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding-left: 20px;
}
.content-study li:first-child {
    margin-top: 24px;
}
.content-study li {
    margin-top: 12px;
}
.course {
    color: #8c3200;
    font-weight: bold;
    .name-course {
        border-radius: 9999px;
        background: #faf7f2;
        width: 123px;
        height: 123px;
        right: 140px;
        position: relative;
        top: 10px;
        font-size: 20px;
    }
    .price-course {
        border-radius: 9999px;
        background: #faf7f2;
        width: 207px;
        height: 207px;
        right: 13px;
        top: -80px;
        position: relative;
    }
}
</style>
