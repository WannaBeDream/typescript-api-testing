import { strict as assert } from "assert";
import { definitions, operations } from "../.temp/types";
import { ApiClient } from "../api/client";


describe("Store", () => {

  it("should return his inventory, and correctly updates statuses", async () => {
    const inventory = await ApiClient.unauthorized().store.getInventory();
    assert(
      Object.keys(inventory).length > 0,
      `List of inventory statuses must not be empty`
    );

    await ApiClient.unauthorized().pet.addNew(createPetWithStatus("available"));

    // const inventoryWithAvailableAdded = await ApiClient.unauthorized().store.getInventory(); //
    // assert.equal(
    //   inventoryWithAvailableAdded.available,
    //   inventory.available + 1,
    //   `Available value in inventory must be increased by 1`
    // );

    // await ApiClient.unauthorized().pet.addNew(createPetWithStatus("pending"));

    // const inventoryWithPendingAdded = await ApiClient.unauthorized().store.getInventory();
    // assert.equal(
    //   inventoryWithPendingAdded.pending,
    //   inventory.pending + 1,
    //   `Pending value in inventory must be increased by 1`
    // );

    // await ApiClient.unauthorized().pet.addNew(createPetWithStatus("sold"));

    // const inventoryWithSoldAdded = await ApiClient.unauthorized().store.getInventory();
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
    name: "Dogsadasd",
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
