import { Button, Avatar, Tag, Card, Pagination, Form, Input, Modal, Checkbox , Table, Divider, Upload } from "ant-design-vue"
import 'ant-design-vue/dist/antd.css'

const components = [ Button, Avatar, Tag, Card, Pagination, Form, Input, Modal, Checkbox , Table, Divider, Upload ]

export const componentsPlugin = app =>
    components.forEach(app.use, app)