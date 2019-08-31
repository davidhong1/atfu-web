<template>
    <el-carousel indicator-position="outside" height="600px">
        <el-carousel-item v-for="item in pics" :key="item" class="img_item">
            <img :src="item" class="my_img">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                pics: [require("../assets/p2.png"), require("../assets/p1.png")],
            }
        }
    }
</script>

<style scoped>
    .el-carousel--horizontal {
        overflow-x: hidden;
        overflow-y: hidden;
    }

    .img_item {
        width: 100%;
    }

    .my_img {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
</style>