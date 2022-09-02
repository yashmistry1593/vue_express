<template>
  <div>
    <v-form @submit.prevent="add()">
      <v-row justify="center">
        <v-col cols="12" md="3">
          <h3>Todo List :</h3>
          <v-text-field
            v-model="todoItem"
            :counter="10"
            label="Item"
            required
          ></v-text-field>
          <v-btn type="submit">Add</v-btn>
          <v-list>
            <v-list-item v-for="(item, index) in todoList" :key="index">
              <v-list-item-content
                >{{ index + 1 }}. {{ item.task }}</v-list-item-content
              >
              <v-list-item-action
                ><v-icon color="grey lighten-1" @click="remove(item)"
                  >mdi-close</v-icon
                ></v-list-item-action
              >
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
const { v4 } = require("uuid");
export default {
  data() {
    return {
      todoItem: "",
      todoList: [],
    };
  },
  methods: {
    add() {
      // if (this.todoItem.trim() === "") return false;
      if (this.itemExist()) {
        alert("item already exist");
        return false;
      }
      const data = {
        id: v4(),
        createdAt: new Date().toUTCString(),
        task: this.todoItem,
      };

      this.$axios
        .post(
          "https://9c4esvszb8.execute-api.us-east-1.amazonaws.com/prod",
          data
        )
        .then((response) => {
          console.log(response);
          if (response.data.statusCode === 201) {
            // this.todoList.push(this.todoItem);
            this.todoList = [...this.todoList, data];
          } else {
            throw new Error("Empty values not allowed");
          }
          this.todoItem = "";
        })
        .catch((error) => {
          this.todoItem = "";
          console.log(error);
        });
    },
    remove(taskItem) {
      const config = {
        data: {
          id: taskItem.id,
          createdAt: taskItem.createdAt,
        },
      };
      this.$axios
        .delete(
          "https://9c4esvszb8.execute-api.us-east-1.amazonaws.com/prod",
          config
        )
        .then((response) => {
          console.log(response);
          if (response.data.statusCode === 200) {
            this.todoList = this.todoList.filter(
              (item) => item.id !== taskItem.id
            );
          } else {
            throw new Error("Id does not exist");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    itemExist() {
      return (
        this.response &&
        this.response.find((item) => item.task === this.todoItem)
      );
    },
    getAllItems() {
      this.$axios
        .get("https://9c4esvszb8.execute-api.us-east-1.amazonaws.com/prod")
        .then((response) => {
          console.log(response);
          console.log(this.todoList);
          this.todoList = response.data.body;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  computed: {},
  async mounted() {
    await this.getAllItems();
  },
};
</script>

<style></style>
