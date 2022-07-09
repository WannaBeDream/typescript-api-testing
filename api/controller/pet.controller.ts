import axios from "axios";
import { URLSearchParams } from "url";
import { definitions, operations } from "../../.temp/types";
import { validateBodyBySchemas } from "../requestInterceptors";

export class PetController {
  instance: any = axios.create({
    baseURL: "https://petstore.swagger.io/v2/pet/",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });
  useSchemaValidation() {
    this.instance.interceptors.response.use((value: any) => {
      return validateBodyBySchemas(value);
    });
  }

  async getById(
    id: number | string
  ): Promise<operations["getPetById"]["responses"]["200"]["schema"]> {

    const response = await this.instance.get(`${id}`);
    return response.data;
  }
  async findByStatus(
    status: string | string[]
  ): Promise<operations["findPetsByStatus"]["responses"]["200"]["schema"]> {
    const response = await this.instance.get(`findByStatus`, {
      params: new URLSearchParams({ status }),
    });
    return response.data;
  }

  async addNew(
    pet: Omit<definitions["Pet"], "id">
  ): Promise<definitions["Pet"]> {
    const response = await this.instance.post(``, pet);

    return response.data;
  }
  async update(pet: definitions["Pet"]): Promise<definitions["Pet"]> {
    const response = await this.instance.put(``, pet);

    return response.data;
  }

  async deleteById(id: string | number): Promise<definitions["ApiResponse"]> {
    const response = await this.instance.delete(`${id}`);

    return response.data;
  }
}
