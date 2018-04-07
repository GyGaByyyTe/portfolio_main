<template lang="pug">
  .admin
    .header
      app-header
    .tabs
      tabs
    .content
      router-view
</template>

<script>
import header from './components/header';
import tabs from './components/tabs';

export default {
  components: {
    appHeader: header,
    tabs
  }
};
</script>

