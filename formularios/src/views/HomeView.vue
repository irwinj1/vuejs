<template>
  <div class="mt-5">
    <SearchTable />
    <TableData />
  </div>
</template>

<script>
import SearchTable from "@/components/SearchTable.vue";
import TableData from "../components/TableData.vue";
export default {
  name: "Home",

  components: { SearchTable, TableData },
};
</script>
