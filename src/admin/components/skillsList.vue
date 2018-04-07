<template lang="pug">
  .skills-list
    .skill-title {{skillType}}
    table.skills-table
      skills-item(
        v-for="skill in skills"
        v-if="convertSkillStringToNum(skillType) === skill.type"
        :key="skill.id"
        :skill="skill"
      )
</template>
<script>
import skillsItem from './skillsItem';

export default {
  components: { skillsItem },
  props: {
    skillType: String,
    skills: Array
  },
  methods: {
    convertSkillStringToNum(skillGroupName) {
      switch (skillGroupName) {
        case 'Frontend':
          return 1;
        case 'Workflow':
          return 2;
        case 'Backend':
          return 3;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.skills-list {
  margin-left: 2rem;
  margin-bottom: 2rem;
}
.skills-table {
  padding-left: 1rem;
}
</style>

