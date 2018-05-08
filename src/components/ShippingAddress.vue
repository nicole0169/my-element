<template>
    <div class="hello">
        <province @handleSelect="handleProvince"></province>
        <addressbox></addressbox>
        <p>{{ provincedata }}</p>
    </div>
</template>
<script>
    import Province from './Province'
    import AddressBox from './AddressBox'

    export default {
        name: 'hello',
        components: {
            'province': Province,
            'addressbox': AddressBox
        },
        data() {
            return {
                provincedata: ''
            };
        },
        methods: {
            handleProvince(item){
                this.provincedata = item;
            }
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

    div {
        margin: 10px;
    }
</style>
