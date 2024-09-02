<template>
    <el-form :model="query" ref="searchRef" :inline="true">
        <el-form-item v-for="item in options" :label="item.label" :prop="item.prop">
            <el-input v-if="item.type === 'input'" :disabled="item.disabled" :placeholder="item.placeholder"
                v-model="query[item.prop]" clearable>
            </el-input>

        </el-form-item>
        <el-form-item>
            <el-button type="primary" :icon="Search" @click="search">
                搜索
            </el-button>
            <el-button :icon="Refresh" @click="resetForm(searchRef)">
                重置
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup name="stytem-user">
import { defineProps, ref } from 'vue';
import type { PropType } from 'vue'
import type { FormOptionList } from '@/types/form-option';
import type { FormInstance } from 'element-plus';
import { Search, Refresh } from '@element-plus/icons-vue';

const searchRef = ref<FormInstance>();

const props = defineProps({
    query: {
        type: Object,
        required: true
    },
    options: {
        type: Array as PropType<Array<FormOptionList>>,
        required: true
    },
    search: {
        type: Function,
        default: () => { }
    }
})


const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    props.search();
}

</script>