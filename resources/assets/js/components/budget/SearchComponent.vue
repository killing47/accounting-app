<template>
  <v-card>
    <v-card-text>予算書 検索</v-card-text>
    <v-row>
      <v-col>
        <v-radio-group row @change="selectedRadio">
          <v-radio
            :label="'全て(非表示以外)'"
            :value="'all'"
          ></v-radio>
          <v-radio
            :label="'未発行依頼'"
            :value="'yet_issue'"
          ></v-radio>
          <v-radio
            :label="'発行依頼済みで未請求'"
            :value="'done_issue_yet_claim'"
          ></v-radio>
          <v-radio
            :label="'請求済み(社長用)'"
            :value="'done_yet_claim'"
          ></v-radio>
          <v-radio
            :label="'非表示'"
            :value="'hidden_display'"
          ></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6">
        <v-select
          :items="projectList"
          label="プロジェクト"
          solo
          @change="getProject"
        ></v-select>
      </v-col>
      <v-col md="6">
        <v-select
          :items="customerNameList"
          label="顧客"
          solo
          @change="getCustomerName"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6">
        <v-select
          :items="projectStaffList"
          label="デジック担当"
          solo
          @change="getProjectStaff"
        ></v-select>
      </v-col>
      <v-col md="6">
        <v-text-field
          label="フリーワード"
          v-model="freeWord"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="my-2">
          <v-btn large @click="search">検索</v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
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
              <tr v-for="budget in budgetListToSearch" :key="budget.id" @click="showBudget(budget.id)">
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    data() {
      return {
        selected: '',
        project: '',
        customerName: '',
        projectStaff: '',
        freeWord: ''
      }
    },
    created: function() {
      this.getProjectList(),
      this.getCustomerNameList(),
      this.getProjectStaffList()
    },
    computed: {
      ...mapState({
        projectList: state => state.budgetSearch.projectList,
        customerNameList: state => state.budgetSearch.customerNameList,
        projectStaffList: state => state.budgetSearch.projectStaffList,
        budgetListToSearch: state => state.budgetSearch.budgetListToSearch
      }),
      formatDate(){
        return function(date){
          return this.$moment(date).format('YYYY-MM-DD');
        }
      },
    },
    methods: {
      ...mapActions({
        getProjectList: 'budgetSearch/getProjectList',
        getCustomerNameList: 'budgetSearch/getCustomerNameList',
        getProjectStaffList: 'budgetSearch/getProjectStaffList',
        searchBudgetList: 'budgetSearch/searchBudgetList',
        getBudget: 'budgetIndex/getBudget',
      }),
      selectedRadio: function(selected) {
        this.selected = selected;
      },
      getProject: function(project) {
        this.project = project;
      },
      getCustomerName: function(customerName) {
        this.customerName = customerName;
      },
      getProjectStaff: function(projectStaff) {
        this.projectStaff = projectStaff;
      },
      search: function() {
        this.searchBudgetList({
          selected: this.selected,
          project: this.project,
          customerName: this.customerName,
          projectStaff: this.projectStaff,
          freeWord: this.freeWord
        });
      },
      showBudget(id) {
        this.getBudget({
          id: id,
          currentView: this.viewList.show
        })
      }
    }
  }
</script>