import { reactive } from "vue"

export const articleViewConfig = {
  pagination: reactive({
    pageSize: 10
  }),
  columns: [
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'publish time',
      dataIndex: 'createAt',
      key: 'createAt',
    },
    {
      title: 'update time',
      dataIndex: 'updateAt',
      key: 'updateAt',
    },
    {
      title: 'type',
      key: 'type',
      dataIndex: 'type',
      slots: {
        customRender: 'type',
      },
    },
    {
      title: 'edit',
      key: 'edit',
      slots: {
        customRender: 'edit',
      },
    },
  ]
}