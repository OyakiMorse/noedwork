<template>
  <div id="admin-profile">
    <h1
      @mouseenter="showList = true"
      @mouseleave="showList = false"
    >
      Hello Mark
    </h1>
    <ul v-if="showList">
      <li v-for="item in dd">{{item}}</li>
      <li>dfdf</li>
      <li>fghgh</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AdminProfile',
  data() {

    return {
      dd: [
        1, 23, 4, 45, 3, 'fd',
      ],
      showList: false,
    };
  },
  created() {
  },
  methods: {
    fdfd() {
      alert(21 - 21);
    },
  },
};
</script>

<style lang="stylus" scoped>
  #admin-profile
    display flex
    flex-direction column
    align-items center
</style>
