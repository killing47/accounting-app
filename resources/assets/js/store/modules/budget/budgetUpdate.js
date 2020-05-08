export const budgetUpdate = {
  namespaced: true,
  actions: {
    async updateBudget({commit}, data) {
      try {
        const res = await axios.post('/budget/update/' + data.budget.id, data.budget)
        if(res.status === 200) {
          commit('budgetHome/setCurrentView', data.currentView, { root: true })
          alert('更新に成功しました')
        }
        else {
          alert('更新に失敗しました')
        }
      }
      catch(e) {
        alert('更新に失敗しました')
      }
    }
  }
}