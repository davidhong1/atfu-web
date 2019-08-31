<template>
    <el-container>
        <el-header>
            <vHeader/>
        </el-header>
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-aside class="v_aside">
                <vAside/>
            </el-aside>
        </el-container>
        <div class="v_aside_1">
            <vAside/>
        </div>
        <el-footer>
            <vFooter/>
        </el-footer>
    </el-container>
</template>

<script>
    import Header from "@/components/Header";
    import Aside from "@/components/Aside";
    import Footer from "@/components/Footer";

    export default {
        name: "app",
        components: {
            vHeader: Header,
            vAside: Aside,
            vFooter: Footer
        }
    }
</script>

<style scoped>
    .v_aside_1 {
        display: none;
        text-align: center;
        margin-top: 0;
        margin-left: 30px;
    }

    .el-header {
        padding: 0;
    }

    @media screen and (max-width: 1100px) {
        .v_aside {
            display: none;
        }

        .v_aside_1 {
            display: inline;
        }
    }
</style>
