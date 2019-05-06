<template>
  <div class="hello">
    <ul>
      <li v-for="data in data" :key="data">{{data}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data:[1,2,3]
    }
  },
  mounted(){
    // mock模拟数据接口
    // this.$axios.get('/user/userInfo').then(function (res) {
    //
    //   console.log(res)
    //
    // })


    //eolinker 模拟接口
    this.$axios.get('https://result.eolinker.com/gX7YQZRfdf4726b0b0016334e2c679fc4297f8240bea9ea?uri=home/list').then(res=>{
      console.log(res)
    })
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
