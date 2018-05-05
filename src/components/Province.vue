<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Select Component</h2>
        <el-select v-model="input"
                   placeholder="请选择省份"
                   @change="handleSelect">
            <el-option v-for="item in provinces"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
        </el-select>
        <el-select v-model="input2"
                   placeholder="请选择城市">
            <el-option v-for="item in cities"
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
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Hi,It\'s Element UI Dashboard. ',
                input: '',
                input2: '',
                provinces: [],
                cities: []
            };
        },
        methods: {
            handleSelect(item){
                console.log(item);
                this.cities = this.getCities(item);
            },
            getCities(itemId){
                let cities = CITIES;
                return cities[itemId];
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
