<template>
  <div class="min-h-screen mt-80 max-w-3xl mx-auto">
    <div class="grid grid-cols-6 gap-4 rounded-lg ml-24 mr-24  pt-16 pr-24 pl-24 bg-gray-100 ring-4 ring-gray-200
    transition duration-500 ease-in-out  hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-110"
    >
      <div class="col-start-2 col-span-4">
          <a-form
          layout="vertical"
          :model="formState"
          @submit="handleFinish"
          >
          <a-form-item v-bind="validateInfos.username">
            <a-input v-model:value="formState.username" placeholder="Username">
              <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
          </a-form-item>
          <a-form-item v-bind="validateInfos.password">
            <a-input v-model:value="formState.password" type="password" placeholder="Password">
              <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" :disabled="disabled">
              Log in
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script>
import { useErrorNotice, useSuccessNotice } from "@u/notification.js"
import { useRoutePathToPage } from "@u/router.js"
import { useLocalStorage } from "@u/localStorage.js"
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, computed } from 'vue';
import http from "@u/http.js"
import { useForm } from "@ant-design-vue/use"

export default defineComponent({
  setup() {
    const formState = reactive({
      username: '',
      password: '',
    });

    const disabled = computed(
      () => {
        const status = [
          validateInfos.username.validateStatus,
          validateInfos.password.validateStatus
        ].every((status) => status === "success")
        return !status
      }
    );

    const rules = reactive({
      username: [
        {
          required: true,
          message: 'confirm your username name'
        }
      ],
      password: [
        {
          required: true,
          pattern: /^(?=.*[a-z])(?=.*\d)[^]{8,16}$/,
          message: "password must be string and has special character and over 8 under 16"
        }
      ]
    });

    const { validateInfos } = useForm(formState, rules)

    const [ token ] = useLocalStorage("token")
    const toArticle = useRoutePathToPage("/manage/articles/1")
    const handleFinish = async () => {
      try {
        const res = await http.post('/users/login', formState)
        token.value = res.data.token
        useSuccessNotice({
          message: "Login Success",
          duration: 1
        })
        setTimeout(() => {
          toArticle()
        }, 1500)
      } catch (error) {
        useErrorNotice({
          message: "Login Failed",
          description: error.reason || "unknow error",
          duration: 2
        })
      }
    };
    return {
      disabled,
      validateInfos,
      formState,
      handleFinish,
    };
  },

  components: {
    UserOutlined,
    LockOutlined,
  },
});
</script>