<template>
  <div class="container">
    <h1>Cotizador de Criptomonedas</h1>
    <grid>
      <formulario />
      <Data />
    </grid>
  </div>
</template>

<script>
import Data from "./components/Data.vue";
import Formulario from "./components/Formulario.vue";
import Grid from "./components/Grid.vue";
export default { components: { Formulario, Data, Grid } };
</script>

