import { updateResponse } from "@/utils/http"
import request from "@/utils/request"

export const getUser = () => {
  //updateResponse
  return updateResponse(
    request({
      url: "/user",
      method: "GET",
    })
  )
}
