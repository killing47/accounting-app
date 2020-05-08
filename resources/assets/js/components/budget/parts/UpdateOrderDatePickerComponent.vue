<template>
  <v-dialog
    ref="orderDateDialog"
    v-model="modal"
    :return-value.sync="order_date"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="order_date"
        label="受注日"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="order_date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
      <v-btn text color="primary" @click="$refs.orderDateDialog.save(order_date)">OK</v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
  export default {
    data() {
      return {
        order_date: '',
        modal: false
      }
    },
    methods: {
      setOrderDate: function() {
        return this.order_date;
      }
    }
  }
</script>