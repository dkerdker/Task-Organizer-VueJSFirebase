<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on" class="success">Add New Project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2 class="grey--text">Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field v-model="title" label="Title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea v-model="content" label="Information" prepend-icon="edit" :rules="inputRules"></v-textarea>

          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :rules="inputRules"
                :value="formattedDate"
                clearable
                readonly
                label="Due date"
                prepend-icon="date_range"
                v-bind="attrs"
                v-on="on"
                @click:clear="due = null"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due" @input="menu = false"></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn text @click="submit" class="success mx-0 mt-3" :loading="loading">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from "moment";
import { database } from "@/firebase/init";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      menu: false,
      inputRules: [
        v => !!v || "This field is required",
        v => v.length >= 3 || "Minimum length is 3 characters"
      ],
      loading: false,
      dialog: false,
      person: "Devion King"
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: moment(this.due).format("dddd, MMMM Do YYYY"),
          person: this.person,
          status: "ongoing"
        };
        database
          .collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("projectAdded");
          });
      }
    }
  },
  computed: {
    formattedDate() {
      console.log(this.due);
      return this.due ? moment(this.due).format("dddd, MMMM Do YYYY") : "";
    }
  }
};
</script>