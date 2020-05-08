<template>
  <v-dialog
    ref="deliveryDateDialog"
    v-model="modal"
    :return-value.sync="delivery_date"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="delivery_date"
        label="納品日"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="delivery_date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
      <v-btn text color="primary" @click="$refs.deliveryDateDialog.save(delivery_date)">OK</v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
  export default {
    data() {
      return {
        
        modal: false
      }
    },
    props: {
      'delivery_date': {
        type: String
      }
    },
    methods: {
      setDeliveryDate: function() {
        return this.delivery_date;
      }
    }
  }
</script>