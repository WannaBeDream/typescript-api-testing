import axios from "axios";
import { URLSearchParams } from "url";
import { definitions, operations } from "../../.temp/types";
import { validateBodyBySchemas } from "../requestInterceptors";


export class StoreController {
  instance: any = axios.create({
    baseURL: "https://petstore.swagger.io/v2/store/",
    headers: { "X-Custom-Header": "foobar" },
  });

  useSchemaValidation() {
    this.instance.interceptors.response.use((value: any) => {
      return validateBodyBySchemas(value);
    });
  }

  async getInventory(): Promise<
    operations["getInventory"]["responses"]["200"]["schema"]
  > {
    // correct example
    const response = await this.instance.get(`inventory`);

    return response.data;
  }
}
