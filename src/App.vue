<template>
    <MainView />
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->

    <!-- <div data-scroll-container>
        <ScrollSection :items="items" />
        <div data-scroll-section>
            <h2 data-scroll data-scroll-speed="1">What's up?</h2>
            <p data-scroll data-scroll-speed="2">😬</p>
        </div>
    </div> -->

</template>


<script>
// import locomotiveScroll from 'locomotive-scroll';
import ContentLoader from "@/components/content-loader/content-loader";
import { GithubData, ImgData, IContentData } from "@/components/content-loader/content-data";
import ScrollSection from "@/components/scroll/ScrollSection";
import MainView from "@/views/MainView";

const github = new GithubData("https://api.github.com/users/darkbearru/repos", (data) => {
    console.log("Github loaded");
    //console.log(data);
});
const img = new ImgData("https://funart.pro/uploads/posts/2021-04/1617416027_13-p-oboi-atlanticheskii-okean-i-tikhii-okean-13.jpg", (data) => {
    console.log("Img loaded");
    console.log(data);
});

const loader = new ContentLoader();

export default {
    components: {
        ScrollSection,
        MainView
    },
    data () {
        return {
            scroll: null,
            items: [
                { title: "Заголовок", speed: 1 }
            ]
        }
    },
    mounted () {
        const _self = this;
        loader.Add(github);
        loader.Add(img);
        loader.Run();
        console.log("Run");
        for (let i = 0; i < 10; i++) {
            console.log(`I: ${i}`);
        }
        /*
        this.$nextTick(function () {
            _self.initLocoScroll();
        });
        */
    },
    methods: {
        /*
        initLocoScroll () {
            const _self = this;
            this.scroll = new locomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                smoothMobile: true,
                getDirection: true
            });
        }
        */
    },

}
</script>


<style>
body {
    background-color: #222831;
    font: 16px/170% Space Grotesk, -apple-system, linkMacSystemFont, Helvetica Neue, Segoe UI, Roboto, Arial, sans-serif;
    font-weight: 400;
    -moz-osx-font-smoothing: grayscale;
}

/*
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

[data-scroll-section] {
    height: 100vh;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
*/
</style>
