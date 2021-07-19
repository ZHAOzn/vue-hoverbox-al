<template>
    <div id="app">
        <hoverbox
            @hoverIn="hoverin($el)"
            @hoverOut="hoverout($el)"
            style="width:200px;height:200px"
        >
            <div style="width:200px;height:200px;background-color:red"></div>
        </hoverbox>
    </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import HoverBox from "@/components/index";
@Component({
    components: {
        hoverbox: HoverBox
    }
})
export default class App extends Vue {
    hoverin(el: any) {
        console.log("in");
    }
    hoverout(el: any) {
        console.log("out");
    }
}
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
