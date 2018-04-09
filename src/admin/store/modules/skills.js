import axios from 'axios';

const skills = {
  state: {
    msgSkills: '',
    data: []
  },
  getters: {
    skills(state) {
      return state.data;
    },
    msgSkills(state) {
      return state.msgSkills;
    }
  },
  mutations: {
    saveAll(state, data) {
      // console.log('hello skillId ' + data.id);

      state.data.forEach(element => {
        if (element._id == data.id) {
          element.percents = data.value;
        }
      });
    },
    addSkill(state, skill) {
      state.data.push(skill);
    },
    removeSkill(state, skillId) {
      state.data = state.data.filter(item => item.id !== skillId);
    }
  },
  actions: {
    fetchSkills({ state }) {
      axios.get('http://188.225.26.122:3000/api/about').then(rs => {
        state.data = rs.data.skills;
        // console.log('fetchSkills about ' + state);
      });
    },
    saveSkills({ state, commit }, data) {
      // console.log('saveSkills ');
      // console.log(data);
      axios({
        method: 'post',
        url: 'http://188.225.26.122:3000/api/about',
        data: data
      }).then(rs => {
        state.msgSkills = rs.data.status;
      });;
    }
  }
};

export default skills;
