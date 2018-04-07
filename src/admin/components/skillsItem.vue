<template lang="pug">
  tr
    td.first-cell {{skill.name}}
    td.second-cell
      input(type="text" :value="skill.percents" ref="skillInput" @change=`saveSkill(skill._id)`)
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    skill: Object
  },
  data: () => {
    return {};
  },
  methods: {
    ...mapMutations(['removeSkill', 'saveAll']),
    removeExistedSkill(skillId) {
      this.removeSkill(skillId);
    },
    saveSkill(skillId) {
      if (this.$refs.skillInput.value == '') {
        this.$refs.skillInput.value = 0;
      }
      let data = {
        id: skillId,
        value: this.$refs.skillInput.value
      };
      this.saveAll(data);
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



