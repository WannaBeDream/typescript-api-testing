import { strict as assert } from "assert";
import { PetController } from "./../api/controller/pet.controller";
import { StoreController } from "./../api/controller/store.controller";
import { definitions, operations } from "../.temp/types";

const pet = new PetController();
const store = new StoreController();
pet.useSchemaValidation()
store.useSchemaValidation()

describe("Store", () => {

  it("should return his inventory, and correctly updates statuses", async () => {
    // const inventory = await store.getInventory();
    // assert(
    //   Object.keys(inventory).length > 0,
    //   `List of inventory statuses must not be empty`
    // );

    // await pet.addNew(createPetWithStatus("available"));

    // const inventoryWithAvailableAdded = await store.getInventory(); //
    // assert.equal(
    //   inventoryWithAvailableAdded.available,
    //   inventory.available + 1,
    //   `Available value in inventory must be increased by 1`
    // );

    // await pet.addNew(createPetWithStatus("pending"));

    // const inventoryWithPendingAdded = await store.getInventory();
    // assert.equal(
    //   inventoryWithPendingAdded.pending,
    //   inventory.pending + 1,
    //   `Pending value in inventory must be increased by 1`
    // );

    // await pet.addNew(createPetWithStatus("sold"));

    // const inventoryWithSoldAdded = await store.getInventory();
    // assert.equal(
    //   inventoryWithSoldAdded.sold,
    //   inventory.sold + 1,
    //   `Sold value in inventory must be increased by 1`
    // );
  });
});

function createPetWithStatus(status: definitions["Pet"]["status"]) {
  return {
    category: {
      id: 0,
      name: "custom_category_dsadasdd",
    },
    name: "Dog",
    photoUrls: ["https//example.com"],
    tags: [
      {
        id: 0,
        name: "custom_qweasddsdvfdv",
      },
    ],
    status,
  };
}
