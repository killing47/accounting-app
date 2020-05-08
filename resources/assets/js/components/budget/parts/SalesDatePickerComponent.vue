<template>
  <v-dialog
    ref="salesDateDialog"
    v-model="modal"
    :return-value.sync="sales_date"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="sales_date"
        label="売上年月"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="sales_date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
      <v-btn text color="primary" @click="$refs.salesDateDialog.save(sales_date)">OK</v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
  export default {
    data() {
      return {
        sales_date: '',
        modal: false
      }
    },
    methods: {
      setSalesDate: function() {
        return this.sales_date;
      }
    }
  }
</script>