<template>
    <div class="hello">
        <el-input
                type="textarea"
                :row="5"
                v-model="textareaAddress"
                placeholder="请输入收货地址">
        </el-input>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                textareaAddress: ''
            };
        }
    }
</script>
