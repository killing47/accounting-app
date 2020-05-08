<template>
  <div>
    <v-card>
      <v-card-text>月別請求書 発行・未発行一覧</v-card-text>
        <v-dialog
          ref="confirmOrderDateDialog"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="請求日"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            scrollable
            :type="'month'"
            locale="ja"
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.confirmOrderDateDialog.save(date); getBudgetList(date)"
            >OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
        <v-radio-group :value="currentIndexTable" @change="changeIndexTable" row>
          <v-radio
            :label="radioAllTable.label"
            :value="radioAllTable.value"
          ></v-radio>
          <v-radio
            :label="radioClaimTable.label"
            :value="radioClaimTable.value"
          ></v-radio>
          <v-radio
            :label="radioUnClaimTable.label"
            :value="radioUnClaimTable.value"
          ></v-radio>
        </v-radio-group>
      <component :is="currentIndexTable"></component>
    </v-card>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    data() {
      return {
        date: new Date().toISOString().substr(0, 7),
        modal: false,
      }
    },
    created: function() {
      this.getBudgetList(this.date)
    },
    computed: {
      ...mapState({
        budgetList: state => state.budgetIndex.budgetList,
        budgetKeyList: state => state.budgetIndex.budgetKeyList,
        currentIndexTable: state => state.budgetIndex.currentIndexTable,
        radioAllTable: state => state.budgetIndex.radioAllTable,
        radioClaimTable: state => state.budgetIndex.radioClaimTable,
        radioUnClaimTable: state => state.budgetIndex.radioUnClaimTable,
      }),
    },
    methods: {
      ...mapActions({
        getBudgetList: 'budgetIndex/getBudgetList',
        getIndexTableAndData: 'budgetIndex/getIndexTableAndData',
      }),
      changeIndexTable: function(table) {
        this.getIndexTableAndData({table: table, date: this.date });
      }
    },
  }
</script>