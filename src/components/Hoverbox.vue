<template>
    <div
        class="hoverbox"
        :class="{'is-hoverd':isHoverd}"
        @mouseover="mouseover($event)"
        @mouseout="mouseout($event)"
        @click="handleClick($event)"
    >
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import $utils from "@/utils";

@Component({})
export default class HoverBox extends Vue {
    isFirstHoverIn: boolean = true;
    isHoverd = false;

    async hoverIn(event: any) {
        if (this.$listeners["hoverIn"]) {
            this.$emit("hoverIn", event);
            this.isHoverd = true;
        } else {
            this.isHoverd = false;
            console.error(
                `[HoverBox warn] Invalid handler for event "hoverIn": got undefined`
            );
        }
    }
    async hoverOut(event: any) {
        if (this.$listeners["hoverOut"]) {
            this.$emit("hoverOut", event);
            this.isHoverd = false;
        } else {
            this.isHoverd = false;
            console.error(
                `[HoverBox warn] Invalid handler for event "hoverOut": got undefined`
            );
        }
    }
    async handleClick(event: any) {
        this.$emit("click", event);
    }

    mouseover(event: any) {
        if ($utils.isParents(event.toElement, event.currentTarget) == true) {
            if (this.isFirstHoverIn == true) {
                this.hoverIn(event).then((res: any) => {
                    this.isFirstHoverIn = false;
                });
            }
        } else if (
            $utils.isParents(event.toElement, event.currentTarget) == false
        ) {
        }
    }
    mouseout(event: any) {
        if ($utils.isParents(event.toElement, event.currentTarget) == true) {
        } else if (
            $utils.isParents(event.toElement, event.currentTarget) == false
        ) {
            this.hoverOut(event).then((res: any) => {
                this.isFirstHoverIn = true;
            });
        }
    }
}
</script>

<style scoped>
.hoverbox {
    width: 100%;
    height: 100%;
}
</style>

