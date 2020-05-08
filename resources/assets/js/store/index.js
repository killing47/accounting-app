import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import {budgetCreate} from "./modules/budget/budgetCreate"
import {budgetHome} from "./modules/budget/budgetHome"
import {budgetIndex} from "./modules/budget/budgetIndex"
import {budgetSearch} from "./modules/budget/budgetSearch"
import {budgetShow} from "./modules/budget/budgetShow"
import {budgetUpdate} from "./modules/budget/budgetUpdate"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    budgetCreate, budgetIndex, budgetShow, budgetUpdate, budgetHome, budgetSearch
  },
  strict: process.env.NODE_ENV !== 'production',
})