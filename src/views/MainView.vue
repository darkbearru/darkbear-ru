<template>
    <main data-scroll-section>

        <header>
            <Title title="Абраменко Алексей" />
            <MainNav :menuItems="menuItems" />
        </header>

        <img v-if="isShowPreview" src="@/assets/img/my-photo-px16.jpg" class="my-photo size-preview" />
        <img src="" class="my-photo size-full" id="darkbear-photo" />
    </main>
</template>

<script>
import MainNav from "@/components/UI/MainNav";
import Title from "@/components/decoration/Title";

export default {
    components: {
        MainNav,
        Title
    },
    props: {
        photoLoaded: Boolean | String,
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
            if (!newValue) return false;

            let _pic = document.querySelector('#darkbear-photo');
            if (_pic) {
                _pic.src = newValue;
                _pic.classList.add("is-loaded");
            }

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