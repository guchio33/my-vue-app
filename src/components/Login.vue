<template>
  <div id="login">
    <div id="form">
      <h1>ログイン</h1>
      <form>
        <input class="mail" type="text" placeholder="メールアドレス" /><br />
        <input class="pas" type="password" placeholder="パスワード" /><br />
        <button>ログイン</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {},
}
</script>

<style scoped>
h3 {
  margin-top: 3px;
}
#form {
  width: 400px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid mediumseagreen;
  text-align: center;
  border: 3px solid;
  border-radius: 5px mediumseagreen;
}
input {
  width: 200px;
  height: 30px;
  border: none;
  outline: 0;
  border-bottom: 1px solid #d1d5db;
  text-align: left;
  margin-right: auto;
  margin-left: auto;
}
.mail {
}
.pas {
  margin-top: 20px;
}
#login {
  margin-top: 5%;
}
button {
  margin-top: 5%;
  background-color: rgb(77, 179, 123);
  border: none;
  color: white;
  border-radius: 5px;
}
</style>
