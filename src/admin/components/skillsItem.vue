<template lang="pug">
  tr
    td.first-cell {{skill.name}}
    td.second-cell
      input(type="text" :value="skill.percents")
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    skill: Object
  },
  methods: {
    ...mapMutations(['removeSkill']),
    removeExistedSkill(skillId) {
      this.removeSkill(skillId);
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
  width: 50px;
  height: 32px;
  border: none;
  border-radius: 5px;
  outline: none;
}
.first-cell {
  font-weight: 400;
  padding-right: 1rem;
}
</style>



