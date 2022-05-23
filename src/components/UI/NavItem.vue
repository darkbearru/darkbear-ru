<template>
    <div class="menu-item">
        <a href="{{ item.link }}">{{ item.name }}</a>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data () {
        return {

        }
    }
}
</script>
<style scoped>
</style>