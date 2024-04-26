import {faker} from "@faker-js/faker";



export const generateCakeData = (): ProductData => {

    const generatedProductData ={
        product:"cake",
        ingredient: "strawberry",
        calories: faker.number.int({ min: 100, max: 200 }),
        servings: faker.number.int({ min: 1, max: 3 }),
        weight: faker.number.int({ min: 100, max: 200 }),
        price: faker.number.int({ min: 3, max: 8}),
    };
    //storeProductData(generatedProductData).catch(console.error);
    return generatedProductData;

   
}
export const generateCookiesData = (): ProductData => {

    const generatedProductData ={
        product:"cookies",
        ingredient: "chocolate",
        calories: faker.number.int({ min: 100, max: 200 }),
        servings: faker.number.int({ min: 1, max: 3 }),
        weight: faker.number.int({ min: 100, max: 200 }),
        price: faker.number.int({ min: 3, max: 8}),
    };
    //storeProductData(generatedProductData).catch(console.error);
    return generatedProductData;
   
}
export const generateBrowniesData = (): ProductData => {

    const generatedProductData ={
        product:"brownies",
        ingredient: "chocolate",
        calories: faker.number.int({ min: 100, max: 200 }),
        servings: faker.number.int({ min: 1, max: 3 }),
        weight: faker.number.int({ min: 50, max: 100 }),
        price: faker.number.int({ min: 2, max: 5}),
    };
    //storeProductData(generatedProductData).catch(console.error);
    return generatedProductData;
   
}