<template lang="pug">
  .header
    .container.admin
      h1.header__title Admin panel
      a.header__link(href="/") Вернуться на сайт
</template>

<style scoped>
  .header {
    overflow: hidden;
    position: relative;
    background-color: #124f67;
    border-bottom: 2px solid #b7c6b5;
  }
  .header__title {
    flex: 1 1 50%;
  }
  .header__link {
    flex: 1 1 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #f5f7e2;
  }
</style>
