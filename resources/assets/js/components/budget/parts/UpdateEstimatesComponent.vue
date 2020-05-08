<template>
  <v-card>
    <v-card-actions>
      <v-row>
        <v-col md="10">
          <v-text-field
            v-model="item"
            label="項目">
          </v-text-field>
        </v-col>
        <v-col md="2"></v-col>
      </v-row>
    </v-card-actions>
    <v-card-actions>
      <v-row>
        <v-col md="10">
          <v-text-field
            v-model="item_deteils"
            label="項目詳細">
          </v-text-field>
        </v-col>
        <v-col md="2"></v-col>
      </v-row>
    </v-card-actions>
    <v-card-actions>
      <v-row>
        <v-col md="10">
          <v-text-field
            v-model="consignment_company"
            label="委託会社">
          </v-text-field>
        </v-col>
        <v-col md="2"></v-col>
      </v-row>
    </v-card-actions>
    <v-card-actions>
      <v-row>
        <v-col md="2">
          <v-text-field
            v-model="quantity"
            label="数量">
          </v-text-field>
        </v-col>
        <v-col md="2">
          <v-text-field
            v-model="unit"
            label="単位">
          </v-text-field>
        </v-col>
        <v-col md="2">
          <v-text-field
            v-model="purchasing_unit"
            label="仕入単価">
          </v-text-field>
        </v-col>
        <v-col md="2">
          <v-text-field
            v-model="sales_unit"
            label="販売単価">
          </v-text-field>
        </v-col>
        <v-col md="2">
          <v-text-field
            v-model="purchasing_price"
            label="仕入金額">
          </v-text-field>
        </v-col>
        <v-col md="2">
          <v-text-field
            v-model="sales_price"
            label="販売金額">
          </v-text-field>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      item: '',
      item_deteils: '',
      consignment_company: '',
      quantity: '',
      unit: '',
      purchasing_unit: '',
      sales_unit: '',
      purchasing_price: '',
      sales_price: ''
    }
  },
  methods: {
    setItem: function() {
      return this.item;
    },
    setItemDeteils: function() {
      return this.itemDeteils;
    },
    setConsignmentCompany: function() {
      return this.consignmentCompany;
    },
    setQuantity: function() {
      return this.quantity;
    },
    setUnit: function() {
      return this.unit;
    },
    setPurchasingUnit: function() {
      return this.purchasingUnit;
    },
    setSalesUnit: function() {
      return this.salesUnit;
    },
    setPurchasingPrice: function() {
      return this.purchasingPrice;
    },
    setSalesPrice: function() {
      return this.salesPrice;
    }
  }
}
</script>