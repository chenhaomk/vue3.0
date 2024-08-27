<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import vHeader from '@/components/Header.vue';
import vSiderBar from '@/components/SideBar.vue';
import { useSidebarStore } from '@/stores/sidebar';
import { useTabsStore } from '@/stores/tabs';
import vTabs from '@/components/Tabs.vue';

const sidebar = useSidebarStore();
const tabs = useTabsStore();
</script>

<template>
  <div class="wrapper">
    <v-header />
    <v-siderBar />
    <div class="content-box">
      <v-tabs></v-tabs>
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <keep-alive :include="tabs.nameList">
              <component :is="Component"></component>
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #eef0fc;
  overflow: hidden;
}
</style>
