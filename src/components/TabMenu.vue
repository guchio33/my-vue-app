<template>
  <div>
    <div class="log">オークション</div>
    <ol>
      <li v-for="(item, index) in items" :key="index">
        <router-link v-bind:to="item.path">
          {{ item.titel }}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "TabMenu",
  data() {
    return {
      items: [
        { titel: "ホーム", path: "/" },
        { titel: "ランキング", path: "/ranking" },
        { titel: "ログイン", path: "/login" },
      ],
    }
  },
}
</script>

<style scoped>
.log {
  color: mediumseagreen;
  font-size: 50px;
  margin-left: 5%;
}
ol {
  text-align: center;
  margin-left: auto;
  width: 480px;
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 100px;
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  background-color: mediumseagreen;
  border-radius: 8px;
  position: relative;
}

li:hover {
  opacity: 0.4;
}
/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;
}
</style>
