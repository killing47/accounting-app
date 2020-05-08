export const budgetShow = {
  namespaced: true,
  state: {
    budget: {}
  },
  mutations: {
    setBudget (state, budget) {
      state.budget = budget;
    }
  },
  actions: {

  }
}