<template>
    <el-row v-loading="loading" class="my_row">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="公司名称">
                <el-input v-model="form.company" class="my_input"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
                <el-input v-model="form.contact" class="my_input"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱">
                <el-input v-model="form.email" class="my_input"></el-input>
            </el-form-item>
            <el-form-item label="传真">
                <el-input v-model="form.fax" class="my_input"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 3, maxRows: 5}"
                        v-model="form.more"
                        class="my_input"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
        </el-form>
    </el-row>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Contact",
        data() {
            return {
                form: {
                    company: "",
                    fax: "",
                    more: "",
                    email: "",
                    contact: ""
                },
                loading: false
            };
        },
        methods: {
            onSubmit() {
                console.log("submit!");
                console.log(this.form);
                this.loading = true;
                axios
                    .post(this.$store.state.devUrl + "/intention", this.form)
                    .then(res => {
                        console.log(res);
                        this.$message({
                            message: res.data.content,
                            type: "success"
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        this.$message({
                            message: err,
                            type: "error"
                        });
                    })
                    .finally(() => (this.loading = false));
            }
        }
    }
</script>

<style scoped>
    .my_input {
        width: 450px;
    }

    .my_row {
        margin-top: 10px;
    }

    @media screen and (max-width: 600px) {
        .my_input {
            width: 250px;
        }
    }
</style>