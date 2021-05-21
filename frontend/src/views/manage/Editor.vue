<template>
  <div class="min-h-screen mt-48 ml-16 mr-16">
    <div class="col-start-1 col-span-2 mb-6">
      <a-button @click='syncHTML'>Check</a-button>
      <a-button type="danger" @click="setVisible(true)">Publish</a-button>
    </div>
    <div class="grid grid-cols-2 gap-8">
      <div ref='editor'></div>
      <div :innerHTML='content.html'></div>
    </div>
  </div>
  <div>
    <a-modal class="pt-56" v-model:visible="visible" title="publish blog" @ok="submit(formState)">
      <a-form layout="vertical" :model="formState" >
        <a-form-item>
          <a-input placeholder="Title" class="w-full" v-model:value="formState.title">
            <template #prefix><EditOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input placeholder="Introduction" class="w-full" v-model:value="formState.synopsis">
            <template #prefix><FontSizeOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-radio-group v-model:value="formState.type">
            <a-radio value="vue">Vue</a-radio>
            <a-radio value="ios">iOS</a-radio>
            <a-radio value="aws">AWS</a-radio>
            <a-radio value="python">Python</a-radio>
            <a-radio value="others">Others</a-radio>
            </a-radio-group>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
// TODO: move out logic to modal.vue
import { onMounted, ref, reactive, defineComponent, toRaw } from 'vue';
import WangEditor from 'wangeditor';
import xss from "xss";
import { useMessageNotice, useSuccessNotice } from "@u/notification.js"
import { useDebounce } from "@u/noticeDebounce.js"
import { EditOutlined, FontSizeOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    EditOutlined,
    FontSizeOutlined,
  },

    setup() {
        const editor = ref();
        
        const content = reactive({
            html: '',
            text: '',
        });
        let instance;
        onMounted(() => {
            instance = new WangEditor(editor.value);
            Object.assign(instance.config, {
                onchange() {
                    console.log('change');
                },
            });
            instance.config.height = 1000;
            instance.create();

            instance.txt.html(localStorage.getItem("draft"))

            instance.config.onchange = useDebounce((newHtml) => {
              localStorage.setItem("draft", xss(newHtml));
              useMessageNotice({
                message: "article",
                description: "saved locally",
          
              })
            }, 3000)
        });

        // show entryed text really time
        const syncHTML = () => {
            content.html = instance.txt.html();
        };

        // after publish button show modal
        const visible = ref(false)
        const setVisible = bool => visible.value = bool
        // modal form content
        const formState = reactive({
          title: '',
          synopsis: '',
          type: ''
        })

        const submit = (record) => {
          console.log(toRaw(record)); 
          useSuccessNotice({
            message: "Succesed!"
          })
        }

        return {
            syncHTML,
            editor,
            content,
            useMessageNotice,
            visible,
            setVisible,
            formState,
            submit
        };
    },
});
</script>