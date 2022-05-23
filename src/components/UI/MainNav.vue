<template>
    <div class="main-nav">
        <NavItem v-for="item in menuItems" :item="item" />
    </div>
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