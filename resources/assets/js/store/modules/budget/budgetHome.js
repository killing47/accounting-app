import budgetIndexComponent from '../../../components/budget/IndexComponent.vue'
import budgetCreateComponent from '../../../components/budget/CreateComponent.vue'
import budgetSearchComponent from '../../../components/budget/SearchComponent.vue'
import budgetShowComponent from '../../../components/budget/ShowComponent.vue'

export const budgetHome = {
  namespaced: true,
  state: {
    currentView: budgetIndexComponent,
    viewList: {
      index: budgetIndexComponent,
      create: budgetCreateComponent,
      search: budgetSearchComponent,
      show:  budgetShowComponent
    },
  },
  mutations: {
    setCurrentView (state, currentView) {
      state.currentView = currentView
    },
  },
  actions: {
    changeCurrentView({commit}, payload) {
      commit('setCurrentView', payload)
    }
  }
}