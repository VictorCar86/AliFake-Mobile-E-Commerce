// const lastArray = [
//     {
//         "__typename": "CLETempoWM_GLASSMobileNewCategoryListConfigsCategories",
//         "name": "Easter",
//         "image": {
//             "__typename": "TempoCommonImage",
//             "alt": "Easter",
//             "clickThrough": {
//                 "__typename": "TempoCommonClickThrough",
//                 "type": "url",
//                 "value": "walmart://shop/easter"
//             },
//             "src": "https://i5.walmartimages.com/dfw/4ff9c6c9-b958/k2-_af086f6c-fe73-4587-af4f-ba807076f177.v1.jpg"
//         },
//         "categoryLink": null
//     },
//     {
//         "__typename": "CLETempoWM_GLASSMobileNewCategoryListConfigsCategories",
//         "name": "Black History Month",
//         "image": {
//             "__typename": "TempoCommonImage",
//             "alt": "Black History Month",
//             "clickThrough": {
//                 "__typename": "TempoCommonClickThrough",
//                 "type": "url",
//                 "value": "walmart://cp/5486926?povid=AppNavigation_BlackHistoryMonth"
//             },
//             "src": "https://i5.walmartimages.com/dfw/4ff9c6c9-e317/k2-_69a1c72f-955b-44b2-972c-811bf69b6399.v1.png"
//         },
//         "categoryLink": null
//     },
// ];

const categoriesList = [
    {
      "name": "Deals & Featured Shops",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-d810/k2-_db3e536c-cac1-47d5-b081-782cab18c3e9.v1.jpg",
      "deptId": "1085632"
    },
    {
      "name": "Easter",
      "imageSrc": "https://imgs.search.brave.com/EvLjiqmuwhYdbpkt4SlThmp3OkVhF4p4S0I0-_XoCLY/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvY2hyaXN0bWFz/LWljb25zLXJvdW5k/ZWQvMTEwL0Vhc3Rl/ci01MTIucG5n",
      "extraStyle": "p-[9%]",
      "deptId": null
    },
    {
      "name": "Grocery",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-546b/k2-_7c46234d-04a1-43e7-9c73-623fd9646d69.v1.jpg",
      "deptId": "976759"
    },
    {
      "name": "Home, Furniture & Appliances",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-eb20/k2-_99095db8-5460-4f49-a042-698f717ffdfe.v1.jpg",
      "deptId": "4044"
    },
    {
      "name": "Electronics",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-15b3/k2-_4fa31bf6-e435-433a-ac32-f7a9464f6524.v1.jpg",
      "deptId": "3944"
    },
    {
      "name": "Clothing, Shoes & Accessories",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-7f20/k2-_a94481c7-8750-484e-8bed-6a379700bd62.v1.jpg",
      "deptId": "5438"
    },
    {
      "name": "Auto & Tires",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-f0fc/k2-_4bd6a208-ebae-4af8-85c7-632f10896ed8.v1.jpg",
      "deptId": "91083"
    },
    {
      "name": "Patio & Garden",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-44e4/k2-_4dff9c30-25af-434f-bace-82b130d13b20.v1.jpg",
      "deptId": "5428"
    },
    {
      "name": "Beauty",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-8223/k2-_274f1d5e-1348-43d3-8506-16c4f270293a.v1.jpg",
      "deptId": "1085666"
    },
    {
      "name": "Baby",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-1a86/k2-_be7dc567-eb9b-4ac6-a287-06ab74988bf9.v1.jpg",
      "deptId": "5427"
    },
    {
      "name": "Pets",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-3ae1/k2-_1f77bec1-cdca-4c9c-8957-8676a5326a94.v1.jpg",
      "deptId": "5440"
    },
    {
      "name": "Toys & Games",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-cb27/k2-_d69e6be6-47ad-4df4-9ae0-26a9f75a8968.v1.jpg",
      "deptId": "4171"
    },
    {
      "name": "Personal Care",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-98de/k2-_a25d429a-eb93-4472-a609-f13b476d07f3.v1.jpg",
      "deptId": "1005862"
    },
    {
      "name": "Household Essentials",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-a349/k2-_544925b8-0156-4561-92cc-8d72a1a92dc0.v1.jpg",
      "deptId": "1115193"
    },
    {
      "name": "Pharmacy, Health & Wellness",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-3ee7/k2-_5e9ffd2b-79b4-40d5-a860-7228b9cebf5b.v1.jpg",
      "deptId": "976760"
    },
    {
      "name": "Home Improvement",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-5ec0/k2-_9a20fb14-f002-4a39-be28-8dd2d0e31bb9.v1.jpg",
      "deptId": "1072864"
    },
    {
      "name": "Sports & Outdoors",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-b7c3/k2-_6c465eb1-7bee-4635-b907-d5542c5327d3.v1.jpg",
      "deptId": "4125"
    },
    {
      "name": "Arts, Crafts, Sewing & Party Supplies",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-cc92/k2-_90ea54ef-0382-48fb-86b8-0a6413542848.v1.jpg",
      "deptId": "1334134"
    },
    {
      "name": "Office Supplies",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-9159/k2-_d12f18be-78a0-4847-a7aa-ed45980bcaa3.v1.jpg",
      "deptId": "1229749"
    },
    {
      "name": "Video Games",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-b889/k2-_e241b344-353d-4b2e-aa6d-dff719667895.v1.jpg",
      "deptId": "2636"
    },
    {
      "name": "Music & Vinyl",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-8e66/k2-_4949b516-ae22-481a-b344-1b40f60a262e.v1.jpg",
      "deptId": "4104"
    },
    {
      "name": "Movies & TV Shows",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-faa7/k2-_f36a52d3-0e8a-4a56-85ff-97a271853676.v1.jpg",
      "deptId": "4096"
    },
    {
      "name": "Books",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-b3ee/k2-_00022c57-9d06-44fe-b098-e2f36b32a6ff.v1.jpg",
      "deptId": "3920"
    },
    {
      "name": "Industrial & Scientific",
      "imageSrc": "https://i5.walmartimages.com/dfw/4ff9c6c9-cc50/k2-_845fb53a-81fe-4c4d-a6a7-05498f664e30.v1.jpg",
      "deptId": "6197502"
    }
];

export default categoriesList;