<template lang="html">
    <div v-if="loading" class="loading-page">
        <div class="load-wrapp">
            <div class="load-1">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: true,
    }),
    created() {},
    mounted() {},
    methods: {
        start() {
            this.loading = true;
        },
        finish() {
            this.loading = false;
        },
    },
};
</script>

<style scoped>
.loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
    z-index: 100;
}
.load-wrapp {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.line {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: #4b9cdb;
}

/* =Animate the stuff
------------------------ */
.load-1 .line:nth-last-child(1) {
    animation: loadingA 1.5s 1s infinite;
}
.load-1 .line:nth-last-child(2) {
    animation: loadingA 1.5s 0.5s infinite;
}
.load-1 .line:nth-last-child(3) {
    animation: loadingA 1.5s 0s infinite;
}

@keyframes loadingA {
    0% {
        height: 15px;
    }
    50% {
        height: 35px;
    }
    100% {
        height: 15px;
    }
}
</style>
