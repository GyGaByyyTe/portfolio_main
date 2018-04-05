<template lang="pug">
  ul
    li(v-for="article in articles") {{article.title}}
      button(@click="deleteArticle(article._id)") X
</template>

<script>
export default {
  props: {
    articles: Array
  },
  methods: {
    deleteArticle: function(id) {
      this.axios.delete(`http://localhost:3000/api/blog/${id}`).then(rs => {
        this.$emit('deleteArticle', id)
      });
    }
  }
};
</script>