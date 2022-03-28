import { notification, Modal } from "ant-design-vue"
import { throttle } from "./index"

export interface AjaxData<T> {
  data: T
  statusText: string
  status: string | number
}
const notificationError = throttle(notification.error)
export function updateResponse<T = any, P extends Promise<any> = any>(data: P) {
  return data.then((data: AjaxData<T>) => {
    if (data.status === 200) {
      return data.data
    } else if (data.status === 401) {
      notLogin()
    } else {
      notificationError({
        description: data.statusText,
        message: "异常",
      })
    }
  })

  // return data.then((data: AjaxData<T>) => {
  //   if (has("response", data) && data.response.status === 200) {
  //     return data
  //   }
  //   if (successCode.includes(data.status as string)) {
  //     return data
  //   }

  //   switch (data.status) {
  //     case 401:
  //       notLogin()
  //       break
  //     case 200:
  //       break
  //     case "0X0000":
  //       break
  //     default:
  //       notificationError({
  //         description: data.statusText,
  //         message: "异常",
  //       })
  //       break
  //   }
  //   return data
  // })
}

function notLogin() {
  Modal.confirm({
    title: "登录失效，是否跳转登录",
    onOk() {
      history.pushState(
        {
          from: location.pathname,
          search: location.search,
        },
        "登录",
        "/login"
      )
      location.reload()
      // location.href = `/login?url=${location.pathname}`
    },
  })
}
