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
  import PROVINCES_OBJ from '../assets/provinces_obj'
  import CITIES_OBJ from '../assets/cities_obj'
  import AREAS_OBJ from '../assets/areas_obj'

    export default {
        name: 'hello',
        data() {
            return {
                textareaAddress: ''
            };
        },
        methods:{
          setAddressAreaVal(val){
            this.textareaAddress += val;
          }
        },
        mounted() {
          let that = this
          this.$root.bus.$on("province_code",function(arg){
            console.log('选择的区域代码:' + arg);
              if (PROVINCES_OBJ[arg]) {
                console.log(PROVINCES_OBJ[arg].name);
                that.setAddressAreaVal(PROVINCES_OBJ[arg].name);
              }else if(CITIES_OBJ[arg]){
                console.log(CITIES_OBJ[arg].name);
                that.setAddressAreaVal(CITIES_OBJ[arg].name);
              }else{
                console.log(AREAS_OBJ[arg].name);
                that.setAddressAreaVal(AREAS_OBJ[arg].name);
              }
          })
        }
    }
</script>
