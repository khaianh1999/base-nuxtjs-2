<template>
    <div class="get-consulting container mx-auto mt-8 mb-4">
        <div class="mx-auto bg-white rounded-2xl shadow-md box">
            <h3 class="text-[#252525] font-bold text-[32px] text-center">
                Nhận tư vấn ngay lộ trình
            </h3>
            <!-- Form -->
            <form @submit.prevent="submitForm">
                <div class="mt-5">
                    <div class="grid grid-cols-4 gap-4">
                        <!-- Họ và tên -->
                        <div>
                            <input
                                v-model="$v.name.$model"
                                placeholder="Họ và tên*"
                                type="text"
                                class="bg-white h-10 border border-[#D5D5D5] text-[#A0A0A0] text-base rounded focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3"
                            />
                            <div
                                v-if="$v.name.$error || valid === false"
                                class="mt-2 text-xs !text-[#ff0000]"
                            >
                                <div v-if="!$v.name.required || !name">
                                    Họ và tên là một trường bắt buộc
                                </div>
                                <div v-else-if="!$v.name.maxLength">
                                    Họ và tên không quá 10 ký tự
                                </div>
                                <div v-else-if="!$v.name.$dirty">
                                    Please enter your name.
                                </div>
                            </div>
                        </div>

                        <!-- Số điện thoại -->
                        <div>
                            <input
                                v-model="$v.phone.$model"
                                placeholder="Số điện thoại*"
                                type="text"
                                class="bg-white h-10 border border-[#D5D5D5] text-[#A0A0A0] text-base rounded focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3"
                            />
                            <div
                                v-if="$v.phone.$error || valid === false"
                                class="mt-2 text-xs !text-[#ff0000]"
                            >
                                <div v-if="!$v.phone.required">
                                    Số điện thoại là một trường bắt buộc
                                </div>
                                <div v-else-if="!$v.phone.isCheckPhone">
                                    Số điện thoại không hợp lệ
                                </div>
                            </div>
                        </div>

                        <!-- Email -->
                        <div>
                            <input
                                v-model="$v.email.$model"
                                placeholder="Email*"
                                type="text"
                                class="bg-white h-10 border border-[#D5D5D5] text-[#A0A0A0] text-base rounded focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3"
                            />
                            <div
                                v-if="$v.email.$error || valid === false"
                                class="mt-2 text-xs !text-[#ff0000]"
                            >
                                <div v-if="!$v.email.required">
                                    Email là một trường bắt buộc
                                </div>
                                <div v-else-if="!$v.email">
                                    Email không hợp lệ
                                </div>
                            </div>
                        </div>
                        <!-- Nhận tư vấn -->
                        <div>
                            <button
                                type="submit"
                                class="w-full bg-main text-white font-bold text-base text-center h-10 cursor-pointer rounded"
                            >
                                Nhận tư vấn
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { required, maxLength, email } from "vuelidate/lib/validators";
const isCheckPhone = (value) => {
    const regCheckPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    return regCheckPhone.test(value);
};
export default {
    data() {
        return {
            valid: null,
            name: "",
            phone: "",
            email: "",
        };
    },
    validations() {
        return {
            name: { required, maxLength: maxLength(10) },
            phone: { required, isCheckPhone },
            email: { required, email },
            // contact: {
            //     email: { required, email },
            // },
        };
    },
    methods: {
        // Click btn "Nhận tư vấn"
        submitForm() {
            this.valid = !this.$v.$invalid;
            if (this.valid) {
                const data = {
                    name: this.name,
                    phone: this.phone,
                    email: this.email,
                };
                console.log("data gửi lên api: ", data);
                return;
            }
            console.log("Form validate");
        },
    },
};
</script>

<style lang="scss" scoped>
.get-consulting {
    .box {
        padding: 20px 81px 34px 70px;
    }
    input:focus-visible {
        outline: none;
    }
}
</style>
