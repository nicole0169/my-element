<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Select Component</h2>
        <el-select v-model="inputProvince"
                   placeholder="请选择省份"
                   @change="handleSelect">
            <el-option v-for="item in provinces"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
        </el-select>
        <el-select v-model="inputCity"
                   placeholder="请选择城市"
                   @change="handleSelect">
            <el-option v-for="item in cities"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
        </el-select>
        <el-select v-model="inputArea"
                   placeholder="请选择区县"
                   @change="handleSelect">
            <el-option v-for="item in areas"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
        </el-select>
    </div>
</template>

<script>
    import PROVINCES from '../assets/provinces'
    import CITIES from '../assets/cities'
    import AREAS from '../assets/areas'
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Hi,It\'s Element UI Dashboard. ',
                inputProvince: '',
                inputCity: '',
                inputArea:'',
                provinces: [],
                cities: [],
                areas: []
            };
        },
        methods: {
            handleSelect(item){
              console.log(item);
              if(CITIES[item]){
                this.inputCity = '';
                this.inputArea = '';
                this.areas = [];
                this.cities = CITIES[item];
              }else if(AREAS[item]){
                this.inputArea = '';
                this.areas = AREAS[item];
              }
            },
            loadAll(){
                return PROVINCES;
            }
        },
        mounted() {
            this.provinces = this.loadAll();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        /*display: inline-block;*/
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
