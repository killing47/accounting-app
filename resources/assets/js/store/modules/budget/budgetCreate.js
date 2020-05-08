export const budgetCreate = {
  namespaced: true,
  actions: {
    async createBudget({commit}, payload) {
      try {
        const res = await axios.post('/budget', payload.budget)
        if(res.status === 200) {
          commit('budgetHome/setCurrentView', payload.currentView, { root: true })
          alert('新規作成に成功しました')
        }
        else {
          alert('新規作成に失敗しました')
        }
      }
      catch(e) {
        alert('新規作成に失敗しました')
      }
    }
  }
}