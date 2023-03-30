<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-[53px]">
            <div class="experience-ai">
                <img
                    src="@/assets/images/experience-ai.png"
                    alt=""
                    class="h-[536px] w-[453px]"
                />
                <div class="flex justify-center -mt-[130px]">
                    <button class="btn-main py-[17px] px-[53px]">
                        Trải nghiệm tương tác ảo ngay
                    </button>
                </div>
            </div>
            <div>
                <h3 class="text-[#252525] text-4xl font-bold">
                    Nói tương tác cùng trợ lý A.I
                </h3>
                <p class="mt-2 font-normal text-[#252525] text-2xl">
                    Phòng luyện tập tương tác trực tiếp với trí tuệ nhân tạo
                </p>
                <div class="flex flex-col gap-5">
                    <div class="flex items-start mt-5">
                        <img
                            class="mr-4 w-9 h-9"
                            src="@/assets/images/svg/svg-practice.svg"
                            alt="svg"
                        />
                        <p class="text-[#252525] text-2xl font-normal">
                            Luyện tập chuyên sâu kỹ năng nói
                        </p>
                    </div>
                    <div class="flex items-start">
                        <img
                            class="mr-4 w-9 h-9"
                            src="@/assets/images/svg/svg-time.svg"
                            alt="svg"
                        />
                        <p class="text-[#252525] text-2xl font-normal">
                            Bài chấm nhanh chóng
                        </p>
                    </div>
                    <div class="flex items-start">
                        <img
                            class="mr-4 w-9 h-9"
                            src="@/assets/images/svg/svg-target.svg"
                            alt="svg"
                        />
                        <p class="text-[#252525] text-2xl font-normal">
                            Độ chính xác tới 85%
                        </p>
                    </div>
                    <div class="flex items-start">
                        <img
                            class="mr-4 w-9 h-9"
                            src="@/assets/images/svg/svg-note.svg"
                            alt="svg"
                        />
                        <p class="text-[#252525] text-2xl font-normal">
                            Thực chiến liên tục tăng cao khả năng đỗ lên tới 90%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="css">
.experience-ai {
    background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #d3d3d3 100%);
    border-radius: 32px;
    padding: 90px 36px 93px 58px;
}
</style>
