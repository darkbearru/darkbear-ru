<template>
    <div data-scroll>
        <slot></slot>
        {{ item.title }}
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
</style>