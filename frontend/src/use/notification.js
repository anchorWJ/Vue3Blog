import { notification } from "ant-design-vue"

export const useNotification = (type) => ({
  message,
  description,
  duration = 2
}) => {
  notification[type]({
    message,
    description,
    duration
  })
}

export const useSuccessNotice = useNotification("success");
export const useMessageNotice = useNotification("info");
export const useWarningNotice = useNotification("warning");
export const useErrorNotice = useNotification("error");