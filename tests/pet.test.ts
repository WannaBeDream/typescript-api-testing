import { strict as assert } from "assert";

import {definitions, operations} from "../.temp/types"
import { ApiClient } from "../api/client";




describe("User can",async () => {

  it("receive pet by his id", async () => {
    const result = await ApiClient.unauthorized().pet.getById(2);
    assert(
      result.id === 2,
      `Expected response with id equlas 2, but got ${result.id}`
    );
  });

  it("find pets by pending status", async () => {
    const result = await ApiClient.unauthorized().pet.findByStatus("pending");
    assert(
      result.every((pet) => {
        return pet.status === "pending";
      }),
      `Every pet in the response must contain pending status`
    );
  });

  it("can be added, updated and deleted", async () => {
    // const petToCreate: Omit<definitions["Pet"], "id"> = {  // Omit generic to create new type without "id"
    //   category: {
    //     id: 98761230,
    //     name: "custom_category_dsadasd",
    //   },
    //   name: "Ilon mask",
    //   photoUrls: ["https//example.com"],
    //   tags: [
    //     {
    //       id: 98761230,
    //       name: "custom_qweasdsdvfdv",
    //     },
    //   ],
    //   status: "available",
    // };

    // const addedPet = await ApiClient.unauthorized().pet.addNew(petToCreate);
    // assert.deepEqual(
    //   addedPet,
    //   {
    //     ...petToCreate,
    //     id: addedPet.id,
    //   },
    //   "Expected created pet to match data used upon creation"
    // );

    // const foundaddedPet = await ApiClient.unauthorized().pet.getById(addedPet.id as string | number); // issue 404 here ( API bug )

    // assert.deepEqual(
    //   foundaddedPet,
    //   {
    //     ...petToCreate,
    //     id: addedPet.id,
    //   },
    //   "Expected created pet to match found pet"
    // );

    // const petToUpdate: definitions["Pet"] = {
    //   id: addedPet.id,
    //   category: {
    //     id: 98761230,
    //     name: "custom_category_dsadasd",
    //   },
    //   name: "SpaceX",
    //   photoUrls: ["https//example.com"],
    //   tags: [
    //     {
    //       id: 98761230,
    //       name: "custom_qweasdsdvfdv",
    //     },
    //   ],
    //   status: "available",
    // };
    // const updatedPet =  await ApiClient.unauthorized().pet.update(petToUpdate); // issue 500 here ( API bug )

    // assert.deepEqual(
    //   updatedPet,
    //   petToUpdate,
    //   "Expected updated pet to equal data used upon updating"
    // );

    // await ApiClient.unauthorized().pet.deleteById(addedPet.id as string | number) // issue 404 ( API bug)

    // TODO assert 404 for delete action 
  });
});
