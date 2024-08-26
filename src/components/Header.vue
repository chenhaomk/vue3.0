<template>
    <div class="header-box">
        <div class="header-left">
            <img class="header-logo" src="../assets/img/logo.svg" alt="">
            <div class="header-title">后台管理系统</div>
            <div class="collapse-btn" @click="collapseChage">
                <el-icon v-if="sidebar.collapse">
                    <Expand />
                </el-icon>
                <el-icon v-else>
                    <Fold />
                </el-icon>
            </div>
        </div>
        <div class="header-right">
            <div class="btn-icon" @click="router.push('/theme')">
                <el-tooltip effect="dark" content="设置主题" placement="bottom">
                    <i class="el-icon-lx-skin"></i>
                </el-tooltip>
            </div>
            <div class="btn-icon" @click="router.push('/ucenter')">
                <el-tooltip effect="dark" :content="message ? `有${message}条未读消息` : `消息中心`" placement="bottom">
                    <i class="el-icon-lx-notice"></i>
                </el-tooltip>
                <span class="btn-bell-badge" v-if="message"></span>
            </div>
            <div class="btn-icon" @click="setFullScreen">
                <el-tooltip effect="dark" content="全屏" placement="bottom">
                    <i class="el-icon-lx-full"></i>
                </el-tooltip>
            </div>
            <el-avatar class="user-avator" :size="30" :src="imgurl" />
            <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    {{ username }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
                            <el-dropdown-item>项目仓库</el-dropdown-item>
                        </a>
                        <a href="https://lin-xin.gitee.io/example/vuems-doc/" target="_blank">
                            <el-dropdown-item>官方文档</el-dropdown-item>
                        </a>
                        <el-dropdown-item command="user">个人中心</el-dropdown-item>
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import imgurl from '../assets/img/img.jpg';

const router = useRouter();


const username: string | null = localStorage.getItem('vuems_name');
const message: number = 2;

const collapseChage = () => {

}

const sidebar = {
    collapse: false
}


const setFullScreen = () => {
    if (document.fullscreenElement) {
        document.exitFullscreen()
    } else {
        document.documentElement.requestFullscreen()
    }
}

const handleCommand = () => {

}

</script>

<style scoped>
.header-box {
    display: flex;
    justify-content: space-between;
    height: 70px;
    box-sizing: border-box;
    color: var(--header-text-color);
    background-color: var(--header-bg-color);
    border-bottom: 1px solid #ddd;
}

.header-left {
    display: flex;
    padding-left: 20px;
    align-items: center;
}

.header-logo {
    width: 35px;
}

.header-title {
    font-size: 22px;
    margin: 0 40px 0 10px;
}

.collapse-btn {
    font-size: 22px;
    height: 100%;
    display: flex;
    align-items: center;
    opacity: 0.8;
    padding: 0 10px;
}

.collapse-btn:hover {
    opacity: 1;
    cursor: pointer;
}


.header-right {
    display: flex;
    align-items: center;
    padding-right: 50px;
}


.btn-icon {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: var(--header-text-color);
    margin: 0 5px;
    font-size: 20px;
}

.btn-bell-badge {
    position: absolute;
    right: 4px;
    top: 0px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: var(--header-text-color);
}

.user-avator {
    margin: 0 10px 0 20px;
}

.el-dropdown-link {
    color: var(--header-text-color);
    cursor: pointer;
    display: flex;
    align-items: center;
}
</style>