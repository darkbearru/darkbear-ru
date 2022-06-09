<template>
    <div class="site-title">
        <h1>{{ title }}</h1>
    </div>
</template>
<script>
export default {
    props: {
        title: String
    },
    data () {
        return {

        }
    }
}
</script>
<style scoped>
h1 {
    position: relative;
    font-family: "Arial Black", Impact, 'Arial Narrow Bold', sans-serif;
    font-size: 5rem;
    line-height: 5rem;
    width: 80%;
    z-index: 3;
    text-transform: uppercase;
    margin: 0;
    background-image: webkit-linear-gradient(0deg, #d72b59, #fbe851);
    background-image: -webkit-linear-gradient(0deg, #d72b59, #fbe851);
    background-clip: text;
    -webkit-background-clip: text;
    background-color: transparent;
    color: #fbe851;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>