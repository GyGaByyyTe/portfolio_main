<template lang="pug">
  .about-section
    h2 Страница "Обо мне"
    form.form#about(@submit.prevent="save")
      .status {{msgSkills}}
      .about-list
        skills-list(
          v-for="skillType in skillsTypes"
          :key="skillType"
          :skillType="skillType"
          :skills="skills"
        )
      input(name="" value="Сохранить" class="about-save" type="submit")

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
    ...mapGetters(['skills', 'msgSkills'])
  },
  methods: {
    ...mapActions(['fetchSkills', 'saveSkills']),
    save: function() {
      let data = this.skills;
      this.saveSkills(data);
    }
  },
  mounted: function() {
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
