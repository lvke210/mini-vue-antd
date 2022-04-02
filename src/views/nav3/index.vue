<template>
  <div class="page_wrap d_grid">
    <div class="box">
      <div class="item item1"></div>
    </div>

    <div class="box">
      <div class="item item21"></div>
      <div class="item item22"></div>
    </div>

    <div class="box">
      <div class="item item31"></div>
      <div class="item item32"></div>
      <div class="item item33"></div>
    </div>

    <div class="box">
      <div class="item item41"></div>
      <div class="item item42"></div>
      <div class="item item43"></div>
      <div class="item item44"></div>
    </div>

    <div class="box">
      <div class="item item51"></div>
      <div class="item item52"></div>
      <div class="item item53"></div>
      <div class="item item54"></div>
      <div class="item item55"></div>
    </div>
    <div class="box">
      <div class="item item61"></div>
      <div class="item item62"></div>
      <div class="item item63"></div>
      <div class="item item64"></div>
      <div class="item item65"></div>
      <div class="item item66"></div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.d_grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.box {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  border: 1px solid;
  width: max-content;
  height: max-content;
  padding: 15px;
  grid-template-areas:
    "a b c"
    "d e f"
    "g h i";
}

.item {
  width: 100px;
  height: 100px;
  border: 1px solid;
  border-radius: 50%;
  background-color: #000;
}
/* 1 */
.item1 {
  grid-area: e;
}
/* 2 */
.item21 {
  grid-area: a;
}
.item22 {
  grid-area: i;
}
/* 3 */
.item31 {
  grid-area: a;
}
.item32 {
  grid-area: e;
}
.item33 {
  grid-area: i;
}
/* 4 */
.item41 {
  grid-area: a;
}
.item42 {
  grid-area: c;
}
.item43 {
  grid-area: g;
}
.item44 {
  grid-area: i;
}
/* 5 */
.item51 {
  grid-area: a;
}
.item52 {
  grid-area: c;
}
.item53 {
  grid-area: e;
}
.item54 {
  grid-area: g;
}
.item55 {
  grid-area: i;
}

/* 6 */
.item61 {
  grid-area: a;
}
.item62 {
  grid-area: c;
}
.item63 {
  grid-area: d;
}
.item64 {
  grid-area: f;
}
.item65 {
  grid-area: g;
}
.item66 {
  grid-area: i;
}
</style>
