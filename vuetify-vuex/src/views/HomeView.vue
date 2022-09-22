<template>
  <div>
    <Calendario />
    <v-row>
      <v-col cols="12" sm="6" md="12" class="text-center">
        <v-card class="pa-2" color="error" outlined tile>
          <v-card-text class="text-h3">Hola Mundo</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Calendario from "@/components/Calendario.vue";

// Components

export default defineComponent({
  name: "HomeView",
  data: () => ({
    picker: "",
  }),

  components: { Calendario },
});
</script>
