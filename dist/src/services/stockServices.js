import { faker } from "@faker-js/faker";
export const generateInventoryCakeData = () => {
    const generatedInventoryProductData = {
        id: "001",
        name: "cake",
        numberOfItem: faker.number.int({ min: 100, max: 200 }),
    };
    return generatedInventoryProductData;
};
export const generateInventoryCookiesData = () => {
    const generatedInventoryProductData = {
        id: "002",
        name: "cookies",
        numberOfItem: faker.number.int({ min: 100, max: 200 }),
    };
    return generatedInventoryProductData;
};
export const generateInventoryBrowniesData = () => {
    const generatedInventoryProductData = {
        id: "002",
        name: "brownies",
        numberOfItem: faker.number.int({ min: 100, max: 200 }),
    };
    return generatedInventoryProductData;
};
//# sourceMappingURL=stockServices.js.map