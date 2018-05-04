<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Autocomplete Component</h2>
        <el-autocomplete
                class="inline-input"
                v-model="input"
                :fetch-suggestions="querySearch"
                placeholder="City name"
                :trigger-on-focus="false"
                @select="handleSelect"
        ></el-autocomplete>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Hi,It\'s Element UI Dashboard. ',
                input: '',
                cities: []
            };
        },
        methods: {
            querySearch(queryString, cb){
                var cities = this.cities;
                var results = queryString ? cities.filter(this.createFilter(queryString)) : cities;
                //cb
                cb(results);
            },
            createFilter(queryString){
                /*return function (city) {
                    return (city.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                }*/
                //ES6 way
                return (city)=>{
                    return (city.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll(){
                return [{"value": 'shanghai'}, {"value": "beijing"}, {"value": "guangzhou"}, {"value": "shenzhen"}];
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        mounted(){
            this.cities = this.loadAll();
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
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>