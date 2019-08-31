<template>
    <el-row>
        <el-col :span="24">
            <el-menu
                    mode="horizontal"
                    router
                    unique-opened
                    :default-active="$route.path"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    :collapse="isCollapse"
            >
                <el-menu-item index="/">
                    <icon name="microchip"></icon>
                    <span style="padding-left: 5px">Atfu Electronic</span>
                </el-menu-item>
                <el-menu-item index="/products">
                    <i class="el-icon-menu"></i>
                    <span class="menu-name">产品中心</span>
                </el-menu-item>
                <el-menu-item index="/partners" key="partners">
                    <i class="el-icon-star-on"></i>
                    <span class="menu-name">主营品牌</span>
                </el-menu-item>
                <el-menu-item index="/contact" key="contact">
                    <i class="el-icon-goods"></i>
                    <span class="menu-name">询价下单</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                isCollapse: false
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    @media screen and (max-width: 580px) {
        .menu-name {
            display: none;
        }
    }
</style>