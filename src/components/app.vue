<template lang="jade">
  div
    ul.menu
      li(v-link="{ path: '/' }") HelloWorld
      li(v-link="{ path: '/DataBinding' }") DataBinding
      li(v-link="{ path: '/DataFlow' }") DataFlow
    router-view
</template>

<style lang="less">
body, h1, h2, h3, h4, h5, h6, p,
dl, dt, dd, ol, ul, li {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
ol, ul {
	list-style: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body {
  font-family: Helvetica, sans-serif;
}
.content {
  padding: 20px;
}
.menu {
  display: flex;
  li {
    flex: 1;
    text-align: center;
    padding: 15px;
    margin: 5px;
    border-bottom: 1px solid #000;
    &.active {
      background: red;
    }
  }
}
</style>
