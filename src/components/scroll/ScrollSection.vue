<template>
    <div data-scroll-section>
        <ScrollItem v-for="item in items" :item="item" />
    </div>
</template>
<script>
import ScrollItem from "@/components/scroll/ScrollItem";

export default {
    components: {
        ScrollItem
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
</style>
