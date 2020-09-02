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
            <v-list-item v-for="(item, index) in response" :key="index">
              <v-list-item-content
                >{{ index + 1 }}. {{ item.itemName }}</v-list-item-content
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
export default {
  data() {
    return {
      todoItem: "",
      response: null,
    };
  },
  methods: {
    add() {
      if (this.todoItem.trim() === "") return false;
      if (this.itemExist()) {
        alert("item already exist");
        return false;
      }
      const data = {
        itemName: this.todoItem,
      };

      this.$axios
        .post("http://localhost:8000/todo/add", data)
        .then((response) => {
          console.log(response);
          if (response.data.todoList.length > 0) {
            this.response = [...this.response, response.data.todoList[0]];
          }
          this.todoItem = "";
        })
        .catch(function(error) {
          this.todoItem = "";
          console.log(error);
        });
    },
    remove(item) {
      this.$axios
        .get(`http://localhost:8000/todo/remove/${item._id}`, item)
        .then((resp) => {
          console.log(resp);
          if (resp.data.todoList.length > 0) {
            const ItemIdRemoved = resp.data.todoList[0]._id;
            this.response = this.response.filter(
              (item) => item._id !== ItemIdRemoved
            );
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    itemExist() {
      return (
        this.response &&
        this.response.find((item) => item.itemName === this.todoItem)
      );
    },
    getAllItems() {
      this.$axios
        .get("http://localhost:8000/todo/findAll")
        .then((response) => {
          console.log(response);
          this.response = response.data.todoList;
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
