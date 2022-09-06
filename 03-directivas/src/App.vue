<template>
  <div>
  <h1>Directivas</h1>
  <hr>
  <span>{{titulo}}</span>
  <div v-html="titulo"></div>

  <h3>tu edad es: {{edad}}</h3>

  <h2 v-if="edad>=18 && edad>0 && edad <100">Mayor de edad</h2>
  <h2 v-else-if="edad<18 && edad > 0 && edad < 100">Menor de edad</h2>
    <h2 v-else> edad inva lida</h2>
  <button @click="add()">Agregar edad</button>
  <button @click="diss()">disminuir edad</button>
  <ul >
    <li v-for="(usuario,index) in usuarios" :key="index">{{index}} - {{usuario}}</li>
  </ul>
</div>
</template>

<script>
  export default{
    data:()=>({
      titulo:"<h3>soy un h3</h3>",
      edad:15,
      usuarios:['Melisa','Jose','Maria','Fernanda']
    }) ,
    methods:{
      add(){
        this.edad++
      },
      diss(){
        this.edad--
      }
    }
  }
</script>
<style scoped>
div{
  text-align: center;
  margin: 0px 2rem;
}
</style>