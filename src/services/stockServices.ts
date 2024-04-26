import {faker} from "@faker-js/faker";



export const generateInventoryCakeData = (): Item => {

    const generatedInventoryProductData ={
        id: "001",
        name: "cake",
        numberOfItem:faker.number.int({ min: 100, max: 200 }),
    };
    
    return generatedInventoryProductData;


   
}
export const generateInventoryCookiesData = (): Item => {

    const generatedInventoryProductData ={
        id: "002",
        name: "cookies",
        numberOfItem:faker.number.int({ min: 100, max: 200 }),
    };
    
    return generatedInventoryProductData;
}
export const generateInventoryBrowniesData = (): Item => {

    const generatedInventoryProductData ={
        id: "002",
        name: "brownies",
        numberOfItem:faker.number.int({ min: 100, max: 200 }),
    };
    
    return generatedInventoryProductData;
   
}