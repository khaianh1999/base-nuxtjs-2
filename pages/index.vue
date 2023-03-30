<template>
    <div class="px-2 md:px-0">
        <BannerHome />
        <InteractAi />
        <TrialExperience />
        <OptionLevel />
        <OurAdvisor />
        <OurStudents />
        <FrequentQuestion />
    </div>
</template>
<script>
import { initFlowbite } from "flowbite";
import BannerHome from "~/components/homeGuest/BannerHome.vue";
import InteractAi from "~/components/homeGuest/InteractAi.vue";
import TrialExperience from "~/components/homeGuest/TrialExperience.vue";
import OptionLevel from "~/components/homeGuest/OptionLevel.vue";
import OurAdvisor from "~/components/homeGuest/OurAdvisor.vue";
import OurStudents from "~/components/homeGuest/OurStudents.vue";
import FrequentQuestion from "~/components/homeGuest/FrequentQuestion.vue";

export default {
    name: "HomePage",
    components: {
        BannerHome,
        InteractAi,
        TrialExperience,
        OptionLevel,
        OurAdvisor,
        OurStudents,
        FrequentQuestion,
    },
    layout: "Main",
    mounted() {
        initFlowbite();
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 500);
        });
    },
};
</script>
