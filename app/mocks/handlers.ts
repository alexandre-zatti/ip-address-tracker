import { http, HttpResponse } from "msw";
import { IpResult } from "@/app/mocks/fixtures/IpResult";

export const handlers = [
  http.get('https://api.ipdata.co/*', () => {
    return HttpResponse.json(IpResult)
  })
]