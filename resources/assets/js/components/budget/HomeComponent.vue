<template>
  <v-app>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col md="12">
          <v-card>
            <v-btn
              text
              large
              @click="changeCurrentView(viewList.index)"
            >月別請求書 発行・未発行一覧
            </v-btn>
            <v-btn
              text
              large
              @click="changeCurrentView(viewList.create)"
            >予算書(新規作成)
            </v-btn>
            <v-btn
              text
              large
              @click="changeCurrentView(viewList.search)"
            >予算書 検索
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <component :is="currentView"></component>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      currentView: state => state.budgetHome.currentView,
      viewList: state => state.budgetHome.viewList
    })
  },
  methods: {
    ...mapActions({
      changeCurrentView: 'budgetHome/changeCurrentView'
    })
  }
}
</script>