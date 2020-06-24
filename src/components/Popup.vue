<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn text slot="activator" class="success">Add New Project</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    submit() {}
  },
  computed: {}
};
</script>