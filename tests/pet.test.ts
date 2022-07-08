import axios from "axios";
import { strict as assert } from "assert";
import { URLSearchParams } from "url";
import { PetController } from "./../api/controller/pet.controller";

const pet = new PetController();

describe("User can", () => {

  it("receive pet by his id", async () => {
    const result = await pet.getById("3");
    assert(
      result.id === 3,
      `Expected response with id equlas 3, but got ${result.id}`
    );
  });

  it("find pets by pending status", async () => {
    const result = await pet.findByStatus("pending");
    assert(
      result.every((pet:any)=> {
        return pet.status === "pending"
      }),
      `Every pet in the response must contain pending status`
    );
  });
});
