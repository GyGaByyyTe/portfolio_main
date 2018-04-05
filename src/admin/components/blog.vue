<template lang="pug">
  .form-container
    form.form#blog(@submit.prevent="sendArticle")
          .form__subtitle Добавить запись в блог
          .status {{msgblog}}
          label.form__input-line
            input(v-model="title" type="text" placeholder="Заголовок").form__input
          label.form__input-line
            input(v-model="date" type="date" ).form__input
          textarea(placeholder="Ваша запись" v-model="text").form__textarea
          .form__btns.form__input-line
            input(name="" type="submit" value="Отправить").form__btn-send
            input(name="" type="reset" value="Очистить").form__btn-reset
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
      console.log(this.title, this.date, this.text);
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
        this.$emit('updateList');
      });
    }
  }
};
</script>