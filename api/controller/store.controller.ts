import axios from "axios";
import { URLSearchParams } from "url";
import { definitions, operations } from "../../.temp/types";
import { validateBodyBySchemas } from "../requestInterceptors";
import { BaseController } from "./base.controller";


export class StoreController extends BaseController {

  async getInventory(): Promise<
    operations["getInventory"]["responses"]["200"]["schema"]
  > {
    // correct example
    const response = await this.instance.get(`store/inventory`);
    return response.data;
  }
}
