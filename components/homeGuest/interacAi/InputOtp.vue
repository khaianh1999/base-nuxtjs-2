<template>
    <div
        id="story-5"
        class="circular px-[36px] content-visibility-visible relative flex flex-shrink-0 flex-col items-center justify-center text-lg h-fill-screen w-screen md:w-full text-white md:rounded-[16px] backface-hidden translateZ-0 bg-nav"
    >
        <no-ssr>
            <v-otp-input
                ref="otpInput"
                input-classes="otp-input"
                separator=""
                :num-inputs="6"
                input-type="number"
                :is-input-num="true"
                :should-auto-focus="false"
                @on-change="handleOnChange"
                @on-complete="handleOnComplete"
            />
        </no-ssr>
        <div v-if="valid === false" class="mt-2 text-xs !text-[#ff0000]">
            Nhập đầy đủ mã OTP
        </div>
        <div>
            <div
                class="text-center text-[#252525] text-lg font-normal mt-4 mb-3 cursor-pointer"
                @click="handleClearInput()"
            >
                Gửi lại OTP
            </div>
            <div>
                <button
                    class="btn-main py-[13px] px-[107px]"
                    @click="submitOtp()"
                >
                    Gửi
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valid: null,
            otp: null,
        };
    },

    mounted() {},

    methods: {
        handleOnComplete(value) {
            console.log("OTP completed: ", value);
            this.otp = value;
            this.valid = true;
        },
        handleOnChange(value) {
            console.log("OTP changed: ", value);
            this.otp = value;
        },
        handleClearInput() {
            this.$refs.otpInput.clearInput();
            this.otp = "";
            this.valid = true;
        },
        submitOtp() {
            const str = this.otp.toString();
            this.valid = str.length === 6;
            if (this.valid) {
                console.log("otp gửi lên: ", this.otp);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
::v-deep .otp-input {
    width: 54px;
    height: 54px;
    padding: 5px;
    margin: 0 10px;
    font-size: 20px;
    color: #000;
    border: 1px solid rgba(0, 0, 0, 0.3);
    text-align: center;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
    &.error {
        border: 1px solid red !important;
    }
}
::v-deep .otp-input::-webkit-inner-spin-button,
::v-deep .otp-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
