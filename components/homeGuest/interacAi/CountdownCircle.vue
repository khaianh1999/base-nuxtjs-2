<template>
    <div id="countdown">
        <div id="countdown-number">
            <img
                class="w-6 h-6"
                src="@/assets/images/svg/microphone.svg"
                alt="svg"
            />
        </div>
        <svg v-if="coundownTime > 0">
            <circle r="18" cx="20" cy="20"></circle>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        transform: {
            type: Number,
            default: 0,
        },
        startRecord: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            coundownTime: 15,
        };
    },
    watch: {
        transform() {
            if (this.transform === -400) {
                const intervalTime = setInterval(() => {
                    this.coundownTime--;
                    if (this.coundownTime <= 0) {
                        clearInterval(intervalTime);
                        this.$emit("next-page");
                    }
                }, 1000);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
body {
    height: 100%;
    width: 100%;
    background-color: #333;
}

#countdown {
    position: absolute;
    top: -80px;
    margin: auto;
    height: 40px;
    width: 40px;
    text-align: center;
}

#countdown-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
}

svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    transform: rotateY(-180deg) rotateZ(-90deg);
}

svg circle {
    stroke-dasharray: 113px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 2px;
    stroke: white;
    fill: none;
    animation: countdown 15s linear alternate forwards;
}

@keyframes countdown {
    from {
        stroke-dashoffset: 0px;
    }
    to {
        stroke-dashoffset: 113px;
    }
}
</style>
