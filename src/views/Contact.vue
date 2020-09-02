<template>
  <v-form v-model="valid" @submit.prevent="handleSubmission()">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn color="primary" type="submit">submit</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>{{ response }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    response: null,
  }),
  methods: {
    handleSubmission() {
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
      };
      this.$axios
        .post("http://localhost:8000/contact", data)
        .then((response) => {
          console.log(response);
          this.response = response.data.responseMessage;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
