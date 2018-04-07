<template lang="pug">
  .tabs
    ul.list
      li.item(
        v-for="(tab, index) in tabs"
        :class="{'item--active' : tab.active}")
        router-link(:to="tab.href").link 
          span(v-on:click="changeTab(index)") {{tab.name}}
</template>
<script>
export default {
  data() {
    return {
      prevTab: 0,
      tabs: [
        { name: 'Таб 1', href: '/', active: true },
        { name: 'Таб 2', href: '/blog', active: false },
        { name: 'Таб 3', href: '/works', active: false }
      ]
    };
  },
  methods: {
    changeTab(next) {
      this.tabs[this.prevTab].active = false;
      this.tabs[next].active = true;
      this.prevTab = next;
    }
  }
};
</script>
<style src="adminStyles/tabs.scss" lang="scss" scoped></style>