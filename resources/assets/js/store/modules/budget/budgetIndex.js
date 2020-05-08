import { mdiChevronDown } from '@mdi/js'
import { mdiChevronLeft } from '@mdi/js'
import { mdiChevronRight } from '@mdi/js'
import { mdiArrowUp } from '@mdi/js'
import { mdiArrowDown } from '@mdi/js'
import budgetIndexAllComponent from '../../../components/budget/parts/IndexAllComponent.vue'
import budgetIndexClaimComponent from '../../../components/budget/parts/IndexClaimComponent.vue'
import budgetIndexUnClaimComponent from '../../../components/budget/parts/IndexUnClaimComponent.vue'

export const budgetIndex = {
  namespaced: true,
  state: {
    budgetList: [],
    icons: {
      mdiArrowUp: mdiArrowUp,
      mdiArrowDown: mdiArrowDown,
      mdiChevronDown: mdiChevronDown,
      mdiChevronLeft: mdiChevronLeft,
      mdiChevronRight: mdiChevronRight,
    },
    currentIndexTable: budgetIndexAllComponent,
    radioAllTable: {label: '全て(削除以外)', value: budgetIndexAllComponent},
    radioClaimTable: {label: '発行依頼済みで未請求', value: budgetIndexClaimComponent},
    radioUnClaimTable: {label: '請求済み(社長用)', value: budgetIndexUnClaimComponent}
  },
  mutations: {
    setBudgetList (state, budgetList) {
      state.budgetList = budgetList
    },
    setIndexTable (state, table) {
      state.currentIndexTable = table
    }
  },
  actions: {
    async getBudgetList({commit}, date){
      try {
        const res = await axios.get('/budget/date/' + date)
        commit('setBudgetList', res.data)
      }
      catch(e) {
        alert('一覧取得に失敗しました')
      }
    },
    async getBudget({commit}, data) {
      try {
        const res = await axios.get('/budget/' + data.id )
        commit('budgetShow/setBudget', res.data, {root: true})
        commit('budgetHome/setCurrentView', data.currentView, { root: true })
      }
      catch(e) {
        alert('一覧取得に失敗しました')
      }
    },
    async getIndexTableAndData({commit}, data) {
      try{
        if(data.table.__file.match('IndexClaim')) {
          const res = await axios.get('/budget/data/' + data.date + '/' + 'IndexClaim')
          commit('setBudgetList', res.data)
          commit('setIndexTable', data.table)
        }
        else if(data.table.__file.match('IndexUnClaim')) {
          const res = await axios.get('/budget/data/' + data.date + '/' + 'IndexUnClaim')
          commit('setBudgetList', res.data)
          commit('setIndexTable', data.table)
        }
        else {
          const res = await axios.get('/budget/date/' + data.date)
          commit('setBudgetList', res.data)
          commit('setIndexTable', data.table)
        }

      }
      catch(e) {
        alert('一覧取得に失敗しました')
      }
    },
  }
}