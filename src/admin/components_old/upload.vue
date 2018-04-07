<template lang="pug">
  .form-container
    form.form#upload(@submit.prevent="sendFile" enctype="multipart/form-data")
      .form__subtitle Загрузите картинку на сервер
      .status {{msgfile}}
      label.form__input-line
        input(v-model="name" type="text" placeholder="Описание картинки").form__input
      label.form__input-line
        input(:photo="photo" type="file" required accept="image/*" @change="fileChange($event.target.files)" ref="upload").form__input
      .form__btns.form__input-line
        input(name="" type="submit" value="Отправить").form__btn-send
        input(name="" type="reset" value="Очистить").form__btn-reset
</template>

<script>
export default {
  data: () => {
    return {
      name: '',
      photo: null,
      msgfile: ''
    };
  },
  methods: {
    sendFile: function() {
      let formData = new FormData();
      formData.append('photo', this.photo, this.photo.name);
      formData.append('name', this.name);
      this.axios.post('http://localhost:3000/admin/avatar', formData)
      .then(rs => {
        this.msgfile = rs.data.msg;
        if (rs.data.status === 'Ok') {
          this.name = '';
          this.photo = null;
          this.$refs.upload.value = null;
        }

      });
    },
    fileChange: function(file) {
      this.photo = file[0];
      console.log(this.photo);
    }
  }
};
</script>