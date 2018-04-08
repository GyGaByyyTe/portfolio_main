<template lang="pug">
  div.works
    h2 Страница «Мои работы»
    form.form#upload(@submit.prevent="sendFile" enctype="multipart/form-data")  
      .works-title Добавить работу
      .status {{msgfile}}      
      .works-row
        input(type='text' v-model="name" class='works-input' placeholder="Название проекта" required)
      .works-row      
        input(type='text' v-model="tech" class='works-input' placeholder="Технологии")  
      .works-row 
        .work-upload     
          label
              input(:photo="photo" class="works-open" type="file" accept="image/*" @change="fileChange($event.target.files)" ref="upload")
              span Загрузить картинку          
      input(class="works-save" type="submit" value="Добавить")  
</template>

<script>
export default {
  data: () => {
    return {
      name: '',
      tech: '',
      photo: null,
      msgfile: ''
    };
  },
  methods: {
    sendFile: function() {
      let formData = new FormData();
      formData.append('photo', this.photo, this.photo.name);
      formData.append('tech', this.tech);
      formData.append('name', this.name);
      this.axios.post('http://localhost:3000/admin/work', formData).then(rs => {
        this.msgfile = rs.data.msg;
        if (rs.data.status === 'Ok') {
          this.name = '';
          this.tech = '';
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

<style lang="scss">
.works {
  position: relative;
}
.works-row {
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
}
.works-save {
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
.work-upload {
  display: inline-block;
  overflow: hidden;
  padding: 8px 4px;
  color: $green;
  font-weight: 400;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
}
.work-upload input[type='file'] {
  display: none;
}
.work-upload label {
  display: block;
  cursor: pointer;
}
</style>
