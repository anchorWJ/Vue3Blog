import { Button, Avatar, Tag, Card, Pagination, Form, Input, Modal, Radio, Table, Divider } from "ant-design-vue"
import 'ant-design-vue/dist/antd.css'

const components = [ Button, Avatar, Tag, Card, Pagination, Form, Input, Modal, Radio, Table, Divider ]

export const componentsPlugin = app =>
    components.forEach(app.use, app)