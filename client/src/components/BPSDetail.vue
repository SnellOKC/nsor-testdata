<template>
  <v-card>
  <v-card-title>
  Basis Points
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
    :items="bpsdetail"
    :search="search"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.MerchantNumber }}</td>
      <td class="text-xs-left">{{ props.item.MerchantName }}</td>
      <td class="text-xs-left">{{ props.item.L12MVolume }}</td>
      <td class="text-xs-right">{{ props.item.L12MTxns }}</td>
      <td class="text-xs-right">{{ props.item.L12MActualMargin }}</td>
      <td class="text-xs-right">{{ props.item.L12MAvgTicket }}</td>
      <td class="text-xs-right">{{ props.item.L12MBasisPts }}</td>
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
  name: 'bpsdetail',
  loading: true,
  data () {
    return {
      search: '',
      headers: [
          { text: 'Account Number', align: 'left', sortable: false, value: 'MerchantNumber' },
          { text: 'Merchant Name', value: 'MerchantName' },
          { text: 'Volume', value: 'L12MVolume' },
          { text: 'Txns', value: 'L12MTxns' },
          { text: 'Actual Margin', value: 'L12MActualMargin' },
          { text: 'Avg Ticket', value: 'L12MAvgTicket' },
          { text: 'Basis Points', value: 'L12MBasisPts' }
        ],
      bpsdetail: []
    }
  },
  mounted () {
    this.getBPSDetail()
  },
  methods: {
    async getBPSDetail () {
      const response = await PostsService.fetchBPSDetails()
      this.bpsdetail = response.data.bpsdetail
      console.log(response)
    }
  }
}
</script>
