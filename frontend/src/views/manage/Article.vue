<template>
  <div class="min-h-screen mt-48 ml-16 mr-16">
    <a-table :columns="columns" :data-source="data" :pagination="pagination" @change="handleChange">
      <template #type="{ text }">
        <a-tag :color="useColor(text)">
          {{ text.toUpperCase() }}
        </a-tag>
      </template>
      <template #edit>
        <div class="grid grid-cols-3 gap-4">
          <a-button>check</a-button>
          <a-button type="primary">edit</a-button>
          <a-button type="danger">delete</a-button>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script>
import { articleViewConfig } from "@vp/editArticle/article.js"
import { defineComponent } from 'vue';
import { useColorMap } from "@u/color.js"
import { useRouteParamChange } from "@u/router.js"
import { useLinkedRouteParam } from "@u/route.js"


export default defineComponent({
  setup() {
    const { columns, data, pagination } = articleViewConfig
    const colorMap = new Map([
      ["vue", "#10B981"],
      ["aws", "#F59E0B"],
      ["ios", "#D1D5DB"]
    ]) 
    const useColor = useColorMap(colorMap)

    pagination.current = useLinkedRouteParam("pageNum")
    const pageNumberChange = useRouteParamChange("pageNum")
    const handleChange = ({ current }) => pageNumberChange(current)

    return {
      data,
      columns,
      useColor,
      pagination,
      handleChange
    } 
  },

});
</script>