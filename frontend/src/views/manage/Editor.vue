<template>
  <div class="min-h-screen mt-48 ml-16 mr-16">
    <div class="flex justify-start mb-6">
      <div>
        <a-button @click='syncHTML'>Check</a-button>
      </div>
      <div class="ml-6">
        <a-button type="danger" @click="setVisible(true)">{{submitButtonMessage}}</a-button>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-8">
      <div ref='editor'></div>
      <div :innerHTML='content.html'></div>
    </div>
  </div>

  <div>
    <a-modal class="pt-56" v-model:visible="visible" title="Publish Blog" @ok="submit(formState)">
      <a-form layout="vertical" :model="formState" >
        <a-form-item >
          <a-input placeholder="Title" class="w-full" v-model:value="formState.title">
            <template #prefix><EditOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item >
          <a-input placeholder="Introduction" class="w-full" v-model:value="formState.synopsis">
            <template #prefix><FontSizeOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>

        <a-form-item >
          <a-input placeholder="Card Image" class="w-full" v-model:value="formState.cardImages">
            <template #prefix><FileImageOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>

        <a-form-item class="mt-6">
          <a-radio-group v-model:value="formState.type">
            <a-radio value="Vue">Vue</a-radio>
            <a-radio value="Swift">Swift</a-radio>
            <a-radio value="Flutter">Flutter</a-radio>
            <a-radio value="Python">Python</a-radio>
            <a-radio value="AWS">AWS</a-radio>
            <a-radio value="Architecture">Architecture</a-radio>
            <a-radio value="Others">Others</a-radio>
            </a-radio-group>
        </a-form-item>

      </a-form>
    </a-modal>
  </div>
</template>

<script>
// TODO: move out logic to modal.vue
import { onMounted, ref, reactive, defineComponent } from 'vue';
import WangEditor from 'wangeditor';
import hljs from 'highlight.js';
import 'highlight.js/styles/androidstudio.css';
import { EditOutlined, FontSizeOutlined, FileImageOutlined } from '@ant-design/icons-vue';
import { useMessageNotice, useSuccessNotice, useErrorNotice } from "@u/notification.js"
import { useRoutePathToPage } from "@u/router.js"
import { useDebounce } from "@u/noticeDebounce.js"
import { useLocalStorage } from "@u/localStorage.js"
import http, { lazyRequest } from "@u/http.js"
import { useRouteQuery } from "@u/route.js"

export default defineComponent({
  components: {
    EditOutlined,
    FontSizeOutlined,
    FileImageOutlined
    // UploadOutlined
  },

  setup() {
    const editor = ref();
    
    const content = reactive({
        html: '',
        text: '',
    });
    let instance;

    const [draft] = useLocalStorage("draft")

    onMounted(() => {
        instance = new WangEditor(editor.value);
        Object.assign(instance.config, {
            onchange() {
                console.log('change');
            },
        });

        // editor setting
        instance.config.height = 1000;
        instance.highlight = hljs;
        instance.config.languageType = [
          'JavaScript', 'JSON', 'TypeScript', 'Html', 'CSS', 'Go', 'Kotlin', 'Swift', 'Python', 'Markdown', 'Flutter'
        ];


        instance.create();
        instance.txt.html(draft.value)
        instance.config.onchange = useDebounce((newHtml) => {
          draft.value = newHtml
        }, 500)
    });
    // show entryed text really time
    const syncHTML = () => {
        content.html = instance.txt.html();
    };
    
    // after publish button show modal
    const visible = ref(false)
    const setVisible = bool => visible.value = bool

    const formState = reactive({
      title: '',
      synopsis: '',
      cardImages: '',
      type: ''
    })

    // post article
    let submit = async (record) => {
      try {
        const request = http.post("/articles", {
          ...record,
          content: instance.txt.html()
        })

        await lazyRequest(request, 1000)
        useSuccessNotice({
          message: "Succesed!"
        })

        const toArticle = useRoutePathToPage("/manage/articles/1")
        toArticle()
      } catch (error) {
        useErrorNotice({
          message: "Failed!",
          description: error.reason || "unknow error"
        })
      } finally {
        setVisible(false)
      }
    }

    // update article
    const id = useRouteQuery("id")
    const updateFlag = Boolean(id)

    if (updateFlag) {
      onMounted(async () => {
        try {
          const { data } = await http.get(`/articles/${id}`)
          instance.txt.html(data.content)
          // diffrent with reactive() and ref() 
          formState.title = data.title
          formState.synopsis = data.synopsis
          formState.type = data.type
          formState.cardImages = data.cardImages
        } catch (error) {
          useErrorNotice({
            message: "update faileld!",
            description: error.reason || "unknow error"
          })
        }
      })

      submit = async (record) => {
        try {
          await http.put(`/articles/${id}`, {
            ...record,
            content: instance.txt.html()
          })
          useSuccessNotice({
            message: "Update Success!"
          })

          const toArticle = useRoutePathToPage("/manage/articles/1")
          toArticle()
        } catch (error) {
          useErrorNotice({
            message: "Update Failed!",
            description: error.reason || "unknow error"
          })
        } finally {
          setVisible(false)
        }
      }
    }

    const submitButtonMessage = updateFlag ? "Update" : "Publish"

    return {
        syncHTML,
        editor,
        content,
        useMessageNotice,
        visible,
        setVisible,
        formState,
        submit,
        submitButtonMessage
    };
  },
});
</script>