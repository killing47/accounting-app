<template>
  <v-app>
    <v-expansion-panels multiple>

      <v-expansion-panel>
        <v-expansion-panel-header>請求状態</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col md="2"><v-card-text>社員用</v-card-text></v-col>
            <v-col md="3">
              <v-checkbox
                v-model="budget.issue_checkbox"
                label="発行依頼">
              </v-checkbox>
            </v-col>
            <v-col md="4">
              <v-checkbox
                v-model="budget.display_checkbox"
                label="非表示">
              </v-checkbox>
            </v-col>
            <v-col md="3"></v-col>
          </v-row>

          <v-row>
            <v-col md="2"><v-card-text>経理用</v-card-text></v-col>
            <v-col md="3">
              <v-checkbox
                v-model="budget.claim_checkbox"
                label="請求済み">
              </v-checkbox>
            </v-col>
            <v-col md="4">
              <v-text-field
                v-model="budget.claim_number"
                label="請求番号">
              </v-text-field>
            </v-col>
            <v-col md="3"><v-btn large>経理印刷</v-btn></v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>案件情報</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col md="2">
              <budget-parts-update-sales-date-picker-component
                ref="salesDatePicker"
                :salesDate="budget.sales_date"
              >
              </budget-parts-update-sales-date-picker-component>
            </v-col>
            <v-col md="1"></v-col>
            <v-col md="4">
              <v-text-field
                v-model="budget.slip_number"
                label="伝票番号(見積番号)">
              </v-text-field>
            </v-col>
            <v-col md="1"></v-col>
            <v-col md="2">
              <v-text-field
                v-model="budget.staff"
                label="担当者">
              </v-text-field>
            </v-col>
            <v-col md="2"></v-col>
          </v-row>
          <v-row>
            <v-col md="2">
              <budget-parts-update-order-date-picker-component
                ref="orderDatePicker"
                :orderDate="budget.order_date"
              >
              </budget-parts-update-order-date-picker-component>
            </v-col>
            <v-col md="10"></v-col>
          </v-row>
          <v-row>
            <v-col md="10">
              <v-text-field
                v-model="budget.customer_name"
                label="顧客名">
              </v-text-field>
            </v-col>
            <v-col md="2"></v-col>
          </v-row>
          <v-row>
            <v-col md="10">
              <v-text-field
                v-model="budget.project_name"
                label="プロジェクト名">
              </v-text-field>
            </v-col>
            <v-col md="2"></v-col>
          </v-row>
          <v-row>
            <v-col md="10">
              <v-text-field
                v-model="budget.project_staff"
                label="プロジェクト担当者">
              </v-text-field>
            </v-col>
            <v-col md="2"></v-col>
          </v-row>
          <v-row>
            <v-col md="10">
              <v-text-field
                v-model="budget.project_title"
                label="案件名">
              </v-text-field>
            </v-col>
            <v-col md="2"></v-col>
          </v-row>
          <v-row>
            <v-col md="2">
              {{budget.delivery_date}}
              <budget-parts-update-delivery-date-picker-component
                ref="deliveryDatePicker"
                :deliveryDate="budget.delivery_date"
              >
              </budget-parts-update-delivery-date-picker-component>
            </v-col>
            <v-col md="1"></v-col>
            <v-col md="7">
              <v-text-field
                v-model="budget.delivery_place"
                label="納品場所">
              </v-text-field>
            </v-col>
            <v-col md="2"></v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>見積明細</v-expansion-panel-header>
        <v-expansion-panel-content>
          <budget-update-estimates-component
            ref="estimates"
            :budget="budget"
          ></budget-update-estimates-component>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>請求明細</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col md="2">
              <v-dialog
                ref="confirmOrderDateDialog"
                v-model="modal"
                :return-value.sync="budget.confirm_billing_date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="budget.confirm_billing_date"
                    label="請求日"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="budget.confirm_billing_date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.confirmOrderDateDialog.save(budget.confirm_billing_date)"
                  >OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col md="10"></v-col>
          </v-row>
          <v-row>
            <v-col md="10">
              <v-text-field
                v-model="budget.confirm_item"
                label="項目">
              </v-text-field>
            </v-col>
            <v-col md="2"></v-col>
          </v-row>
          <v-row>
            <v-col md="3">
              <v-text-field
                v-model="budget.confirm_quantity"
                label="数量">
              </v-text-field>
            </v-col>
            <v-col md="3">
              <v-text-field
                v-model="budget.confirm_unit"
                label="単位">
              </v-text-field>
            </v-col>
            <v-col md="3">
              <v-text-field
                v-model="budget.confirm_unit_price"
                label="単価">
              </v-text-field>
            </v-col>
            <v-col md="3">
              <v-text-field
                v-model="budget.confirm_price"
                label="金額">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="9"></v-col>
            <v-col md="3">
              <v-text-field
                v-model="budget.confirm_total_price"
                label="合計金額">
              </v-text-field>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-row>
      <v-col md="2">
        <v-dialog v-model="dialog" persistent max-width="405">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">登録</v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">本当にいいですか？？</v-card-title>
            <v-card-text>・もう一度確認する場合はキャンセルを押してください</v-card-text>
            <v-card-text>・確認完了の場合はオッケーを押してください</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">キャンセル</v-btn>
              <v-btn color="green darken-1" text @click="submitBudget">オッケー</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col md="10"></v-col>
    </v-row>
  </v-app>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  export default {
    name: "Budget",
    data() {
      return {
        budget: {},
        dialog: false,
        modal: false,
      }
    },
    created() {
      console.log(this.budgetData.delivery_date);
      this.budget.id                   = this.budgetData.id;
      this.budget.claim_number         = this.budgetData.claim_number;
      this.budget.consignment_company  = this.budgetData.consignment_company;
      this.budget.confirm_item         = this.budgetData.confirm_item;
      this.budget.confirm_billing_date = this.budgetData.confirm_billing_date;
      this.budget.confirm_price        = this.budgetData.confirm_price;
      this.budget.confirm_quantity     = this.budgetData.confirm_quantity;
      this.budget.confirm_total_price  = this.budgetData.confirm_total_price;
      this.budget.confirm_unit         = this.budgetData.confirm_unit;
      this.budget.confirm_unit_price   = this.budgetData.confirm_unit_price;
      this.budget.customer_name        = this.budgetData.customer_name;
      this.budget.delivery_date        = this.budgetData.delivery_date;
      this.budget.delivery_place       = this.budgetData.delivery_place;
      this.budget.item                 = this.budgetData.item;
      this.budget.item_deteils         = this.budgetData.item_deteils;
      this.budget.order_date           = this.budgetData.order_date;
      this.budget.project_name         = this.budgetData.project_name;
      this.budget.project_staff        = this.budgetData.project_staff;
      this.budget.project_title        = this.budgetData.project_title;
      this.budget.purchasing_price     = this.budgetData.purchasing_price;
      this.budget.purchasing_unit      = this.budgetData.purchasing_unit;
      this.budget.quantity             = this.budgetData.quantity;
      this.budget.sales_date           = this.budgetData.sales_date;
      this.budget.sales_unit           = this.budgetData.sales_unit;
      this.budget.sales_price          = this.budgetData.sales_price;
      this.budget.slip_number          = this.budgetData.slip_number;
      this.budget.staff                = this.budgetData.staff;
      this.budget.claim_checkbox       = this.budgetData.claim_checkbox;
      this.budget.display_checkbox     = this.budgetData.display_checkbox;
      this.budget.issue_checkbox       = this.budgetData.issue_checkbox;
      this.budget.created_at           = this.budgetData.created_at;
      this.budget.updated_at           = this.budgetData.updated_at;
    },
    computed: {
      ...mapState({
        budgetData: state => state.budgetShow.budget,
        viewList: state => state.budgetHome.viewList,
      }),
    },
    methods: {
      ...mapActions({
        updateBudget: 'budgetUpdate/updateBudget'
      }),
      submitBudget: function() {
        this.dialog = false,
        this.setBudget,
        this.updateBudget({
          budget: this.budget,
          currentView: this.viewList.index,
        });
      },
       setBudget: function() {
        if(this.$refs.estimates && this.$refs.salesDatePicker && this.$refs.orderDatePicker && this.$refs.deliveryDatePicker) {
          this.$set(this.budget, 'item', this.$refs.estimates.setItem()),
          this.$set(this.budget, 'itemDetails', this.$refs.estimates.setItemDeteils()),
          this.$set(this.budget, 'consignmentCompany', this.$refs.estimates.setConsignmentCompany()),
          this.$set(this.budget, 'quantity', this.$refs.estimates.setQuantity()),
          this.$set(this.budget, 'unit', this.$refs.estimates.setUnit()),
          this.$set(this.budget, 'purchasingUnit', this.$refs.estimates.setPurchasingUnit()),
          this.$set(this.budget, 'salesUnit', this.$refs.estimates.setSalesUnit()),
          this.$set(this.budget, 'purchasingPrice', this.$refs.estimates.setPurchasingPrice()),
          this.$set(this.budget, 'salesPrice', this.$refs.estimates.setSalesPrice()),
          this.$set(this.budget, 'salesdate', this.$refs.salesDatePicker.setSalesDate()),
          this.$set(this.budget, 'orderDate', this.$refs.orderDatePicker.setOrderDate()),
          this.$set(this.budget, 'deliveryDate', this.$refs.deliveryDatePicker.setDeliveryDate())
        }
      }
    }
  }

</script>