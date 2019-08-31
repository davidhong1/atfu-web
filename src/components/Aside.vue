<template>
    <el-main class="my_aside">
        <el-row>
            <h4>联系我们</h4>
        </el-row>
        <el-row class="my_row">David Hong, Export Dept</el-row>
        <el-row class="my_row">Atfu Electronic Technology</el-row>
        <el-row class="my_row">
            <a href="https://blog.csdn.net/ihtczte" target="_blank">
                <icon name="brands/linkedin" class="my_icon"></icon>
            </a>
            <a href="https://blog.csdn.net/ihtczte" target="_blank">
                <icon name="brands/skype" class="my_icon"></icon>
            </a>
            <a href="https://blog.csdn.net/ihtczte" target="_blank">
                <icon name="brands/facebook" class="my_icon"></icon>
            </a>
        </el-row>
        <el-row class="my_row">
            <icon name="envelope" class="my_icon1"></icon>
            <a href="mailto:1751632917@qq.com">
                <span>1751632917@qq.com</span>
            </a>
        </el-row>
        <el-row class="my_row">
            <icon name="phone" class="my_icon1"></icon>
            <a href="tel:+86 15917909630">
                <span>+86 15917909630</span>
            </a>
        </el-row>
    </el-main>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style scoped>
    .my_row {
        margin-bottom: 15px;
    }

    .my_icon {
        width: 23px;
        height: 23px;
        margin-right: 3px;
    }

    .my_icon1 {
        margin-right: 6px;
    }

    .my_aside {
        color: #333;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        margin-right: 30px;
        margin-top: 20px;
        background: #d3dce6;
    }
</style>