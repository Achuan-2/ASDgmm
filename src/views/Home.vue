<template>
    <div>
        <el-row class="row-header" type="flex" justify="center">
            <!-- justify对齐方式 -->
            <el-col :span="10">
                <h2 class="header-h2">
                    <img src="../assets/DNA.png" />
                    <router-link to="/goHome">
                        {{ pj_name }}
                    </router-link>
                </h2>
            </el-col>
            <el-col :span="100" offset="80">
                <navmenu></navmenu>
            </el-col>
        </el-row>
        <el-row style="height: 800px; background: #eeeeee" type="flex" justify="center">
            <el-col :span="25">
                <br />
                <h1>Hello!Welcome to {{ pj_name }}</h1>
                <p v-html="messages"></p>
                
                <el-button type="upload">Upload you data</el-button>
                <el-button type="primary">Learn more >></el-button>
                <ul style="margin-left:-20px;    padding-left: 20px;">Notes for Uploading
                    <li>*************</li>
                    <li>*************</li>
                    <li>*************</li>
                    <li>*************</li>
                </ul>
                <br />
            </el-col>
            <el-col :span="8">
                <!-- <img class="cry" src="../assets/doncry.png"> -->
                <img class="cry" src="../assets/wallhaven-43zyo6.png">
            </el-col> 
        </el-row>
        <el-row style="background: #eeeeee;margin-top:  60px;" type="flex" justify="center">
            <el-col :span="20" justify="center">
                <el-card shadow="never" v-for="heading in headings" :key="heading">
                    <h2>{{ heading }}</h2>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                    <el-button size="small">View details >></el-button>
                </el-card>
            </el-col>
        </el-row>
        <el-row style="background: #eeeeee" type="flex" justify="center">
            <el-col :span="15">
                <el-divider></el-divider>
                <p>© 2020 Company, Inc.</p>
            </el-col>
        </el-row>
        <!-- <el-container>
                <el-header>
                    <navmenu></navmenu>
                </el-header>
                <el-container>
                    <el-aside width="400px">
                        <submenu> </submenu>
                    </el-aside>
                    <el-main>
                        <router-view />
                    </el-main>
                </el-container>
        </el-container> -->
    </div>
</template>

<script>
import NavMenu from '../components/NavMenu'
// import SubMenu from '../components/SubMenu'
export default {
    name: 'Home',
    data() {
        return {
            headings: ['1Heading', '2Heading', '3Heading', '4Heading', '5Heading', '6Heading'],
            pj_name: 'ASDgmm',
            activeIndex: '1',
            activeIndex2: '1',
            messages:`
            <strong>A Gut Microbial Model for Autism Diagnosis Based on Machine Learning</strong> <br><br>
            This website uses a random forest classifier to look for associations between gut microbes and  Autism. <br>
            You can predict the mental state of your samples by submitting data of  gut microbes
            `
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        },
    },
    components: {
        navmenu: NavMenu,
        // 'submenu':SubMenu
    },
}
</script>


<style scoped>
.el-card {
    background: #fbfbfb;
    width: 300px;
    display: inline-block;
    margin: 0.3em;
    border-radius: 20px;
}
.grid-content {
    /* background: rgb(14, 214, 131); */
    border-radius: 4px;
    min-height: 80px;
}
.text {
    font-size: 14px;
}
.item {
    padding: 18px 0;
}
.row-header .header-h2 {
    color: red !important;
    display: inline-block;
    height: 21px;
    text-align: center;
}
.row-header .header-h2 a {
    color: #11dada !important;
}
.header-h2:hover {
    color: #fff;
}
.header-h2 img {
    width: 23px;
}
.row-header {
    background: #06051a;
}
a {
    text-decoration: none;
}
.el-row {
    margin-bottom: 0px;
}
.cry {
    width:600px;
    position: relative;
    left: -136px;
}
</style>
