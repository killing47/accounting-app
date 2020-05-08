<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">顧客担当</th>
          <th class="text-left">案件</th>
          <th class="text-left">受注日<br>見積日<br>請求日</th>
          <th class="text-left">担当</th>
          <th class="text-left">登録日<br>更新日</th>
          <th class="text-left">発行依頼</th>
          <th class="text-left">請求済み</th>
          <th class="text-left">非表示</th>
          <th class="text-left">粗利<br>粗利率</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="budget in budgetList" :key="budget.id" @click="showBudget(budget.id)">
          <td>{{ budget.id }}</td>
          <td>
            {{ budget.customer_name }}<br>
            {{ budget.project_staff }}<br>
          </td>
          <td>{{ budget.project_title }}</td>
          <td>
            {{ formatDate(budget.order_date) }}<br>
            {{ formatDate(budget.created_at) }}<br>
            {{ formatDate(budget.confirm_billing_date) }}
          </td>
          <td>{{budget.staff}}</td>
          <td>
            {{ formatDate(budget.created_at) }}<br>
            {{ formatDate(budget.updated_at) }}
          </td>
          <td>
            <p v-if="budget.issue_checkbox === 1">発</p>
            <p v-else>未</p>
          </td>
          <td>
            <p v-if="budget.claim_checkbox === 1">請</p>
            <p v-else>未</p>
          </td>
          <td>
            <p v-if="budget.display_checkbox === 1">有</p>
            <p v-else>無</p>
          </td>
          <td></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
     computed: {
      ...mapState({
        budgetList: state => state.budgetIndex.budgetList,
        viewList: state => state.budgetHome.viewList,
      }),
      formatDate(){
        return function(date){
          return this.$moment(date).format('YYYY-MM-DD');
        }
      },
    },
    methods: {
      ...mapActions({
        getBudget: 'budgetIndex/getBudget',
      }),
      showBudget(id) {
        this.getBudget({
          id: id,
          currentView: this.viewList.show
        })
      }
    }
  }
</script>