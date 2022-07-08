import axios from "axios";
import {URLSearchParams} from 'url';

export class PetController {
    instance:any = axios.create({
        baseURL: 'https://petstore.swagger.io/v2/pet/',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
      });
    
    async getById(id:string | string): Promise<any> {
        const response = await this.instance.get(id);
        return response.data;
    }
    async findByStatus(status:string | string[]): Promise<any> {
        const response = await this.instance.get(`findByStatus`, {params:new URLSearchParams({ status })}); // will be transformed into encoded path: findByStatus?status=available
        return response.data;
    }

}