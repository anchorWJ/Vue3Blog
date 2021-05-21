import { reactive } from "vue"

export const articleViewConfig = {
  pagination: reactive({
    pageSize: 5
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
  ],
  data: [
    {
      key: '1',
      title: 'John Brown',
      createAt: 32,
      updateAt: '2020',
      type: "aws"
    },
    {
      key: '2',
      title: 'Jim Green',
      createAt: 42,
      updateAt: '2021',
      type: "ios"
    },
    {
      key: '3',
      title: 'Joe Black',
      createAt: 32,
      updateAt: '2022',
      type: "vue"
    },
    {
      key: '4',
      title: 'John Brown',
      createAt: 32,
      updateAt: '2020',
      type: "aws"
    },
    {
      key: '5',
      title: 'Jim Green',
      createAt: 42,
      updateAt: '2021',
      type: "ios"
    },
    {
      key: '6',
      title: 'Joe Black',
      createAt: 32,
      updateAt: '2022',
      type: "vue"
    },
    {
      key: '7',
      title: 'John Brown',
      createAt: 32,
      updateAt: '2020',
      type: "aws"
    },
    {
      key: '8',
      title: 'Jim Green',
      createAt: 42,
      updateAt: '2021',
      type: "ios"
    },
    {
      key: '9',
      title: 'Joe Black',
      createAt: 32,
      updateAt: '2022',
      type: "vue"
    },
    {
      key: '10',
      title: 'John Brown',
      createAt: 32,
      updateAt: '2020',
      type: "aws"
    },
    {
      key: '11',
      title: 'Jim Green',
      createAt: 42,
      updateAt: '2021',
      type: "ios"
    },
    {
      key: '13',
      title: 'Joe Black',
      createAt: 32,
      updateAt: '2022',
      type: "vue"
    },
    {
      key: '14',
      title: 'John Brown',
      createAt: 32,
      updateAt: '2020',
      type: "aws"
    },
    {
      key: '15',
      title: 'Jim Green',
      createAt: 42,
      updateAt: '2021',
      type: "ios"
    },
    {
      key: '16',
      title: 'Joe Black',
      createAt: 32,
      updateAt: '2022',
      type: "vue"
    },
  ]
}