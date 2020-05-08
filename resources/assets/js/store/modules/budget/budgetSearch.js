export const budgetSearch = {
  namespaced: true,
  state: {
    projectList: [],
    customerNameList: [],
    projectStaffList: [],
    budgetListToSearch: []
  },
  mutations: {
    setProjectList(state, projectList) {
      state.projectList = projectList
    },
    setCustomerNameList(state, customerNameList) {
      state.customerNameList = customerNameList
    },
    setProjectStaffList(state, projectStaffList) {
      state.projectStaffList = projectStaffList
    },
    setSearchBudgetList(state, searchBudgetList) {
      state.budgetListToSearch = searchBudgetList
    }
  },
  actions: {
    async getProjectList({commit}) {
      try{
        const res = await axios.get('/budget/project/list')
        commit('setProjectList', res.data)
      }
      catch(e) {

      }
    },
    async getCustomerNameList({commit}) {
      try{
        const res = await axios.get('/budget/customer/name_list')
        commit('setCustomerNameList', res.data)
      }
      catch(e) {

      }
    },
    async getProjectStaffList({commit}) {
      try{
        const res = await axios.get('/budget/project/staff_list')
        commit('setProjectStaffList', res.data)
      }
      catch(e) {

      }
    },
    async searchBudgetList({commit}, data) {
      try{
        const res = await axios.get('/budget/search/list', {params: data})
        commit('setSearchBudgetList', res.data)
      }
      catch(e) {

      }

    }
  }
}