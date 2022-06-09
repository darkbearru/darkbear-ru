<template>
    <nav class="main-nav">
        <NavItem v-for="item in menuItems" :item="item" />
    </nav>
</template>

<script>
import NavItem from "@/components/UI/NavItem";

export default {
    components: {
        NavItem
    },
    props: {
        menuItems: {
            type: Array,
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