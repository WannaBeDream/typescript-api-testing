import axios from "axios";
import { strict as assert } from "assert";

describe("User can", () => {
  it("receaive pet by his id", async () => {
    let response: any;
    
    try {
      response = await axios.get("https://petstore.swagger.io/v2/pet/2");
    } catch (error) {
      console.error(error);
    }
    const body = response.data;

    assert(
      body.id === 2,
      `Expected response with id equlas 1, but got ${body.id}`
    );
  });
});
