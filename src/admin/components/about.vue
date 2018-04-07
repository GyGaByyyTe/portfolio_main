<template lang="pug">
  .about-section
    h2 Страница "Обо мне"
    .about-list
      skills-list(
        v-for="skillType in skillsTypes"
        :key="skillType"
        :skillType="skillType"
        :skills="skills"
      )
    button(class="about-save" type="button" @click="saveSection") Сохранить

</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import skillsList from './skillsList';
export default {
  components: {
    skillsList
  },
  data() {
    return {
      skillsTypes: ['Frontend', 'Workflow', 'Backend']
    };
  },
  computed: {
    ...mapGetters(['skills'])
  },
  methods: {
    ...mapActions(['fetchSkills']),
    saveSection() {
      console.log('save all to JSON');
    }
  },
  mounted() {
    this.fetchSkills();
  }
};
</script>
<style lang="scss" scoped>
.about-section {
  position: relative;

  h1 {
    color: #566358;
    font-size: 21px;
  }
}
.about-save {
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
.about-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
