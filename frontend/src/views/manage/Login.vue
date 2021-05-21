<template>
  <div class="min-h-screen mt-80 mb-56  max-w-3xl mx-auto">
    <div class="grid grid-cols-6 gap-4 rounded-lg ml-24 mr-24  pt-16 pr-24 pl-24 bg-gray-100 ring-4 ring-gray-200
    transition duration-500 ease-in-out  hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-110"
    >
      <div class="col-start-2 col-span-4">
          <a-form
          layout="vertical"
          :model="formState"
          @finish="handleFinish"
          @finishFailed="handleFinishFailed"
          >
          <a-form-item>
            <a-input v-model:value="formState.user" placeholder="Username">
              <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input v-model:value="formState.password" type="password" placeholder="Password">
              <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              :disabled="formState.user === '' || formState.password === ''"
            >
              Log in
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, toRaw } from 'vue';
export default defineComponent({
  setup() {
    const formState = reactive({
      user: 'kyaputen',
      password: 'wsimple',
    });

    const handleFinish = () => 
      console.log(toRaw(formState));
    

    const handleFinishFailed = errors => {
      console.log(errors);
    };

    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },

  components: {
    UserOutlined,
    LockOutlined,
  },
});
</script>