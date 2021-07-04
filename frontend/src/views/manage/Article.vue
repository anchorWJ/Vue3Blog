<template>
  <div class="mt-52 ml-16">
    <a-button type="primary" @click="toEditPage">New Article</a-button>
  </div>
  
  <div class="mt-6 ml-16 mr-16">
    <a-table :columns="columns" :data-source="data" :pagination="pagination" row-key="id" :loading="loading" @change="handleChange">
      <template #type="{ text }">
        <a-tag :color="useColor(text)">
          {{ text.toUpperCase() }}
        </a-tag>
      </template>
      <template #edit="{ text: { id } }">
        <div class="grid grid-cols-3 gap-4">
          <a-button @click="check(id)">check</a-button>
          <a-button type="primary" @click="update(id)">edit</a-button>
          <a-button type="danger" @click="destory(id)">delete</a-button>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script>
import { articleViewConfig } from "@vp/editArticle/article.js"
import { defineComponent, watchEffect, ref } from 'vue';
import { useColorMap } from "@u/color.js"
import { useRouteParamChange, useRouteNameToPage, useRoutePathToPage, useRouteNameWithQueryToPage } from "@u/router.js"
import { useLinkedRouteParam } from "@u/route.js"
import http, { lazyRequest } from "@u/http.js"
import { useErrorNotice, useSuccessNotice } from "@u/notification.js"
import { useState } from "@u/hook.js"

export default defineComponent({
  setup() {
    const { columns, pagination } = articleViewConfig
    const colorMap = new Map([
      ["Swift", "#F59E0B"],
      ["AWS", "#FCD34D"],
      ["Vue", "#10B981"],
      ["Flutter", "#60A5FA"],
      ["Python", "#2563EB"]
    ]) 
    const useColor = useColorMap(colorMap)
    pagination.current = useLinkedRouteParam("pageNum")
    const pageNumberChange = useRouteParamChange("pageNum")
    const handleChange = ({ current }) => pageNumberChange(current)

    const toEditPage = useRouteNameToPage("ManageEditor")

    const data = ref([])

    const [loading, setLoading] = useState(false)

    watchEffect (async() => {
      setLoading(true)
      try {
        const request = await http.get(`/articles?limit=${pagination.pageSize}&page=${pagination.current}`)
        
        const [res] = await lazyRequest(request, 400)
        data.value = res.data.rows
        pagination.total = res.data.count
      } catch (error) {
        useErrorNotice({
          message: "get article error!",
          description: error.reason || "unknow error",

        })
      } finally {
        setLoading(false)
      }
    }, 
    {
      flush: "post"
    })

    const destory = async (id) => {
      setLoading(true)
      try {
        await http.delete(`/articles/${id}`)
        useSuccessNotice({
          message: "delete success!",
        })

        const request = await http.get(`/articles?limit=${pagination.pageSize}&page=${pagination.current}`)
        
        const [res] = await lazyRequest(request, 1000)
        data.value = res.data.rows
        pagination.total = res.data.count

      } catch (error) {
        useErrorNotice({
          message: "delete failed!",
          description: error.reason || "unkown error"
        })
      } finally {
        setLoading(false)
      }
    }

    const check = id => {
      const toPage = useRoutePathToPage(`/details/${id}`)
      toPage()
    }

    const update = useRouteNameWithQueryToPage("ManageEditor", "id")

    return {
      data,
      columns,
      useColor,
      pagination,
      handleChange,
      toEditPage,
      loading,
      destory,
      check,
      update
    } 
  },

});
</script>