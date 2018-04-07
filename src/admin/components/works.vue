<template lang="pug">
  div.works
    h2 Страница «Мои работы»
    form(enctype="multipart/form-data" method="post")  
      .works-title Добавить работу
      .works-row
        input(type='text' name='work-name' class='works-input' placeholder="Название проекта" required)
      .works-row      
        input(type='text' name='work-date' class='works-input' placeholder="Технологии")  
      .works-row 
        .work-upload     
          label
              input(class="works-open" type="file")
              span Загрузить картинку          
      button(class="works-save" type="submit" @click="saveWork") Добавить      
</template>
<script>
export default {
  methods: {
    saveWork() {
      console.log('save all to JSON');
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
