<template>
  <div class="output">
    <div class="content" v-for="i in 9" :key="i">
      <h1>{{ name }}</h1>
      <img alt="Vue logo" src="../assets/logo.png" />
      <h4>{{ price }}</h4>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "output",
  data() {
    return {
      name: "vue",
      text: "今ならなんと！無料配布中でございます！！！！",
      price: "0円",
    }
  },
}
</script>

<style scoped>
.content {
  margin-top: 10%;
}
div.output {
  text-align: center;
}
h3 {
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

h3 {
  color: white;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}
</style>
