import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { InventoryBrand, InventoryCategory, InventoryPagination, InventoryProduct, InventoryTag, InventoryVendor } from '../models/inventory.types';

@Injectable({
    providedIn: 'root'
})
export class InventoryService
{
  get brands$(): Observable<InventoryBrand[]>{
    return of([
        {
            "id": "e1789f32-9475-43e7-9256-451d2e3a2282",
            "name": "Benton",
            "slug": "benton"
        },
        {
            "id": "61d52c2a-8947-4a2c-8c35-f36baef45b96",
            "name": "Capmia",
            "slug": "capmia"
        },
        {
            "id": "f9987124-7ada-4b93-bef7-35280b3ddbd7",
            "name": "Lara",
            "slug": "lara"
        },
        {
            "id": "5913ee46-a497-41db-a118-ee506011529f",
            "name": "Premera",
            "slug": "premera"
        },
        {
            "id": "2c4d98d8-f334-4125-9596-862515f5526b",
            "name": "Zeon",
            "slug": "zeon"
        }
    ])
  }; 

  get categories$(): Observable<InventoryCategory[]>{
    return of([
        {
            "id": "b899ec30-b85a-40ab-bb1f-18a596d5c6de",
            "parentId": null,
            "name": "Mens",
            "slug": "mens"
        },
        {
            "id": "07986d93-d4eb-4de1-9448-2538407f7254",
            "parentId": null,
            "name": "Ladies",
            "slug": "ladies"
        },
        {
            "id": "ad12aa94-3863-47f8-acab-a638ef02a3e9",
            "parentId": null,
            "name": "Unisex",
            "slug": "unisex"
        }
    ])
  }

  get pagination$(): Observable<InventoryPagination>{
    return of({
        "length": 23,
        "size": 10,
        "page": 0,
        "lastPage": 3,
        "startIndex": 0,
        "endIndex": 9
    })
  }

  get products$(): Observable<InventoryProduct[]>{
    return of([
        {
            "id": "91d96e18-d3f5-4c32-a8bf-1fc525cb92c0",
            "category": "07986d93-d4eb-4de1-9448-2538407f7254",
            "name": "Benton Ladies Automatic Watch 40mm 5 ATM",
            "description": "Pariatur proident labore commodo consequat qui et. Ad labore fugiat consectetur ea magna dolore mollit consequat reprehenderit laborum ad mollit eiusmod. Esse laboris voluptate ullamco occaecat labore esse laboris enim ipsum aliquip ipsum. Ea ea proident eu enim anim mollit non consequat enim nulla.",
            "tags": [
                "3baea410-a7d6-4916-b79a-bdce50c37f95",
                "0fc39efd-f640-41f8-95a5-3f1d749df200",
                "8f868ddb-d4a2-461d-bc3b-d7c8668687c3",
                "2300ac48-f268-466a-b765-8b878b6e14a7",
                "b1286f3a-e2d0-4237-882b-f0efc0819ec3"
            ],
            "sku": "ADP-5745",
            "barcode": "8390590339828",
            "brand": "e1789f32-9475-43e7-9256-451d2e3a2282",
            "vendor": "05ebb527-d733-46a9-acfb-a4e4ec960024",
            "stock": 12,
            "reserved": 3,
            "cost": 442.61,
            "basePrice": 961,
            "taxPercent": 20,
            "price": 1153.2,
            "weight": 0.67,
            "thumbnail": "assets/images/apps/ecommerce/products/watch-05-thumb.jpg",
            "images": [
                "assets/images/apps/ecommerce/products/watch-05-01.jpg",
                "assets/images/apps/ecommerce/products/watch-05-02.jpg",
                "assets/images/apps/ecommerce/products/watch-05-03.jpg"
            ],
            "active": false
        },
        {
            "id": "3f34e2fb-95bf-4f61-be28-956d2c7e4eb2",
            "category": "b899ec30-b85a-40ab-bb1f-18a596d5c6de",
            "name": "Benton Mens Automatic Watch 44mm 5 ATM",
            "description": "Velit irure deserunt aliqua officia. Eiusmod quis sunt magna laboris aliquip non dolor consequat cupidatat dolore esse. Consectetur mollit officia laborum fugiat nulla duis ad excepteur do aliqua fugiat. Fugiat non laboris exercitation ipsum in incididunt.",
            "tags": [
                "167190fa-51b4-45fc-a742-8ce1b33d24ea",
                "0fc39efd-f640-41f8-95a5-3f1d749df200",
                "8837b93f-388b-43cc-851d-4ca8f23f3a61",
                "2300ac48-f268-466a-b765-8b878b6e14a7",
                "b1286f3a-e2d0-4237-882b-f0efc0819ec3"
            ],
            "sku": "ADH-1921",
            "barcode": "8808746892183",
            "brand": "e1789f32-9475-43e7-9256-451d2e3a2282",
            "vendor": "987dd10a-43b1-49f9-bfd9-05bb2dbc7029",
            "stock": 30,
            "reserved": 3,
            "cost": 390.63,
            "basePrice": 950,
            "taxPercent": 10,
            "price": 1045,
            "weight": 0.76,
            "thumbnail": null,
            "images": [
                "assets/images/apps/ecommerce/products/watch-03-01.jpg",
                "assets/images/apps/ecommerce/products/watch-03-02.jpg",
                "assets/images/apps/ecommerce/products/watch-03-03.jpg"
            ],
            "active": false
        },
        {
            "id": "d7a47d7c-4cdf-4319-bbaa-37ade38c622c",
            "category": "b899ec30-b85a-40ab-bb1f-18a596d5c6de",
            "name": "Benton Mens Chronograph Watch 44mm 10 ATM",
            "description": "Nulla enim reprehenderit proident ut Lorem laborum cillum eiusmod est ex anim. Nisi non non laboris excepteur ullamco elit do duis anim esse labore aliqua adipisicing velit. Deserunt magna exercitation cillum amet.",
            "tags": [
                "167190fa-51b4-45fc-a742-8ce1b33d24ea",
                "7d6dd47e-7472-4f8b-93d4-46c114c44533",
                "8837b93f-388b-43cc-851d-4ca8f23f3a61",
                "0b11b742-3125-4d75-9a6f-84af7fde1969",
                "b1286f3a-e2d0-4237-882b-f0efc0819ec3"
            ],
            "sku": "ATV-2569",
            "barcode": "8238990048137",
            "brand": "e1789f32-9475-43e7-9256-451d2e3a2282",
            "vendor": "987dd10a-43b1-49f9-bfd9-05bb2dbc7029",
            "stock": 36,
            "reserved": 2,
            "cost": 563.43,
            "basePrice": 1370,
            "taxPercent": 30,
            "price": 1781,
            "weight": 0.62,
            "thumbnail": "assets/images/apps/ecommerce/products/watch-06-thumb.jpg",
            "images": [
                "assets/images/apps/ecommerce/products/watch-06-01.jpg",
                "assets/images/apps/ecommerce/products/watch-06-02.jpg",
                "assets/images/apps/ecommerce/products/watch-06-03.jpg"
            ],
            "active": true
        },
        {
            "id": "ecf0b3df-38c3-45dc-972b-c509a3dc053e",
            "category": "b899ec30-b85a-40ab-bb1f-18a596d5c6de",
            "name": "Benton Mens Chronograph Watch 44mm 10 ATM",
            "description": "Esse culpa ut ullamco dolore quis adipisicing. Minim veniam quis magna officia non. In pariatur nostrud nisi eiusmod minim anim id. Commodo ex incididunt dolor ad id aliqua incididunt minim in Lorem reprehenderit. Commodo ullamco consectetur aliqua Lorem cupidatat esse veniam consectetur sint veniam duis commodo.",
            "tags": [
                "167190fa-51b4-45fc-a742-8ce1b33d24ea",
                "7d6dd47e-7472-4f8b-93d4-46c114c44533",
                "8837b93f-388b-43cc-851d-4ca8f23f3a61",
                "0b11b742-3125-4d75-9a6f-84af7fde1969",
                "b1286f3a-e2d0-4237-882b-f0efc0819ec3"
            ],
            "sku": "EAH-2563",
            "barcode": "8638426908385",
            "brand": "e1789f32-9475-43e7-9256-451d2e3a2282",
            "vendor": "987dd10a-43b1-49f9-bfd9-05bb2dbc7029",
            "stock": 35,
            "reserved": 5,
            "cost": 705.26,
            "basePrice": 1721,
            "taxPercent": 20,
            "price": 2065.2,
            "weight": 0.67,
            "thumbnail": "assets/images/apps/ecommerce/products/watch-07-thumb.jpg",
            "images": [
                "assets/images/apps/ecommerce/products/watch-07-01.jpg",
                "assets/images/apps/ecommerce/products/watch-07-02.jpg",
                "assets/images/apps/ecommerce/products/watch-07-03.jpg"
            ],
            "active": false
        },
        {
            "id": "5765080a-aaee-40b9-86be-c18b9d79c73c",
            "category": "ad12aa94-3863-47f8-acab-a638ef02a3e9",
            "name": "Benton Unisex Automatic Watch 40mm 10 ATM",
            "description": "Anim duis nisi ut ex amet reprehenderit cillum consequat pariatur ipsum elit voluptate excepteur non. Anim enim proident laboris pariatur mollit quis incididunt labore. Incididunt tempor aliquip ex labore ad consequat cillum est sunt anim dolor. Dolore adipisicing non nulla cillum Lorem deserunt. Nostrud incididunt amet sint velit.",
            "tags": [
                "8ec8f60d-552f-4216-9f11-462b95b1d306",
                "0fc39efd-f640-41f8-95a5-3f1d749df200",
                "8f868ddb-d4a2-461d-bc3b-d7c8668687c3",
                "0b11b742-3125-4d75-9a6f-84af7fde1969",
                "b1286f3a-e2d0-4237-882b-f0efc0819ec3"
            ],
            "sku": "ATH-6399",
            "barcode": "8881883828441",
            "brand": "e1789f32-9475-43e7-9256-451d2e3a2282",
            "vendor": "05ebb527-d733-46a9-acfb-a4e4ec960024",
            "stock": 17,
            "reserved": 5,
            "cost": 624.12,
            "basePrice": 1448,
            "taxPercent": 10,
            "price": 1592.8,
            "weight": 0.55,
            "thumbnail": "assets/images/apps/ecommerce/products/watch-08-thumb.jpg",
            "images": [
                "assets/images/apps/ecommerce/products/watch-08-01.jpg",
                "assets/images/apps/ecommerce/products/watch-08-02.jpg",
                "assets/images/apps/ecommerce/products/watch-08-03.jpg"
            ],
            "active": false
        },
        {
            "id": "7520f1b6-3c45-46ef-a4d5-881971212d1e",
            "category": "ad12aa94-3863-47f8-acab-a638ef02a3e9",
            "name": "Benton Unisex Automatic Watch 40mm 10 ATM",
            "description": "Esse nisi amet occaecat culpa aliqua est ad ea velit. Consectetur in voluptate sit pariatur eiusmod exercitation eu aute occaecat in duis. Voluptate consectetur eu commodo proident id sunt labore irure.",
            "tags": [
                "8ec8f60d-552f-4216-9f11-462b95b1d306",
                "0fc39efd-f640-41f8-95a5-3f1d749df200",
                "8f868ddb-d4a2-461d-bc3b-d7c8668687c3",
                "0b11b742-3125-4d75-9a6f-84af7fde1969",
                "b1286f3a-e2d0-4237-882b-f0efc0819ec3"
            ],
            "sku": "ATH-3064",
            "barcode": "8608510561856",
            "brand": "e1789f32-9475-43e7-9256-451d2e3a2282",
            "vendor": "998b0c07-abfd-4ba3-8de1-7563ef3c4d57",
            "stock": 25,
            "reserved": 2,
            "cost": 731.94,
            "basePrice": 1743,
            "taxPercent": 10,
            "price": 1917.3,
            "weight": 0.47,
            "thumbnail": "assets/images/apps/ecommerce/products/watch-12-thumb.jpg",
            "images": [
                "assets/images/apps/ecommerce/products/watch-12-01.jpg",
                "assets/images/apps/ecommerce/products/watch-12-02.jpg",
                "assets/images/apps/ecommerce/products/watch-12-03.jpg"
            ],
            "active": false
        },
        {
            "id": "8fcce528-d878-4cc8-99f7-bd3451ed5405",
            "category": "b899ec30-b85a-40ab-bb1f-18a596d5c6de",
            "name": "Capmia Mens Chronograph Watch 44mm 10 ATM",
            "description": "Velit nisi proident cupidatat exercitation occaecat et adipisicing nostrud id ex nostrud sint. Qui fugiat velit minim amet reprehenderit voluptate velit exercitation proident Lorem nisi culpa. Commodo quis officia officia eiusmod mollit aute fugiat duis quis minim culpa in. Exercitation laborum fugiat ex excepteur officia reprehenderit magna ipsum. Laboris dolore nostrud id labore sint consectetur aliqua tempor ea aute do.",
            "tags": [
                "167190fa-51b4-45fc-a742-8ce1b33d24ea",
                "7d6dd47e-7472-4f8b-93d4-46c114c44533",
                "8837b93f-388b-43cc-851d-4ca8f23f3a61",
                "0b11b742-3125-4d75-9a6f-84af7fde1969",
                "b1286f3a-e2d0-4237-882b-f0efc0819ec3"
            ],
            "sku": "EAP-7752",
            "barcode": "8866355574164",
            "brand": "61d52c2a-8947-4a2c-8c35-f36baef45b96",
            "vendor": "987dd10a-43b1-49f9-bfd9-05bb2dbc7029",
            "stock": 37,
            "reserved": 4,
            "cost": 395.37,
            "basePrice": 839,
            "taxPercent": 30,
            "price": 1090.7,
            "weight": 0.62,
            "thumbnail": "assets/images/apps/ecommerce/products/watch-04-thumb.jpg",
            "images": [
                "assets/images/apps/ecommerce/products/watch-04-01.jpg",
                "assets/images/apps/ecommerce/products/watch-04-02.jpg",
                "assets/images/apps/ecommerce/products/watch-04-03.jpg"
            ],
            "active": true
        },
        {
            "id": "7eb7c859-1347-4317-96b6-9476a7e2ba3c",
            "category": "b899ec30-b85a-40ab-bb1f-18a596d5c6de",
            "name": "Capmia Mens Chronograph Watch 44mm 5 ATM",
            "description": "Consequat esse in culpa commodo anim. Et ullamco anim amet est. Sunt dolore ex occaecat officia anim. In sit minim laborum nostrud. Consequat ex do velit voluptate do exercitation est adipisicing quis velit.",
            "tags": [
                "167190fa-51b4-45fc-a742-8ce1b33d24ea",
                "7d6dd47e-7472-4f8b-93d4-46c114c44533",
                "8837b93f-388b-43cc-851d-4ca8f23f3a61",
                "2300ac48-f268-466a-b765-8b878b6e14a7",
                "b1286f3a-e2d0-4237-882b-f0efc0819ec3"
            ],
            "sku": "ETV-2425",
            "barcode": "8346201275534",
            "brand": "61d52c2a-8947-4a2c-8c35-f36baef45b96",
            "vendor": "998b0c07-abfd-4ba3-8de1-7563ef3c4d57",
            "stock": 30,
            "reserved": 5,
            "cost": 450.18,
            "basePrice": 1036,
            "taxPercent": 30,
            "price": 1346.8,
            "weight": 0.61,
            "thumbnail": "assets/images/apps/ecommerce/products/watch-01-thumb.jpg",
            "images": [
                "assets/images/apps/ecommerce/products/watch-01-01.jpg",
                "assets/images/apps/ecommerce/products/watch-01-02.jpg",
                "assets/images/apps/ecommerce/products/watch-01-03.jpg"
            ],
            "active": true
        },
        {
            "id": "d7d1d6df-e91f-4c53-982a-2720bc2b4cdd",
            "category": "ad12aa94-3863-47f8-acab-a638ef02a3e9",
            "name": "Capmia Unisex Automatic Watch 40mm 10 ATM",
            "description": "Voluptate consectetur nisi aliquip cupidatat sunt labore. Adipisicing voluptate tempor sunt eu irure cupidatat laboris. Enim aliquip aute sit non laborum Lorem in enim duis eu deserunt. Laboris magna irure aute ut proident fugiat laborum aliquip tempor nostrud id. Et esse cupidatat sunt ullamco reprehenderit enim dolore ea in do esse esse id.",
            "tags": [
                "8ec8f60d-552f-4216-9f11-462b95b1d306",
                "0fc39efd-f640-41f8-95a5-3f1d749df200",
                "8f868ddb-d4a2-461d-bc3b-d7c8668687c3",
                "0b11b742-3125-4d75-9a6f-84af7fde1969",
                "b1286f3a-e2d0-4237-882b-f0efc0819ec3"
            ],
            "sku": "EAV-4030",
            "barcode": "8545771786193",
            "brand": "61d52c2a-8947-4a2c-8c35-f36baef45b96",
            "vendor": "998b0c07-abfd-4ba3-8de1-7563ef3c4d57",
            "stock": 23,
            "reserved": 3,
            "cost": 538.72,
            "basePrice": 1213,
            "taxPercent": 10,
            "price": 1334.3,
            "weight": 0.75,
            "thumbnail": "assets/images/apps/ecommerce/products/watch-23-thumb.jpg",
            "images": [
                "assets/images/apps/ecommerce/products/watch-23-01.jpg",
                "assets/images/apps/ecommerce/products/watch-23-02.jpg",
                "assets/images/apps/ecommerce/products/watch-23-03.jpg"
            ],
            "active": true
        },
        {
            "id": "a71f9b10-e884-4aad-9810-29fe10ce6d42",
            "category": "07986d93-d4eb-4de1-9448-2538407f7254",
            "name": "Lara Ladies Chronograph Watch 40mm 5 ATM",
            "description": "Deserunt non deserunt ut do labore cupidatat duis veniam in non adipisicing officia esse id. Adipisicing Lorem sint excepteur culpa labore consequat incididunt nulla minim amet. Sint do et fugiat laborum exercitation reprehenderit ut non nostrud occaecat nisi et qui dolore. Amet eiusmod nulla est officia ad magna cillum non dolor ullamco officia incididunt.",
            "tags": [
                "3baea410-a7d6-4916-b79a-bdce50c37f95",
                "7d6dd47e-7472-4f8b-93d4-46c114c44533",
                "8f868ddb-d4a2-461d-bc3b-d7c8668687c3",
                "2300ac48-f268-466a-b765-8b878b6e14a7",
                "b1286f3a-e2d0-4237-882b-f0efc0819ec3"
            ],
            "sku": "AAP-4902",
            "barcode": "8847387136582",
            "brand": "f9987124-7ada-4b93-bef7-35280b3ddbd7",
            "vendor": "987dd10a-43b1-49f9-bfd9-05bb2dbc7029",
            "stock": 40,
            "reserved": 3,
            "cost": 525.3,
            "basePrice": 1303,
            "taxPercent": 10,
            "price": 1433.3,
            "weight": 0.69,
            "thumbnail": "assets/images/apps/ecommerce/products/watch-16-thumb.jpg",
            "images": [
                "assets/images/apps/ecommerce/products/watch-16-01.jpg",
                "assets/images/apps/ecommerce/products/watch-16-02.jpg",
                "assets/images/apps/ecommerce/products/watch-16-03.jpg"
            ],
            "active": false
        }
    ]);
  }

  get tags$(): Observable<InventoryTag[]> {
    return of([
        {
            "id": "167190fa-51b4-45fc-a742-8ce1b33d24ea",
            "title": "mens"
        },
        {
            "id": "3baea410-a7d6-4916-b79a-bdce50c37f95",
            "title": "ladies"
        },
        {
            "id": "8ec8f60d-552f-4216-9f11-462b95b1d306",
            "title": "unisex"
        },
        {
            "id": "8837b93f-388b-43cc-851d-4ca8f23f3a61",
            "title": "44mm"
        },
        {
            "id": "8f868ddb-d4a2-461d-bc3b-d7c8668687c3",
            "title": "40mm"
        },
        {
            "id": "2300ac48-f268-466a-b765-8b878b6e14a7",
            "title": "5 ATM"
        },
        {
            "id": "0b11b742-3125-4d75-9a6f-84af7fde1969",
            "title": "10 ATM"
        },
        {
            "id": "0fc39efd-f640-41f8-95a5-3f1d749df200",
            "title": "automatic"
        },
        {
            "id": "7d6dd47e-7472-4f8b-93d4-46c114c44533",
            "title": "chronograph"
        },
        {
            "id": "b1286f3a-e2d0-4237-882b-f0efc0819ec3",
            "title": "watch"
        }
    ]);
  }

  get vendors$(): Observable<InventoryVendor[]>{
    return of([
        {
            "id": "987dd10a-43b1-49f9-bfd9-05bb2dbc7029",
            "name": "Evel",
            "slug": "evel"
        },
        {
            "id": "998b0c07-abfd-4ba3-8de1-7563ef3c4d57",
            "name": "Mivon",
            "slug": "mivon"
        },
        {
            "id": "05ebb527-d733-46a9-acfb-a4e4ec960024",
            "name": "Neogen",
            "slug": "neogen"
        }
    ])
  }

  //------------------------------------
  deleteProduct(id: any) {
    return of();
  }

  updateProduct(id: any, product: any) {
    return of();
  }

  createProduct() {
    return of();
  }

  deleteTag(id: string) {
    return of();
  }
  
  updateTag(id: string, tag: InventoryTag) {
    return of();
  }
  
  createTag(tag: { title: string; }) {
    return of();
  }

  
  getProductById(productId: string) {
    return of();
  }

  
  getProducts(page: number = 0, size: number = 10, sort: string = 'name', order: 'asc' | 'desc' | '' = 'asc', search: string = ''):
        Observable<{ pagination: InventoryPagination; products: InventoryProduct[] }>
    {
        return of();
        // return this._httpClient.get<{ pagination: InventoryPagination; products: InventoryProduct[] }>('api/apps/ecommerce/inventory/products', {
        //     params: {
        //         page: '' + page,
        //         size: '' + size,
        //         sort,
        //         order,
        //         search
        //     }
        // }).pipe(
        //     tap((response) => {
        //         // console.log('response.products: ', response.products);
        //         // this._pagination.next(response.pagination);
        //         // this._products.next(response.products);
        //     })
        // );
    }
}
