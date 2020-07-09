<template>
  <div class="projects">
    <v-container fluid>
      <h1 class="page-title grey--text">Projects</h1>
    </v-container>
    <v-container class="my-5">
      <v-expansion-panels :accordion="true" :multiple="true">
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header class="grey--text text--darken-2">{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="font-weight-bold">Due by {{ project.due }}</div>
            <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import { database } from "@/firebase/init";

export default {
  data() {
    return {
      projects: [],
      person: "Devion King"
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === this.person && project.status != "complete";
      });
    }
  },
  created() {
    database.collection("projects").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>