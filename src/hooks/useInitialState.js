import { useState } from 'react';
const axios = require("axios");

const initialState = {
    bestSalesData: {
        docs: [],
        hasNextPage: false,
        nextPage: 1,
        page: 0,
    },
    newOffersData: [],
    productInfo: {
        "app_sale_price": 13.65,
        "app_sale_price_currency": "USD",
        "commission_rate": "7.0%",
        "discount": "25%",
        "evaluate_rate": "95.5%",
        "first_level_category_id": 6,
        "first_level_category_name": "Home Appliances",
        "hot_product_commission_rate": "8.0%",
        "lastest_volume": 13,
        "original_price": "22.83",
        "original_price_currency": "USD",
        "product_detail_url": "//www.aliexpress.com/item/3256801373733209.html",
        "product_id": "1005001560047961",
        "product_main_image_url": "https://ae04.alicdn.com/kf/H3e5c495ceea145a990716511a36fc3a4d.jpg",
        "product_small_image_urls": {
            "string": [
                "https://ae01.alicdn.com/kf/H3e5c495ceea145a990716511a36fc3a4d/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg",
                "https://ae01.alicdn.com/kf/H13a15eaaccdc44878c2409d4bfb1a739n/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg",
                "https://ae01.alicdn.com/kf/H535a416d23f141eb944eddfe3e6b0779k/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg",
                "https://ae01.alicdn.com/kf/Hfd015fd119de4c749fe3ac3efa75b00ei/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg",
                "https://ae01.alicdn.com/kf/H573e4cd7b45f4bf6b1258da77c8c06748/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg",
                "https://ae01.alicdn.com/kf/H0a1001b02a1a4eb09d80a0a3be5852ffH/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg"
            ]
        },
        "product_title": "2500W Floating Electric Water Heater Boiler Heating Portable Immersion Reheater Suspension Bathroom Swimming Pool",
        "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIHw41xmjinjwRtxZIpRDx0gOJy2CJx2ek9ORd8kfGhreSnGbKaXYGIWkoCMpvNN7BAfOF5HTZFaOlcEeUHUWts2LIsKSx40sCIh73WDvbcJgQb1OWD9BktxzXQCr7szdKXzLyjH6MTKMGulCTxAdEVV4QG1hxabjgpuaZ3fdbAOB9EfF7Q6OsSL4CR7jZhW57sNu6aJr5s6yFKFdDPRqdEwLBltSLk6bsjxGrF8uahTgwxooCUgZJDTC9yAwXgMm5t6IwHtuxoc4nmS1WwEhVJvs6hcECe17HA7vUDdvtlehcxghlL0hDovaThnPF5S90noKd3rW5uGUkPq4c6CwC5KFVrZXvTzJbR9J1vabkC92mzQLvieuc9RvUJ5VTNLaelH14hCRLcp1M1dZzliNO1qPpFd5KD1RksMwTiphKJAIUdv0aJHt5kHCzFKVM7lMtq2eg9AcZYkNxbkaPe5LRBzNe4h9G2rx6wp967B7HIYQcyZJnMLvWhqEEDkXbFvnDXU68u38lzDVwMVqvhzOaGUb4er3csfdJWGCsAbme5d17Z35tnensHxWOmpnnzHox4sIRKfoGYff09YOiMsHiKFWJF1mlLHIMgcE76TEItq2wSRjIMI9pxvIir",
        "relevant_market_commission_rate": "3.0%",
        "sale_price": "17.12",
        "sale_price_currency": "USD",
        "second_level_category_id": 60702,
        "second_level_category_name": "Major Appliances",
        "shop_id": 1101343461,
        "shop_url": "//www.aliexpress.com/store/1101343461",
        "target_app_sale_price": "17.12",
        "target_app_sale_price_currency": "USD",
        "target_original_price": "22.83",
        "target_original_price_currency": "USD",
        "target_sale_price": "17.12",
        "target_sale_price_currency": "USD",
        "price_trend": -1.325648414985593,
        "review_trend": 12.866817155756216,
        "sale_trend": -40.74074074074074,
        "discount_rate": 75,
        "skuProperties": [
            {
                "isShowTypeColor": false,
                "order": 3,
                "showType": "none",
                "showTypeColor": false,
                "skuPropertyId": 200009209,
                "skuPropertyName": "PlugType",
                "skuPropertyValues": [
                    {
                        "propertyValueDisplayName": "EUPlug",
                        "propertyValueId": 201484777,
                        "propertyValueIdLong": 201484777,
                        "propertyValueName": "EUPlug",
                        "skuPropertyTips": "EUPlug",
                        "skuPropertyValueShowOrder": 2,
                        "skuPropertyValueTips": "EUPlug"
                    },
                    {
                        "propertyValueDisplayName": "UKPlug",
                        "propertyValueId": 201484778,
                        "propertyValueIdLong": 201484778,
                        "propertyValueName": "UKPlug",
                        "skuPropertyTips": "UKPlug",
                        "skuPropertyValueShowOrder": 2,
                        "skuPropertyValueTips": "UKPlug"
                    },
                    {
                        "propertyValueDisplayName": "AUPlug",
                        "propertyValueId": 201484779,
                        "propertyValueIdLong": 201484779,
                        "propertyValueName": "AUPlug",
                        "skuPropertyTips": "AUPlug",
                        "skuPropertyValueShowOrder": 2,
                        "skuPropertyValueTips": "AUPlug"
                    }
                ]
            }
        ],
        "skuList": [
            {
                "freightExt": "{\"itemScene\":\"default\",\"p0\":\"12000016593615824\",\"p1\":\"13.74\",\"p10\":[132402,128160,86914,218119,103060,86884,84809,221435],\"p3\":\"USD\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{\\\"scItemId\\\":\\\"666123302005\\\"}\",\"p9\":\"US$13.74\"}",
                "skuAttr": "200009209:201484779",
                "skuId": 12000016593615824,
                "skuIdStr": "12000016593615824",
                "skuPropIds": "201484779",
                "skuVal": {
                    "availQuantity": 3,
                    "bulkOrder": 5,
                    "discount": "25",
                    "inventory": 3,
                    "isActivity": true,
                    "optionalWarrantyPrice": [],
                    "skuActivityAmount": {
                        "currency": "USD",
                        "formatedAmount": "US$13.74",
                        "value": 13.74
                    },
                    "skuAmount": {
                        "currency": "USD",
                        "formatedAmount": "US$18.32",
                        "value": 18.32
                    },
                    "skuCalPrice": "18.32"
                }
            },
            {
                "freightExt": "{\"itemScene\":\"default\",\"p0\":\"12000016593615823\",\"p1\":\"14.74\",\"p10\":[132402,128160,86914,218119,103060,84809,221435],\"p3\":\"USD\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p9\":\"US$14.74\"}",
                "skuAttr": "200009209:201484778",
                "skuId": 12000016593615824,
                "skuIdStr": "12000016593615823",
                "skuPropIds": "201484778",
                "skuVal": {
                    "availQuantity": 0,
                    "bulkOrder": 5,
                    "discount": "25",
                    "inventory": 0,
                    "isActivity": true,
                    "optionalWarrantyPrice": [],
                    "skuActivityAmount": {
                        "currency": "USD",
                        "formatedAmount": "US$14.74",
                        "value": 14.74
                    },
                    "skuAmount": {
                        "currency": "USD",
                        "formatedAmount": "US$19.66",
                        "value": 19.66
                    },
                    "skuCalPrice": "19.66"
                }
            },
            {
                "freightExt": "{\"itemScene\":\"default\",\"p0\":\"12000016593615822\",\"p1\":\"13.65\",\"p10\":[132402,128160,86914,218119,103060,86884,84809,221435],\"p3\":\"USD\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{\\\"scItemId\\\":\\\"666122774939\\\"}\",\"p9\":\"US$13.65\"}",
                "skuAttr": "200009209:201484777",
                "skuId": 12000016593615822,
                "skuIdStr": "12000016593615822",
                "skuPropIds": "201484777",
                "skuVal": {
                    "availQuantity": 10,
                    "bulkOrder": 5,
                    "discount": "25",
                    "inventory": 10,
                    "isActivity": true,
                    "optionalWarrantyPrice": [],
                    "skuActivityAmount": {
                        "currency": "USD",
                        "formatedAmount": "US$13.65",
                        "value": 13.65
                    },
                    "skuAmount": {
                        "currency": "USD",
                        "formatedAmount": "US$18.20",
                        "value": 18.2
                    },
                    "skuCalPrice": "18.20"
                }
            }
        ],
        "specs": [
            {
                "attrName": "BrandName",
                "attrValue": "MEXI"
            },
            {
                "attrName": "Origin",
                "attrValue": "MainlandChina"
            },
            {
                "attrName": "Storage/Tankless",
                "attrValue": "Instant/Tankless"
            },
            {
                "attrName": "Capacity",
                "attrValue": "-"
            },
            {
                "attrName": "Power(W)",
                "attrValue": "2100-5000W"
            },
            {
                "attrName": "Voltage(V)",
                "attrValue": "220V"
            },
            {
                "attrName": "Installation",
                "attrValue": "Freestanding"
            },
            {
                "attrName": "Certification",
                "attrValue": "NONE"
            },
            {
                "attrName": "Style",
                "attrValue": "Vertical"
            },
            {
                "attrName": "ControlMode",
                "attrValue": "IntelligentControl"
            },
            {
                "attrName": "HousingMaterial",
                "attrValue": "Stainlesssteel"
            },
            {
                "attrName": "Timetomarket",
                "attrValue": "2016"
            },
            {
                "attrName": "ModelNumber",
                "attrValue": "A6HB3TT202560-EU"
            },
            {
                "attrName": "Item",
                "attrValue": "InstantImmersionHeater"
            },
            {
                "attrName": "Ratedfrequency",
                "attrValue": "50Hz"
            },
            {
                "attrName": "OptionalPlug",
                "attrValue": "EUPlug/UKPlug/AUPlug"
            },
            {
                "attrName": "WireMaterial",
                "attrValue": "PVC+CoarsenedCopperWire"
            }
        ],
        "quantityObject": {
            "activity": true,
            "displayBulkInfo": true,
            "features": {},
            "i18nMap": {
                "LOT": "lot",
                "LOTS": "lots",
                "BUY_LIMIT": "{limit}{unit}atmostpercustomer",
                "QUANTITY": "Quantity",
                "OFF_OR_MORE": "{discount}%off({number}{unit}ormore)",
                "ONLY_QUANTITY_LEFT": "Only{availQuantity}left",
                "ADDTIONAL": "Additional",
                "QUANTITY_AVAILABLE": "{availQuantity}{unit}available"
            },
            "id": 0,
            "lot": false,
            "multiUnitName": "Pieces",
            "name": "QuantityModule",
            "oddUnitName": "piece",
            "purchaseLimitNumMax": 0,
            "skuBulkDiscount": 2,
            "skuBulkOrder": 5,
            "totalAvailQuantity": 13
        },
        "feedBackRating": {
            "averageStar": "5.0",
            "averageStarRage": "100.0",
            "display": true,
            "evarageStar": "5.0",
            "evarageStarRage": "100.0",
            "fiveStarNum": 1,
            "fiveStarRate": "100",
            "fourStarNum": 0,
            "fourStarRate": "0",
            "oneStarNum": 0,
            "oneStarRate": "0",
            "positiveRate": "100.0",
            "threeStarNum": 0,
            "threeStarRate": "0",
            "totalValidNum": 1,
            "trialReviewNum": 0,
            "twoStarNum": 0,
            "twoStarRate": "0"
        },
        "productCategoriesBreadcrumb": [
            {
                "cateId": 0,
                "name": "Home",
                "remark": "",
                "url": "//www.aliexpress.com/"
            },
            {
                "cateId": 0,
                "name": "AllCategories",
                "remark": "",
                "target": "AllCategories",
                "url": "//www.aliexpress.com/all-wholesale-products.html"
            },
            {
                "cateId": 6,
                "name": "HomeAppliances",
                "remark": "",
                "target": "HomeAppliances",
                "url": "//www.aliexpress.com/category/6/home-appliances.html"
            },
            {
                "cateId": 200217594,
                "name": "MajorAppliances",
                "remark": "",
                "target": "MajorAppliances",
                "url": "//www.aliexpress.com/category/200217594/major-appliances.html"
            },
            {
                "cateId": 100000054,
                "name": "WaterHeaters",
                "remark": "",
                "target": "WaterHeaters",
                "url": "//www.aliexpress.com/category/100000054/water-heaters.html"
            },
            {
                "cateId": 60702,
                "name": "ElectricWaterHeaters",
                "remark": "",
                "target": "ElectricWaterHeaters",
                "url": "//www.aliexpress.com/category/60702/electric-water-heaters.html"
            }
        ],
        "shop_name": "healthylive Store",
        "wishedCount": 183,
        "metadata": {
            "actionModule": {
                "addToCartUrl": "//shoppingcart.aliexpress.com/addToShopcart4Js.htm",
                "aeOrderFrom": "main_detail",
                "allowVisitorAddCart": true,
                "cartDetailUrl": "//shoppingcart.aliexpress.com/shopcart/shopcartDetail.htm",
                "categoryId": 60702,
                "comingSoon": false,
                "companyId": 246081151,
                "confirmOrderUrl": "//shoppingcart.aliexpress.com/order/confirm_order.htm",
                "features": {},
                "freightExt": "[{\"p1\":\"13.65\",\"p2\":\"14.74\",\"p3\":\"USD\",\"p4\":\"990000\",\"p5\":\"0\",\"itemScene\":\"default\",\"p6\":\"null\"}]",
                "i18nMap": {
                    "WISH_MAX_NOTICE": "Oops,itseemedyoualreadyreachedthelist’smaximum.",
                    "BUYER_ABLE": "Thisfeatureisonlyavailabletobuyers.",
                    "WISHLIST_SAVE_BUTTON": "Save",
                    "WISH_MOVE_TO_ANOTHER_LIST_TIPS": "Movetoanotherlist",
                    "ADD_X_MORE": "Congratulations!You'veearned<divclass=\"before-coin-count\"></div>{coinCount}coins.Youhave{number}chancestodaytocontinuetoearncoins.",
                    "COMING_SOON": "ComingSoon",
                    "SC_ADD_SUCC": "AnewitemhasbeenaddedtoyourShoppingCart.",
                    "WISHLIST_PUBLIC_NOTICE": "(Anyonecanseethislistandshareit)",
                    "WISH_DETAULT_LIST": "WishList",
                    "WISH_CREATE_LIST": "CreateaWishList",
                    "WL_ERROR": "Networkisbusy,pleasetryagain",
                    "WISH_NAME_ALREADY_USE": "ThisWishListnameisalreadyinuse.",
                    "WISH_REVISELIST": "EditYourList",
                    "SC_ADD_FAILED": "Failedtoadd,pleaserefreshthepageandre-clickthe\"AddtoCart\"",
                    "SC_HAVE": "Younowhave{{number}}itemsinyourShoppingCart.",
                    "ADD_TO_CART": "AddtoCart",
                    "WISH_CANCEL_WISHLIST": "Cancel",
                    "BUY_NOW": "BuyNow",
                    "WISH_SYSTEM_ERROR": "Oops,systemerror.Pleasetryagain.",
                    "SC_ADD_MAX": "Youcanadd{{number}}itemstocartatthemost.Pleaseremovesomeitemsbeforeaddingmore.",
                    "SC_VIEW": "ViewShoppingCart",
                    "WISH_YOUMAYLIKE": "Youmayalsolike",
                    "WISH_VIEW_WISH_LIST": "ViewWishList",
                    "SC_RECOMMEND": "BuyersWhoBoughtThisItemAlsoBought:",
                    "CONTINUE": "ContinueShopping",
                    "ADDED_TO": "Addedto{wishlist}",
                    "ORDER_NOW": "Ordernow",
                    "SELECT_TIP": "Pleaseselectallproductoptions",
                    "NO_LONGER_AVAILABLE": "Sorry,thisitemisnolongeravailable!",
                    "PREVIEW_PERIOD": "2019/3/2100:00:00GMT-0700,2019/3/2723:59:59GMT-0700",
                    "WISH_MAX_GROUP": "Sorry,youcan'tcreatemorewishlists",
                    "WISHLIST_PUBLIC_TIP": "Public"
                },
                "id": 0,
                "invalidBuyNow": false,
                "itemStatus": 0,
                "itemWished": false,
                "itemWishedCount": 183,
                "localSeller": false,
                "name": "ActionModule",
                "preSale": false,
                "productId": 3256801373733209,
                "rootCategoryId": 6,
                "showCoinAnim": false,
                "showShareHeader": true,
                "storeNum": 1101343461,
                "switchInfo": {
                    "skuUnavailableRevision": true
                },
                "totalAvailQuantity": 13
            },
            "aePlusModule": {
                "features": {},
                "i18nMap": {},
                "id": 0,
                "name": "AePlusModule"
            },
            "buyerProtectionModule": {
                "buyerProtection": {
                    "brief": "Moneybackguarantee",
                    "detailDescription": "",
                    "id": 2,
                    "name": "{day}-DayBuyerProtection",
                    "redirectUrl": "https://sale.aliexpress.com/v8Yr8f629D.htm",
                    "type": 1
                },
                "features": {},
                "i18nMap": {
                    "PLAZA_BUYER_PROTECTION_TITLE": "LocalReturn",
                    "PLAZA_BUYER_PROTECTION_TIP": "Disponesde15díasenlosquepuedesdevolverelartículopornosatisfacertusexpectativas,siemprequeseencuentreenperfectoestado,sinusaryconservetodaslasetiquetasyelembalajeoriginal",
                    "PLAZA_BUYER_PROTECTION_CONTENT": "15days"
                },
                "id": 0,
                "name": "BuyerProtectionModule"
            },
            "commonModule": {
                "activity": true,
                "categoryId": 60702,
                "crawler": false,
                "currencyCode": "USD",
                "features": {},
                "gagaDataSite": "en",
                "i18nMap": {},
                "id": 0,
                "name": "CommonModule",
                "plaza": false,
                "preSale": false,
                "productId": 3256801373733209,
                "productIdStr": "3256801373733209",
                "productTags": {},
                "reminds": [],
                "sellerAdminSeq": 238101085,
                "tradeCurrencyCode": "USD",
                "userCountryCode": "US",
                "userCountryName": "UnitedStates"
            },
            "couponModule": {
                "currencyCode": "USD",
                "features": {},
                "i18nMap": {
                    "GET_COUPONS": "Getcoupons",
                    "SCP_ERR_HAVE": "Sorry,youhavealreadygotthecouponfromthisstore!Usecouponnow!",
                    "OFF_ON": "{money1}offon{money2}",
                    "ORDER_OVER": "Ordersover",
                    "code52Title": "Sorry,therearenomorecouponsavailable.",
                    "GET_IT": "GetNow",
                    "GET_NOW": "GetNow",
                    "GET_MORE": "Getmore",
                    "systemError": "Oops,somethingwentwrong.Pleasetryagain.",
                    "OFF_PER": "{money1}offper{money2}",
                    "STORE_COUPON": "StoreCoupon",
                    "SHOP_COUPONE_TIME_START_END": "From{0}to{1}",
                    "NEW_USER_COUPON_ACQUIRE_FAIL_ALREADY_HAVE": "Sorry,youalreadyhaveaNewUserCoupon.",
                    "code50Title": "Sorry,thecouponcouldnotbeissued.Pleasetryagain.",
                    "NEW_USER_COUPON_ACQUIRE_FAIL_NOT_AVAILABLE_NOW": "Sorry,NewUserCouponsarenotavailablenow.",
                    "NEW_USER_COUPON_ACQUIRE_FAIL_GROUP_LIMIT": "Sorry,youhavethemaximumamountofNewUserCoupons.",
                    "code14Title": "You'vealreadycollectedtheseSelectCoupons.",
                    "NEW_USER_COUPON_ACQUIRE_FAIL_NOT_NEW_USER": "Sorry,onlynewusersareeligibletogetthiscoupon.",
                    "SHOP_PROMO_CODE_COPIED": "Promocodecopied!",
                    "ADDED": "Added",
                    "NEW_USER_COUPON_ACQUIRE_FAIL_SECURITY": "Toprotectthesecurityofyouraccount,pleaseuseanotherdevicetosignin.",
                    "SHOP_PROMO_CODE_TITLE": "Storepromocode",
                    "NEW_USER_COUPON_ACQUIRE_FAIL": "Oops,somethingwentwrong!Pleasetryagain.",
                    "NEW_USER_COUPON_ACQUIRE_FAIL_LIMIT_DAY": "Sorry,NewUserCouponsarenotavailabletoday.",
                    "NEW_USER_COUPON_ACQUIRE_FAIL_REGISTER_COUNTRY_LIMIT": "Pleasecheckthatthiscouponisredeemableinyourregisteredcountry.",
                    "SCP_ERR_NONE": "Sorry!Allofthesecouponshavebeenallocated.",
                    "NEW_USER_COUPON_ACQUIRE_FAIL_GRANT_ERROR": "Sorry,youfailedtogetthiscoupon.",
                    "code17Title": "Sorry,thiscouponisnolongeravailable.",
                    "SHOP_COUPONE_TIME_EXPIRES": "Expires{0}",
                    "SHOPPONG_CREDIT": "SHOPPONGCREDIT",
                    "EXCHANGE_MORE": "Exchangemore",
                    "NEW_USER_COUPON_ACQUIRE_FAIL_SYSTEM_ERROR": "Oops,somethingwentwrong!Pleasetryagain.",
                    "MY_BALANCE": "Balance",
                    "INSTANT_DISCOUNT": "Instantdiscount",
                    "EXCHANGE_NOW": "Exchangenow",
                    "CROSS_STORE_VOUCHER_TIP": "Saveupto{money1}onordersover{money2}",
                    "NEW_USER_COUPON": "NewUserCoupon",
                    "GET": "GET",
                    "SHOP_PROMO_CODE_COP_FAILED": "Failedtocopy.Pleasetryagain",
                    "code-30005Title": "Uh,oh…Itlookslikeyoudon'thaveenoughcoinsyet.",
                    "MY_COINS": "MyCoins",
                    "BUY_GET_OFF": "Buy{fullpiece}get{fulldiscount}off",
                    "code51Title": "Sorry,therearenomorecouponsavailable.",
                    "PANEL_TITLE": "Coupon&Discount",
                    "NEW_USER_COUPON_ACQUIRE_FAIL_LIMIT_HOUR": "Sorry,NewUserCouponsarenotavailableatthishour.",
                    "CROSS_STORE_VOUCHER": "Selectcoupon"
                },
                "id": 0,
                "name": "CouponModule",
                "webCouponInfo": {
                    "couponAttributes": {
                        "couponPackageText": "Checkyourcouponinour<ahref=\"https://www.aliexpress.com/p/my-coupons/index.html\">CouponCenter</a>",
                        "hasPlatformShippingFeeCoupon": "false"
                    },
                    "couponList": [
                        {
                            "bgColor": "#FFF1F1",
                            "color": "#FF4747",
                            "copy": "US$3.00off",
                            "order": 1,
                            "title": "OrdersoverUS$4.00",
                            "type": "platformCoupon"
                        }
                    ],
                    "promotionPanelDTO": {
                        "platformCoupon": [
                            {
                                "displayType": "platformCoupon",
                                "promotionGroupTitle": "AliExpressCoupon/Code",
                                "promotionPanelDetailDTOList": [
                                    {
                                        "acquirable": true,
                                        "actionTips": "Collect",
                                        "attributes": {
                                            "houyiTrack": "{\"accountId\":0,\"activityId\":56218,\"benefitChannel\":\"piggybank_houyi\",\"benefitCode\":\"0d32740019d64d28bd1176a3cdaa05f7\",\"benefitSubChannel\":\"1670_56218\",\"itemId\":83364,\"materialId\":293744,\"positionId\":\"1670\",\"source\":\"houyi\",\"sourceType\":\"embeddedCell\",\"strategyCode\":\"5089ac854d72481785f220158f22989a\",\"templateId\":1055,\"traceId\":\"2101d8b516666443152346972e0392\"}",
                                            "collectedTips": "Collected",
                                            "privateText": "Single-useonly",
                                            "codeScope": "private",
                                            "couponCampaignStyle": "new",
                                            "promotionId": "8"
                                        },
                                        "couponAssignParam": {
                                            "buffettParam": "{\"asac\":\"2E20C25QPPASDAFFPO7TFU\",\"benefitType\":\"globalCoupon\",\"channel\":\"piggybank_houyi\",\"extraData\":{\"bizCustomState\":\"1670_56218\",\"encryptedDynamicInfo\":\"UfrPyz6bxa4xuuF43pvQtEU6ugZ6+Rk3141lSSdWytSNZc8jRii/DN8sWRGLrqieVLapLVH7cHs2zZl5p4Dxsw==\",\"benefitSolution\":\"1\"},\"selectedBenefitCode\":\"0d32740019d64d28bd1176a3cdaa05f7\",\"shipTo\":\"US\",\"strategyCode\":\"5089ac854d72481785f220158f22989a\"}",
                                            "couponMeta": "{\"activityId\":\"0d32740019d64d28bd1176a3cdaa05f7\",\"assignCode\":\"0d32740019d64d28bd1176a3cdaa05f7\",\"count\":1,\"currency\":\"USD\",\"ext\":{\"buffettParam\":\"{\\\"asac\\\":\\\"2E20C25QPPASDAFFPO7TFU\\\",\\\"benefitType\\\":\\\"globalCoupon\\\",\\\"channel\\\":\\\"piggybank_houyi\\\",\\\"extraData\\\":{\\\"bizCustomState\\\":\\\"1670_56218\\\",\\\"encryptedDynamicInfo\\\":\\\"UfrPyz6bxa4xuuF43pvQtEU6ugZ6+Rk3141lSSdWytSNZc8jRii/DN8sWRGLrqieVLapLVH7cHs2zZl5p4Dxsw==\\\",\\\"benefitSolution\\\":\\\"1\\\"},\\\"selectedBenefitCode\\\":\\\"0d32740019d64d28bd1176a3cdaa05f7\\\",\\\"shipTo\\\":\\\"US\\\",\\\"strategyCode\\\":\\\"5089ac854d72481785f220158f22989a\\\"}\",\"fromBuffett\":true},\"price\":300,\"sellerId\":\"1\",\"type\":\"platformCoupon\"}",
                                            "couponSource": "buffett",
                                            "couponType": "platformCoupon"
                                        },
                                        "displayType": "platformCoupon",
                                        "endTime": 1669881599000,
                                        "promotionDesc": "US$3.00",
                                        "promotionDetail": "OrdersoverUS$4.00",
                                        "startTime": 1665212400000,
                                        "teasingStartTime": -1,
                                        "toolCode": "platformCoupon"
                                    }
                                ]
                            }
                        ]
                    },
                    "usingNewCouponApi": true
                }
            },
            "crossLinkModule": {
                "breadCrumbPathList": [
                    {
                        "cateId": 0,
                        "name": "Home",
                        "remark": "",
                        "url": "//www.aliexpress.com/"
                    },
                    {
                        "cateId": 0,
                        "name": "AllCategories",
                        "remark": "",
                        "target": "AllCategories",
                        "url": "//www.aliexpress.com/all-wholesale-products.html"
                    },
                    {
                        "cateId": 6,
                        "name": "HomeAppliances",
                        "remark": "",
                        "target": "HomeAppliances",
                        "url": "//www.aliexpress.com/category/6/home-appliances.html"
                    },
                    {
                        "cateId": 200217594,
                        "name": "MajorAppliances",
                        "remark": "",
                        "target": "MajorAppliances",
                        "url": "//www.aliexpress.com/category/200217594/major-appliances.html"
                    },
                    {
                        "cateId": 100000054,
                        "name": "WaterHeaters",
                        "remark": "",
                        "target": "WaterHeaters",
                        "url": "//www.aliexpress.com/category/100000054/water-heaters.html"
                    },
                    {
                        "cateId": 60702,
                        "name": "ElectricWaterHeaters",
                        "remark": "",
                        "target": "ElectricWaterHeaters",
                        "url": "//www.aliexpress.com/category/60702/electric-water-heaters.html"
                    }
                ],
                "crossLinkGroupList": [
                    {
                        "channel": "RelatedSearch",
                        "crossLinkList": [],
                        "name": "RelatedSearch"
                    },
                    {
                        "channel": "RankingKeywords",
                        "crossLinkList": [
                            {
                                "displayName": "immersionwaterheater",
                                "name": "32968658182",
                                "url": "https://www.aliexpress.us/i/32968658182.html"
                            },
                            {
                                "displayName": "immersionboilerofstainlesssteel",
                                "name": "1005003306828252",
                                "url": "https://www.aliexpress.us/i/1005003306828252.html"
                            },
                            {
                                "displayName": "immersionheaterboilerofstainlesssteel",
                                "name": "1005001640178142",
                                "url": "https://www.aliexpress.us/i/1005001640178142.html"
                            },
                            {
                                "displayName": "immersionheaterboiler",
                                "name": "1005004612449022",
                                "url": "https://www.aliexpress.us/i/1005004612449022.html"
                            },
                            {
                                "displayName": "electricimmersionheater",
                                "name": "32942871300",
                                "url": "https://www.aliexpress.us/i/32942871300.html"
                            },
                            {
                                "displayName": "beadedcurtains",
                                "name": "beadedcurtains",
                                "remark": "CONFIG",
                                "url": "https://www.aliexpress.com/w/wholesale-beaded-curtains.html"
                            }
                        ],
                        "name": "RankingKeywords"
                    },
                    {
                        "channel": "HotSearch",
                        "crossLinkList": [],
                        "name": "HotSearch"
                    }
                ],
                "features": {},
                "i18nMap": {
                    "BREADCRUMB_PART2": "andyoucanfindsimilarproductsat",
                    "BREADCRUMB_PART1": "Thisproductbelongsto",
                    "CROSSLINK_RELATED_SEARCHES": "Links"
                },
                "id": 0,
                "name": "CrossLinkModule",
                "productId": 3256801373733209
            },
            "descriptionModule": {
                "descriptionUrl": "https://aeproductsourcesite.alicdn.com/product/description/pc/v2/en_US/desc.htm?productId=1005001560047961&key=Sae82907d8c9a4184912455c339bfb298c.zip&token=79bf21903ccbe68300d93357b11ffee1",
                "features": {},
                "i18nMap": {},
                "id": 0,
                "name": "DescriptionModule",
                "productId": 3256801373733209,
                "sellerAdminSeq": 238101085
            },
            "features": {},
            "feedbackModule": {
                "companyId": 246081151,
                "features": {},
                "feedbackServer": "//feedback.aliexpress.com",
                "i18nMap": {},
                "id": 0,
                "name": "FeedbackModule",
                "productId": 3256801373733209,
                "sellerAdminSeq": 238101085,
                "trialReviewNum": 0
            },
            "groupShareModule": {
                "features": {},
                "i18nMap": {},
                "id": 0,
                "name": "GroupShareModule"
            },
            "i18nMap": {
                "VIEW_MORE": "ViewMore",
                "ASK_BUYERS": "BuyerQuestions&Answers",
                "PAGE_NOT_FOUND_NOTICE": "Sorry,itemtemporarilyunavailable",
                "VIEW_5_MORE_ANSWERS": "ViewMore",
                "openTrace": "true",
                "PAGE_NOT_FOUND_RCMD_TITLE": "Sorry,thepageyourequestedcannotbefound:("
            },
            "imageModule": {
                "features": {},
                "i18nMap": {},
                "id": 0,
                "imagePathList": [
                    "https://ae01.alicdn.com/kf/H3e5c495ceea145a990716511a36fc3a4d/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg",
                    "https://ae01.alicdn.com/kf/H13a15eaaccdc44878c2409d4bfb1a739n/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg",
                    "https://ae01.alicdn.com/kf/H535a416d23f141eb944eddfe3e6b0779k/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg",
                    "https://ae01.alicdn.com/kf/Hfd015fd119de4c749fe3ac3efa75b00ei/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg",
                    "https://ae01.alicdn.com/kf/H573e4cd7b45f4bf6b1258da77c8c06748/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg",
                    "https://ae01.alicdn.com/kf/H0a1001b02a1a4eb09d80a0a3be5852ffH/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg"
                ],
                "name": "ImageModule",
                "summImagePathList": [
                    "https://ae01.alicdn.com/kf/H3e5c495ceea145a990716511a36fc3a4d/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg_50x50.jpg",
                    "https://ae01.alicdn.com/kf/H13a15eaaccdc44878c2409d4bfb1a739n/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg_50x50.jpg",
                    "https://ae01.alicdn.com/kf/H535a416d23f141eb944eddfe3e6b0779k/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg_50x50.jpg",
                    "https://ae01.alicdn.com/kf/Hfd015fd119de4c749fe3ac3efa75b00ei/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg_50x50.jpg",
                    "https://ae01.alicdn.com/kf/H573e4cd7b45f4bf6b1258da77c8c06748/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg_50x50.jpg",
                    "https://ae01.alicdn.com/kf/H0a1001b02a1a4eb09d80a0a3be5852ffH/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg_50x50.jpg"
                ]
            },
            "installmentModule": {
                "features": {},
                "i18nMap": {},
                "id": 0,
                "name": "InstallmentModule"
            },
            "middleBannerModule": {
                "features": {},
                "i18nMap": {
                    "END_IN": "Endsin",
                    "DAYS": "{number}days",
                    "DAY": "{number}day",
                    "STARTS_IN": "Startsin"
                },
                "id": 0,
                "name": "MiddleBannerModule",
                "showUniformBanner": false
            },
            "name": "ItemDetailResp",
            "otherServiceModule": {
                "features": {},
                "hasWarrantyInfo": false,
                "i18nMap": {
                    "TAB_SPECS": "Specifications",
                    "PLAZA_SERVICE_SUBTITLE_PC": "GuaranteeinSpain",
                    "PLAZA_SERVICE_WARRANTY_EMAIL": "Email",
                    "PLAZA_SERVICE_WARRANTY_PHONE": "Phone",
                    "PLAZA_SERVICE_WARRANTY_HOURS": "Hours",
                    "TAB_CUSTOMER_REVIEWS": "CustomerReviews",
                    "PLAZA_SERVICE_WARRANTY_WEBSITE": "Website",
                    "TAB_OVERVIEW": "Description",
                    "PLAZA_SERVICE_WARRANTY_BRAND": "Brand",
                    "PLAZA_SERVICE_WARRANTY_CATEGORY": "Category",
                    "PLAZA_SERVICE_TITLE_PC": "PlazaTechnologyGuarantees",
                    "PLAZA_SERVICE_CONTENT3_3_PC": "-Thesafetysealisnotdamagedandalllabelsareretained.",
                    "PLAZA_SERVICE_WARRANTY_TITLE": "Officialtechnicalservice",
                    "TAB_REPORT_ITEM": "ReportItem",
                    "TAB_SERVICE": "Service",
                    "PLAZA_SERVICE_CONTENT3_1_PC": "Youhave15daystoreturnyourPlazaTechnologyorder,providedthat:",
                    "PLAZA_SERVICE_CONTENT3_2_PC": "-Itisinperfectconditionandintheoriginalpackaging.",
                    "PLAZA_SERVICE_CONTENT1_PC": "AllitemsofPlazaTechnologyare100%original,arecoveredbytheprotectionofthebuyerofAliExpressandhaveanofficialwarrantyof2yearsinSpaintoprocessintheofficialtechnicalserviceinSpaindesignatedbythemanufacturer.",
                    "PLAZA_SERVICE_SUBTITLE2_PC": "Shippinganddelivery",
                    "PLAZA_SERVICE_CONTENT2_PC": "Shipmentsarefreewithoutminimumpurchase.WemakeallourshipmentsfromSpain,sotherearenoadditionalfeesorcustoms.Thedeliverytimeinanypointofthepeninsulais1to3workingdaysfromthemomentofpurchase.AtthemomentwedonotsendtotheCanaryIslands,CeutaorMelilla.",
                    "PLAZA_SERVICE_SUBTITLE3_PC": "Returns"
                },
                "id": 0,
                "name": "OtherServiceModule"
            },
            "pageModule": {
                "aeOrderFrom": "main_detail",
                "aerSelfOperation": false,
                "amphtmlTag": "<meta>",
                "boutiqueSeller": false,
                "canonicalTag": "<linkrel=\"canonical\"href=\"https://www.aliexpress.com/item/1005001560047961.html\">",
                "complaintUrl": "//report.aliexpress.com/health/reportIndex.htm?product_id=3256801373733209&b_login_id=cn1527995928xqnj",
                "description": "Getelectricwaterheaterboilerheatingportableatabiggersaving.FindproductsofElectricWaterHeaterswithhighqualityatAliExpress.\nEnjoy✓FreeShippingWorldwide!✓LimitedTimeSale✓EasyReturn.",
                "features": {},
                "hreflangTag": "<linkrel=\"alternate\"hreflang=\"en\"href=\"https://www.aliexpress.com/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"id\"href=\"https://id.aliexpress.com/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"ko\"href=\"https://ko.aliexpress.com/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"ar\"href=\"https://ar.aliexpress.com/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"de\"href=\"https://de.aliexpress.com/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"es\"href=\"https://es.aliexpress.com/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"fr\"href=\"https://fr.aliexpress.com/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"it\"href=\"https://it.aliexpress.com/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"nl\"href=\"https://nl.aliexpress.com/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"pt\"href=\"https://pt.aliexpress.com/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"th\"href=\"https://th.aliexpress.com/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"tr\"href=\"https://tr.aliexpress.com/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"vi\"href=\"https://vi.aliexpress.com/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"he\"href=\"https://he.aliexpress.com/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"ru\"href=\"https://aliexpress.ru/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"ja\"href=\"https://ja.aliexpress.com/item/1005001560047961.html\"/>\n<linkrel=\"alternate\"hreflang=\"pl\"href=\"https://pl.aliexpress.com/item/1005001560047961.html\"/>",
                "i18nMap": {},
                "id": 0,
                "imagePath": "https://ae01.alicdn.com/kf/H3e5c495ceea145a990716511a36fc3a4d/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool.jpg",
                "itemDetailUrl": "https://www.aliexpress.com/item/3256801373733209.html",
                "keywords": "electricwaterheaterboilerheatingportable,ElectricWaterHeaters,MajorAppliances,HomeAppliances",
                "kidBaby": false,
                "mSiteUrl": "https://m.aliexpress.com/item/3256801373733209.html",
                "mediaTag": "<linkrel=\"alternate\"media=\"onlyscreenand(max-width:640px)\"href=\"https://m.aliexpress.com/item/1005001560047961.html\"/>",
                "multiLanguageUrlList": [
                    {
                        "language": "msite",
                        "languageUrl": "https://m.aliexpress.com/item/3256801373733209.html"
                    },
                    {
                        "language": "en",
                        "languageUrl": "https://www.aliexpress.com/item/3256801373733209.html"
                    },
                    {
                        "language": "it",
                        "languageUrl": "https://it.aliexpress.com/item/3256801373733209.html"
                    },
                    {
                        "language": "fr",
                        "languageUrl": "https://fr.aliexpress.com/item/3256801373733209.html"
                    },
                    {
                        "language": "de",
                        "languageUrl": "https://de.aliexpress.com/item/3256801373733209.html"
                    },
                    {
                        "language": "ru",
                        "languageUrl": "https://aliexpress.ru/item/3256801373733209.html"
                    },
                    {
                        "language": "es",
                        "languageUrl": "https://es.aliexpress.com/item/3256801373733209.html"
                    },
                    {
                        "language": "pt",
                        "languageUrl": "https://pt.aliexpress.com/item/3256801373733209.html"
                    },
                    {
                        "language": "ja",
                        "languageUrl": "https://ja.aliexpress.com/item/3256801373733209.html"
                    },
                    {
                        "language": "ko",
                        "languageUrl": "https://ko.aliexpress.com/item/3256801373733209.html"
                    },
                    {
                        "language": "nl",
                        "languageUrl": "https://nl.aliexpress.com/item/3256801373733209.html"
                    },
                    {
                        "language": "ar",
                        "languageUrl": "https://ar.aliexpress.com/item/3256801373733209.html"
                    },
                    {
                        "language": "tr",
                        "languageUrl": "https://tr.aliexpress.com/item/3256801373733209.html"
                    },
                    {
                        "language": "vi",
                        "languageUrl": "https://vi.aliexpress.com/item/3256801373733209.html"
                    },
                    {
                        "language": "he",
                        "languageUrl": "https://he.aliexpress.com/item/3256801373733209.html"
                    },
                    {
                        "language": "th",
                        "languageUrl": "https://th.aliexpress.com/item/3256801373733209.html"
                    },
                    {
                        "language": "pl",
                        "languageUrl": "https://pl.aliexpress.com/item/3256801373733209.html"
                    }
                ],
                "name": "PageModule",
                "ogDescription": "SmarterShopping,BetterLiving!Aliexpress.com",
                "ogTitle": "13.65US$25%OFF|2500wFloatingElectricWaterHeaterBoilerHeatingPortableImmersionReheaterSuspensionBathroomSwimmingPool-ElectricWaterHeaters-AliExpress",
                "ogurl": "//www.aliexpress.com/item/3256801373733209.html",
                "oldItemDetailUrl": "https://www.aliexpress.com/item/2500W-Floating-Electric-Water-Heater-Boiler-Heating-Portable-Immersion-Reheater-Suspension-Bathroom-Swimming-Pool/3256801373733209.html",
                "plazaElectronicSeller": false,
                "productId": 3256801373733209,
                "ruSelfOperation": false,
                "showPlazaHeader": false,
                "siteType": "usa",
                "spanishPlaza": false,
                "title": "2500wFloatingElectricWaterHeaterBoilerHeatingPortableImmersionReheaterSuspensionBathroomSwimmingPool-ElectricWaterHeaters-AliExpress"
            },
            "preSaleModule": {
                "features": {},
                "i18nMap": {},
                "id": 0,
                "name": "PreSaleModule",
                "preSale": false
            },
            "prefix": "//assets.alicdn.com/g/ae-fe/detail-ui/0.0.102",
            "priceModule": {
                "activity": true,
                "discount": 25,
                "discountPromotion": true,
                "discountRatioTips": "-25%",
                "discountTips": "-25%",
                "extraTags": {},
                "features": {},
                "formatedActivityPrice": "US$13.65-14.74",
                "formatedPrice": "US$18.20-19.66",
                "hiddenBigSalePrice": false,
                "i18nMap": {
                    "LOT": "lot",
                    "INSTALLMENT": "Installment",
                    "DEPOSIT": "Deposit",
                    "PRE_ORDER_PRICE": "Pre-orderprice"
                },
                "id": 0,
                "installment": false,
                "lot": false,
                "maxActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US$14.74",
                    "value": 14.74
                },
                "maxAmount": {
                    "currency": "USD",
                    "formatedAmount": "US$19.66",
                    "value": 19.66
                },
                "minActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US$13.65",
                    "value": 13.65
                },
                "minAmount": {
                    "currency": "USD",
                    "formatedAmount": "US$18.20",
                    "value": 18.2
                },
                "multiUnitName": "Pieces",
                "name": "PriceModule",
                "numberPerLot": 1,
                "oddUnitName": "piece",
                "preSale": false,
                "priceRuleInfo": {},
                "regularPriceActivity": false,
                "showActivityMessage": false,
                "vatDesc": ""
            },
            "quantityModule": {
                "activity": true,
                "displayBulkInfo": true,
                "features": {},
                "i18nMap": {
                    "LOT": "lot",
                    "LOTS": "lots",
                    "BUY_LIMIT": "{limit}{unit}atmostpercustomer",
                    "QUANTITY": "Quantity",
                    "OFF_OR_MORE": "{discount}%off({number}{unit}ormore)",
                    "ONLY_QUANTITY_LEFT": "Only{availQuantity}left",
                    "ADDTIONAL": "Additional",
                    "QUANTITY_AVAILABLE": "{availQuantity}{unit}available"
                },
                "id": 0,
                "lot": false,
                "multiUnitName": "Pieces",
                "name": "QuantityModule",
                "oddUnitName": "piece",
                "purchaseLimitNumMax": 0,
                "skuBulkDiscount": 2,
                "skuBulkOrder": 5,
                "totalAvailQuantity": 13
            },
            "recommendModule": {
                "categoryId": 60702,
                "companyId": 246081151,
                "features": {
                    "recommendGpsScenarioOtherSellerProducts": "pcDetailBottomMoreOtherSeller",
                    "showSubTitle": "true",
                    "recommendGpsScenarioTopSelling": "pcDetailLeftTopSell",
                    "recommendGpsScenarioSellerOtherProducts": "pcDetailBottomMoreThisSeller"
                },
                "i18nMap": {
                    "MORE_FROM_THIS_SELLER": "SellerRecommendations",
                    "YOU_MAY_LIKE": "RecommendedForYou",
                    "TOP_SELLING": "TopSelling",
                    "FROM_OTHER_SELLER": "Youmayalsolike",
                    "VIEW_MORE_LINK": "ViewMore",
                    "PRODUCT_SOLD": "Sold"
                },
                "id": 0,
                "name": "RecommendModule",
                "platformCount": 20,
                "productId": 3256801373733209,
                "storeNum": 1101343461
            },
            "redirectModule": {
                "bigBossBan": false,
                "code": "OK",
                "features": {},
                "i18nMap": {},
                "id": 0,
                "name": "RedirectModule",
                "redirectUrl": ""
            },
            "shippingModule": {
                "currencyCode": "USD",
                "features": {},
                "freightCalculateInfo": {
                    "displayMultipleFreight": false,
                    "hideFreight": true
                },
                "generalFreightInfo": {
                    "freightExt": "[{\"p1\":\"13.65\",\"p2\":\"14.74\",\"p3\":\"USD\",\"p4\":\"990000\",\"p5\":\"0\",\"itemScene\":\"default\",\"p6\":\"null\"}]",
                    "hideShipFrom": true,
                    "originalLayoutResultList": [
                        {
                            "additionLayout": [
                                {
                                    "blockGroup": "others-1",
                                    "blockType": "others",
                                    "componentId": "490",
                                    "content": "TrackingAvailable",
                                    "displayCondition": "tracking=visible",
                                    "distance": 1,
                                    "medusaKey": "tracking_available@others",
                                    "order": 1,
                                    "type": "textWithMark",
                                    "useInDeliveryOptionPanel": true
                                }
                            ],
                            "bizData": {
                                "deliveryOptionCode": "CAINIAO_STANDARD",
                                "deliveryProviderName": "AliExpressStandardShipping",
                                "leadTimeSort": [
                                    9999
                                ],
                                "patternId": 202002,
                                "discount": 100,
                                "utParams": "{\"cmd\":false,\"currency\":\"USD\",\"deliveryDate\":\"2022-11-22\",\"fAmount\":0.0,\"fCurrency\":\"USD\",\"itemId\":3256801373733209,\"preOrder\":false,\"productId\":3256801373733209,\"serviceName\":\"CAINIAO_STANDARD\",\"shipFrom\":\"CN\",\"shipToCountry\":\"US\",\"shippingFee\":\"0\",\"traceId\":\"2101d8b516666443152346972e0392\",\"trackingAvailable\":true}",
                                "shipFromWarehouseCode": {
                                    "CN": [
                                        "SZU902"
                                    ]
                                },
                                "tracking": "visible",
                                "provider": "cainiao",
                                "itemShipFromType": "same",
                                "itemScene": "default",
                                "shipToCode": "US",
                                "company": "AliExpressStandardShipping",
                                "currency": "USD",
                                "deliveryDate": "Nov22",
                                "shipFrom": "China",
                                "deliveryDayMax": 29,
                                "guaranteedDeliveryTime": 60,
                                "freightCommitDay": "75",
                                "etaTraceId": "ORDER-f-1-228-2505600000-2505600000-1669149915338-1669149915338-CAINIAO_STANDARD-DOOR_DELIVERY-OPERATING-DEF|SELLER_STOCK_UP-CALENDAR_DAY---432000000-432000000---OPERATING-@DELIVERY_FULFIL-CALENDAR_DAY---2073600000-2073600000---OPERATING-|1666644315338",
                                "itemId": 3256801373733209,
                                "solutionBusinessType": "Default",
                                "shippingFee": "free",
                                "deliveryDayMin": 29,
                                "guaranteedDeliveryTimeProviderName": "cainiao_committed_time",
                                "solutionId": 268001,
                                "shipFromCode": "CN",
                                "deliveryProviderCode": "CAINIAO_STANDARD",
                                "shipTo": "UnitedStates"
                            },
                            "contentLayout": [
                                [
                                    {
                                        "blockGroup": "deliveryTime-0",
                                        "blockType": "deliveryTime",
                                        "componentId": "1640",
                                        "content": "<spanstyle=\"color:#666666;\">From</span><spanstyle=\"color:#222222;\">China</span><spanstyle=\"color:#666666;\">to</span><spanstyle=\"color:#222222;\">UnitedStates</span><spanstyle=\"color:#666666;\">viaAliExpressStandardShipping</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "ship_from_to_config_detail@freight",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ],
                                [
                                    {
                                        "blockGroup": "deliveryTime-1",
                                        "blockType": "deliveryTime",
                                        "componentId": "646",
                                        "content": "<spanstyle=\"color:#666666;\">Estimateddeliveryon</span><spanstyle=\"color:#222222;\">Nov22</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "estimated_delivery_on@deliveryTime",
                                        "order": 1,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ],
                            "deliveryOptionPanelDisplayList": [
                                "490",
                                "646",
                                "1394",
                                "1640"
                            ],
                            "detailFirstScreenDisplayList": [
                                "646",
                                "1394",
                                "1640"
                            ],
                            "dxTemplateInfo": {},
                            "finalPatternId": 202002,
                            "skuSwitchDisplayList": [
                                "646",
                                "1394",
                                "1640"
                            ],
                            "titleLayout": [
                                [
                                    {
                                        "blockGroup": "title-1",
                                        "blockType": "title",
                                        "componentId": "1394",
                                        "content": "<spanstyle=\"font-size:15px;color:#222222;\"><strong>FreeShipping</strong></span>",
                                        "displayCondition": "shippingFee=free",
                                        "distance": 1,
                                        "medusaKey": "free_shipping@freightCost",
                                        "order": 1,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ]
                        },
                        {
                            "additionLayout": [
                                {
                                    "blockGroup": "others-1",
                                    "blockType": "others",
                                    "componentId": "490",
                                    "content": "TrackingAvailable",
                                    "displayCondition": "tracking=visible",
                                    "distance": 1,
                                    "medusaKey": "tracking_available@others",
                                    "order": 1,
                                    "type": "textWithMark",
                                    "useInDeliveryOptionPanel": true
                                }
                            ],
                            "bizData": {
                                "deliveryOptionCode": "CAINIAO_FULFILLMENT_STD",
                                "deliveryProviderName": "AliexpressSelectionStandard",
                                "leadTimeSort": [
                                    9999
                                ],
                                "patternId": 202002,
                                "discount": 0,
                                "utParams": "{\"cmd\":false,\"currency\":\"USD\",\"deliveryDate\":\"2022-11-15\",\"fAmount\":4.18,\"fCurrency\":\"USD\",\"itemId\":3256801373733209,\"preOrder\":false,\"productId\":3256801373733209,\"serviceName\":\"CAINIAO_FULFILLMENT_STD\",\"shipFrom\":\"CN\",\"shipToCountry\":\"US\",\"shippingFee\":\"4.18\",\"traceId\":\"2101d8b516666443152346972e0392\",\"trackingAvailable\":true}",
                                "shipFromWarehouseCode": {
                                    "CN": [
                                        "SZU902"
                                    ]
                                },
                                "tracking": "visible",
                                "provider": "cainiao",
                                "itemShipFromType": "same",
                                "itemScene": "default",
                                "shipToCode": "US",
                                "company": "AliexpressSelectionStandard",
                                "currency": "USD",
                                "deliveryDate": "Nov15",
                                "formattedAmount": "$4.18",
                                "shipFrom": "China",
                                "deliveryDayMax": 22,
                                "leadTimeType": "select_wh",
                                "guaranteedDeliveryTime": 60,
                                "freightCommitDay": "75",
                                "etaTraceId": "ORDER-f-1-228-1900800000-1900800000-1668545115338-1668545115338-CAINIAO_FULFILLMENT_STD-TIMES_AE_SELECT-OPERATING-DEF|SELLER_STOCK_UP-WORKING_DAY---172800000-172800000---OPERATING-@DELIVERY_FULFIL-CALENDAR_DAY---1728000000-1728000000---OPERATING-|1666644315338",
                                "itemId": 3256801373733209,
                                "displayAmount": 4.18,
                                "solutionBusinessType": "AeSelect",
                                "shippingFee": "charge",
                                "deliveryDayMin": 22,
                                "guaranteedDeliveryTimeProviderName": "cainiao_committed_time",
                                "solutionId": 36001,
                                "shipFromCode": "CN",
                                "displayCurrency": "USD",
                                "deliveryProviderCode": "CAINIAO_FULFILLMENT_STD",
                                "shipTo": "UnitedStates"
                            },
                            "contentLayout": [
                                [
                                    {
                                        "blockGroup": "deliveryTime-0",
                                        "blockType": "deliveryTime",
                                        "componentId": "1640",
                                        "content": "<spanstyle=\"color:#666666;\">From</span><spanstyle=\"color:#222222;\">China</span><spanstyle=\"color:#666666;\">to</span><spanstyle=\"color:#222222;\">UnitedStates</span><spanstyle=\"color:#666666;\">viaAliexpressSelectionStandard</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "ship_from_to_config_detail@freight",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ],
                                [
                                    {
                                        "blockGroup": "deliveryTime-1",
                                        "blockType": "deliveryTime",
                                        "componentId": "646",
                                        "content": "<spanstyle=\"color:#666666;\">Estimateddeliveryon</span><spanstyle=\"color:#222222;\">Nov15</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "estimated_delivery_on@deliveryTime",
                                        "order": 1,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ],
                            "deliveryOptionPanelDisplayList": [
                                "490",
                                "646",
                                "1395",
                                "1640"
                            ],
                            "detailFirstScreenDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "dxTemplateInfo": {},
                            "finalPatternId": 202002,
                            "skuSwitchDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "titleLayout": [
                                [
                                    {
                                        "blockGroup": "title-1",
                                        "blockType": "title",
                                        "componentId": "1395",
                                        "content": "<spanstyle=\"font-size:15px;color:#222222;\"><strong>Shipping:$4.18</strong></span>",
                                        "displayCondition": "previewAmount=invisible",
                                        "distance": 1,
                                        "medusaKey": "shippingfee@freightCost",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ]
                        },
                        {
                            "additionLayout": [
                                {
                                    "blockGroup": "others-1",
                                    "blockType": "others",
                                    "componentId": "490",
                                    "content": "TrackingAvailable",
                                    "displayCondition": "tracking=visible",
                                    "distance": 1,
                                    "medusaKey": "tracking_available@others",
                                    "order": 1,
                                    "type": "textWithMark",
                                    "useInDeliveryOptionPanel": true
                                }
                            ],
                            "bizData": {
                                "deliveryOptionCode": "SF",
                                "deliveryProviderName": "SFExpress",
                                "leadTimeSort": [
                                    9999
                                ],
                                "patternId": 202002,
                                "discount": 0,
                                "utParams": "{\"cmd\":false,\"currency\":\"USD\",\"deliveryDate\":\"2022-12-12\",\"fAmount\":6.31,\"fCurrency\":\"USD\",\"itemId\":3256801373733209,\"preOrder\":false,\"productId\":3256801373733209,\"serviceName\":\"SF\",\"shipFrom\":\"CN\",\"shipToCountry\":\"US\",\"shippingFee\":\"6.31\",\"traceId\":\"2101d8b516666443152346972e0392\",\"trackingAvailable\":true}",
                                "shipFromWarehouseCode": {
                                    "CN": [
                                        "SZU902"
                                    ]
                                },
                                "tracking": "visible",
                                "provider": "cainiao",
                                "itemShipFromType": "same",
                                "itemScene": "default",
                                "shipToCode": "US",
                                "company": "SFExpress",
                                "currency": "USD",
                                "deliveryDate": "Dec12",
                                "formattedAmount": "$6.31",
                                "shipFrom": "China",
                                "deliveryDayMax": 49,
                                "guaranteedDeliveryTime": 35,
                                "freightCommitDay": "75",
                                "etaTraceId": "ORDER-f-1-228-4233598000-4233598000-1670877913338-1670877913338-SF-DOOR_DELIVERY-OPERATING-DEF|SELLER_STOCK_UP-CALENDAR_DAY---604800000-604800000---OPERATING-@DELIVERY_FULFIL-CALENDAR_DAY---3456000000-3456000000---OPERATING-2042,2043|1666644315338",
                                "itemId": 3256801373733209,
                                "displayAmount": 6.31,
                                "solutionBusinessType": "Default",
                                "shippingFee": "charge",
                                "deliveryDayMin": 49,
                                "guaranteedDeliveryTimeProviderName": "cainiao_committed_time",
                                "solutionId": 268001,
                                "shipFromCode": "CN",
                                "displayCurrency": "USD",
                                "deliveryProviderCode": "SF",
                                "shipTo": "UnitedStates"
                            },
                            "contentLayout": [
                                [
                                    {
                                        "blockGroup": "deliveryTime-0",
                                        "blockType": "deliveryTime",
                                        "componentId": "1640",
                                        "content": "<spanstyle=\"color:#666666;\">From</span><spanstyle=\"color:#222222;\">China</span><spanstyle=\"color:#666666;\">to</span><spanstyle=\"color:#222222;\">UnitedStates</span><spanstyle=\"color:#666666;\">viaSFExpress</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "ship_from_to_config_detail@freight",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ],
                                [
                                    {
                                        "blockGroup": "deliveryTime-1",
                                        "blockType": "deliveryTime",
                                        "componentId": "646",
                                        "content": "<spanstyle=\"color:#666666;\">Estimateddeliveryon</span><spanstyle=\"color:#222222;\">Dec12</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "estimated_delivery_on@deliveryTime",
                                        "order": 1,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ],
                            "deliveryOptionPanelDisplayList": [
                                "490",
                                "646",
                                "1395",
                                "1640"
                            ],
                            "detailFirstScreenDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "dxTemplateInfo": {},
                            "finalPatternId": 202002,
                            "skuSwitchDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "titleLayout": [
                                [
                                    {
                                        "blockGroup": "title-1",
                                        "blockType": "title",
                                        "componentId": "1395",
                                        "content": "<spanstyle=\"font-size:15px;color:#222222;\"><strong>Shipping:$6.31</strong></span>",
                                        "displayCondition": "previewAmount=invisible",
                                        "distance": 1,
                                        "medusaKey": "shippingfee@freightCost",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ]
                        },
                        {
                            "additionLayout": [
                                {
                                    "blockGroup": "others-1",
                                    "blockType": "others",
                                    "componentId": "490",
                                    "content": "TrackingAvailable",
                                    "displayCondition": "tracking=visible",
                                    "distance": 1,
                                    "medusaKey": "tracking_available@others",
                                    "order": 1,
                                    "type": "textWithMark",
                                    "useInDeliveryOptionPanel": true
                                }
                            ],
                            "bizData": {
                                "deliveryOptionCode": "CAINIAO_STANDARD_SG_AIR",
                                "deliveryProviderName": "CainiaoStandard-SGAir",
                                "leadTimeSort": [
                                    9999
                                ],
                                "patternId": 202002,
                                "discount": 0,
                                "utParams": "{\"cmd\":false,\"currency\":\"USD\",\"deliveryDate\":\"2022-11-21\",\"fAmount\":6.65,\"fCurrency\":\"USD\",\"itemId\":3256801373733209,\"preOrder\":false,\"productId\":3256801373733209,\"serviceName\":\"CAINIAO_STANDARD_SG_AIR\",\"shipFrom\":\"CN\",\"shipToCountry\":\"US\",\"shippingFee\":\"6.65\",\"traceId\":\"2101d8b516666443152346972e0392\",\"trackingAvailable\":true}",
                                "shipFromWarehouseCode": {
                                    "CN": [
                                        "SZU902"
                                    ]
                                },
                                "tracking": "visible",
                                "provider": "cainiao",
                                "itemShipFromType": "same",
                                "itemScene": "default",
                                "shipToCode": "US",
                                "company": "CainiaoStandard-SGAir",
                                "currency": "USD",
                                "deliveryDate": "Nov21",
                                "formattedAmount": "$6.65",
                                "shipFrom": "China",
                                "deliveryDayMax": 28,
                                "guaranteedDeliveryTime": 60,
                                "freightCommitDay": "75",
                                "etaTraceId": "ORDER-f-1-228-2419200000-2419200000-1669063515338-1669063515338-CAINIAO_STANDARD_SG_AIR-DOOR_DELIVERY-OPERATING-DEF|SELLER_STOCK_UP-CALENDAR_DAY---604800000-604800000---OPERATING-@DELIVERY_FULFIL-CALENDAR_DAY---1814400000-1814400000---OPERATING-|1666644315338",
                                "itemId": 3256801373733209,
                                "displayAmount": 6.65,
                                "solutionBusinessType": "Default",
                                "shippingFee": "charge",
                                "deliveryDayMin": 28,
                                "guaranteedDeliveryTimeProviderName": "cainiao_committed_time",
                                "solutionId": 268001,
                                "shipFromCode": "CN",
                                "displayCurrency": "USD",
                                "deliveryProviderCode": "CAINIAO_STANDARD_SG_AIR",
                                "shipTo": "UnitedStates"
                            },
                            "contentLayout": [
                                [
                                    {
                                        "blockGroup": "deliveryTime-0",
                                        "blockType": "deliveryTime",
                                        "componentId": "1640",
                                        "content": "<spanstyle=\"color:#666666;\">From</span><spanstyle=\"color:#222222;\">China</span><spanstyle=\"color:#666666;\">to</span><spanstyle=\"color:#222222;\">UnitedStates</span><spanstyle=\"color:#666666;\">viaCainiaoStandard-SGAir</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "ship_from_to_config_detail@freight",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ],
                                [
                                    {
                                        "blockGroup": "deliveryTime-1",
                                        "blockType": "deliveryTime",
                                        "componentId": "646",
                                        "content": "<spanstyle=\"color:#666666;\">Estimateddeliveryon</span><spanstyle=\"color:#222222;\">Nov21</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "estimated_delivery_on@deliveryTime",
                                        "order": 1,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ],
                            "deliveryOptionPanelDisplayList": [
                                "490",
                                "646",
                                "1395",
                                "1640"
                            ],
                            "detailFirstScreenDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "dxTemplateInfo": {},
                            "finalPatternId": 202002,
                            "skuSwitchDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "titleLayout": [
                                [
                                    {
                                        "blockGroup": "title-1",
                                        "blockType": "title",
                                        "componentId": "1395",
                                        "content": "<spanstyle=\"font-size:15px;color:#222222;\"><strong>Shipping:$6.65</strong></span>",
                                        "displayCondition": "previewAmount=invisible",
                                        "distance": 1,
                                        "medusaKey": "shippingfee@freightCost",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ]
                        },
                        {
                            "additionLayout": [
                                {
                                    "blockGroup": "others-1",
                                    "blockType": "others",
                                    "componentId": "645",
                                    "content": "TrackingUnavailable",
                                    "displayCondition": "tracking=invisible",
                                    "distance": 1,
                                    "medusaKey": "tracking_unavailable@others",
                                    "order": 2,
                                    "type": "textWithMark",
                                    "useInDeliveryOptionPanel": true
                                }
                            ],
                            "bizData": {
                                "deliveryOptionCode": "Other",
                                "deliveryProviderName": "Seller'sShippingMethod",
                                "leadTimeSort": [
                                    9999
                                ],
                                "patternId": 202002,
                                "discount": 0,
                                "utParams": "{\"cmd\":false,\"currency\":\"USD\",\"deliveryDate\":\"2022-12-27\",\"fAmount\":9.61,\"fCurrency\":\"USD\",\"itemId\":3256801373733209,\"preOrder\":false,\"productId\":3256801373733209,\"serviceName\":\"Other\",\"shipFrom\":\"CN\",\"shipToCountry\":\"US\",\"shippingFee\":\"9.61\",\"traceId\":\"2101d8b516666443152346972e0392\",\"trackingAvailable\":false}",
                                "shipFromWarehouseCode": {
                                    "CN": [
                                        "SZU902"
                                    ]
                                },
                                "tracking": "invisible",
                                "provider": "ae_config",
                                "itemShipFromType": "same",
                                "itemScene": "default",
                                "shipToCode": "US",
                                "company": "Seller'sShippingMethod",
                                "currency": "USD",
                                "deliveryDate": "2022-12-27",
                                "formattedAmount": "$9.61",
                                "shipFrom": "China",
                                "deliveryDayMax": 38,
                                "guaranteedDeliveryTime": 60,
                                "freightCommitDay": "75",
                                "itemId": 3256801373733209,
                                "displayAmount": 9.61,
                                "solutionBusinessType": "Default",
                                "shippingFee": "charge",
                                "deliveryDayMin": 20,
                                "guaranteedDeliveryTimeProviderName": "cainiao_committed_time",
                                "solutionId": 268001,
                                "shipFromCode": "CN",
                                "displayCurrency": "USD",
                                "deliveryProviderCode": "Other",
                                "shipTo": "UnitedStates"
                            },
                            "contentLayout": [
                                [
                                    {
                                        "blockGroup": "deliveryTime-0",
                                        "blockType": "deliveryTime",
                                        "componentId": "1640",
                                        "content": "<spanstyle=\"color:#666666;\">From</span><spanstyle=\"color:#222222;\">China</span><spanstyle=\"color:#666666;\">to</span><spanstyle=\"color:#222222;\">UnitedStates</span><spanstyle=\"color:#666666;\">viaSeller'sShippingMethod</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "ship_from_to_config_detail@freight",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ],
                                [
                                    {
                                        "blockGroup": "deliveryTime-1",
                                        "blockType": "deliveryTime",
                                        "componentId": "647",
                                        "content": "<spanstyle=\"color:#666666;\">Estimateddeliveryon</span><spanstyle=\"color:#222222;\">Dec27</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "estimated_delivery_on_V2@deliveryTime",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ],
                            "deliveryOptionPanelDisplayList": [
                                "645",
                                "647",
                                "1395",
                                "1640"
                            ],
                            "detailFirstScreenDisplayList": [
                                "647",
                                "1395",
                                "1640"
                            ],
                            "dxTemplateInfo": {},
                            "finalPatternId": 202002,
                            "skuSwitchDisplayList": [
                                "647",
                                "1395",
                                "1640"
                            ],
                            "titleLayout": [
                                [
                                    {
                                        "blockGroup": "title-1",
                                        "blockType": "title",
                                        "componentId": "1395",
                                        "content": "<spanstyle=\"font-size:15px;color:#222222;\"><strong>Shipping:$9.61</strong></span>",
                                        "displayCondition": "previewAmount=invisible",
                                        "distance": 1,
                                        "medusaKey": "shippingfee@freightCost",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ]
                        },
                        {
                            "additionLayout": [
                                {
                                    "blockGroup": "others-1",
                                    "blockType": "others",
                                    "componentId": "490",
                                    "content": "TrackingAvailable",
                                    "displayCondition": "tracking=visible",
                                    "distance": 1,
                                    "medusaKey": "tracking_available@others",
                                    "order": 1,
                                    "type": "textWithMark",
                                    "useInDeliveryOptionPanel": true
                                }
                            ],
                            "bizData": {
                                "deliveryOptionCode": "CAINIAO_PREMIUM",
                                "deliveryProviderName": "AliExpressPremiumShipping",
                                "leadTimeSort": [
                                    9999
                                ],
                                "patternId": 202002,
                                "discount": 0,
                                "utParams": "{\"cmd\":false,\"currency\":\"USD\",\"deliveryDate\":\"2022-11-07\",\"fAmount\":32.55,\"fCurrency\":\"USD\",\"itemId\":3256801373733209,\"preOrder\":false,\"productId\":3256801373733209,\"serviceName\":\"CAINIAO_PREMIUM\",\"shipFrom\":\"CN\",\"shipToCountry\":\"US\",\"shippingFee\":\"32.55\",\"traceId\":\"2101d8b516666443152346972e0392\",\"trackingAvailable\":true}",
                                "shipFromWarehouseCode": {
                                    "CN": [
                                        "SZU902"
                                    ]
                                },
                                "tracking": "visible",
                                "provider": "cainiao",
                                "itemShipFromType": "same",
                                "itemScene": "default",
                                "shipToCode": "US",
                                "company": "AliExpressPremiumShipping",
                                "currency": "USD",
                                "deliveryDate": "Nov07",
                                "formattedAmount": "$32.55",
                                "shipFrom": "China",
                                "deliveryDayMax": 14,
                                "guaranteedDeliveryTime": 35,
                                "freightCommitDay": "75",
                                "etaTraceId": "ORDER-f-1-228-1209600000-1209600000-1667853915338-1667853915338-CAINIAO_PREMIUM-DOOR_DELIVERY-OPERATING-DEF|SELLER_STOCK_UP-CALENDAR_DAY---259200000-259200000---OPERATING-@DELIVERY_FULFIL-CALENDAR_DAY---950400000-950400000---OPERATING-|1666644315338",
                                "itemId": 3256801373733209,
                                "displayAmount": 32.55,
                                "solutionBusinessType": "Default",
                                "shippingFee": "charge",
                                "deliveryDayMin": 14,
                                "guaranteedDeliveryTimeProviderName": "cainiao_committed_time",
                                "solutionId": 268001,
                                "shipFromCode": "CN",
                                "displayCurrency": "USD",
                                "deliveryProviderCode": "CAINIAO_PREMIUM",
                                "shipTo": "UnitedStates"
                            },
                            "contentLayout": [
                                [
                                    {
                                        "blockGroup": "deliveryTime-0",
                                        "blockType": "deliveryTime",
                                        "componentId": "1640",
                                        "content": "<spanstyle=\"color:#666666;\">From</span><spanstyle=\"color:#222222;\">China</span><spanstyle=\"color:#666666;\">to</span><spanstyle=\"color:#222222;\">UnitedStates</span><spanstyle=\"color:#666666;\">viaAliExpressPremiumShipping</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "ship_from_to_config_detail@freight",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ],
                                [
                                    {
                                        "blockGroup": "deliveryTime-1",
                                        "blockType": "deliveryTime",
                                        "componentId": "646",
                                        "content": "<spanstyle=\"color:#666666;\">Estimateddeliveryon</span><spanstyle=\"color:#222222;\">Nov07</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "estimated_delivery_on@deliveryTime",
                                        "order": 1,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ],
                            "deliveryOptionPanelDisplayList": [
                                "490",
                                "646",
                                "1395",
                                "1640"
                            ],
                            "detailFirstScreenDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "dxTemplateInfo": {},
                            "finalPatternId": 202002,
                            "skuSwitchDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "titleLayout": [
                                [
                                    {
                                        "blockGroup": "title-1",
                                        "blockType": "title",
                                        "componentId": "1395",
                                        "content": "<spanstyle=\"font-size:15px;color:#222222;\"><strong>Shipping:$32.55</strong></span>",
                                        "displayCondition": "previewAmount=invisible",
                                        "distance": 1,
                                        "medusaKey": "shippingfee@freightCost",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ]
                        },
                        {
                            "additionLayout": [
                                {
                                    "blockGroup": "others-1",
                                    "blockType": "others",
                                    "componentId": "490",
                                    "content": "TrackingAvailable",
                                    "displayCondition": "tracking=visible",
                                    "distance": 1,
                                    "medusaKey": "tracking_available@others",
                                    "order": 1,
                                    "type": "textWithMark",
                                    "useInDeliveryOptionPanel": true
                                }
                            ],
                            "bizData": {
                                "deliveryOptionCode": "EMS",
                                "deliveryProviderName": "EMS",
                                "leadTimeSort": [
                                    9999
                                ],
                                "patternId": 202002,
                                "discount": 0,
                                "utParams": "{\"cmd\":false,\"currency\":\"USD\",\"deliveryDate\":\"2022-11-22\",\"fAmount\":35.18,\"fCurrency\":\"USD\",\"itemId\":3256801373733209,\"preOrder\":false,\"productId\":3256801373733209,\"serviceName\":\"EMS\",\"shipFrom\":\"CN\",\"shipToCountry\":\"US\",\"shippingFee\":\"35.18\",\"traceId\":\"2101d8b516666443152346972e0392\",\"trackingAvailable\":true}",
                                "shipFromWarehouseCode": {
                                    "CN": [
                                        "SZU902"
                                    ]
                                },
                                "tracking": "visible",
                                "provider": "cainiao",
                                "itemShipFromType": "same",
                                "itemScene": "default",
                                "shipToCode": "US",
                                "company": "EMS",
                                "currency": "USD",
                                "deliveryDate": "Nov22",
                                "formattedAmount": "$35.18",
                                "shipFrom": "China",
                                "deliveryDayMax": 29,
                                "guaranteedDeliveryTime": 35,
                                "freightCommitDay": "75",
                                "etaTraceId": "ORDER-f-1-228-2505600000-2505600000-1669149915338-1669149915338-EMS-DOOR_DELIVERY-OPERATING-DEF|SELLER_STOCK_UP-CALENDAR_DAY---604800000-604800000---OPERATING-@DELIVERY_FULFIL-CALENDAR_DAY---1900800000-1900800000---OPERATING-|1666644315338",
                                "itemId": 3256801373733209,
                                "displayAmount": 35.18,
                                "solutionBusinessType": "Default",
                                "shippingFee": "charge",
                                "deliveryDayMin": 29,
                                "guaranteedDeliveryTimeProviderName": "cainiao_committed_time",
                                "solutionId": 268001,
                                "shipFromCode": "CN",
                                "displayCurrency": "USD",
                                "deliveryProviderCode": "EMS",
                                "shipTo": "UnitedStates"
                            },
                            "contentLayout": [
                                [
                                    {
                                        "blockGroup": "deliveryTime-0",
                                        "blockType": "deliveryTime",
                                        "componentId": "1640",
                                        "content": "<spanstyle=\"color:#666666;\">From</span><spanstyle=\"color:#222222;\">China</span><spanstyle=\"color:#666666;\">to</span><spanstyle=\"color:#222222;\">UnitedStates</span><spanstyle=\"color:#666666;\">viaEMS</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "ship_from_to_config_detail@freight",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ],
                                [
                                    {
                                        "blockGroup": "deliveryTime-1",
                                        "blockType": "deliveryTime",
                                        "componentId": "646",
                                        "content": "<spanstyle=\"color:#666666;\">Estimateddeliveryon</span><spanstyle=\"color:#222222;\">Nov22</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "estimated_delivery_on@deliveryTime",
                                        "order": 1,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ],
                            "deliveryOptionPanelDisplayList": [
                                "490",
                                "646",
                                "1395",
                                "1640"
                            ],
                            "detailFirstScreenDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "dxTemplateInfo": {},
                            "finalPatternId": 202002,
                            "skuSwitchDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "titleLayout": [
                                [
                                    {
                                        "blockGroup": "title-1",
                                        "blockType": "title",
                                        "componentId": "1395",
                                        "content": "<spanstyle=\"font-size:15px;color:#222222;\"><strong>Shipping:$35.18</strong></span>",
                                        "displayCondition": "previewAmount=invisible",
                                        "distance": 1,
                                        "medusaKey": "shippingfee@freightCost",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ]
                        },
                        {
                            "additionLayout": [
                                {
                                    "blockGroup": "others-1",
                                    "blockType": "others",
                                    "componentId": "490",
                                    "content": "TrackingAvailable",
                                    "displayCondition": "tracking=visible",
                                    "distance": 1,
                                    "medusaKey": "tracking_available@others",
                                    "order": 1,
                                    "type": "textWithMark",
                                    "useInDeliveryOptionPanel": true
                                }
                            ],
                            "bizData": {
                                "deliveryOptionCode": "E_EMS",
                                "deliveryProviderName": "e-EMS",
                                "leadTimeSort": [
                                    9999
                                ],
                                "patternId": 202002,
                                "discount": 0,
                                "utParams": "{\"cmd\":false,\"currency\":\"USD\",\"deliveryDate\":\"2022-12-28\",\"fAmount\":41.24,\"fCurrency\":\"USD\",\"itemId\":3256801373733209,\"preOrder\":false,\"productId\":3256801373733209,\"serviceName\":\"E_EMS\",\"shipFrom\":\"CN\",\"shipToCountry\":\"US\",\"shippingFee\":\"41.24\",\"traceId\":\"2101d8b516666443152346972e0392\",\"trackingAvailable\":true}",
                                "shipFromWarehouseCode": {
                                    "CN": [
                                        "SZU902"
                                    ]
                                },
                                "tracking": "visible",
                                "provider": "cainiao",
                                "itemShipFromType": "same",
                                "itemScene": "default",
                                "shipToCode": "US",
                                "company": "e-EMS",
                                "currency": "USD",
                                "deliveryDate": "Dec28",
                                "formattedAmount": "$41.24",
                                "shipFrom": "China",
                                "deliveryDayMax": 65,
                                "guaranteedDeliveryTime": 35,
                                "freightCommitDay": "75",
                                "etaTraceId": "ORDER-f-1-228-5615995000-5615995000-1672260310338-1672260310338-E_EMS-DOOR_DELIVERY-OPERATING-DEF|SELLER_STOCK_UP-CALENDAR_DAY---604800000-604800000---OPERATING-@DELIVERY_FULFIL-CALENDAR_DAY---4579200000-4579200000---OPERATING-2042,2043,2044,2045,2046|1666644315338",
                                "itemId": 3256801373733209,
                                "displayAmount": 41.24,
                                "solutionBusinessType": "Default",
                                "shippingFee": "charge",
                                "deliveryDayMin": 65,
                                "guaranteedDeliveryTimeProviderName": "cainiao_committed_time",
                                "solutionId": 268001,
                                "shipFromCode": "CN",
                                "displayCurrency": "USD",
                                "deliveryProviderCode": "E_EMS",
                                "shipTo": "UnitedStates"
                            },
                            "contentLayout": [
                                [
                                    {
                                        "blockGroup": "deliveryTime-0",
                                        "blockType": "deliveryTime",
                                        "componentId": "1640",
                                        "content": "<spanstyle=\"color:#666666;\">From</span><spanstyle=\"color:#222222;\">China</span><spanstyle=\"color:#666666;\">to</span><spanstyle=\"color:#222222;\">UnitedStates</span><spanstyle=\"color:#666666;\">viae-EMS</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "ship_from_to_config_detail@freight",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ],
                                [
                                    {
                                        "blockGroup": "deliveryTime-1",
                                        "blockType": "deliveryTime",
                                        "componentId": "646",
                                        "content": "<spanstyle=\"color:#666666;\">Estimateddeliveryon</span><spanstyle=\"color:#222222;\">Dec28</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "estimated_delivery_on@deliveryTime",
                                        "order": 1,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ],
                            "deliveryOptionPanelDisplayList": [
                                "490",
                                "646",
                                "1395",
                                "1640"
                            ],
                            "detailFirstScreenDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "dxTemplateInfo": {},
                            "finalPatternId": 202002,
                            "skuSwitchDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "titleLayout": [
                                [
                                    {
                                        "blockGroup": "title-1",
                                        "blockType": "title",
                                        "componentId": "1395",
                                        "content": "<spanstyle=\"font-size:15px;color:#222222;\"><strong>Shipping:$41.24</strong></span>",
                                        "displayCondition": "previewAmount=invisible",
                                        "distance": 1,
                                        "medusaKey": "shippingfee@freightCost",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ]
                        },
                        {
                            "additionLayout": [
                                {
                                    "blockGroup": "others-1",
                                    "blockType": "others",
                                    "componentId": "490",
                                    "content": "TrackingAvailable",
                                    "displayCondition": "tracking=visible",
                                    "distance": 1,
                                    "medusaKey": "tracking_available@others",
                                    "order": 1,
                                    "type": "textWithMark",
                                    "useInDeliveryOptionPanel": true
                                }
                            ],
                            "bizData": {
                                "deliveryOptionCode": "FEDEX",
                                "deliveryProviderName": "FedexIP",
                                "leadTimeSort": [
                                    9999
                                ],
                                "patternId": 202002,
                                "discount": 10,
                                "utParams": "{\"cmd\":false,\"currency\":\"USD\",\"deliveryDate\":\"2022-11-05\",\"fAmount\":70.59,\"fCurrency\":\"USD\",\"itemId\":3256801373733209,\"preOrder\":false,\"productId\":3256801373733209,\"serviceName\":\"FEDEX\",\"shipFrom\":\"CN\",\"shipToCountry\":\"US\",\"shippingFee\":\"70.59\",\"traceId\":\"2101d8b516666443152346972e0392\",\"trackingAvailable\":true}",
                                "shipFromWarehouseCode": {
                                    "CN": [
                                        "SZU902"
                                    ]
                                },
                                "tracking": "visible",
                                "provider": "cainiao",
                                "itemShipFromType": "same",
                                "itemScene": "default",
                                "shipToCode": "US",
                                "company": "FedexIP",
                                "currency": "USD",
                                "deliveryDate": "Nov05",
                                "formattedAmount": "$70.59",
                                "shipFrom": "China",
                                "deliveryDayMax": 12,
                                "guaranteedDeliveryTime": 35,
                                "freightCommitDay": "75",
                                "etaTraceId": "ORDER-f-1-228-1036800000-1036800000-1667681115338-1667681115338-FEDEX-DOOR_DELIVERY-OPERATING-DEF|SELLER_STOCK_UP-CALENDAR_DAY---0-0---OPERATING-@DELIVERY_FULFIL-CALENDAR_DAY---1036800000-1036800000---OPERATING-|1666644315338",
                                "itemId": 3256801373733209,
                                "displayAmount": 70.59,
                                "solutionBusinessType": "Default",
                                "shippingFee": "charge",
                                "deliveryDayMin": 12,
                                "guaranteedDeliveryTimeProviderName": "cainiao_committed_time",
                                "solutionId": 268001,
                                "shipFromCode": "CN",
                                "displayCurrency": "USD",
                                "deliveryProviderCode": "FEDEX",
                                "shipTo": "UnitedStates"
                            },
                            "contentLayout": [
                                [
                                    {
                                        "blockGroup": "deliveryTime-0",
                                        "blockType": "deliveryTime",
                                        "componentId": "1640",
                                        "content": "<spanstyle=\"color:#666666;\">From</span><spanstyle=\"color:#222222;\">China</span><spanstyle=\"color:#666666;\">to</span><spanstyle=\"color:#222222;\">UnitedStates</span><spanstyle=\"color:#666666;\">viaFedexIP</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "ship_from_to_config_detail@freight",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ],
                                [
                                    {
                                        "blockGroup": "deliveryTime-1",
                                        "blockType": "deliveryTime",
                                        "componentId": "646",
                                        "content": "<spanstyle=\"color:#666666;\">Estimateddeliveryon</span><spanstyle=\"color:#222222;\">Nov05</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "estimated_delivery_on@deliveryTime",
                                        "order": 1,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ],
                            "deliveryOptionPanelDisplayList": [
                                "490",
                                "646",
                                "1395",
                                "1640"
                            ],
                            "detailFirstScreenDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "dxTemplateInfo": {},
                            "finalPatternId": 202002,
                            "skuSwitchDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "titleLayout": [
                                [
                                    {
                                        "blockGroup": "title-1",
                                        "blockType": "title",
                                        "componentId": "1395",
                                        "content": "<spanstyle=\"font-size:15px;color:#222222;\"><strong>Shipping:$70.59</strong></span>",
                                        "displayCondition": "previewAmount=invisible",
                                        "distance": 1,
                                        "medusaKey": "shippingfee@freightCost",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ]
                        },
                        {
                            "additionLayout": [
                                {
                                    "blockGroup": "others-1",
                                    "blockType": "others",
                                    "componentId": "490",
                                    "content": "TrackingAvailable",
                                    "displayCondition": "tracking=visible",
                                    "distance": 1,
                                    "medusaKey": "tracking_available@others",
                                    "order": 1,
                                    "type": "textWithMark",
                                    "useInDeliveryOptionPanel": true
                                }
                            ],
                            "bizData": {
                                "deliveryOptionCode": "DHL",
                                "deliveryProviderName": "DHL",
                                "leadTimeSort": [
                                    9999
                                ],
                                "patternId": 202002,
                                "discount": 0,
                                "utParams": "{\"cmd\":false,\"currency\":\"USD\",\"deliveryDate\":\"2022-11-04\",\"fAmount\":76.66,\"fCurrency\":\"USD\",\"itemId\":3256801373733209,\"preOrder\":false,\"productId\":3256801373733209,\"serviceName\":\"DHL\",\"shipFrom\":\"CN\",\"shipToCountry\":\"US\",\"shippingFee\":\"76.66\",\"traceId\":\"2101d8b516666443152346972e0392\",\"trackingAvailable\":true}",
                                "shipFromWarehouseCode": {
                                    "CN": [
                                        "SZU902"
                                    ]
                                },
                                "tracking": "visible",
                                "provider": "cainiao",
                                "itemShipFromType": "same",
                                "itemScene": "default",
                                "shipToCode": "US",
                                "company": "DHL",
                                "currency": "USD",
                                "deliveryDate": "Nov04",
                                "formattedAmount": "$76.66",
                                "shipFrom": "China",
                                "deliveryDayMax": 11,
                                "guaranteedDeliveryTime": 35,
                                "freightCommitDay": "75",
                                "etaTraceId": "ORDER-f-1-228-950400000-950400000-1667594715338-1667594715338-DHL-DOOR_DELIVERY-OPERATING-DEF|SELLER_STOCK_UP-CALENDAR_DAY---0-0---OPERATING-@DELIVERY_FULFIL-CALENDAR_DAY---950400000-950400000---OPERATING-|1666644315338",
                                "itemId": 3256801373733209,
                                "displayAmount": 76.66,
                                "solutionBusinessType": "Default",
                                "shippingFee": "charge",
                                "deliveryDayMin": 11,
                                "guaranteedDeliveryTimeProviderName": "cainiao_committed_time",
                                "solutionId": 268001,
                                "shipFromCode": "CN",
                                "displayCurrency": "USD",
                                "deliveryProviderCode": "DHL",
                                "shipTo": "UnitedStates"
                            },
                            "contentLayout": [
                                [
                                    {
                                        "blockGroup": "deliveryTime-0",
                                        "blockType": "deliveryTime",
                                        "componentId": "1640",
                                        "content": "<spanstyle=\"color:#666666;\">From</span><spanstyle=\"color:#222222;\">China</span><spanstyle=\"color:#666666;\">to</span><spanstyle=\"color:#222222;\">UnitedStates</span><spanstyle=\"color:#666666;\">viaDHL</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "ship_from_to_config_detail@freight",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ],
                                [
                                    {
                                        "blockGroup": "deliveryTime-1",
                                        "blockType": "deliveryTime",
                                        "componentId": "646",
                                        "content": "<spanstyle=\"color:#666666;\">Estimateddeliveryon</span><spanstyle=\"color:#222222;\">Nov04</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "estimated_delivery_on@deliveryTime",
                                        "order": 1,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ],
                            "deliveryOptionPanelDisplayList": [
                                "490",
                                "646",
                                "1395",
                                "1640"
                            ],
                            "detailFirstScreenDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "dxTemplateInfo": {},
                            "finalPatternId": 202002,
                            "skuSwitchDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "titleLayout": [
                                [
                                    {
                                        "blockGroup": "title-1",
                                        "blockType": "title",
                                        "componentId": "1395",
                                        "content": "<spanstyle=\"font-size:15px;color:#222222;\"><strong>Shipping:$76.66</strong></span>",
                                        "displayCondition": "previewAmount=invisible",
                                        "distance": 1,
                                        "medusaKey": "shippingfee@freightCost",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ]
                        },
                        {
                            "additionLayout": [
                                {
                                    "blockGroup": "others-1",
                                    "blockType": "others",
                                    "componentId": "490",
                                    "content": "TrackingAvailable",
                                    "displayCondition": "tracking=visible",
                                    "distance": 1,
                                    "medusaKey": "tracking_available@others",
                                    "order": 1,
                                    "type": "textWithMark",
                                    "useInDeliveryOptionPanel": true
                                }
                            ],
                            "bizData": {
                                "deliveryOptionCode": "UPS",
                                "deliveryProviderName": "UPSExpressSaver",
                                "leadTimeSort": [
                                    9999
                                ],
                                "patternId": 202002,
                                "discount": 0,
                                "utParams": "{\"cmd\":false,\"currency\":\"USD\",\"deliveryDate\":\"2022-11-01\",\"fAmount\":76.77,\"fCurrency\":\"USD\",\"itemId\":3256801373733209,\"preOrder\":false,\"productId\":3256801373733209,\"serviceName\":\"UPS\",\"shipFrom\":\"CN\",\"shipToCountry\":\"US\",\"shippingFee\":\"76.77\",\"traceId\":\"2101d8b516666443152346972e0392\",\"trackingAvailable\":true}",
                                "shipFromWarehouseCode": {
                                    "CN": [
                                        "SZU902"
                                    ]
                                },
                                "tracking": "visible",
                                "provider": "cainiao",
                                "itemShipFromType": "same",
                                "itemScene": "default",
                                "shipToCode": "US",
                                "company": "UPSExpressSaver",
                                "currency": "USD",
                                "deliveryDate": "Nov01",
                                "formattedAmount": "$76.77",
                                "shipFrom": "China",
                                "deliveryDayMax": 8,
                                "guaranteedDeliveryTime": 35,
                                "freightCommitDay": "75",
                                "etaTraceId": "ORDER-f-1-228-691200000-691200000-1667335515338-1667335515338-UPS-DOOR_DELIVERY-OPERATING-DEF|SELLER_STOCK_UP-CALENDAR_DAY---172800000-172800000---OPERATING-@DELIVERY_FULFIL-CALENDAR_DAY---518400000-518400000---OPERATING-|1666644315338",
                                "itemId": 3256801373733209,
                                "displayAmount": 76.77,
                                "solutionBusinessType": "Default",
                                "shippingFee": "charge",
                                "deliveryDayMin": 8,
                                "guaranteedDeliveryTimeProviderName": "cainiao_committed_time",
                                "solutionId": 268001,
                                "shipFromCode": "CN",
                                "displayCurrency": "USD",
                                "deliveryProviderCode": "UPS",
                                "shipTo": "UnitedStates"
                            },
                            "contentLayout": [
                                [
                                    {
                                        "blockGroup": "deliveryTime-0",
                                        "blockType": "deliveryTime",
                                        "componentId": "1640",
                                        "content": "<spanstyle=\"color:#666666;\">From</span><spanstyle=\"color:#222222;\">China</span><spanstyle=\"color:#666666;\">to</span><spanstyle=\"color:#222222;\">UnitedStates</span><spanstyle=\"color:#666666;\">viaUPSExpressSaver</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "ship_from_to_config_detail@freight",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ],
                                [
                                    {
                                        "blockGroup": "deliveryTime-1",
                                        "blockType": "deliveryTime",
                                        "componentId": "646",
                                        "content": "<spanstyle=\"color:#666666;\">Estimateddeliveryon</span><spanstyle=\"color:#222222;\">Nov01</span>",
                                        "displayCondition": "default=visible",
                                        "distance": 1,
                                        "medusaKey": "estimated_delivery_on@deliveryTime",
                                        "order": 1,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ],
                            "deliveryOptionPanelDisplayList": [
                                "490",
                                "646",
                                "1395",
                                "1640"
                            ],
                            "detailFirstScreenDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "dxTemplateInfo": {},
                            "finalPatternId": 202002,
                            "skuSwitchDisplayList": [
                                "646",
                                "1395",
                                "1640"
                            ],
                            "titleLayout": [
                                [
                                    {
                                        "blockGroup": "title-1",
                                        "blockType": "title",
                                        "componentId": "1395",
                                        "content": "<spanstyle=\"font-size:15px;color:#222222;\"><strong>Shipping:$76.77</strong></span>",
                                        "displayCondition": "previewAmount=invisible",
                                        "distance": 1,
                                        "medusaKey": "shippingfee@freightCost",
                                        "order": 2,
                                        "type": "htmlText",
                                        "useInDeliveryOptionPanel": true,
                                        "useInDetailFirstScreen": true,
                                        "useInSkuSwitch": true
                                    }
                                ]
                            ]
                        }
                    ],
                    "usingNewFreight": true
                },
                "hbaFreeShipping": false,
                "hbaFreight": false,
                "i18nMap": {
                    "HAB_BALLOON_TRAKING_AVAILABLE": "Trackyourorderstatusfromstarttofinish.",
                    "GENERAL_SHIPPING_TO": "to{0}",
                    "SELECT_SHIP_FROM_TIP": "Pleaseselectthecountryyouwanttoshipfrom",
                    "SHIPPING_TO": "Shipping:",
                    "HAB_SHIPPING_TO": "to",
                    "CARRIER": "Carrier",
                    "TO_PROVINCE": "To{provinceName}",
                    "TO_COUNTRY": "to{countryName}",
                    "TO_CITY": "To{cityName}",
                    "CAN_NOE_DELIVER_NOTE": "ThisSupplier/ShippingCompanydoesnotdelivertoyourselectedCountry/Region.",
                    "ESTIMATED_DELIVERT_ON_DAYS": "EstimatedDelivery:{0}days",
                    "CHOOSE_DELIVERT_METHOD": "ShippingMethod",
                    "HAB_BALLOON_DOOR_DELIVERY": "Productsdelivereddirectlytoyourdoor.",
                    "DELIVERED_BY": "Deliveredbefore{date}orfullrefund",
                    "HBA_SHIPPING_INFO": "To{countryName}in{time}daysvia{companyName}",
                    "IN": "in",
                    "SEARCH": "State/Province/Region",
                    "SELECT_SHIP_FROM": "Pleaseselectthecountryyouwanttoshipfrom",
                    "LOGISTIC_COMPOSE_AE": "PoweredbyAliExpress",
                    "HBA_BALLOON_TIPS": "hbaballoontips",
                    "GENERAL_SHIPPING_DELIVERY": "Shipsto",
                    "VAT_DE_DETAIL": "BuyerisGermanimportdeclarant",
                    "SELECTED": "Selected",
                    "HBA_DOR_DELIVERY": "CODAvailableonAPP",
                    "ESTIMATED_DELIVERT_ON_DATE": "EstimatedDeliveryon{date}",
                    "OR_FULL_REFOUND": "Fullrefund",
                    "LOGISTIC_COMPOSE_BRAND_MIND": "CombinedDelivery",
                    "PLAZA_SHOP_NOW_RECEIVE_ON": "Buyitnowandreceiveiton{date}(est.)",
                    "LOGISTIC_COMPOSE_ORDERS_OVER": "Onordersover{0}",
                    "FAST_SHIPPING": "FastShipping",
                    "CAN_NOT_DELIVER": "Cannotdeliver",
                    "HBA_TRAKING_AVAILABLE": "TrackingAvailable",
                    "DAYS": "days",
                    "GENERAL_SHIPPIING_FROM": "From{0}",
                    "GENERAL_SHPPING_MORE": "Moreoptions",
                    "FREE_SHIPPING": "FreeShipping",
                    "COST": "Cost",
                    "BALLOON_TIP": "Ifyoufinishthepaymenttoday,yourorderwillarrivewithintheestimateddeliverytime.",
                    "SHIP_MY_ITEM_TO": "Shipto",
                    "HAB_BALLOON_VAT_INCLUDED": "ItempricelistedincludesVAT.",
                    "TRACKING": "Tracking",
                    "LOGISTIC_COMPOSE_SPEED_UP": "Speedupto",
                    "PLAZA_BALLOON_TIP": "Thisdeliverydateisestimated.Thecalculationisbasedonseveralfactors,includingtheaddress,shippingoptionselectedandtheavailabilityshownontheproductdetailpage.",
                    "HBA_TVAT_INCLUDED": "Withsterileservice",
                    "ESTIMATED_DELIVERY": "EstimatedDelivery",
                    "TO_WHERE": "Towhere",
                    "VAT_NUMBER": "VATnumber:",
                    "TO_VIA": "to{countryName}via{companyName}",
                    "APPLY": "Apply"
                },
                "id": 0,
                "name": "ShippingModule",
                "productId": 3256801373733209,
                "regionCountryName": "UnitedStates",
                "suppressFreightInvoke": true,
                "userCountryCode": "US",
                "userCountryName": "UnitedStates"
            },
            "skuModule": {
                "categoryId": 60702,
                "features": {},
                "forcePromiseWarrantyJson": "{}",
                "hasSizeInfo": false,
                "hasSkuProperty": true,
                "i18nMap": {
                    "SIZING_INFO": "SizeInfo",
                    "BUST_PROMPT": "Pleaseselectyourbustsize.",
                    "GLASSES_DIALOG_TITLE": "PrescriptionDetail",
                    "NV_ADD": "Sometimesseenonyourprescriptionas\"NV,ADD,Near,Reading,orReadingAddition.\"\"NV\"standsfor\"Near-Vision.\"Thisnumberindicatestheadditionalmagnificationthatisaddedtothedistanceprescriptiontogetthereadingportionofthelensinamulti-focalprescription.WedisplayasingleNV-ADDfieldsinceitisalmostalwaysthesamevalueforbotheyes.",
                    "SPH": "SPHERE(SPH),orSpherical,referstotherefractivecorrectionintheprescription.Minus(-)standsfornearsightedness,andPlus(+)standsforfarsightedness.If\"PL\"or\"Plano\"iswrittenfortheeitherSPHvalueonyourprescription,youshouldselectavalueof0.00.\r\r\nOD-SPHissphericalcorrectionforyourrighteye.\r\r\nOS-SPHissphericalcorrectionforyourlefteye.\r\r\nOD-SPHissphericalcorrectionforyourRIGHTeye.\r\r\nOS-SPHissphericalcorrectionforyourLEFTeye.",
                    "PUPILLARY_PROMPT": "PleaseselectPD(PupillaryDistance).",
                    "SIZE_HOVER_TITLE": "Mightbedifferentfromyourlocalsize,pleaseseethesizinginfoformoreinformation.",
                    "FLOOR_CONTENT": "Beginatthehollowspacebetweenthecollarbonesandpulltapestraightdowntothefloor.",
                    "CUSTOM_SIZE_CONTENT": "Yourbodymeasurements",
                    "NV_ADD_PROMPT": "PleaseselectNV-ADD.",
                    "PLEASE_ENTER": "pleaseenter",
                    "WAIST_TITLE": "Waist",
                    "WAIST_CONTENT": "Measurethesmallestpartofthewaist.\r\r\nKeeptapeslightlyloosetoallowforbreathingroom.",
                    "CYL": "CYLINDER(CYL),orCylinder,referstothestrengthofthecorrectionfortheastigmatismintheeye.Itcanbeeitherpositiveornegative.IfthereisaCYLvalueforaneye,theremustbeanAxisvalueforthateye.\r\r\nIf\"DS\"or\"SPH\"or\"spherical\"isnotedintheCYLspaceonyourprescription,youhavenoastigmatisminthateye.Inthatcase,enter0.00inboththeCYLandAxis.\r\r\nOD-CYLiscylindercorrectionforyourrighteye.\r\r\nOS-CYLiscylindercorrectionforyourlefteye.",
                    "SERVICE": "Service",
                    "BUST_CONTENT": "Wearanunpaddedbra(yourdresswillhaveabuilt-inbra).\r\r\nPulltapeacrossthefullestpartofthebust(atnipplelevel).",
                    "SIZE_INFO": "SizeInfo",
                    "SIZE_INFO_DESC": "*Thesechartsareforreferenceonly.Fitmayvarydependingontheconstruction,materialsandmanufacturer.",
                    "ITEM_CONDITION_TIP": "Condition",
                    "BTN_CANCEL": "Cancel",
                    "HOW_TO_MEASURE": "HowtoMeasure",
                    "SIZE_INFO_TIP": "onceyouknowyourbodymeasurements,consulttheSizeChartontheproductpagesforactualitemmeasurementstodeterminewhichsizeyoushouldpurchase.",
                    "FLOOR_PROMPT": "Pleaseselectthehollowtofloormeasurement.",
                    "FLOOR_TITLE": "HollowtoFloor(BareFoot)",
                    "SIZE_INFO_COMPARE_TIP": "Tochoosethecorrectsizeforyoumeasureyourbodyasfollows",
                    "UNIT_PROMPT": "Pleaseselectunit.",
                    "SELECT": "Select",
                    "HIPS_TITLE": "Hips",
                    "HEIGHT_PROMPT": "Pleaseselecttheyourshoes'heelheight.",
                    "WAIST_PROMPT": "Pleaseselectyourwaistsize.",
                    "BTN_SAVE": "Save",
                    "TITLE_OPTIONAL": "Localrepairwarrantyin{country}<span>(optional)</span>",
                    "SIZE_DIALOG_TITLE": "CustomSize",
                    "GLASSES_TIP": "Pleaseprovidetheinformationfromyourmedicalprescription.Ifyouhaveanyspecialneedsorhaveanyquestions,pleasecontacttheseller.",
                    "SIZE_CHART": "SizeChart",
                    "HIPS_PROMPT": "Pleaseselectyourhipssize.",
                    "SPH_PROMPT": "Itlookslikeyouforgottoenteryourprescription.Pleasefillinthesphere,cylinderandaxis.",
                    "HIPS_CONTENT": "Findthewidestpartofthehipsorrunthemeasurementtapearoundyourhipbone.",
                    "BUST_TITLE": "Bust",
                    "AXIS": "AXS,orAxis,referstotheangleofthecorrectionfortheastigmatismintheeye(ifoneexists)from1to180.IfthereisanAxisvalueonaneye,theremustbeaCYL(Cylinder)valueonthateye.IfthereisnoCylindervalueorifthevalueiszero,theODAxisvalueisenteredas0.00.\r\r\nTheAxisvalueisusuallywrittenas3digits,whichmeansifyourAxisvalueis5,itisoftenwrittenas005.ThisAxisvalueisstill5,regardlessofhowitisdisplayed.\r\r\nODAxisisAxiscorrectionforyourrighteye.\r\r\nOSAxisisAxiscorrectionforyourlefteye."
                },
                "id": 0,
                "name": "SKUModule",
                "productSKUPropertyList": [
                    {
                        "isShowTypeColor": false,
                        "order": 3,
                        "showType": "none",
                        "showTypeColor": false,
                        "skuPropertyId": 200009209,
                        "skuPropertyName": "PlugType",
                        "skuPropertyValues": [
                            {
                                "propertyValueDisplayName": "EUPlug",
                                "propertyValueId": 201484777,
                                "propertyValueIdLong": 201484777,
                                "propertyValueName": "EUPlug",
                                "skuPropertyTips": "EUPlug",
                                "skuPropertyValueShowOrder": 2,
                                "skuPropertyValueTips": "EUPlug"
                            },
                            {
                                "propertyValueDisplayName": "UKPlug",
                                "propertyValueId": 201484778,
                                "propertyValueIdLong": 201484778,
                                "propertyValueName": "UKPlug",
                                "skuPropertyTips": "UKPlug",
                                "skuPropertyValueShowOrder": 2,
                                "skuPropertyValueTips": "UKPlug"
                            },
                            {
                                "propertyValueDisplayName": "AUPlug",
                                "propertyValueId": 201484779,
                                "propertyValueIdLong": 201484779,
                                "propertyValueName": "AUPlug",
                                "skuPropertyTips": "AUPlug",
                                "skuPropertyValueShowOrder": 2,
                                "skuPropertyValueTips": "AUPlug"
                            }
                        ]
                    }
                ],
                "skuPriceList": [
                    {
                        "freightExt": "{\"itemScene\":\"default\",\"p0\":\"12000016593615824\",\"p1\":\"13.74\",\"p10\":[132402,128160,86914,218119,103060,86884,84809,221435],\"p3\":\"USD\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{\\\"scItemId\\\":\\\"666123302005\\\"}\",\"p9\":\"US$13.74\"}",
                        "skuAttr": "200009209:201484779",
                        "skuId": 12000016593615824,
                        "skuIdStr": "12000016593615824",
                        "skuPropIds": "201484779",
                        "skuVal": {
                            "availQuantity": 3,
                            "bulkOrder": 5,
                            "discount": "25",
                            "inventory": 3,
                            "isActivity": true,
                            "optionalWarrantyPrice": [],
                            "skuActivityAmount": {
                                "currency": "USD",
                                "formatedAmount": "US$13.74",
                                "value": 13.74
                            },
                            "skuAmount": {
                                "currency": "USD",
                                "formatedAmount": "US$18.32",
                                "value": 18.32
                            },
                            "skuCalPrice": "18.32"
                        }
                    },
                    {
                        "freightExt": "{\"itemScene\":\"default\",\"p0\":\"12000016593615823\",\"p1\":\"14.74\",\"p10\":[132402,128160,86914,218119,103060,84809,221435],\"p3\":\"USD\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p9\":\"US$14.74\"}",
                        "skuAttr": "200009209:201484778",
                        "skuId": 12000016593615824,
                        "skuIdStr": "12000016593615823",
                        "skuPropIds": "201484778",
                        "skuVal": {
                            "availQuantity": 0,
                            "bulkOrder": 5,
                            "discount": "25",
                            "inventory": 0,
                            "isActivity": true,
                            "optionalWarrantyPrice": [],
                            "skuActivityAmount": {
                                "currency": "USD",
                                "formatedAmount": "US$14.74",
                                "value": 14.74
                            },
                            "skuAmount": {
                                "currency": "USD",
                                "formatedAmount": "US$19.66",
                                "value": 19.66
                            },
                            "skuCalPrice": "19.66"
                        }
                    },
                    {
                        "freightExt": "{\"itemScene\":\"default\",\"p0\":\"12000016593615822\",\"p1\":\"13.65\",\"p10\":[132402,128160,86914,218119,103060,86884,84809,221435],\"p3\":\"USD\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{\\\"scItemId\\\":\\\"666122774939\\\"}\",\"p9\":\"US$13.65\"}",
                        "skuAttr": "200009209:201484777",
                        "skuId": 12000016593615822,
                        "skuIdStr": "12000016593615822",
                        "skuPropIds": "201484777",
                        "skuVal": {
                            "availQuantity": 10,
                            "bulkOrder": 5,
                            "discount": "25",
                            "inventory": 10,
                            "isActivity": true,
                            "optionalWarrantyPrice": [],
                            "skuActivityAmount": {
                                "currency": "USD",
                                "formatedAmount": "US$13.65",
                                "value": 13.65
                            },
                            "skuAmount": {
                                "currency": "USD",
                                "formatedAmount": "US$18.20",
                                "value": 18.2
                            },
                            "skuCalPrice": "18.20"
                        }
                    }
                ],
                "warrantyDetailJson": "[]"
            },
            "specsModule": {
                "features": {},
                "i18nMap": {},
                "id": 0,
                "name": "SpecsModule",
                "props": [
                    {
                        "attrName": "BrandName",
                        "attrValue": "MEXI"
                    },
                    {
                        "attrName": "Origin",
                        "attrValue": "MainlandChina"
                    },
                    {
                        "attrName": "Storage/Tankless",
                        "attrValue": "Instant/Tankless"
                    },
                    {
                        "attrName": "Capacity",
                        "attrValue": "-"
                    },
                    {
                        "attrName": "Power(W)",
                        "attrValue": "2100-5000W"
                    },
                    {
                        "attrName": "Voltage(V)",
                        "attrValue": "220V"
                    },
                    {
                        "attrName": "Installation",
                        "attrValue": "Freestanding"
                    },
                    {
                        "attrName": "Certification",
                        "attrValue": "NONE"
                    },
                    {
                        "attrName": "Style",
                        "attrValue": "Vertical"
                    },
                    {
                        "attrName": "ControlMode",
                        "attrValue": "IntelligentControl"
                    },
                    {
                        "attrName": "HousingMaterial",
                        "attrValue": "Stainlesssteel"
                    },
                    {
                        "attrName": "Timetomarket",
                        "attrValue": "2016"
                    },
                    {
                        "attrName": "ModelNumber",
                        "attrValue": "A6HB3TT202560-EU"
                    },
                    {
                        "attrName": "Item",
                        "attrValue": "InstantImmersionHeater"
                    },
                    {
                        "attrName": "Ratedfrequency",
                        "attrValue": "50Hz"
                    },
                    {
                        "attrName": "OptionalPlug",
                        "attrValue": "EUPlug/UKPlug/AUPlug"
                    },
                    {
                        "attrName": "WireMaterial",
                        "attrValue": "PVC+CoarsenedCopperWire"
                    }
                ]
            },
            "storeModule": {
                "companyId": 246081151,
                "countryCompleteName": "China",
                "detailPageUrl": "//www.aliexpress.com/item/3256801373733209.html",
                "esRetailOrConsignment": false,
                "features": {},
                "feedbackMessageServer": "//message.aliexpress.com",
                "feedbackServer": "//feedback.aliexpress.com",
                "followed": false,
                "followingNumber": 260,
                "hasStore": true,
                "hasStoreHeader": true,
                "hideCustomerService": false,
                "i18nMap": {
                    "COUSTOMER_SERVICE": "CustomerService",
                    "VISIT_STORE": "VisitStore",
                    "CONTACT_SELLER": "Contact",
                    "FOLLOWING_STATE": "Following",
                    "UNFOLLOWING_STATE": "Follow",
                    "POSITIVE_FEEDBACK": "PositiveFeedback",
                    "FOLLOWERS": "Followers",
                    "FOLLOWER": "Follower",
                    "TOP_SELLER": "TopBrands",
                    "STORE_CATEGORIES": "StoreCategories"
                },
                "id": 0,
                "name": "StoreModule",
                "openTime": "Jul18,2019",
                "openedYear": 3,
                "positiveNum": 752,
                "positiveRate": "95.5%",
                "productId": 3256801373733209,
                "sellerAdminSeq": 238101085,
                "sessionId": "f7e6405836b54f5f800992aac281d4b3",
                "siteType": "usa",
                "storeName": "healthylive Store",
                "storeNum": 1101343461,
                "storeURL": "//www.aliexpress.com/store/1101343461",
                "topBrandDescURL": "https://sale.aliexpress.com/topbrand.htm",
                "topRatedSeller": false
            },
            "titleModule": {
                "features": {},
                "feedbackRating": {
                    "averageStar": "5.0",
                    "averageStarRage": "100.0",
                    "display": true,
                    "evarageStar": "5.0",
                    "evarageStarRage": "100.0",
                    "fiveStarNum": 1,
                    "fiveStarRate": "100",
                    "fourStarNum": 0,
                    "fourStarRate": "0",
                    "oneStarNum": 0,
                    "oneStarRate": "0",
                    "positiveRate": "100.0",
                    "threeStarNum": 0,
                    "threeStarRate": "0",
                    "totalValidNum": 1,
                    "trialReviewNum": 0,
                    "twoStarNum": 0,
                    "twoStarRate": "0"
                },
                "formatTradeCount": "13",
                "i18nMap": {
                    "REVIEWS": "Reviews",
                    "VIEW_ALL_REVIEWS": "ViewAllReviews",
                    "REVIEW": "Review",
                    "VIEW_OTHER_TITLE": "Viewtitleinmulti-language(machinetranslated)",
                    "VIEW_EN_TITLE": "VieworiginaltitleinEnglish",
                    "FREEBIE_REVIEW": "ReviewOfFreebies",
                    "FREEBIE_REVIEWS": "ReviewsOfFreebies"
                },
                "id": 0,
                "name": "TitleModule",
                "orig": false,
                "origTitle": false,
                "subject": "2500WFloatingElectricWaterHeaterBoilerHeatingPortableImmersionReheaterSuspensionBathroomSwimmingPool",
                "titleTags": [],
                "tradeCount": 13,
                "tradeCountUnit": "orders",
                "trans": false,
                "transTitle": false,
                "product_title": "2500w Floating Electric Water Heater Boiler Heating Portable Immersion Reheater Suspension Bathroom Swimming Pool - Electric Water Heaters - AliExpress",
                "product_description": "Get electric water heater boiler heating portable at a bigger saving. Find products of Electric Water Heaters with high quality at AliExpress.\nEnjoy ✓Free Shipping Worldwide! ✓Limited Time Sale ✓Easy Return."
            },
            "webEnv": {
                "country": "US",
                "currency": "USD",
                "env": {
                    "valMap": {
                        "g11n:locale": "en_US",
                        "g11n:timezone": "",
                        "ua:device": "pc",
                        "user:id": "",
                        "g11n:country": "US",
                        "page:name": "",
                        "g11n:site": "usa",
                        "page:app": "",
                        "ua:browser": "chrome",
                        "ua:platform": "other",
                        "user:type": "",
                        "page:id": "item_html",
                        "user:member": "",
                        "g11n:currency": "USD"
                    },
                    "zone": "global_env"
                },
                "host": "www.aliexpress.us",
                "hostname": "ae-glodetail-342305b4a7903094c09ce785e7bdbadb-6qjvt",
                "ip": "173.211.37.195",
                "lang": "en_US",
                "language": "en",
                "locale": "en_US",
                "reqHost": "https://www.aliexpress.us",
                "site": "usa",
                "traceId": "2101d8b516666443152346972e0392"
            }
        }
    }
    // productInfo: {
    //     product_id: "",
    //     product_small_image_urls: false,
    //     feedBackRating: false,
    // },
};

const useInitialState = () => {

    const [state, setState] = useState(initialState)

    const callNewOffersData = () => {
        console.log("new offers ->", state)
        const options = {
            method: 'GET',
            url: 'https://magic-aliexpress1.p.rapidapi.com/api/bestSales/SortedByNewest',
            params: {limit: '10'},
            headers: {
                'X-RapidAPI-Key': process.env.NEWRAPIDAPI_KEY,
                'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setState({
                    ...state,
                    newOffersData: response.data
                })
        }).catch(function (error) {
            console.error(error);
        });
    }

    const callNewBestSalesData = (pageNum = 1) => {
        console.log("best sales ->", state)
        const options = {
            method: 'GET',
            url: 'https://magic-aliexpress1.p.rapidapi.com/api/bestSales/products',
            params: {page: pageNum, priceMax: '30', priceMin: '5', sort: 'EVALUATE_RATE_ASC'},
            headers: {
                'X-RapidAPI-Key': process.env.NEWRAPIDAPI_KEY,
                'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setState({
                    ...state,
                    bestSalesData: {
                        docs: [...state.bestSalesData.docs, ...response.data.docs],
                        hasNextPage: response.data.hasNextPage,
                        nextPage: response.data.nextPage,
                        page: response.data.page,
                    }
                })
        }).catch(function (error) {
            console.error(error);
        });
    }

    const productDescription = (productId = 0) => {
        console.log("product", state)
        const options = {
            method: 'GET',
            url: `https://magic-aliexpress1.p.rapidapi.com/api/product/${productId}`,
            params: {lg: 'en', targetCurrency: 'USD'},
            headers: {
                'X-RapidAPI-Key': process.env.NEWRAPIDAPI_KEY,
                'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log("dataPro", response.data)
            setState({ ...state, productInfo: response.data })
        }).catch(function (error) {
            console.error(error);
        });
    }

    return {
        state,
        callNewOffersData,
        callNewBestSalesData,
        productDescription,
    }
}

export default useInitialState