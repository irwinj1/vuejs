<template>
  <div>
    <form @submit.prevent="getData()" className="mt-3">
      <fieldset>
        <div class="card border-primary mb-3 cardEstilo">
          <div class="card-header">
            <legend>Legend</legend>
          </div>
          <div class="card-body">
            <div class="card-text">
              <div class="form-group">
                <label for="exampleInputEmail1" class="form-label mt-4">
                  Titulo
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Titulo"
                  v-model.trim="title"
                  required
                />
              </div>

              <div className="form-group">
                <label for="exampleTextarea" className="form-label mt-4">
                  Descripción
                </label>
                <textarea
                  class="form-control"
                  id="exampleTextarea"
                  rows="3"
                  v-model.trim="description"
                  required
                ></textarea>
              </div>
              <div class="form-group">
                <label for="formFile" class="form-label mt-4"> Imagen </label>

                <input
                  type="file"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Titulo"
                  @change="getFile"
                  required
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import FileInput from "vue3-simple-file-input";
export default {
  components: { FileInput },
  data: () => ({ title: "", description: "", img: "" }),
  methods: {
    getData() {
      this.$emit("dataForm", this.title, this.description, this.img);
      this.title = "";
      this.description = "";
      this.img = "";
      this.$router.push("/");
    },
    getFile() {
      this.img = event.target.files;
    },
  },
};
</script>

<style scoped>
.fileInput {
}
</style>