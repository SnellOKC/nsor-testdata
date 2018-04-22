<template>
  <v-card>
  <v-card-title>
  Portfolio Health
  <v-spacer></v-spacer>
  <v-text-field
    append-icon="search"
    label="Search"
    single-line
    hide-details
    v-model="search"
  ></v-text-field>
</v-card-title>
  <v-data-table
    :headers="headers"
    :items="phdetail"
    :search="search"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.AccountNumber }}</td>
      <td class="text-xs-left">{{ props.item.MerchantName }}</td>
      <td class="text-xs-left">{{ props.item.Status }}</td>
      <td class="text-xs-right">{{ props.item.Months }}</td>
      <td class="text-xs-right">{{ props.item.ActualMargin }}</td>
      <td class="text-xs-right">{{ props.item.EstimatedMargin }}</td>
      <td class="text-xs-right">{{ props.item.SalesEquity }}</td>
    </template>
    <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
  </v-data-table>
</v-card>
</template>

<script>
/* eslint-disable */
import PostsService from '@/services/PostsService'
export default {
  name: 'phdetail',
  data () {
    return {
      search: '',
      headers: [
          { text: 'Account Number', align: 'left', sortable: false, value: 'AccountNumber' },
          { text: 'Merchant Name', value: 'MerchantName' },
          { text: 'Status', value: 'Status' },
          { text: 'Months', value: 'Months' },
          { text: 'Actual Margin', value: 'ActualMargin' },
          { text: 'Estimated Margin', value: 'EstimatedMargin' },
          { text: 'Portfolio Health', value: 'SalesEquity' }
        ],
      phdetail: []
    }
  },
  mounted () {
    this.getPHDetail()
  },
  methods: {
    async getPHDetail () {
      const response = await PostsService.fetchPHDetails()
      this.phdetail = response.data.phdetail
    }
  }
}
</script>
