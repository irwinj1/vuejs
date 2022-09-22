<template>
  <v-row justify="center">
    <v-date-picker
      v-model="picker"
      year-icon="mdi-calendar-blank"
      prev-icon="mdi-skip-previous"
      next-icon="mdi-skip-next"
    ></v-date-picker>
  </v-row>
</template>
  <script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Calendario",
  data() {
    return {
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    };
  },
};
</script>