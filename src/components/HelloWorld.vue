<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-text-field
          label="Search"
          placeholder="Placeholder"
          v-model="query"
          @input="search()"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="3" class="mx-auto" v-for="(item,index) in data" :key="index">
        <v-card  >
      <v-img
        class="white--text align-end"
        height="auto"
        :src="item._source.url"
      >
        <v-card-title>{{item._source.cast_name}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">By {{item._source.og_name}}</v-card-subtitle>

     
    </v-card>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    query: "",
    data:null
  }),
  methods: {
    search() {
      console.log(this.query);
        
        this.$axios.get('http://localhost:5000/search?q='+this.query)
              .then(response => {
                this.data = response.data;
          })
    
    },
  },
};
</script>
