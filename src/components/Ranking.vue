<template>
  <div id="rank">
    <div class="ser">
      <input
        class="search_container"
        type="text"
        size="25"
        placeholder="キーワード検索"
        v-model="ser"
      />
      <button class="button">検索</button>
    </div>

    <table class="vue_tbl">
      <thead>
        <tr>
          <th>順位</th>
          <th>名前</th>
          <th>最高額</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.count }}円</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Ranking",
  data() {
    return {
      ser: "",
      users: [
        { name: "いわぐち", count: 30000 },
        { name: "guchiii", count: 15000 },
        { name: "やす", count: 100 },
      ],
    }
  },
}
</script>

<style scoped>
th,
td {
  border: solid 1px;
  border-color: #aaaaaa; /* 枠線指定 */
  padding: 10px; /* 余白指定 */
  width: 10%;
}
table {
  border-collapse: collapse; /* セルの線を重ねる */
  margin-left: auto;
  margin-right: auto;
  border: 0.5px #aaaaaa solid; /* 太さ3pxで緑色の実線 */
  margin-top: 5%;
}
thead {
  background-color: mediumseagreen;
  color: white;
  padding: 20px;
  width: 100%;
}
tbody {
  background-color: #f2f2f2;
}

#rank {
  text-align: center;
}

.search_container {
  box-sizing: border-box;
  position: relative;
  border: 1px solid #999;
  padding: 3px 10px;
  border-radius: 10px;
  height: 2.3em;
  width: 260px;
  overflow: hidden;
  margin-top: 50px;
}
.button {
  margin-left: 5px;
  background-color: mediumseagreen;
  color: white;
  border-radius: 10px;
}
</style>
