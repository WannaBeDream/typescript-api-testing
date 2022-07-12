import { operations } from "../../.temp/types";
// import { JsonRequestWithValidation } from "../request";
import { BaseController } from "./base.controller";

export class UserController extends BaseController {
    async login(
      credentials: { username: string, password: string }
    ): Promise<operations['loginUser']['responses']['200']['schema']>{
      const response = await this.instance.get(`user/login`, {
        params: new URLSearchParams(credentials),
        headers: { token: this.params.token }
      });
      return response.data as string;
    }
}