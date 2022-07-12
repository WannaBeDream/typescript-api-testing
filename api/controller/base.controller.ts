import axios from "axios";
import type { CookieJar } from "tough-cookie";
import { validateBodyBySchemas } from "../requestInterceptors";

export class BaseController {
       public instance: any = axios.create({
        baseURL: "https://petstore.swagger.io/v2/",
        timeout: 1000,
        headers: { "X-Custom-Header": "foobar" }, // add here static headers
      });
      useSchemaValidation() {
        this.instance.interceptors.response.use((value: any) => {
          return validateBodyBySchemas(value);
        });
      }
    constructor(protected readonly params: { token?: string, cookies: CookieJar }) {
        // this.useSchemaValidation() // to add everywhere
    }
}