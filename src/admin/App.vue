<template lang="pug">
  .wrap
    app-title
    .admin-container
      .col
        form-upload
      .col
        form-blog(
          @updateList="updateList"
        )
    list-article(
      :articles="articles"
      @deleteArticle="deleteArticle"
    )
</template>

<script>
export default {
  data: () => {
    return {
      articles: null
    };
  },
  components: {
    appTitle: require('./components/title').default,
    formUpload: require('./components/upload').default,
    formBlog: require('./components/blog').default,
    listArticle: require('./components/list').default
  },
  methods: {
    deleteArticle(id) {
      this.articles = this.articles.filter(el => {
        if (el._id !== id) return true;
        else return false;
      });
    },
    updateList() {
      this.axios.get('http://localhost:3000/api/blog').then(rs => {
        this.articles = rs.data.articles;
      });
    }
  },
  mounted: function() {
    this.axios.get('http://localhost:3000/api/blog').then(rs => {
      this.articles = rs.data.articles;
    });
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  background-color: #5b8991;
  color: #f5f7e2;
}
.container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  min-width: 320px;
}
.admin-container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  min-width: 320px;
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: space-around;
}

.col {
  flex: 0 0 33%;
}

.form {
  border-radius: 5px;
  margin: 0 auto;
  text-align: center;
  padding: 20px 50px 0;
  border: 1px solid #ccc;
}

.form__subtitle {
  font-size: 25px;
  text-shadow: 1px 1px #ccc;
  margin-bottom: 10px;
}

.form__input-line,
.form__textarea {
  margin-bottom: 20px;
}

.form__input,
.form__textarea {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  border: 2px dashed #124f67;
  padding: 10px 5px;
  width: 100%;
}
.form__input-line {
  display: block;
}

.form__textarea {
  resize: vertical;
}

input:focus,
textarea:focus {
  outline: 2px solid #124f67;
}

.form__btns {
  display: flex;
  justify-content: space-around;
}

.form__btn-send,
.form__btn-reset {
  outline: none;
  padding: 5px 15px;
  border: 1px solid transparent;
  transition: 0.5s;
  flex: 1 1;
}

.form__btn-send:hover,
.form__btn-reset:hover {
  border: 1px solid#b7c6b5;
}

.form__btn-send:focus,
.form__btn-reset:focus {
  outline: none;
}
.form__btn-send:active,
.form__btn-reset:active {
  background-color: #ccc;
}

::placeholder {
  color: #b7c6b5;
}
</style>

