<template lang="pug">
  div.blog
    h2 Страница "Блог"
    .form-container
      form.form#blog(@submit.prevent="sendArticle")
        .blog-title Добавить запись
        .status {{msgblog}}
        .blog-row
          input(v-model="title" type="text" placeholder="Название").blog-input
        .blog-row
          input(v-model="date" type="date" ).blog-input
        .blog-row                          
          textarea(v-model="text" cols='30' rows='4' placeholder="Содержание").blog-text-area       
        input(name="" type="submit" value="Добавить").blog-save
        //- input(name="" type="reset" value="Очистить").form__btn-reset    
</template>
<script>
import moment from 'moment';
export default {
  data: () => {
    return {
      moment: moment,
      title: '',
      date: moment(new Date(), 'DD/MM/YYYY').format('YYYY-MM-DD'),
      text: '',
      msgblog: ''
    };
  },
  methods: {
    sendArticle: function() {
      // console.log(this.title, this.date, this.text);
      this.axios({
        method: 'post',
        url: 'http://localhost:3000/api/blog',
        data: {
          title: this.title,
          date: this.date,
          text: this.text
        }
      }).then(rs => {
        this.msgblog = rs.data.status;
        this.title = '';
        this.text = '';
        // this.$emit('updateList'); не нужно, потому что в админку не выводим статьи
      });
    }
  }
};
</script>

<style lang="scss">
.blog {
  position: relative;
}
.blog-row {
  position: relative;
  margin-top: 1.3rem;

  input {
    width: 80%;
    max-width: 25rem;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 5px;
  }

  textarea {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    resize: none;
    overflow: hidden;
    outline: none;
    width: 100%;
    max-width: 35rem;
    height: 10rem;
  }
}
.blog-save {
  margin-top: 1.5rem;
  width: 119px;
  height: 46px;
  background-color: $green;
  border-radius: 5px;
  border: none;
  color: white;
  outline: none;

  &:hover {
    cursor: pointer;
  }
}
</style>
