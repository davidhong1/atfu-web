<template>
    <el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/broadcom.png" class="my_img">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/samsung.png" class="my_img">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/media_tek.png" class="my_img">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/micron.png" class="my_img">
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/intel.png" class="my_img">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/infineon.png" class="my_img">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/nvidia.png" class="my_img">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/nxp_semiconductors.png" class="my_img">
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/qualcomm.png" class="my_img">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/ons.png" class="my_img">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/globalfoundries.png" class="my_img">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/renesas_electronics.png" class="my_img">
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/sony.png" class="my_img">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/sk_hynix.png" class="my_img">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/st_microelectronics.png" class="my_img">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/toshiba.png" class="my_img">
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/texas_instruments.png" class="my_img">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/tsmc.png" class="my_img">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="my_col">
                    <img src="../assets/united_microelectronics_corp.png" class="my_img">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="my_col">
                </div>
            </el-col>
        </el-row>
    </el-row>
</template>

<script>
    export default {
        name: "Partners"
    }
</script>

<style scoped>
    .my_col {
        position: relative;
        width: 100%;
        height: 90px;
        margin-bottom: 20px;
    }

    .my_img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        max-width: 100%;
        max-height: 100%;
    }
</style>