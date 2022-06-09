<template>
    <div class="menu-item">
        <!-- <a href="{{ item.link }}">{{ item.name }}</a> -->
        <router-link to={{ item.link }}>{{ item.name }}</router-link>
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