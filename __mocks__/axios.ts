interface Response {
  data: any
  status: number 
}

let url: string
let response: any

function get(_url: string): Response {
  url = _url

  return {} as Response
}

export function getRequestUrl(): string {
  return url
}

export function setResponse(_response: Response): void {
  response = _response
}

export default {
    get
}