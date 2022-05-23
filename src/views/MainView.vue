<template>
    <main data-scroll-section>
        <img v-if="isShowPreview" src="@/assets/img/my-photo-px16.jpg" class="my-photo size-preview" />
        <img src="" class="my-photo size-full" id="darkbear-photo" />
    </main>
</template>

<script lang="ts">
export default {
    data() {
        return {
            isShowPreview: boolean = true
        };
    },
    methods: {
        /**
         * Показываем большое фото после того как оно подгрузится
         */
        isBigPhotoLoaded() {
            let _new: HTMLElement = document.querySelector('#darkbear-photo');

            _pic.classList.add("is-loaded");

            // Через 3 секунды отрубаем фото плохого качества
            setTimeout(() => {
                this.isShowPreview = false
            }, 3000);

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