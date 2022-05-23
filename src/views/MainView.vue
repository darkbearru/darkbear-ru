<template>
    <main data-scroll-section>
        <MainNav :menuItems="menuItems" />

        <img v-if="isShowPreview" src="@/assets/img/my-photo-px16.jpg" class="my-photo size-preview" />
        <img src="@/assets/img/my-photo.jpg" class="my-photo size-full" id="darkbear-photo" />
    </main>
</template>

<script>
import MainNav from "@/components/UI/MainNav";

export default {
    components: {
        MainNav
    },
    props: {
        photoLoaded: {
            type: Boolean
        },
        menuItems: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            isShowPreview: true
        };
    },
    methods: {
    },
    watch: {
        /**
         * Показываем большое фото после того как оно подгрузится
         */
        photoLoaded (newValue, oldValue) {
            if (newValue !== true) return false;

            let _pic = document.querySelector('#darkbear-photo');
            if (_pic) _pic.classList.add("is-loaded");

            // Через 3 секунды отрубаем фото плохого качества
            setTimeout(() => {
                this.isShowPreview = false
            }, 2100);
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

main {
    height: 100vh;
    overflow-x: hidden;
}
</style>