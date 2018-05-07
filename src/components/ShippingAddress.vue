<template>
    <div class="hello">
        <province></province>
        <addressbox></addressbox>
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
            return {};
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
