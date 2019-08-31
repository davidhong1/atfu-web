<template>
    <el-col v-loading="loading">
        <el-row class="my_row">
            <el-col :xs="1" :sm="1" :md="13" :lg="13" :xl="13">
                <div style="min-height:1px;"></div>
            </el-col>
            <el-col :xs="7" :sm="7" :md="4" :lg="4" :xl="4">
                <el-button
                        v-if="isSearch"
                        icon="el-icon-close"
                        @click="clearSearch"
                        round
                        type="danger"
                        class="hidden-xs-only"
                >清空搜索内容
                </el-button>
                <el-button
                        v-if="isSearch"
                        icon="el-icon-close"
                        @click="clearSearch"
                        round
                        type="danger"
                        class="hidden-sm-and-up"
                ></el-button>
                <div v-else style="min-height:1px;"></div>
            </el-col>
            <el-col :xs="16" :sm="16" :md="7" :lg="7" :xl="7" style="padding-right: 20px">
                <el-col :span="20" style="padding-right: 8px;">
                    <el-input placeholder="请输入内容" v-model="inputContent"
                              @keyup.enter.native="searchBtnClick"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-button icon="el-icon-search" round @click="searchBtnClick"></el-button>
                </el-col>
            </el-col>
        </el-row>
        <el-row v-if="isSearch" style="height: 45px">
            <span style="line-height: 45px">搜索结果如下</span>
        </el-row>
        <el-row class="my_row_1">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="no" label="产品型号"></el-table-column>
                <el-table-column prop="type" label="类别"></el-table-column>
                <el-table-column prop="brand" label="品牌"></el-table-column>
                <el-table-column prop="packageType" label="封装"></el-table-column>
                <el-table-column prop="batch" label="批号"></el-table-column>
                <el-table-column prop="inventory" label="库存量"></el-table-column>
            </el-table>
        </el-row>
        <el-row class="my_row_2">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="no" label="产品型号"></el-table-column>
                <el-table-column prop="type" label="类别"></el-table-column>
                <el-table-column prop="brand" label="品牌"></el-table-column>
                <el-table-column prop="packageType" label="封装"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <el-pagination
                    class="my_pagination"
                    @current-change="handleCurrentChange"
                    background
                    layout="prev, pager, next, jumper"
                    :total="tableTotal"
                    :current-page.sync="currentPage"
            ></el-pagination>
        </el-row>
    </el-col>
</template>

<script>
    import Axios from "axios";

    export default {
        name: "Products",
        data() {
            return {
                tableData: [],
                tableTotal: 0,
                inputContent: "",
                loading: true,
                currentPage: 1,
                isSearch: false,
                searchContent: ""
            };
        },
        mounted() {
            this.updateTable(1);
        },
        methods: {
            handleCurrentChange(page) {
                console.log(`当前页: ${page}`);
                this.updateTable(page);
            },
            updateTable(page) {
                this.loading = true;
                var url = "";
                if (this.isSearch) {
                    url = this.$store.state.devUrl +
                        "/product/search/" +
                        this.searchContent +
                        "/" +
                        page;
                } else {
                    url = this.$store.state.devUrl + "/product/" + page;
                }
                Axios.get(url)
                    .then(response => {
                        console.log(response.data);
                        this.tableData = response.data.content.list;
                        this.tableTotal = response.data.content.total;
                        this.currentPage = response.data.content.currentPage;
                        if (this.isSearch && this.tableTotal == 0) {
                            this.$message({
                                message: "没有搜索到内容，请重新输入关键字搜索",
                                type: "error"
                            });
                        }
                    })
                    .catch(() => {
                        this.$message({
                            message: "获取数据出了点问题，请稍候重试",
                            type: "error"
                        });
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            },
            searchBtnClick() {
                console.log(this.inputContent);
                if (
                    this.inputContent == null ||
                    this.inputContent == "" ||
                    this.inputContent.replace(/(^s*)|(s*$)/g, "") == ""
                ) {
                    return;
                }
                this.isSearch = true;
                this.searchContent = this.inputContent;
                this.updateTable(1);
            },
            clearSearch() {
                this.isSearch = false;
                this.inputContent = "";
                this.searchContent = "";
                this.updateTable(1);
            }
        }
    }
</script>

<style scoped>
    .my_row_1 {
        margin-bottom: 15px;
    }

    .my_row_2 {
        margin-bottom: 15px;
        display: none;
    }

    .my_pagination {
        float: right;
        margin-top: 8px;
    }

    @media screen and (max-width: 600px) {
        .my_row_1 {
            display: none;
        }

        .my_row_2 {
            display: inline;
        }
    }
</style>