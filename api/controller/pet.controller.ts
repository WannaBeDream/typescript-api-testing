import axios from "axios";
import { URLSearchParams } from "url";
import { definitions, operations } from "../../.temp/types";
import { validateBodyBySchemas } from "../requestInterceptors";
import { BaseController } from "./base.controller";

export class PetController extends BaseController {
 
  async getById(
    id: number | string
  ): Promise<operations["getPetById"]["responses"]["200"]["schema"]> {
    this.useSchemaValidation()
    const response = await this.instance.get(`pet/${id}`);
    return response.data;
  }
  async findByStatus(
    status: string | string[]
  ): Promise<operations["findPetsByStatus"]["responses"]["200"]["schema"]> {
    this.useSchemaValidation()
    const response = await this.instance.get(`pet/findByStatus`, {
      params: new URLSearchParams({ status }),
    });
    return response.data;
  }

  async addNew(
    pet: Omit<definitions["Pet"], "id">
  ): Promise<definitions["Pet"]> {
    // this.useSchemaValidation()  // has not yet added to swagger response
    const response = await this.instance.post(`pet/`, pet);
    return response.data;
  }
  async update(pet: definitions["Pet"]): Promise<definitions["Pet"]> {
    const response = await this.instance.put(`pet/`, pet);
    return response.data;
  }

  async deleteById(id: string | number): Promise<definitions["ApiResponse"]> {
    const response = await this.instance.delete(`pet/${id}`);
    return response.data;
  }
}
