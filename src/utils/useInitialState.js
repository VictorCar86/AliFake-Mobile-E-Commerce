import { useEffect, useState } from 'react';
const axios = require("axios");

const initialState = {
    bestSalesData: {
        docs: [
            {
                "_id": "62dd906278ea02001ac738d7",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/4000576141971.html?pdp_npi=2%40dis%21USD%2127.99%2122.67%21%21%21%21%21%40214fbade16651910186938938e%2112000028332795690%21affd",
                "product_id": 4000576141971,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H776dbe520e58407fb771a87d6c321af2y.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H776dbe520e58407fb771a87d6c321af2y.jpg",
                        "https://ae04.alicdn.com/kf/Hc4142d6f444d4b70a350369194f31fe7Y.jpg",
                        "https://ae04.alicdn.com/kf/Hf9b459e6c5bc46e2a657e60b5740ee6ae.jpg",
                        "https://ae04.alicdn.com/kf/Hdc13b851b0ff4e8aa29ece2d3e25df48k.jpg",
                        "https://ae04.alicdn.com/kf/He842848f9135494f9fcf292877bc5524C.jpg",
                        "https://ae04.alicdn.com/kf/He12cb731b729464b8049c18ea91e50b9s.jpg"
                    ]
                },
                "product_title": "3300W Electric Instant Water Heater Faucet Tap LED Ambient Light Temperature Display Bathroom Kitchen Instant Heating Tap",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXwIOKj3385GCUx0j9P7IZMyVGfnqRddEiUlXZe2uicJBWp0XEWnriZxjZAOCf8H48tRGC9A6fMGEqg3DFVTN55ZlThgW2JtRHVwNWWUt2oRXuGkE6CzucLuhfJbkvXNyrgB36YX4PhBxDG6MOKv50LoStQp9ciRZ4a88vE0WXu3GrR8VL3nR9UKJXLhjBrvqW8F4yn8xnLaYAi04XxL2P3Aj4quBRCAxBNFr1pTDtkfuDYlSjETUrdDaNw0VljDOgIXkO6f57rqdZs1z9G2EYMx17tCGwfFVosBh2rTtwCf8Or1gXTIj76nBQnwiGtqKsH5TjFCmyvayn1wZ7BGVIZKUeDvmgkVH5k0tGXtSt8aRPTsfwiAQapAnX697EgQs0znZsQKgYe5Mwds1cBAO5WY5SFOV1b1PfxdP57CWGjoAnxFccqtfTJwJPNIgkmaIMruWQd5JAa7N3NaNnAM6ahrQRJgIyqtJ8AsAg0UOlgPmiCXfwwC5R7tabuq6lpfFgyDrtYUFIzbCDoS9GfOz825M6qVJODNE1NNZkqqyRtZCrPYwn6BuiwWM8LCwQgXX5jjvX1iF4TdUaKV5Q6XglDVniJ2TD",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 22.67,
                "app_sale_price_currency": "USD",
                "original_price": 27.99,
                "sale_price": 22.67,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 32,
                "price_trend": 3.8479157123225076,
                "review_trend": 0,
                "sale_trend": -13.513513513513514
            },
            {
                "_id": "62dd90b078ea02001ac73ab7",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/4001237355246.html?pdp_npi=2%40dis%21USD%2119.44%2116.52%21%21%21%21%21%40214f89b716651910205418575e%2112000028624476877%21affd",
                "product_id": 4001237355246,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H373b98c38f8c45f9b923e30814ab4e237.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H373b98c38f8c45f9b923e30814ab4e237.jpg",
                        "https://ae04.alicdn.com/kf/H8644dec384244695a090e16f643a2c7dS.jpg",
                        "https://ae04.alicdn.com/kf/H93671d5aa7244eb3ab62ab5f23d9a8deB.jpg",
                        "https://ae04.alicdn.com/kf/H3137c7498eb94093b2f451910dbd10fan.jpg",
                        "https://ae04.alicdn.com/kf/H4eb159788cdd4fd2bd2104ed54fc7033Q.jpg",
                        "https://ae04.alicdn.com/kf/H46fbdaa93abd4a628d48cf2b6168ef34m.jpg"
                    ]
                },
                "product_title": "110V Stainless Steel Electric Kitchen Instant Faucet Heater Hot Cold Dual-use Tankless Vientiane Hose Heating Tap LED Display",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXQ4clBbehpeft4A73mv7PkuyoIzgYcrlkKZElp5HqKK7MHANEocjSC3jDeQGoU3IEQviOjEc1smvp6HDukbE77aLSIXhlu5K4b0ljvKzq0Tcpi3De1jwQxYYeI0jWjuuLZDDHXZqFkXTM7MjQ1QJXW7mBs937PpfQbCbwMq8tIosx43JOtnkvYFE9ww56Om8ECyRep2KZL2b4yuWa8h1tudPoCkrf6mg4iXmLkAGFTFB8HFKge5b7lcpKMZc11G8kkxMzcMuPRWV3fIMWE7odG5Q6WR9Xdfz9v7xoSXxqutDU0k9DCBYfdIAnuHacP6VFl1CJmbRG3E94kBwUSl6dCT1lRcOolNvqWbud2B2XD2IJImUXm97Q5NcURaSxpTQl4S5ygF69oIecZp1QiyCaatBMfXyAC4UHTPOukJLDOGV6mp0Vua9v8nuBKAxVT8VKtkVylkicFebDggfidNXxhg2e9Kerdl6cg44KuyugquGaI2CbBTft2yjFqkmf5GOHQQQOWrWd88KVorYfGQlun2qUG0ifNlsS3OSUBO45KTIGpaGzWHzDcrqyXdZCFyLEYmz9xOn4LS7TfTmYxoPoHSXO6MkF",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 16.52,
                "app_sale_price_currency": "USD",
                "original_price": 19.44,
                "sale_price": 16.52,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 16,
                "price_trend": -6.666666666666665,
                "review_trend": 0,
                "sale_trend": 14.285714285714285
            },
            {
                "_id": "62dd90cf78ea02001ac73b71",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005003654313984.html?pdp_npi=2%40dis%21USD%2118.02%2114.06%21%21%21%21%21%40214fbba816651910243841270e%2112000026667531260%21affd",
                "product_id": 1005003654313984,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H375aff4d8338479794f39b1f69fb9d2bS.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H375aff4d8338479794f39b1f69fb9d2bS.jpg",
                        "https://ae04.alicdn.com/kf/H99721b1f66bd434b8b6fd6759fb80913R.jpg",
                        "https://ae04.alicdn.com/kf/H141efca8c6ff4991a6cd0394e9fe99e3G.jpg",
                        "https://ae04.alicdn.com/kf/H966472a4729f490d9cbf15aeb252eaf68.jpg",
                        "https://ae04.alicdn.com/kf/H61d9c45c1f14401a87000a189f4c8759D.jpg",
                        "https://ae04.alicdn.com/kf/H5ad1f239718c41a0af0f262ee946cc0bK.jpg"
                    ]
                },
                "product_title": "Mini Personal Rotary Washing Machine, Portable Ultrasonic Turbine Technology, Dirt Washing Machine For Family Travel",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTYbtmzPD7BWpKObs8vD34Vz16j8O08tRB4xc8WHFHaNPGVpIE0XdMAcoVCUfJqJW45ukLUDhtVQOz7kqxwZ69h0FYxp8d5GRkjHQBxgwA7mmCZf3klLKcxmv1LVWu9QoQzAl5gQfyJbPHNqL3Lx6yswne8QxaPRyos7QSg8v0LVQi60vwY6GEjg3s0kJYXr7dPsdXelp9TIb3OBmDY1D4muXsW1JuTStRwmHqGfuJmCh4644WP2pbqcLZyndU1BNo0I4C1qsJ0IjP58ZXdjqnvPiJITzDQg4rU14plZLlCN2PSBgPxryxR4SkbybfnoDLRbqmeji47Ryj8HhCmOfwBY1Wxkgyugyfl35ZlVvlaDKti43DYAUotdX96iNLOjf6aUGsPkQLsknAU5ehoCykGJijnVQCGhYUFn4QagCK1LAxF5Ifhy86hJvxsIW8qDqKOJuvGaSJxKfzAmHJgClQgyBiM6QceLrqIyPv4w550ErXhyqgJS7KyzbVvLvjLNBjoT5JU6igSTG8EqQMew2zd0J08rkoqNvlDfR5qxayieQrSu7klu8u6OkHzLv8jiZwSOOIR7rqMBD0FZs38AQAExxJKRIDd",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 14.06,
                "app_sale_price_currency": "USD",
                "original_price": 18.02,
                "sale_price": 14.06,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 9,
                "price_trend": 4.847129008202836,
                "review_trend": 0,
                "sale_trend": -18.181818181818183
            },
            {
                "_id": "62dd909478ea02001ac73a09",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005003472936356.html?pdp_npi=2%40dis%21USD%2117.47%2114.15%21%21%21%21%21%40214fbba816651910243841270e%2112000025944039882%21affd",
                "product_id": 1005003472936356,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H01604421a61a475890dcd961e5f866c25.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H01604421a61a475890dcd961e5f866c25.jpg",
                        "https://ae04.alicdn.com/kf/H61361bbceb1b46b39a87742ecff3651aZ.jpg",
                        "https://ae04.alicdn.com/kf/H759dff9316f54b4e8b74546a30207bf3Y.jpg",
                        "https://ae04.alicdn.com/kf/H4f66ec730a9c4bdbba302f91c7c7bf10c.jpg",
                        "https://ae04.alicdn.com/kf/H045f4ace12814dd1b6fb50238eae687b7.jpg",
                        "https://ae04.alicdn.com/kf/H59b513f977ba45ae8c9a968d9611d7ffC.jpg"
                    ]
                },
                "product_title": "6000W Instant Electric Water Heater Heater Bathroom Quick Hot Water Machine Intelligent Constant Temperature Kitchen Washing",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXQCwuIHhXewglX9VOhsSwmXIB3p2Nbii5iwx77A1C7xk8WRva9aPon9HsI62P9eUsDpTuywlH9IR3j74LkZHvumK3qXqPizDvqhkZmnOkqKwUacIyB0PAOt6HyfMaCLynrdJYM6V91Ur7dVItppPcBYiGfppKiTc7i8rcvKVb0n2EzF9wGhVvkk8VmiRN8sLBiIHVlT66dwfBzOkFjlvdZKqIe4qD0sReSvKlVAisaF4ALkRg1j7Z7CwY28zhCq3jlL0M33Rfq1aEpCseWc2v1Tr7bsRbSui3hsbH2UlPpMYbBiFtEFRY8IMollSfaX3GgtVqTloGvrG36Q8G5I6Td7TJNsMhyDvQSlZH5xjsVSgAJQp6ui20ajHKxconjEbhjIwm0mT4MFXYg9fDHVFb1pM66TM8ZIiG6cy1z6hCSIsnzqi9iSmzebqnlTDYowTrkhCtw8bi7smfXb7vRnI78KXUHny3UACGIhnuPb3xTscc2baa4nMIoGxLVXZ8oCpquQWAU2LR177AmdiXFizKA5RWmZuIDUFvP1RrXeOhlqOnOmV3zPGdD7zCbFjYz2ghZJwZOML7LI7CET15EZWmfsrU7swP",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 14.15,
                "app_sale_price_currency": "USD",
                "original_price": 17.47,
                "sale_price": 14.15,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 9,
                "price_trend": 1.2160228898426317,
                "review_trend": 6.044538706256631,
                "sale_trend": -52.63157894736842
            },
            {
                "_id": "62dd905878ea02001ac7389b",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/32942871300.html?pdp_npi=2%40dis%21USD%2122.50%2114.62%21%21%21%21%21%40214f899116651910167588549e%2166172378659%21affd",
                "product_id": 32942871300,
                "product_main_image_url": "https://ae04.alicdn.com/kf/HTB1c8gxXovrK1RjSspcq6zzSXXaJ.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/HTB1c8gxXovrK1RjSspcq6zzSXXaJ.jpg",
                        "https://ae04.alicdn.com/kf/HTB1cuszXdfvK1RjSspfq6zzXFXaR.jpg",
                        "https://ae04.alicdn.com/kf/HTB1NdIAXcrrK1Rjy1zeq6xalFXaw.jpg",
                        "https://ae04.alicdn.com/kf/HTB12IbBfNjaK1RjSZKzq6xVwXXa9.jpg",
                        "https://ae04.alicdn.com/kf/Ha1131633c82c49ae8a0f19bec4baa68eA.jpg"
                    ]
                },
                "product_title": "LJXH Full 304 Stainless Steel Water Heating Element 1 1/4\" Electric  Immersion Heater for Solar Water Tank  220V 380V",
                "promotion_link": "https://s.click.aliexpress.com/s/hvZ0wBqeusjS7glVE5yzEB5c1tCCM0q84yBktAk78J3YAWXLUwgFMnTwxhmuP5GnUblpUMAasTxRCiTxfc1YT2cEVKo2BJJFyg6moM4BjIYSw1p2kDdJ7pQTkP3dPZ2uaOdlvkqKjCja6cOZ4OW7SDyYY0Zi8Nq5X7bIaHYccsC9UAqGCnysZl7WD89wHsIJQYnatQUvgwzyF2SqUhz5fEj3z58L4Me6vRraDrGs4wxlrFfIcJXZzEZ9mQFccrYJyoSVIgu5yt0luoJrZA1r1E7u0jGZFBabkQ38gxkUvDwnXOQQDOu8gKSfvqtQvvTm1qQAHaFdXOwfkp9aGYjt1V6syujDeHLPJFgZCjTrfokDd9IL6FzQurcYjq67inq3olhrMUuUA8M54CM4DZ66B4rycTdDAd08fJPK8hIwXzmVWyjw9TErSmL0mjCoKiPyaobWYeB3no6W6enmiSkzSusrkzccURyWFMBfZClhzMbcUwBIvLc2PpyRGFcfis5r23sxKN4RslpB8T6MLCEqXdlY1AS9Euf4cqRtugBfqz4NoiZdyoh9vUTozHLixYGuXEhQ9pYeyZ3tn6g1T3DyMphpAvQFPzNScFKK0scGg5aaigAPZ7yqExjo6slBflImGZ8IIUzQNASvw9AQ05Er5tbxpWdF4dOo3bFc3KbxO7Jpp1ihdyGEicy6fQotksnZAhTPlmsg7XQwaMBepACbY12QwjDsMS65An2iR920WHeA3C9DdhWtGiUi06zGZbNyTdm3qDcpMJNJ95E7uQh0Sc3a18O1XrN2SjmpSp5mOq4tpsFSbfrM7Q8Gp5kv7FGSV5bWA4dOuEfdIJMgL8Ks4TfBfRDljeiX2aSKQ6b8VKhsYC0iFwWsRnkTFT0f",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 14.62,
                "app_sale_price_currency": "USD",
                "original_price": 22.5,
                "sale_price": 14.62,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 47,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 23.684210526315788
            },
            {
                "_id": "62dd90a778ea02001ac73a81",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005003065283501.html?pdp_npi=2%40dis%21USD%2114.76%2110.04%21%21%21%21%21%40214fbade16651910186938938e%2112000023732892043%21affd",
                "product_id": 1005003065283501,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H8d1de0e013474b949b7512e9415beeaeg.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H8d1de0e013474b949b7512e9415beeaeg.jpg",
                        "https://ae04.alicdn.com/kf/H751ac39ac3034d12a1aae47ae2818d22L.jpg",
                        "https://ae04.alicdn.com/kf/H076e9d09c33847af95963a73438951fcX.jpg",
                        "https://ae04.alicdn.com/kf/H15f881a296dd43d694151e490ba9bfb2y.jpg",
                        "https://ae04.alicdn.com/kf/H9d03c09f93b943f1918551e378252045t.jpg",
                        "https://ae04.alicdn.com/kf/Hb6d3672cb92f44c4ae2276614ac3fc61E.jpg"
                    ]
                },
                "product_title": "3000W Floating Electric Heater Boiler Water Heating Element Auto Power Off Immersion Suspension Bathroom Swimming Pool 220V",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXJxZ24NAEfzBVww3pGHqvbk7F31aQ0K6dk8optXYGw99JQaQya8R0f5IjknqTIGa4z1gi3pF0jpWz5Syoj9igC5jZREwia7xJeg9dyC0f0eJvR35XYqtonUO0nl7Q3x8yZ1BX5q8DHVRqC7owP1Cs0n4iZHe7LK0CxYi7pJ3zoBEgTaXWLw8SMv6krvNrknWK12ZRBGTDL6EPlgC0RY7cBkVK830E1hLOhkYbZwgPzVHBnmsZg1KDDSv2Ha3b4ArjYs3M1AyAeMLbHBhPWeO77lTYISuHMbjuZZ8SnYJNpbFrGs1gnRX5LjKjBAhes7hLMGdnVcm2NeDV5HNeZiY9EOxZ0Ug5OS4qWb2LccTm7FUIMv3ThbFRYLZvDD6hBGrp7bQ7JU5tFyixoweHBsE2aOBDtZ3iI4WqGElq4G6rQscKbQtgQqvt9jXnT41YG5iRDk2a1q3PUYqLevQH7o1fCRGVsk816ebPs9xVf2jw3KFiFqRrXWiB4en10gUQNO3EXk1yTaI8Qt4JoFIBvK1f4wws7K6VEa6jhwBVyEDriL97nltGc1IAxopVJnKQkq3b2diSW2gnBp8rIs9lWDRMPGKOH0C7",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 10.04,
                "app_sale_price_currency": "USD",
                "original_price": 14.76,
                "sale_price": 10.04,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 40,
                "price_trend": 0.7021063189568556,
                "review_trend": 0,
                "sale_trend": 207.6923076923077
            },
            {
                "_id": "62dd909a78ea02001ac73a2d",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005003096676512.html?pdp_npi=2%40dis%21USD%2110.39%217.58%21%21%21%21%21%40214f89db16599239439066376e%2112000024060049927%21affd",
                "product_id": 1005003096676512,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H4145d40b95c047fb981d38d16d83d33as.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H4145d40b95c047fb981d38d16d83d33as.jpg",
                        "https://ae04.alicdn.com/kf/Hbe4943b4878c462183da767c010db0ffu.jpg",
                        "https://ae04.alicdn.com/kf/H27b26b89b3af40ceaf25e3c3aa4a73fdD.jpg",
                        "https://ae04.alicdn.com/kf/H2446dd8fef294ef99a881488a1d3fbbdG.jpg",
                        "https://ae04.alicdn.com/kf/H0a8c6d1899a24c798718136c5ede0836f.jpg",
                        "https://ae04.alicdn.com/kf/Hc6d475dd862d498d9d4fe00736ee18bcJ.jpg"
                    ]
                },
                "product_title": "Portable Electric Immersion Boiler Heating Rod Water Heater Automatic Power Off CN 220V Household Appliance",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIHw41xmjinjwRtxZIpRDx0gOJy2CJx7DlamAQ76YZYTWOP2pjL1L7s9cUuxsyTKkp8YB1rgaQkn7h9R1CW7Y2JwTLGyeZATHZYeVCfsvPNMMPxJ51sy3SIb0LtXfyxmRZWsI2sy7Gp8WVk39wYKD5YN2ESpmUj7iLGZIU2J0ASi1taUo5d2DSFLMR8f1ywabnU6UPQiSFcZCn5xeGmmY7L7tUgguUa273eSj4LIi5O02QgRroM40f5MnVERemLYqwLhKE1qhn5S8IiwmiN3iaOhcr8x486BKv9n0DXDPUJyVKfC1AOKT4mimxpVYI8xGu5cdzC0WSl66bxmfHQ7MBaE51ydB2i4X3lgUB1p7g7mPUhSR52LBGLhruraFnB1wcwRlF90imp7npUvEqreaTK8oKIOswziT8foFXhChDJNSW3ACKk3F9pVs0uheG5hnLX1EdhJ4dEh4H3gQRuMt4XcZ4fg42jZApX7Msf65XrfIVkKQPioZT6YE92d3b77EtvXDnFjTL21Mz9F2H77Hmr4liHGrsmzL0tHrZnN25HJWHR8p573ShAWP4nQy6PqxdvfqzQGrVHWQl09fHSDPRpwGJkKViXnbRtaUtWnqa4CT5mbJq51Az5FByr",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 7.58,
                "app_sale_price_currency": "USD",
                "original_price": 10.39,
                "sale_price": 7.58,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 19,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 0
            },
            {
                "_id": "62dd90d378ea02001ac73b8f",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/4001135651205.html?pdp_npi=2%40dis%21USD%2128.90%2123.99%21%21%21%21%21%40214fbafd16623156268704830e%2110000014747950291%21affd",
                "product_id": 4001135651205,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H66a52ff95cc142ecad5a49e0cbc358abg.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H66a52ff95cc142ecad5a49e0cbc358abg.jpg",
                        "https://ae04.alicdn.com/kf/Hfa662621687b44c7b703bb831b1b6af5J.jpg",
                        "https://ae04.alicdn.com/kf/H2ccc708b618e4b5894c80dcae19d1905k.jpg",
                        "https://ae04.alicdn.com/kf/Ha8f4dd0b14a245b7ac4f6acbbf49cf250.jpg",
                        "https://ae04.alicdn.com/kf/H3af7873bd70749fd88260e89c5a584baN.jpg"
                    ]
                },
                "product_title": "DERNORD Brewing Heater 1.5\" Tri-clamp 240V 2.5KW SUS304  Heater Heating Element for home brewing OD50.5MM",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIHw41xmjinjwRtxZIpRDx0gOJy2CJx6AfTazfZpUqxwLPtM0ot5c7JfoMwSOHAZvqD4fES59Q0erNzVlNjVSrlZMzE8Qra1HuYBRYY5q9HqrX1a8YH5jrf3znPKGkkNQZS7yqTUtTLQxoladL45QKtwYh2S5dmhSKivpo4YKLOxAO9aoGjS8LE5b9S0CwZ7H9Q6WHmqc4OL3ZQOrrlufQsXNr91QvpV7JnZVSxEbaE6HxVzfhUBRYdLQur0fB4QCLzm1ua6CzHHJVSJ9C2HHox9lyhN5oAHoQOfyDE6qIrggnJEjzzjIK0Is0VTs2ebTKOjQTCiXKQRPrrdnsu2QklkNrvyv6RjTBA6EUbd8H3aHKDAVDLmDpmi5LgZmhvuox912TF6OrXHMZnUqjcRFgcBpvBvexJTEead26VceWUHnc3LnIxDFcEZdCsTO85WQUL8WKmUYIUFjphMN95gWO1anbTvwfURn392rGXkIpE12HSwgj6T93VeMGB0gZKnFKeOIrhLcLZpjg6PwiLhX9SNK41kNSm6BU1kAEDqH0aIFO597LNtAzHHbxO0HEra4t1I2o1MxEC6CVWcbkaQiHw2iQAq9ioxa2y6F3ZlnGGULec3ovvKEjIf6R1",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 23.99,
                "app_sale_price_currency": "USD",
                "original_price": 28.9,
                "sale_price": 23.99,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 7,
                "price_trend": 2.477573686458771,
                "review_trend": 0,
                "sale_trend": -36.36363636363637
            },
            {
                "_id": "630d2201e657bf0019790083",
                "first_level_category_id": "7",
                "first_level_category_name": "Computer & Office",
                "product_detail_url": "https://www.aliexpress.com/item/4000559079753.html?pdp_npi=2%40dis%21USD%2128.99%2114.21%21%21%21%21%21%40214f89c516651923009954580e%2112000028128116450%21affd",
                "product_id": 4000559079753,
                "product_main_image_url": "https://ae04.alicdn.com/kf/S04dea2100c9e49deb63b2af3de036ffbh.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/S04dea2100c9e49deb63b2af3de036ffbh.jpg",
                        "https://ae04.alicdn.com/kf/Sd5e3ff4ba185478ab2ba1ab32d72c3c0d.jpg",
                        "https://ae04.alicdn.com/kf/S7d0d2cd0ec9a46489e304b7d2ddefcfdI.jpg",
                        "https://ae04.alicdn.com/kf/Sca45c4d0431e4a7393dc5f01eef29ba8M.jpg",
                        "https://ae04.alicdn.com/kf/Sf7b917b5a3af4b59ac39975644dffc1fh.jpg",
                        "https://ae04.alicdn.com/kf/Sdf127ab387ed4dd4b2815d819135f5b39.jpg"
                    ]
                },
                "product_title": "Cordless Air Duster, Electric Air Can, Replacement for Compressed Air Can & Spray Duster, Can of Air for Computer Cleaning",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTYaHeg4ojqAHNlSuYwDY3WRiR4xvLPs2ByG4Vx6vXJi7ZQeaH0jmmQoB9kO9nSm4sW5l3BcP2e1elj47vOFnLT64FDIyLBkju6g4aa6DhGvu9INfKWxYOprv6UKTcdORO5QtpZDjAwkuXFp22YDgfzqvUMi4S1uDXG2sr78XDw2ioHunzB1buZSi6jzr3ur5PpuoWJZagDn50PNbg1WbG30FowTv4n6BpE56bHBpg2wbEXaKzxOfOVLgwE67qBe6NH1n1uvqkPORo3CbkRvtCe0ON5Mgd1xRb6PHGQ2Awwrvnb09WEa8FHipOGsbfzLI4G5dJWIN8DZZv2IbaMLBYwKgofhJ4WC22Dhx6ABgJmojEo2KJMB1SThaQypAfJVnEq4XapbwHQAqYCAMSP49p8aFLtBC08csHObaHQJFPck0szIfgTeAJdIt7mvVBOPMXEwvAyzh401Yr8kwkSzsgFfyXyHgHXeXRy0DFYjwYkjQVloUb5VZ7qlWUqjSn1MvOj8LIbLzn56iRu6IPsclZRFDbcLHVB5PL4wkNGE1pBSwmFuVdwZFy4ovZDYuLhORuULjUFmIaDlLDV5Qg3GS6xtwROQbUR",
                "second_level_category_id": 200001081,
                "second_level_category_name": "Computer Peripherals",
                "app_sale_price": 14.21,
                "app_sale_price_currency": "USD",
                "original_price": 28.99,
                "sale_price": 14.21,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 48,
                "price_trend": -9.0850927703135,
                "review_trend": 0.9081735620585325,
                "sale_trend": -22.58064516129032
            },
            {
                "_id": "62dd90d578ea02001ac73b9b",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/32905653502.html?pdp_npi=2%40dis%21USD%2143.33%2129.90%21%21%21%21%21%40214fbade16651910186938938e%2112000029509797191%21affd",
                "product_id": 32905653502,
                "product_main_image_url": "https://ae04.alicdn.com/kf/HTB1x3q6bPrguuRjy0Feq6xcbFXaI.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/HTB1x3q6bPrguuRjy0Feq6xcbFXaI.jpg",
                        "https://ae04.alicdn.com/kf/HTB1eVK.I4WYBuNjy1zkq6xGGpXaG.jpg",
                        "https://ae04.alicdn.com/kf/HTB1pz81mBnTBKNjSZPfq6zf1XXaG.jpg",
                        "https://ae04.alicdn.com/kf/HTB1zlLmbO6guuRkSnb4q6zu4XXax.jpg",
                        "https://ae04.alicdn.com/kf/HTB1jP_.INSYBuNjSsphq6zGvVXaa.jpg"
                    ]
                },
                "product_title": "Tankless Hot Water Heater Faucet Shower Instant Electric Tap for Kitchen Heating Instant Faucet for Bathroom",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXJi9K76x376Z3xgIX4xokamnadK7tD2dm85nF3yhaWD7JL8EvZuq9QuSzKd4CT6aZVBhQIyGHwpCbiQ6uamS0EkClDjc3VdiBy9j2pLnI3K8IKIbOf2pGVZSIiBzqOOKB9vakUKcdg2Dhp4GPzsWagPE43DkdtcUvL0sKdqftj5ZeUC1Q7LeC5UsE7SaqUOkXQ2sdsTdEvIDLSnJqSZHN7r3BoomeVC5mTyLcWlsQNvlCcGZi52gKp2HUWiCVZsgH1Rd4vlUNrF4Bbdgar2ApPzfzVuYudFhlb85s3lvPD2kjv8HFrtYbLnjTVvmKxPBJWQIlOwESw0CTGUsWf7k38XBY3m1FLhAvspteSGzlixZnmz91IcFI7vD6gVa4e0onPUjx5aIuPYuNHJPTKiE2JgrrTRZXxiXrHZEWWN0eTFkxMBHaxL3kChjIfdcMWgQfXBz9HSGo5jGx0rdwxHAQ7CWiRmL7gjy53hNqlqkWGEOrChNwn75mkOCHtKiqQBMmPkZe5g9YqIIni3ZBwd9ZP5RcKSU4rkExQAELu6bsQZw4vN2Xn8oVgjGeQnKQyaxCOsYxcVmwtEULMqOQKSIIQbb1ghJl",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 29.9,
                "app_sale_price_currency": "USD",
                "original_price": 43.33,
                "sale_price": 29.9,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 23,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 109.09090909090908
            },
            {
                "_id": "62dd90d278ea02001ac73b89",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005002918093191.html?pdp_npi=2%40dis%21USD%2124.07%2110.83%21%21%21%21%21%40214f89b716651910205418575e%2112000022782780121%21affd",
                "product_id": 1005002918093191,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H234eda8dc02a433bb0d4e47cabff09d1O.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H234eda8dc02a433bb0d4e47cabff09d1O.jpg",
                        "https://ae04.alicdn.com/kf/Hf19783c24f1c4b92b228eb702451707c7.jpg",
                        "https://ae04.alicdn.com/kf/H0809d2d9b532441d96e0b9719590ae01E.jpg",
                        "https://ae04.alicdn.com/kf/H4b91abf6711c4e28aaa033b8a303b323C.jpg",
                        "https://ae04.alicdn.com/kf/H942151e639fd4e739832932b2a65b12cf.jpg",
                        "https://ae04.alicdn.com/kf/H81c62d2fa6e24eb68af20c015d5a3490Q.jpg"
                    ]
                },
                "product_title": "Heater Water Heating Pool Boiler Swimming Solar Bath Tub Immersion Portable Hot  2000/2500W AutomaticFast  Power Off Intelligent",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXJMrDSXogSmCScmFFm5jU60VvdbC0TqcKPKDRPlYIMc2TowFVNHHEhnrWojMYdY75F3AU2YMPihBgU3K4FOTzu1e7Ai9U6D2P3nzhFIkxV60u9UFzNpvhRdXWg79sxvkc2VEgBaWPE25Gm6ktwPqhgHdZmUPgzqgDMO0PZm8llOca6qmpkwX7xYZDAm0bp2WGZ7HHjyd8As1iPW4KeeZZEhIFutrp4NXY5O8BHlkf0Z7DC2LpRwbg7aupy3BU7v7AkOsAGFKVJuSeSe78RJrqqPhUeFlrWYFNFTRhoAVeEwPyTK0RrvP2qcpoZS9sQ74yJyT6heIjdKbGtXOgwYNH99DqUB0nkmk404pyFKBhTAOnlNnwwL3S6KndxRqmnWv1I9ScndH9v4xTQGgBwWDR8iCsgxfl82ppLYHYcc1yMQpx7iEEFOTj1ZrVUxrgk7Tek9v8tJhQgU6BTPTH5AzfNPSGmbpgjddMADbxfMJbtgnMxX3I0ADdA4vthoFtniR7vvfh3S2G4denvafbK0mglqtr46ASiwq3JWUQXdqZRk8p5qqnSjpIsc0Q8YxZdu1EUNoRpIbZicbp5zxYHdR3oRHsQqh9",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 10.83,
                "app_sale_price_currency": "USD",
                "original_price": 24.07,
                "sale_price": 10.83,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 21,
                "price_trend": 12.461059190031145,
                "review_trend": 0,
                "sale_trend": 90.9090909090909
            },
            {
                "_id": "62dd906178ea02001ac738d1",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005003773188724.html?pdp_npi=2%40dis%21USD%2131.65%2125.64%21%21%21%21%21%40214f89b716651910205418575e%2112000027115768923%21affd",
                "product_id": 1005003773188724,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H5397413e0b634a15955448f07ea23000l.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H5397413e0b634a15955448f07ea23000l.jpg",
                        "https://ae04.alicdn.com/kf/S47e028d6c94c4819ac0b2b2c8245459d0.jpg",
                        "https://ae04.alicdn.com/kf/Habb9e19ffbf2490da75e5a68afd7e33ch.jpg",
                        "https://ae04.alicdn.com/kf/Hd89fabb631e44045994da64109caebd83.jpg",
                        "https://ae04.alicdn.com/kf/H5039379f5ff147d68f6e8dfbfdbcb52aZ.jpg",
                        "https://ae04.alicdn.com/kf/H0881b350880a40c3921a91265f5c1856w.jpg"
                    ]
                },
                "product_title": "3000W Electric Kitchen Water Heater Shower Tap Instant Hot Water Faucet Heater Cold Heating Faucet Tankless Instantaneous",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXQEsFaC2CkirMS01cEGBq5iagRsOfxSSMQkDDpdonldEQrvoZzGCSpFybmXd1ez8QePnL5P5estmuwTKstXUlyx885PRETuMxPoit2rhM1ABPNr9Q5IKEWI8bktP9EcsH31V5I6AYHP1PQfMVrfQ40LvNTRFDcykbQOZXpSpmOaa74uXYTpTCjdYlfWcuQOn1kDH7si5VLJFvYkNVYTy06SakGuLITcBadUibJK3Ie0YWPATt3bsCp2aqdF1JrlLcIkuTD8DMNMOZNgQss5tceXeu91UUJTxD8jOTsJacQNufmuIQNpInkxY222o5ah3NcbmRMiYgIk2ixvtkKkF2XZFWCt4qVUffay7ywkH7RU1u6IrRx4InsOzDpxNKf7Ck5QG9Xh8NN4xRRoMBBNAr0veU547GIsNXnzszL4qV3umWgFTgw46jPhcuWbGuUAAkgGJr8ALLEmEjtBZU6y7mw1aa3lH1eWmBN5XyjWMPq24qF03Ayzu1WV24vTzbam4J3GDlY6crXkx6Ogg86tVsi3vowuSnA0sem773ekj3HrHdpwC0exriA59ajmK8MtD8tJzGhtbZW4971XXUrurXpAy3NF5D",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 25.64,
                "app_sale_price_currency": "USD",
                "original_price": 31.65,
                "sale_price": 25.64,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 21,
                "price_trend": 3.8477116241393245,
                "review_trend": 3.4126163391933786,
                "sale_trend": -19.230769230769234
            },
            {
                "_id": "630d1641e657bf001978c915",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005002341506160.html?pdp_npi=2%40dis%21USD%2115.00%2113.20%21%21%21%21%21%40214fba9016627716126536394e%2112000021548109962%21affd",
                "product_id": 1005002341506160,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H25c22846be6745e487666492c384b2b9B.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H25c22846be6745e487666492c384b2b9B.jpg",
                        "https://ae04.alicdn.com/kf/H9df75d5fddbb4b24af9de24e9e3ede55F.jpg"
                    ]
                },
                "product_title": "Smart window cleaning robot window cleaning cloth cleaning cloth",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXzA3vWLOecU6oGPzlsbMoSd6zdOrazMfkU2FKuUhDNSyWWQINOzKLfx9p4gLjIDrXf4q8DrIPWgo5JUgTxEK1Kugm5t1bgOMyId555HQB2yXwbYeSSll2ZihyKNJ80uCv0l0K3KWoHS6LtN790hNlHHJkw6dvRThhqrfJhaIo56lsFYZRRXHt0kJbyActkB1yHi5LB6LLcG5blaFHMXsvQ6wIn46yRcOTXomi67yMWpulSoclEgZRtUXAqYD2EzIZpfKfnF151Nnl3kbmMbYnXxpo5u11hRJmyYXHYtajGf7GxN1zruAtE3nVmZ1Hh8wsDu6Gc56LNmCDuM92hPHb3JDVBrjhHOtpGgR597K9PxY6jmgBuPoeaEUGVjkkZwU1cNQYiosNVZlJSZDIKmNJrDUJuSjFOub0aLlSITs1RM1Vhn1XiLVoaxOlJs9YGwXqtmIJ1P9OQhQMhJXPopGGHSrqIEDqgKznY3WPkCF4i7zTDVW4qn9mPbXsL1zufbxLkoAYXfndBVaZ9q0wyxRfMadQatVrctv8cgxAYGLcz6QpEbbmEbTa5jmNe3EODnsqvDquvn4uqglKLteNg9VryU7otl4f",
                "second_level_category_id": 100000038,
                "second_level_category_name": "Cleaning Appliances",
                "app_sale_price": 13.2,
                "app_sale_price_currency": "USD",
                "original_price": 15,
                "sale_price": 13.2,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 702,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": -0.425531914893617
            },
            {
                "_id": "62dd906a78ea02001ac7390d",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005001560047961.html?pdp_npi=2%40dis%21USD%2122.83%2117.12%21%21%21%21%21%40214f89b716651910205418575e%2112000016593615822%21affd",
                "product_id": 1005001560047961,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H3e5c495ceea145a990716511a36fc3a4d.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H3e5c495ceea145a990716511a36fc3a4d.jpg",
                        "https://ae04.alicdn.com/kf/H13a15eaaccdc44878c2409d4bfb1a739n.jpg",
                        "https://ae04.alicdn.com/kf/H535a416d23f141eb944eddfe3e6b0779k.jpg",
                        "https://ae04.alicdn.com/kf/Hfd015fd119de4c749fe3ac3efa75b00ei.jpg",
                        "https://ae04.alicdn.com/kf/H573e4cd7b45f4bf6b1258da77c8c06748.jpg",
                        "https://ae04.alicdn.com/kf/H0a1001b02a1a4eb09d80a0a3be5852ffH.jpg"
                    ]
                },
                "product_title": "2500W Floating Electric Water Heater Boiler Heating Portable Immersion Reheater Suspension Bathroom Swimming Pool",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXxopSIAF2e9HVOPw6qRO2yxveWbeVAF9x4DKQ7wYpAB7dA40TnAbFTso6QtBNkNtE6hL14saq3b8ycIxBPU8fb9GWfktVr7gUzW9txJ5WMLanXT7skupPYh3hiJshayJ42PfSOZk9JT1SivCoGyEGfttJnNnPW9HWj9fsnXrbCRf0aHx2CFhf3HefACWZ9yRX10bZYNYpRdagyK1tqvSd4yGEUef8dEVBhzdu1gJLQf7oSrjP3lS89YWgMljdAqDZxtQOaS0KB38EVvxihExzifvPxvrLRBNxoFP2H0jOMjycWXGwW0gTKO6hXNSq2Kb3PHpljxAcshPOe8us6lUErBjlovmb7idXdlWYDRB3HWwHrbbWBEbOSH3F7iCvrD3Bbw4HXjt11hsIjWXzgOVnnIGPHCBp25lSaGk1njsYUF4i8UOUnkeIsph8ekzAA0aRkYIZT7HnZg9ChHDo0evijtD6GfXUKfxwRNENDxqijQfOI1NP4qGhUjxnx72wOt29Bjl7rA4nSF0crnXFvL5FF6LYri6PZ1cUysinOcawUgXPNSckFRPjok63RqwTWKAAtvMXP6or8jVn6RGY965mkAUXrxj5",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 17.12,
                "app_sale_price_currency": "USD",
                "original_price": 22.83,
                "sale_price": 17.12,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 16,
                "price_trend": -1.325648414985593,
                "review_trend": 12.866817155756216,
                "sale_trend": -40.74074074074074
            },
            {
                "_id": "630d2219e657bf0019790131",
                "first_level_category_id": "7",
                "first_level_category_name": "Computer & Office",
                "product_detail_url": "https://www.aliexpress.com/item/1005003634326062.html?pdp_npi=2%40dis%21USD%2134.75%2121.89%21%21%21%21%21%40214f89c516651923009954580e%2112000026584181212%21affd",
                "product_id": 1005003634326062,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H9666c71bdfd54a6ab95404a3ad4f70c11.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H9666c71bdfd54a6ab95404a3ad4f70c11.jpg",
                        "https://ae04.alicdn.com/kf/He701e74228e6423793a78d0d90eda64aW.jpg",
                        "https://ae04.alicdn.com/kf/H49945e01d6534c36b68a9964d80f3046p.jpg",
                        "https://ae04.alicdn.com/kf/H5786d5a54b064e0ab93aa86fdc830d03E.jpg",
                        "https://ae04.alicdn.com/kf/Hb80354dfdf5d47958df5f778929fb273U.jpg",
                        "https://ae04.alicdn.com/kf/H448024e6e6014e5e8e143831b1f9a914E.jpg"
                    ]
                },
                "product_title": "U12F Uhf One For Two Wireless Headset Microphone Amplifier Mixer Suitable For Teaching Guides Meeting Lectures",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTYaGtDNVsryG5tqgKTmYoXaD298IXTENgjg38N447eniQicWPWX0HBiYbBk7SGyydjegRP51oDhQLuKvU0gns0jK9StWwhmNWdeATl2tJ9JA9UyIQWh4nfWvnhceyHU3O9e2vb9B4Qq4sK4mto8HJbvBC8ujOc9QJj4kw8N07209Mz4uNtteHAI8uanPDHBXogt3ATxqriN9wwx2IjwEeMbxtahu315BOEa1AHapUSEve5ZNSxRaJDMTUFSOiKa4IqP9hxFBnVR4z2sDRPBnIrO1wN210pG1zUGKUvC0yRh64jqTC8Ps5J11wgg2NNE0qrxeh8xNeub4J75H7fjr5A9C0cRLDbU6PTz2ny5NbXacku5Jgn6fekkDLA52s63GFiIyTnQJpmO7iyM4RvlvTduZe47mS5rqSjKC4z4FAbyqM7zFgWVJ9BXQhcigyfObEfkuAOoc5IJHjRSWl6agyoOrBdETP9q4QSrrn9ShepWcpTmkoszOcqYU2usaxYy9pRQuDRack4LO6rj3Z94atsLsHnS11NsWpj8YnFCEcZ22NFhUXbeVwHU8KopLaTb27gmufF1dvgsyKs0QGgW5NFnPJAfqkF",
                "second_level_category_id": 708022,
                "second_level_category_name": "Computer Cleaners",
                "app_sale_price": 21.89,
                "app_sale_price_currency": "USD",
                "original_price": 34.75,
                "sale_price": 21.89,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 49,
                "price_trend": 3.2547169811320815,
                "review_trend": 0,
                "sale_trend": 4.25531914893617
            },
            {
                "_id": "62dd905678ea02001ac7388f",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/32841034739.html?pdp_npi=2%40dis%21USD%2132.00%2127.20%21%21%21%21%21%40214fbade16651910186938938e%2112000030079904806%21affd",
                "product_id": 32841034739,
                "product_main_image_url": "https://ae04.alicdn.com/kf/HTB1u5VBbyrxK1RkHFCcq6AQCVXaH.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/HTB1u5VBbyrxK1RkHFCcq6AQCVXaH.jpg",
                        "https://ae04.alicdn.com/kf/HTB1qeXVbzDuK1Rjy1zjq6zraFXaB.jpg",
                        "https://ae04.alicdn.com/kf/HTB1Bs4HbpzsK1Rjy1Xbq6xOaFXat.jpg",
                        "https://ae04.alicdn.com/kf/HTB1PY0Pbx2rK1RkSnhJq6ykdpXaT.jpg",
                        "https://ae04.alicdn.com/kf/HTB1_r0Pbx2rK1RkSnhJq6ykdpXas.jpg",
                        "https://ae04.alicdn.com/kf/HTB16atQR4jaK1RjSZKzq6xVwXXar.jpg"
                    ]
                },
                "product_title": "DERNORD 2 Tri clamp Heating Element OD64mm 220V/380V Low Watt Density Heater for Home Brewery and Distillery Tank 4.5KW 6KW 9KW",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXJHZdaj5U1gkeURUpA27TCr04bK73qnNy5kTZ1Z4ez3ICA1nW8VFTyW7bpUIv7dMH5DeK4aAoh3v70BPIpyxr5kg82YF0oEZPmMNat7uZeVb3IrDPneX6RXlwhELoIUlMuUoElw6Yso8xRAPWSlmDgnsEdoxK7LH6KIZqfUOD2c5fmFBMlEkDRpEeJTAMrNutFtwErqxPQmpzhQKfeFbESKeTclNPCljBmJxksROGb2xEc9VUsu6mPAgVK1cos5vs7i0KUt93AOaqoHF420kPieYs7bQ3dP51Klwv0tc1V7iF71xTnhbdzbUFEKGkdeJBJ2iUObSzgXBWKN9ZRwWhPLsVUPv6LDIOspWg4llqBY0okK6tFYCwgSyr4GFm2FWbB5no5MS0ikual1rsfg390PtZIga7ViHYD3VYEr5urqbC9M6gZIjHYeZSopmRSwdy2LqXr7ceNjAmUXWyDDuIM9wotQuDPwWk0zupGPm4wdJbUkMTyhkcJzUOJPRfnN80QpzL5AZuSlBiiaQDm5lzqylA29doxXzyWOtX9C9SdrAsWFa1TJfdrbiXwR96IORjw3pmPx7TjMY2BSLarDF8hpngp8kT",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 27.2,
                "app_sale_price_currency": "USD",
                "original_price": 32,
                "sale_price": 27.2,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 28,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 0
            },
            {
                "_id": "630d1922e657bf001978d1e1",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/32970039839.html?pdp_npi=2%40dis%21USD%2122.50%2119.12%21%21%21%21%21%40214f89b716651910205418575e%2166605413942%21affd",
                "product_id": 32970039839,
                "product_main_image_url": "https://ae04.alicdn.com/kf/HLB1nuhwaIrrK1Rjy1zeq6xalFXai.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/HLB1nuhwaIrrK1Rjy1zeq6xalFXai.jpg"
                    ]
                },
                "product_title": "LJXH Full 304 Stainless Steel Water Heating Element 1 1/4\" Electric  Immersion Heater for Solar Water Tank  220V 380V",
                "promotion_link": "https://s.click.aliexpress.com/s/hvZ0wBqeusjS7glVE5yzEB5c1tCCM0q84yBktAk78J3YAWXLUwgFMnTwxhmuP5GnUblpUMAasTxRCiTxfc1YT2cEVKo2BJJFyg6moM4BjIYSw1p2kDdJ7pQTkP3dPZ2uaOdlvkqKjCja6cOZ4OW7SDyYY0Zi8Nq5X7bIaHYccsC9UAqGCnysZl7WD89wHsIJQYnatQUvgwzyF2SqUhz5fEj3z58L4Me6vRraDrGs4wxlrFfIcJXZzEZ9mQFccrYJyoSVIgu5yt0luoJrZA1r1E7u0jGZFBabkQ38gxkUvDwnXOQQDOu8gKSfvqKFTFqBOAFI6APVeJCZC2y5omldRqUfTGrmzMJW7Zu9tdbyPVJz8hQPsMh7JKhl2eE096IYpyRDMrzYC6H0PCxyYGGj3TNbbPr6yScNBXePrxsd4HNEjLmDd2QYDMduj5NZl3dryeWU3Z20X91B0fSKApfbOxFu9VPLRfjNb09oxyo2ZTTXv6SnGgxU4JtQyfaQ1e0pjnka6BzB5i6JkMe7o3LvOq7fUZEuSbABDSVDbg1rc6flpUH4M5z8v8mV5TWNEBuirE1SOAEdwUDhVxOOA0bkKtr2VRVdOmZRAFhH5C9g3xVPM1Y7aiSXHqmnQiPoOMzr3LSM8LaDd3fRLTEatnSoMvtJo1MIZaxurzXtuxJfl1BAKt4oMvXn7438dt3GO0R1PSpOLii1y4jhjJkvyZEEe1aiDDy2YfhUXbQowupSoHoR85W6xxoOS4nLpshVEueWL5M0xc4MMlINSSHy6a64cbTM6tGFSfqPojJypIOzft4T4QmFq109kpiAcekvVbJrWGzlN1cpmZRfWxJACnV8bZlEc1KXTmo3ZDRV9PGogA0j4mmjv1GYwFhQfL7H",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 19.12,
                "app_sale_price_currency": "USD",
                "original_price": 22.5,
                "sale_price": 19.12,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 17,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 41.66666666666667
            },
            {
                "_id": "62dd906878ea02001ac73901",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/4001283856981.html?pdp_npi=2%40dis%21USD%2134.75%2125.37%21%21%21%21%21%40214fbade16651910186938938e%2110000015600886713%21affd",
                "product_id": 4001283856981,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H27ca7fe708c045f78ebc9e095a70ffedM.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H27ca7fe708c045f78ebc9e095a70ffedM.jpg",
                        "https://ae04.alicdn.com/kf/H46a8f5bb691944808060a3cc2653e294g.jpg",
                        "https://ae04.alicdn.com/kf/He47d71ef884449f6aa20155f13fa8597Q.jpg",
                        "https://ae04.alicdn.com/kf/H13dd1fb935304bdd9e0919a1398489adA.jpg",
                        "https://ae04.alicdn.com/kf/H65731c9cff6f4a7c84f8b59de644d6c4u.jpg",
                        "https://ae04.alicdn.com/kf/H234913f1f1454c53b90be8234929f083l.jpg"
                    ]
                },
                "product_title": "Water Heater for Pool 3000W Stainless Steel Immersion Heater Suspension Electric Water Heater s EU Plug",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXub1thqYreS9WKwDrc27Pg7JAqQ0W1A2IbyliWHLuSzlwuaWnpyFCThKpbZBpSMPCt2tWUOmjKSK4m6VKhLorJytq4RtWrjV7JKyGTLaWd0H9yhqSg3c5WNrDpyw3kaZT9P9pe4DJ8rPkM5kfX7SbeBSXMBSLZsuhiJ5SxJ62fNxa1FlqGCS4as2BmiwxVYDwhXJAMYl7Vo7bIpF3BGgLrLFZAyOag6Uk8W1GEPxZTMHL5gOlJY8YM0X9y5ya0hVhZ7thjxfWl4jY5bIHbQh5oM7sCD8ksItwTYCp2gJNQsz6xlNV9ZQBvmK6ZOgFiZxhftMe9TcJVZC2Fb8GfEvh9uZnZeTFuLso4SCW1dlLUX7aqxXjFHmib3Es2YeHhEE7r8hN6EzCjLfcT44dIO4UiICQkANJyrQMy54KaoxKq0WUhlRvt1CLGq7kcdftrlcHj5HfNRgm59BXRVCdyPdtEaTgyxNvt8x6uQBUvgsZBl2EdiTj9QW8iWSkI0TGRimvdqce2UXGFlATpo14wP1ud54e1MpETmc7DBuPXzp9qzCUg96jflkr3aik986xzEV4lJpCWcdED6FyaPhmoTBfEJmPTfq7",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 25.37,
                "app_sale_price_currency": "USD",
                "original_price": 34.75,
                "sale_price": 25.37,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 25,
                "price_trend": 13.97124887690925,
                "review_trend": 0,
                "sale_trend": -19.35483870967742
            },
            {
                "_id": "630d1908e657bf001978d183",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005002305509674.html?pdp_npi=2%40dis%21USD%2114.40%2112.82%21%21%21%21%21%40214fbabb16651910224717808e%2112000020000931813%21affd",
                "product_id": 1005002305509674,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H1c8dcc23ec2044d29ddbed04e1e77c39a.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H1c8dcc23ec2044d29ddbed04e1e77c39a.jpg",
                        "https://ae04.alicdn.com/kf/H061669847ffe43459faa29c83ab5b984U.jpg",
                        "https://ae04.alicdn.com/kf/Hfc8c021591534f14949bf731d819a061G.jpg",
                        "https://ae04.alicdn.com/kf/Sabde2af540dd48329549706784948986t.jpg",
                        "https://ae04.alicdn.com/kf/Scf243474e632438c91a853454eeb07dd1.jpg",
                        "https://ae04.alicdn.com/kf/Sad35ad29918846c1978aaf0b187910f94.jpg"
                    ]
                },
                "product_title": "DMWD Household Electric Instant Heating Faucet  Water Heater Quickly Heating Hot Cold Dual-use LED display For Kitchen Bathroom",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXzJ4pRZ6ZeGwQP6dcrWiXsHkB9Agv6UBVfCahVxw6zsMd88vF8gfQUaiKftMpRvImg61Gm5Yc9gunq4XwjSmrInmi7krcyaufaFFDLCzRMGLiT80B54FqPINy7eeK84AWwqScNhY77vHq7SQxwO4DcKxPvI8s0dpezKolC5KP9PTkxnzij8GdLn2lXf1UCWVtdeOQl5DQnFKl9YG4TMsONr4fEGQhAhBLQvqPXiWbNuaTOISn1I1uil5e820yJkRsdSC2d7GZOisyAxPxZxqIZbg181lB6MD5h09FU635ig6wyLF8X7UNkRacseEcQZiboMOGHQ2AFLyqPObGxKRf1aFxql2Iylb8YIOJsimLEt4MiPuaToQCV9bkCQkkU0tUCp1NpdCfUr8EPV7C3wfYAEHFlzGMmsC5WJtLrX43pwUaDV8s6AlLVbA69HUgry2yTHYzlGaHnTel3A9I3ys0tCkzePXJUSNwllEgTCNEUACMWcsLA1lBzJxHT5qViSUa5yTynj290s3bx1TofgALvNRwEtn7pTVSMVzHgX0pc3lKBFqE52fEQ1S5IPetfD48kvxIgyPPgAjO3V5PGIMqtAFIUxDt",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 12.82,
                "app_sale_price_currency": "USD",
                "original_price": 14.4,
                "sale_price": 12.82,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 12,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 0
            },
            {
                "_id": "62dd905778ea02001ac73895",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005003306828252.html?pdp_npi=2%40dis%21USD%2113.17%218.82%21%21%21%21%21%40214fbb5d16599238979327910e%2112000025120339400%21affd",
                "product_id": 1005003306828252,
                "product_main_image_url": "https://ae04.alicdn.com/kf/Hf0cc2c99763542b892345179557cc51dd.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/Hf0cc2c99763542b892345179557cc51dd.jpg",
                        "https://ae04.alicdn.com/kf/Hb2cd7cf908034da58be30cf4f4c930c3r.jpg",
                        "https://ae04.alicdn.com/kf/H74d386b7633e4159b0a4a16e6d40d398Q.jpg",
                        "https://ae04.alicdn.com/kf/He0c5f2fd9a3242ef850f415623d9b4b5g.jpg",
                        "https://ae04.alicdn.com/kf/Sa81879e28dbe4f5eafd40eb6e2b13d18L.jpg",
                        "https://ae04.alicdn.com/kf/Hec0094d6d1f4417baea35edda5ca49c9g.jpg"
                    ]
                },
                "product_title": "600 to 1500W Home Immersion Boiler Water Heater Portable Stainless Steel Hot Water Heating Boiler 1.5m 110 to 250V",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIHw41xmjinjwRtxZIpRDx0gOJy2CJx20hVl6LZGAGuhfzRj1IfWJ5P6PJucBhwtHOPL8KjHSMCcopncXIEQHrbcIbDBF6yNtKfMCYNZCQGKdwCzptS3aca0Y6WDRJ7v2OWlkbhG8le9OKTGXxkeduOMrPEnqPomUVR73PYlfTs8PpK4WG1CwDY4nkicDqf3gDVgBAKrowP2daf6QhotqbMsGAxTbY9W2O508XbG1LsUGoAgIJ1pQGeWhUyl4Gevjo4hZxOJd3MlBuhlzfDcFEgNLTy85snNUgHmuDS5AXsO5B4LyBNRhuEwJZQYR7PP6KLuKPRdSXHECWXfeIV87BHO0l1gwuE4lRraXVKwVXYaPhvUk9KO3P9DSh5eh7H1reHeWmzjUt8TsGepdC4Lx5GAnu42lvWkpSx3gFA0b9d6rELdJ4Bulgucnni52LLy04o25xFRzUgMqEYA5tgM2w5XTgmS8ovBVOD39zsirXjYbEDzfyuZs4WQH2v9FFYPruT7ZGObwpcnDDaSIZVQ6ct7ddvuKqmtGeBZfijTgsLy8prT6w8Gxg1FMJJVJZIgGP603TQxejcuiNInok4ptxmAtAk3xh0il7LljxuBa2Qm0gjvk33OycH1NbN",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 8.82,
                "app_sale_price_currency": "USD",
                "original_price": 13.17,
                "sale_price": 8.82,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 29,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": -6.451612903225806
            },
            {
                "_id": "630d2207e657bf00197900ad",
                "first_level_category_id": "7",
                "first_level_category_name": "Computer & Office",
                "product_detail_url": "https://www.aliexpress.com/item/4000850363448.html?pdp_npi=2%40dis%21USD%2122.66%2122.66%21%21%21%21%21%40214f89c516651923009954580e%2110000009371242028%21affd",
                "product_id": 4000850363448,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H36bbaef7fad74a17b6b4f46e37a3988bB.png",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H36bbaef7fad74a17b6b4f46e37a3988bB.png",
                        "https://ae04.alicdn.com/kf/Hadf4957941d8456bb3217378e1dcbc36n.jpg",
                        "https://ae04.alicdn.com/kf/H2d5afa3b8dbb4ceab0920311dcc467203.jpg",
                        "https://ae04.alicdn.com/kf/H1a434a32eb614bf089b80bf0294d858dc.jpg"
                    ]
                },
                "product_title": "200pcs Headphone socket PJ-301M 3.5MM audio video socket measuring pin 90 degrees full copper temperature resistant",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTYbtROrAv2HHOprp4FErFlJcV7yVCbZG0yhMVGyfubhUu9acOHGBYb5P7q0elK4M2L0YACxatMPj114jYL3mbePUhfyjuz9MTiNXSBXnTJtGi9sOZGnKgHf3IeTKYoK5Z6t6wQ3qUgayOGgtWhNqs1ecn6ZlVyCddlLF5kXyUFKelnXpLHrsYoKxlbSHvnRbsEjev3VsvM24DZDvCVgkZy35krty1WGoza1PCrD4c0C2NPrRuOz690x6l16zKvVigvO7v1aP2MnBoAidGw8aLzzoyhcMNXXtZPTOexTgCYXxgXd4D7ZQP10jlu21Hc6mlUJ8q6h80FVd4ee9zo5TLzpDKC7cxr9uyRb6axi88p792RIkikKYbK5EtOHLFxQpQbgzkS4EBIqqMtQ6GiVZp2fcSpCcnfxjvrlORImraotC0SrxwB8Rfh1Oav303JRL1kQswYzinqjm4tjBRZcpXWW2F7cSTG4lYDQTI7lBrONXLG0fM719aF4p17jCNAbYRb1tPO5Lo7gFV6Ka4SiQvLOZF0LK5T4cDy1ypWFO5nzRYWaei6TTonnrsxAEq8db9sLo6QQAlV046iBJcjFjkcAiMyIxV1",
                "second_level_category_id": 708022,
                "second_level_category_name": "Computer Cleaners",
                "app_sale_price": 22.66,
                "app_sale_price_currency": "USD",
                "original_price": 22.66,
                "sale_price": 22.66,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 49,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": -15.517241379310345
            },
            {
                "_id": "62dd907078ea02001ac73931",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/32862859255.html?pdp_npi=2%40dis%21USD%2117.55%2115.62%21%21%21%21%21%40214fbade16651910186938938e%2112000025690462491%21affd",
                "product_id": 32862859255,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H91163739ca78426896f53843fe34f8dbo.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H91163739ca78426896f53843fe34f8dbo.jpg",
                        "https://ae04.alicdn.com/kf/H32796eec76034db49eeca7e1393a41a8J.jpg",
                        "https://ae04.alicdn.com/kf/H23931c08c6d7496ba7c05f8de469ae87t.jpg",
                        "https://ae04.alicdn.com/kf/H69b00983d5cd40fd94f9ddfc9ab6415dR.jpg",
                        "https://ae04.alicdn.com/kf/Hc5efd42aba9049dfa5fa976c74804f0er.jpg",
                        "https://ae04.alicdn.com/kf/H6fa13273c11141b099bb066cce1d6414I.jpg"
                    ]
                },
                "product_title": "DMWD Electric Kitchen Water Heater Tap Instant Hot Water Faucet Heater Cold Heating Faucet Tankless Heater Under Type 3000W 220V",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXwZajU9C8I90MupF2DS3gN3FQVwoDnD06BkReeyrgF1SmRn8xBJzAS7phGZLpobv3b2iL07EwSLN65ZPpGnldOLxnj1Hn6fxo5vaFkY62Iyvk634otrMdss9EnwEsD3VVWuSui20mJYbA5dISsEatkbQJ1MKK00LYY4nMKIsJpQayMKlrGCy3mya2Zvj89JEsv4HULeDCUkaOmO8VhnsgxzNGUiofw0Z5zsrazEyNL8uNYLYVgXM1gSynMPTfHUH8pgatiVtASwheB3yAbrwAwg9s6oKNfeamfESNhcVfdQcBzQfLKr2TPkqMitnQq3URWLILy2HFvHGoMipIR04gFTQ5qZUGHsHCHM4xM4vNakwSoOu02PsgvZIGeFDINsic5sNrDFOmpxZpkTmdvitMTb3YDP55JrbqwRY0NVWvBPBnoEFkAhXwOQ6id98rc1Bf0R5UGa1lY1arD2gI8KeWifr6N1eqlDMy2S60Jo1e7hVXKP5SL9P7zOsl7etznRziMiGlH0bfNh72Nayyd6nzxEDHW9uOgx76xVSJETlzHqZGPfOMHrQ1d3BSelWuz3jaFhDIO16LF2lAyX2ZGFaA1XHdE2pl",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 15.62,
                "app_sale_price_currency": "USD",
                "original_price": 17.55,
                "sale_price": 15.62,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 28,
                "price_trend": -1.076630778974034,
                "review_trend": 3.4126163391933786,
                "sale_trend": 3.7037037037037033
            },
            {
                "_id": "630d2232e657bf00197901e5",
                "first_level_category_id": "44",
                "first_level_category_name": "Consumer Electronics",
                "product_detail_url": "https://www.aliexpress.com/item/1005002885078181.html?pdp_npi=2%40dis%21USD%2110.49%215.04%21%21%21%21%21%40214fbb8b16623177853901260e%2112000022614388945%21affd",
                "product_id": 1005002885078181,
                "product_main_image_url": "https://ae04.alicdn.com/kf/S9718182c96e44d76aee7d3f4a8e47cc76.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/S9718182c96e44d76aee7d3f4a8e47cc76.jpg",
                        "https://ae04.alicdn.com/kf/S35e78ef8c0a74331b19a4c3bb12fe256H.jpg",
                        "https://ae04.alicdn.com/kf/S85690f252d444d038e9bd80dbf70ac3b8.jpg",
                        "https://ae04.alicdn.com/kf/Sf7d4ba1c7a034f66accbd9505ac4f679C.jpg",
                        "https://ae04.alicdn.com/kf/S344704533a7640d388d35f5f5658f49aM.jpg",
                        "https://ae04.alicdn.com/kf/Scfc9b21bd0da4a18acfc9f0cb27c7b62K.jpg"
                    ]
                },
                "product_title": "1 Set Brush Cloth Liquid High Qulity Screen Cleaning Kit for LCD TV Tablet Phone Pad Laptop Computer Camera Lens Cleaner",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIHw41xmjinjwRtxZIpRDx0gOJy2CJx75niopN1dFyiP5GslfSyCWgOdiI2lGRDQYp5VziZ8BIkDKYfI9PJNy5Qge6fpyR480nO68n2tzx0Yvtj5WIKGUH3moU9yiLrFpGaBNYuQTlaTfb9BHzkGTUaZId2Ai6IWq24bD5SoyPuL2dGtpUWWdWocRdWNLqFEVuSd9nEIZskPFlhc8HsdIRWSaQ43X4QRDRQ7vQdu8RPRMinAFdiiqxsyLxzX5NNMJK1f4s3BipqlFlL3NYRK40eIo5Zi6VGY6H4cpQvdJWVTn5kiQBW6zxQhHGqCW92W4ctUAwwQrX7nKQ4hRYIJeoksIYt4crbRo7le3W560IhhQi67xvMoNJlxhX4HAoFlX9YPXrsGNZe6MbN8299J9TrBxQDWSEadtwZtxOavhju4lFkTxGs2C6wocKFTonaEj2iVU6AEogKSgxJHeijgvX28Xn4iMr8hqJLVw2veWmrlHW5WJGNeqxZULgqAYggBRoJhHv7bizKjR380m6wk7uXEdUS7RycftIfcDAlvjUyAPxPymps4dpiWRLo6OD9EHf1acz6eIwNpU6QClRV1VrWPCH7NQ98o7Fml9RIrUNvNSg9f5KekjXzWtt1",
                "second_level_category_id": 100000305,
                "second_level_category_name": "Camera & Photo",
                "app_sale_price": 5.04,
                "app_sale_price_currency": "USD",
                "original_price": 10.49,
                "sale_price": 5.04,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 33,
                "price_trend": 1.8181818181818152,
                "review_trend": 0,
                "sale_trend": 6.451612903225806
            },
            {
                "_id": "62dd8e4578ea02001ac72def",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005003119159513.html?pdp_npi=2%40dis%21USD%2124.42%2118.80%21%21%21%21%21%40214f895516651910167352181e%2112000024199470080%21affd",
                "product_id": 1005003119159513,
                "product_main_image_url": "https://ae04.alicdn.com/kf/Hf8be6c4342a54d6a8cd0e0ccfe1f53e5j.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/Hf8be6c4342a54d6a8cd0e0ccfe1f53e5j.jpg",
                        "https://ae04.alicdn.com/kf/Hc165440196164b2497b6e62eed6d868fe.jpg",
                        "https://ae04.alicdn.com/kf/Hf540cab2980d49dca58da729cd9e8347h.jpg",
                        "https://ae04.alicdn.com/kf/H21846046ff7f4911b7f00a99faebb8c7d.jpg",
                        "https://ae04.alicdn.com/kf/H460490f6f23544038251a6276ac3929fp.jpg",
                        "https://ae04.alicdn.com/kf/Hca6b99b64f4b4f9b8aacd21eb8462b4fl.jpg"
                    ]
                },
                "product_title": "20 Pieces DC 70MA (3V) Robot Intelligent Car DIY Dual Shaft Gear TT Motor For Robot Car MCU 7X2.2X1.8Cm",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTYaR0JfQBdb3fJFKAEjndoCjJRUgbK4WkabCGapT4kk5RkzTTI2ClaCcMSpWNuSFD04LkjOrpKnhtCkMR6fBOCjHwsSNAPqXcW5MMDyyym6w3oN1hfKqAoMULansdnNcz1PWnnUcBo0FaKOxv7iSnW3uwAihN9vtJT79YMNOQOLibopEuCRIdMKChdIz70vhhMvCmWumQbLsTKwWlV4E1oGOQ2xAfTXO82PcgFU0PDrBnFWP4HHiDPWAmKyIrhTnaivyR2BfheGaVlGfNRRiVyzOMMZwyfB3FnydTftuqP6TtfiLOTMSK8PlN7hu8ncT5zsqFtsJnGUZlN9gS0xe5TUXViByJay6JQ3XMCdCwRZwcIyvyKbPXgUqTseYV2FkXD0ICuBaLiu96P23wU3b7XXHeRscbedmVVJlBbnZr4eOkWkrzJm1tYoAH4lVKGgpesUbAROvdxo950tPGHlxEzhOWJoYeH16QiME6GXcmKjXhgSxdxNXOVI0258dztUFdDNxsEmmtkNPJUqYtcafhxxdTkONyNmUEFfWeCCYcdy7wWyhJhIij72aGXGQJHRnZJjK6jNnfnnVdjf7zeOkpIqZP7QxCr",
                "second_level_category_id": 200235142,
                "second_level_category_name": "Commercial Appliances",
                "app_sale_price": 18.8,
                "app_sale_price_currency": "USD",
                "original_price": 24.42,
                "sale_price": 18.8,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 10,
                "price_trend": 9.81308411214953,
                "review_trend": 0,
                "sale_trend": 42.857142857142854
            },
            {
                "_id": "630d2225e657bf0019790185",
                "first_level_category_id": "7",
                "first_level_category_name": "Computer & Office",
                "product_detail_url": "https://www.aliexpress.com/item/1005002945540817.html?pdp_npi=2%40dis%21USD%217.32%215.12%21%21%21%21%21%40214fbb9716651923045916379e%2112000022906935806%21affd",
                "product_id": 1005002945540817,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H475adc68e226480bb80abad376950217n.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H475adc68e226480bb80abad376950217n.jpg",
                        "https://ae04.alicdn.com/kf/Hb0eba89bfd0040b9af370f7f39b684d0C.jpg",
                        "https://ae04.alicdn.com/kf/H5bff529b54ec4873938239c7c3cfec92o.jpg",
                        "https://ae04.alicdn.com/kf/H0d05242b4d75428292cda9b551af5965Y.jpg",
                        "https://ae04.alicdn.com/kf/Hac7ff0b48d71473891437b24712a8655j.jpg",
                        "https://ae04.alicdn.com/kf/Hba9d0d0b20cd4b43a7d7ff8630b5d950X.jpg"
                    ]
                },
                "product_title": "4pcs/set Lube Brush Tweezer Switch Stem Holder Lube Tool Collection For Keyboard",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXQkVJpgQrbtoVQGdvKo5TjjN60WNCgaz3mZk3CsVYvdFcRhiY0LpAVkgMFPQRiqiRVUW03GvtHsqm1vp140Qn0knaGGyph90jlcCEwgYAurnQg5zMimtWNlNOWozreGjF9TQwLsia82jNt3xn2OjJc15HapbwzAxiEJIO5CRAEqlG8HGDuGPKWPVJi7imLXaqbXJXJAueJmAI3ilCbAo0SACFk1FdmX9bfKGrumuk9drgYgRZ4iz5jNoyCr2NmKdjfLkYdQ1d8EOnVkPd9B22O7WiU0zXtPmWOuFXDaf5nDmvg0lAKg73gcBFZaNPzuRG9QkN7QMatTbD2zA18fKfIzkV9Ifkz5FRo7KpMh2FLDXF6OQzJXtP5lfq83832oQTxXzP0D4ejYDQGoQaDmYx4ocCaAiIgN9xmaFlFW49QhZtUYjLQeDGlTx917cni4qBElBcQQp1MgC0p9mabxDl7K4XnKP7T7ftG3Q2y2dnuITfWkQSpWG8JKeeb15Hp3UARo6wqFUP820cYDgnXxDsAh5eBSqp3DJxQnVXrjnpMRS1a7lIsVwrtHy1Oka2iW3N0KYYMNG4c2hNvBe3PWdRmtcJHV4P",
                "second_level_category_id": 708022,
                "second_level_category_name": "Computer Cleaners",
                "app_sale_price": 5.12,
                "app_sale_price_currency": "USD",
                "original_price": 7.32,
                "sale_price": 5.12,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 15,
                "price_trend": 0,
                "review_trend": 7.1811361200428765,
                "sale_trend": -40
            },
            {
                "_id": "62dd904778ea02001ac73835",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005003244032609.html?pdp_npi=2%40dis%21USD%2131.45%2121.39%21%21%21%21%21%40214f8a7e16600953664058264e%2112000024827393041%21affd",
                "product_id": 1005003244032609,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H11414b9eb45d4938aa8f8f64eb44057fn.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H11414b9eb45d4938aa8f8f64eb44057fn.jpg",
                        "https://ae04.alicdn.com/kf/Hf66432926c8b432c9259281adaa9d059U.jpg",
                        "https://ae04.alicdn.com/kf/Hd9748d82f4e14ecdae14a67ead7a75b2r.jpg",
                        "https://ae04.alicdn.com/kf/H267d40dcb71d453c80da341d177000fa3.jpg",
                        "https://ae04.alicdn.com/kf/H19e67f45b696479a8ce9244709ddc1df2.jpg",
                        "https://ae04.alicdn.com/kf/He4696b8d6c1c4a6b8be626ab6dacfef8k.jpg"
                    ]
                },
                "product_title": "2500W Immersion Heater, Pool Heater Automatic Timer, Safe Pool Heating Immersion Heater, Perfect For Home Eu Plug",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIHw41xmjinjwRtxZIpRDx0gOJy2CJx6zS2s7dkz4AuFiyHRk9fdvKGicZ4xkcU7XaaO2QKJxxQvMQ482gz4SXD7k6kC1ubbLZ7GRkrSCynitLnlqtnsTUmtECkSWXsMNC5JyiVBO1ZodNoXUjFg9jPf2AlqmKo8v9XVlSlUSYYGAKtGpAN56P4nCWILXXlZqhpjJa72qk8DLcEx8tJt87RKkRyGHj7IaVOhe21VQkkYBSgBJenXFRlN9Vay6LQtn1yQ0UNCztmKVN6LfPddqqNbNr7qk7kqUqShITPBfw9fCMgXMKCuUICMwwmVMOPTLpLXdlCU8l0bKfVZLtiIhePS3o8UPrUniUSxT05BFR0TSvU4sqxneJqKGJCTwukDmdWNQoRf0labY7IjSRpY64zQZSEqu8WM0D8NyhLv6zvYHByuL2bXGe3SgdIcSXFgFPNKptO10Huk7VPDJ4sVcjoZVaIHGu5UGgQdckAPrCjAqR8UMsMbIIuK3KMwcDQAEnJ3Knjf95cNJAqyOLRIjqfezyYj3sOCaiSgTzpr5ksU2DYZPM6NQyPjqx8zzj9aBuF9TELaYqDllTRNLFEa37AQ0AJLYHY2GrlCXpZ0N6roZuo6WVqQfrjrg0x",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 21.39,
                "app_sale_price_currency": "USD",
                "original_price": 31.45,
                "sale_price": 21.39,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 102,
                "price_trend": -0.9722222222222261,
                "review_trend": 0,
                "sale_trend": 20
            },
            {
                "_id": "62dd90c678ea02001ac73b3b",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005003357732183.html?pdp_npi=2%40dis%21USD%2135.07%2121.74%21%21%21%21%21%40214f8a2616639814338181191e%2112000025382846865%21affd",
                "product_id": 1005003357732183,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H64c8e508895e4338b06a82ff8c2632ecO.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H64c8e508895e4338b06a82ff8c2632ecO.jpg",
                        "https://ae04.alicdn.com/kf/Hca3774d30b99466a81f5c246ce4ab304l.jpg",
                        "https://ae04.alicdn.com/kf/H56c77033638f4d08986b545a8acc6186a.jpg",
                        "https://ae04.alicdn.com/kf/Hdbc8ff41ce3e4e13a77277a596d3b46a7.jpg",
                        "https://ae04.alicdn.com/kf/H87469fac8f4e4311be70e256cdb0deffs.jpg",
                        "https://ae04.alicdn.com/kf/Hd8981f1e841a4b068fddb4386cb420dbR.jpg"
                    ]
                },
                "product_title": "3000W Electric Kitchen Water Heater Tap Instant Hot Water Faucet Heater Cold Heating Faucet Tankless Instantaneous Water Heater",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXz9VvPF0JT00gLQXXvRRBG2VB4gdrEkf3s7YP8tdioEMXjqjnptHsoyHLg5kWo9mkxDvyjgytuBnaH2LU4jvyvr2JG4zw3WOe5PZizyBGiK6ZaAj5kPgixnfUgj9NgFSJ3qcLtCk9vVuXIS9Ai6gVdlM5cqZlVoXNG0FKhNHqe7uQzz9AdepnO3qakbjP4TethO6GpLwHs3nPgJzCS1lidWQP2oMNkosGwxPm1B0hKkMyNY3TjdzTuIspHVOeOc2wQJXVw2WDyJBxEOBHRNMpeBxDYKNwPjWgqLLGQLos3d6OWoU3kXUmUJYwZCldHTcCwxK2z5qyLP1Aqj5H3P4xbUb3swxRrDe260TabWpuQ5qR9ECFlIl7ySNhplnbtgTbCSilN54AtSjXsN6YXAtNM62GA2GTCThKqSOBE2WOlFwQsJg5fbsm0jK9FshQVZpH6w8cx1dEdtFrbWFMvKZefEyZ7MlHCjt2sIlqXPyVGndOVxFAmzd2vPDn9evorEt2ixoRISwNPDsP0oRtZo1Op5e5ET8uaot1FthmcPJl0REPGxttXxW0wLhvFovPq9yCzeoqOIXLGR7lrGkDyrg6EX6UMa55",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 21.74,
                "app_sale_price_currency": "USD",
                "original_price": 35.07,
                "sale_price": 21.74,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 11,
                "price_trend": 3.3269961977186275,
                "review_trend": 4.166666666666666,
                "sale_trend": -31.25
            },
            {
                "_id": "630d1923e657bf001978d1e9",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005002918505161.html?pdp_npi=2%40dis%21USD%2124.57%2111.06%21%21%21%21%21%40214fbade16651910186938938e%2112000022783345907%21affd",
                "product_id": 1005002918505161,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H2a39b8cf25644aefb25bfb5d26b710616.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H2a39b8cf25644aefb25bfb5d26b710616.jpg",
                        "https://ae04.alicdn.com/kf/Hefeb253492d8496384a5321e0add2191q.jpg",
                        "https://ae04.alicdn.com/kf/H3f0c09df4ead4a438403b8cc7791412fF.jpg",
                        "https://ae04.alicdn.com/kf/H981580b7b4e14a1099370024f7df5215J.jpg",
                        "https://ae04.alicdn.com/kf/H63fc9e2a30144977a6444af76c78bf59Q.jpg",
                        "https://ae04.alicdn.com/kf/H1ba4abb06a5a4b84a52e534b3d8e5698N.jpg"
                    ]
                },
                "product_title": "2000/2500W Heater Water Boiler Heating Pool Swimming Bath Tub Solar Immersion Hot Intelligent Portable Automatic Fast Power Off",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXJVo0ek9aee9Dhwyc513RYnM0IOvwR7wUjTs46cYFUpk4FVFsBQ0t5cFQxNfKSHuHonIALwKtuePpIZz1xKCY3RST4wX7Zw7CV2KxIszSZ9RKsEiE6VWuekbVG80IoH5tdO6J42r9o7G3AmlYxsIenY3fIjUkaPxf4DHyJy6wpxSIhWZXD0ML1fXzhSu4kxUfSBegzrvXtDQ0JYe5tSyT6jXgVXY9ILxDgxyY7VS1XVR7wXejmuY7rGDmOudgZ1ZXHv7vTwXs0UXGe6hfwbBgX0iCu1FULLzRznhkKRi4y1r3gdiFH93nhGEASLL2BcA1ushkIoDGjkcoDqKQ7k0q4HYaj3pRsrHmTvjGrZzBuBBYqHKy52j4LRF5bklqgiSPHFURwWvifUzI3lAfSNAOcbFELIm0m8fjfCcFeNfxJZtxuDZpzJc6UtUYmvyTTw80OEGMHbRFKZxRgPmJAHkZEgJPQs0r9h6hVXApBXXcANYsiucxwyX6LdcGRdScDIouRDpLNWV3WB8LjRejCVZEWKQmwfWVvxYQpgJ5HuwyZJETwx41SFW15261edfATqaICxT2Fu6z3jLXmaoy4UijCx7EfTh1",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 11.06,
                "app_sale_price_currency": "USD",
                "original_price": 24.57,
                "sale_price": 11.06,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 23,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 76.92307692307693
            },
            {
                "_id": "62dd909078ea02001ac739f1",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/32922890619.html?pdp_npi=2%40dis%21USD%2127.18%2116.85%21%21%21%21%21%40214f89b716651910205418575e%2166078850799%21affd",
                "product_id": 32922890619,
                "product_main_image_url": "https://ae04.alicdn.com/kf/HTB14eB8XcrrK1RjSspaq6AREXXam.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/HTB14eB8XcrrK1RjSspaq6AREXXam.jpg",
                        "https://ae04.alicdn.com/kf/HTB1pKB8XijrK1RjSsplq6xHmVXao.jpg",
                        "https://ae04.alicdn.com/kf/HTB1aId8XiDxK1Rjy1zcq6yGeXXa6.jpg",
                        "https://ae04.alicdn.com/kf/HTB1BeB8XijrK1RjSsplq6xHmVXaH.jpg",
                        "https://ae04.alicdn.com/kf/HTB1ej88XcrrK1Rjy1zeq6xalFXaz.jpg",
                        "https://ae04.alicdn.com/kf/HTB1rch8XjzuK1RjSsppq6xz0XXaZ.jpg"
                    ]
                },
                "product_title": "2000W 110/220V Stainless Steel Electric Floating Immersion Heater Boiler Water Heating Element For Bathroom Travel Home",
                "promotion_link": "https://s.click.aliexpress.com/s/hvZ0wBqeusjS7glVE5yzEB5c1tCCM0q84yBktAk78J3YAWXLUwgFMnTwxhmuP5GnUblpUMAasTxRCiTxfc1YT2cEVKo2BJJFyg6moM4BjIYSw1p2kDdJ7pQTkP3dPZ2uaOdlvkqKjCja6cOZ4OW7SDyYY0Zi8Nq5X7bIaHYccsC9UAqGCnysZl7WD89wHsIJQYnatQUvgwzyF2SqUhz5fEj3z58L4Me6vRraDrGs4wxlrFfIcJXZzEZ9mQFccrYJyoSVIgu5yt0luoJrZA1r1E7u0jGZFBabkQ38gxkUvDwnXOQQDOu8gKSfvqKFkXOZLGqBqROlL4gomjVnuIFcSZM5DUxPxfAbTWlFuKUxgQdel9UyPspmtfpG08pjlNicgz374tKvT3lYBrZBN217dz3ioyV5pAHwiNGz2FnDYyF9x5NcVDZSoMn2m6DDhgjDVfQ2rvZ1K8lJOHybYfTkHPGdqM8ssBFmWDJYg63pc7uiXMZT3xXw4xHJJuOQAN3347lbxqidzKEthjdp0hYCBAaNaOIKL1DoaVs5YO9ZlOOEPHVypEmipqkqF34KyR6IwIjk8uTBHQEquTizVzSCHk7lAtbrCQw6mrr082eemjLRJjbXDXwjl05qZzwasJNxmIJuxFZ6NAiFRHBUQS3Cxzg17xCJUXX9S5vuROjpNHQJc5QIFsyHPW8pX7jx8WxEypNzPd4Z4uRI0t0mvXFUfMv6RreOaPmzh0UBSmusBPaUqHCwOMm9zY42Xj2g3jzwiGA7UAvz7KWCU0Luc7GXcVwku1PETTZMfNzd55TveTq6Bh2JqxyjCU8wazwxhautmMPDyBUcvwTPs0gpfJtOyIX6mLOoI5HLusxAtQ8QAJHesAB4McA9Vz1W04n1",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 16.85,
                "app_sale_price_currency": "USD",
                "original_price": 27.18,
                "sale_price": 16.85,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 17,
                "price_trend": 0,
                "review_trend": 3.4126163391933786,
                "sale_trend": -10.526315789473683
            },
            {
                "_id": "630d2226e657bf001979018b",
                "first_level_category_id": "7",
                "first_level_category_name": "Computer & Office",
                "product_detail_url": "https://www.aliexpress.com/item/1005003203795894.html?pdp_npi=2%40dis%21USD%2114.30%2114.30%21%21%21%21%21%40214f89c516651923009954580e%2112000024645904718%21affd",
                "product_id": 1005003203795894,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H9c785be228b64f7799134f9c3c34e5399.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H9c785be228b64f7799134f9c3c34e5399.jpg",
                        "https://ae04.alicdn.com/kf/H94bfbabca2524ec68e9beb17f759e9dcJ.jpg"
                    ]
                },
                "product_title": "1pcs 100% orginal new U12E12MS1CA3-52Z32 12.5cm 12V 0.15A refrigerator maintenance fan",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXxaDqtaubjw4MKoDPpCOiq792vx3t9p3a1ORFdcrMkxp4l7MDVBWEbvxzlNEvtk3TH8r0uDPqCo54prboCQVlyqYkIVEwld5mRFC9txC3xTEPlydvbfMY5C7sEM0bCp9vKCGRqHDkwQ0i73nCvithiBsmdhEyIgg9uWw13COfne293kqexuLmECePlMXKouQhdBWjzzmUFEZq1lig9QDP4C9bTOT9l51mbdgDP742d9m1RjC3iLJt09CScb1QXBxuCq5QBX0sY3N1NefQCtrj79wtzytS8WxT9PJNXjzSdlPklgCrpUmm7LzsLo1MgdIakItAbj6JlQbnThPvUmbpQmMJue8NFnx0wi5vQ9Nj22aqN4ZPneFrZvVzVIsRsfagd3pw7kxVfcvBVFBflmjST3OSZOnyVgK99lH9GrSc8kbFsD3Myc7zixp4zPAcz0ZEIY7altkTMgNMEvH5qVOGotJd6vRUX6vrg0pLt79YdUJYZomsTEb4oxlZAq7jD8zQRBEX3FHDDE40GJ5r89zDpeRhjRETFQcYHu3jKiMfhil4HYzAL2Y3v8HlghZDfd0esvuVacPvTLbQl8Btrkf2Fq2RuLGP",
                "second_level_category_id": 708022,
                "second_level_category_name": "Computer Cleaners",
                "app_sale_price": 14.3,
                "app_sale_price_currency": "USD",
                "original_price": 14.3,
                "sale_price": 14.3,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 33,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 32
            },
            {
                "_id": "630d1926e657bf001978d1f3",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/32640361332.html?pdp_npi=2%40dis%21USD%2117.78%2115.65%21%21%21%21%21%40214fbabb16651910224717808e%2112000029346802188%21affd",
                "product_id": 32640361332,
                "product_main_image_url": "https://ae04.alicdn.com/kf/S5cb7a265dbac43b4b533a4c4de2200a2l.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/S5cb7a265dbac43b4b533a4c4de2200a2l.jpg",
                        "https://ae04.alicdn.com/kf/S7111c80d704b416eb6c5d40c734ddd098.jpg",
                        "https://ae04.alicdn.com/kf/Sb6b12dfa51d146ba9376a9217d31b65cf.jpg",
                        "https://ae04.alicdn.com/kf/S4e9c1a61724149918308e4ccd4c214aeK.jpg",
                        "https://ae04.alicdn.com/kf/S38f21b4f454b43fa8aab1969e0d5db4a6.jpg",
                        "https://ae04.alicdn.com/kf/Sb15def2d119142adb9bccdd10ed196b6h.jpg"
                    ]
                },
                "product_title": "110V 220V Digital Display Tankless Electric Hot Water 3000W 3 sec Instant heating Faucet Tap Water Heater Electroplating process",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTYaXfUZGSi50YYfJrvxk0TyDvLEHjgHXSx6Hjr1uG6D0a3VePdPGSNPuBpd84qeMjsrEbGQtAGImAvPu3xqRQmK4fOb3c0wf3go1HUTinI5ddH8QRGyeSzgT7lukL8UwEliRlGhPfWajbK5PbXLgM4DD8sZooUTmzlziJEftGF9qjJ9Cmrc4sZytQXHVAMTJFy4DogSfvYrL8NjtIx4PIgTKmbNle1nOK1cqtXxeGCjFa3Us5PankYmYwCxPLUhi40nYFYtAdvp6Wo00XPnPe6t6o6yAN7kleBDA0HfbL29c8KwwIAVftEZjczTWaniwxhD3UkNJJhKFj4CJGsmi4KF7KyyoTHIIZOAb7aGwAVfW6c09ovI5elRqDj5ErnbT4IJWU6TOW1L4JpvR3Oq4sEmuSx4SM17qXtWWxdN0rIZFyqAXXSFPArL4y7xpMmGrJUeOxWZjaBArSyK6OmPeOB0I6N37xmqdvNSJGWYcTNIPphmtYJcPvfNPGXs8jhCYYYsXvPJxouZL3d33AdQwsS0hSyNSDqJi3VGOYjwZ1PUwfHRqhSLoQsuK2tyMZscwkbzbsKFnELVTlNwaH5L1QHCguzjJCn",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 15.65,
                "app_sale_price_currency": "USD",
                "original_price": 17.78,
                "sale_price": 15.65,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 15,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 25
            },
            {
                "_id": "630d1926e657bf001978d1f9",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005003498974386.html?pdp_npi=2%40dis%21USD%2114.57%2110.49%21%21%21%21%21%40214fbabb16651910224717808e%2112000029902537868%21affd",
                "product_id": 1005003498974386,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H2dd8bfb28bf54b9b8b24755bb811e79eO.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H2dd8bfb28bf54b9b8b24755bb811e79eO.jpg",
                        "https://ae04.alicdn.com/kf/H71e4353e25e84308a10e76163df8be070.jpg",
                        "https://ae04.alicdn.com/kf/H6191ed417a4043d5847982e0d6aa17e52.jpg",
                        "https://ae04.alicdn.com/kf/H60ac153de2884674b8ee7afa7bcbaf79B.jpg",
                        "https://ae04.alicdn.com/kf/H7cce0ed59a88424092474dc37230d482P.jpg",
                        "https://ae04.alicdn.com/kf/H83a0b20368744f30bedef918d3fa0b635.jpg"
                    ]
                },
                "product_title": "Ultrasonic Turbine Cleaning Machine Portable Folding Mini Turbine Laundry Washing Machine Household USB Washing Machine",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXzw5TSSsXo7xtr3abXdmRuw6sGxgj0ZMoLQSiUl3FUu7GenbFqvIINPmuplQYdMuXkJa9gY6BygZoiMw0dQAW07VkEjOo6fz0gEthara21N4dxAL4lG3HwaTvDTT6ZWwBm7Eu4DThA3Mho1BX0mGN5nwEgg6y1awQ9HjqSuztC2Bj86Bz2vLGjC81Y4Z6S65FVxJVdpMJMKWc01bebvYR4hE8ASHcQDudljRijBFzMi35SLMiJmFv2Zm6DlLf5vDkDRmqaulzrRbMQsByWzh8b1kPNQDQPwhwtUNXhpVRGRAheJAyD2UF0gzzyuFoMVNZC2F6NbySgcaDD08TUp0g5AMJQsK02uqwLdVYdoMP2JrEiYkR8rxr1AjREq5NsSgg7nwTmYEKwDMK2RnIcuDMimIgS8KFW5YwV9OhWtExdt7bHSMZPnILoyUhawhYg8ulrgRcBdv5pJo0I96d1p8ue0vdcd1g1jB1SmP4tfrEb29pLvk4cBlEE0MssaJJV8p5hVaq6GVFajNwNXHpJAEwAKZgvrfueqT8m97X1zaN7lul0t81VsYuah7t8BmL2Of3fydSjYt4h2FSDT9tOfzFp29ra87v",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 10.49,
                "app_sale_price_currency": "USD",
                "original_price": 14.57,
                "sale_price": 10.49,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 11,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": -15.384615384615385
            },
            {
                "_id": "62dd8e4378ea02001ac72de3",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005003573075418.html?pdp_npi=2%40dis%21USD%2137.79%2122.67%21%21%21%21%21%40214f895516651910167352181e%2112000026335341859%21affd",
                "product_id": 1005003573075418,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H3d406d422bab4145bdcb0f0ea7f44cb44.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H3d406d422bab4145bdcb0f0ea7f44cb44.jpg",
                        "https://ae04.alicdn.com/kf/Hd151532f833140a09e9f5e119539b8368.jpg",
                        "https://ae04.alicdn.com/kf/He5315616f4e8445bb49f2904986659021.jpg",
                        "https://ae04.alicdn.com/kf/H98ad5525cad84fc38502d8e92f35b06f9.jpg",
                        "https://ae04.alicdn.com/kf/H52d8dd46a2064318bfe9a17728f11a5fu.jpg"
                    ]
                },
                "product_title": "Barrel Type Vacuum Cleaner, Industrial Vacuum Cleaners Dry Wet Amphibious High-power Household Car Office Cleaning HA-Life 2022",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXzgTmxmdXFYa0wlXkgF2p0us1jb3ppiQ3iKc1JYKPwqPvDcrCxrEudWDGekuVLko8poat4SppvBeVyjATuNud9h4vrFCYRTg0AQeoEdTydqpRBdMkWHF4KloiNDDmml71q3uvGzwtBxc26v8lYHPkFRfZF5FC84mrPuYbqtdQXcp81S7SAWQF8b9Puy96iwAPJnX6R2tHtyEm00HkaTQDmd4xJdALks1u0DFY0dm4fxzy1iv0u5qMkRvvG2U3fSOV3AE8WRPtn8BQaY3CCYrULY3CPw3T9JEwgv3Kvd3yO1nebHy4UTcGq5RGGRO4ubfXq6GGPiGeOkJoyWFfMbLDTJvIlhtahblnPaSO0v03ZN2eWGe4HEGY17W4hb07IaThtyZTKGkmuLwhzNR9xLMmAKdgQl7jCesiDgecl0xFXQqRYDsLnO9yaAxugGWvYOXGjQwqkIDdZZKnPYu4ITR0dzpXOvKwN1QmcnioQdTzYlOwlqcUfyTLJ2qTTHH3JvHfE1BySvgl8byPLIujLFYtUjRx44LtIIHUCZW4cyHfrE6eZnOhuBWzJfgJeD4B9N2NJFbsLU9Bjbb8OY2wHaBOyqaCm815",
                "second_level_category_id": 200235142,
                "second_level_category_name": "Commercial Appliances",
                "app_sale_price": 22.67,
                "app_sale_price_currency": "USD",
                "original_price": 37.79,
                "sale_price": 22.67,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 7,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": -12.5
            },
            {
                "_id": "630d222ee657bf00197901c7",
                "first_level_category_id": "7",
                "first_level_category_name": "Computer & Office",
                "product_detail_url": "https://www.aliexpress.com/item/1005004063077040.html?pdp_npi=2%40dis%21USD%211.69%210.84%21%21%21%21%21%40214fba7516619107808967497e%2112000027909933028%21affd",
                "product_id": 1005004063077040,
                "product_main_image_url": "https://ae04.alicdn.com/kf/S7291390122d94d159069a3353756ae3bK.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/S7291390122d94d159069a3353756ae3bK.jpg",
                        "https://ae04.alicdn.com/kf/Sdf3e39784bef468ba39c2ae97d236513r.jpg",
                        "https://ae04.alicdn.com/kf/S273f74a3e5a54173b26da15620316380k.jpg",
                        "https://ae04.alicdn.com/kf/S12b504721187404f8f13ee85aae30d2bm.jpg",
                        "https://ae04.alicdn.com/kf/Scd0c1629798c40bc96bf82f4a63624411.jpg",
                        "https://ae04.alicdn.com/kf/S7f647378fd9f4a16b1d15fcd10cbd684J.jpg"
                    ]
                },
                "product_title": "1/2/5/10 Pcs Key Puller Keyboard Keycap Puller Kit Remover Universal for PC Keyboards Key Cap Fixing Tool Random Color Tools",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIHw41xmjinjwRtxZIpRDx0gOJy2CJx2c6MM1BAVibRxoylfSCj7M4ECNeGyibY5CeoWmVHXRqAiSzatzn6GbtZj73z6QstLcicaJjmpKcmRDBhpCStypgBenNUaRq7HqyHVcRMMNIjF5E5yldAUf9mTbGCdXZ75sESqt9iHg6wNaeLSFBxQzUewFqnAWU7RXfwBbdeinSbliHyVEVp6yUG7Ak3RoPBDqZXeAizdGieiIi1EcgbJS6PBNokOpxdeMdOKqV0zbnWaee0yiYyDdZU6nzPt4KrBgU3pIjZjtomvsxoOdEyxsmt9yMbNOFY3a4EFyuZ7doFUFq4EVNjw0pHwaDXl1ws7ev4bNz1LaInFFeSHNz8cuJUrjgO5c3vQr8PPwmB5DPFtmml5tVZj6ncPBIpABOh6GMVNslguGdx8u6ugZm6CKhhWYyAB5D7NAcSSars90zJI7O65l53yNGObEOislybms4dt2PwT1DhSYl0kJ34AcFFiBbugqQsbtodlPWolhmlKwzcLLZnZXPUjmJqOO5xZAz248uVrMtgS3tKhO9u3Z1AuiUxlKMuUu7LIMBrjBSAgtSZTlVbWrFSL2FSc9vD1EHuQqxfTM6S7o1wM5dOHCA5tXlD",
                "second_level_category_id": 708022,
                "second_level_category_name": "Computer Cleaners",
                "app_sale_price": 5.8,
                "app_sale_price_currency": "CNY",
                "original_price": 11.6,
                "sale_price": 5.8,
                "sale_price_currency": "CNY",
                "evaluate_rate": 100,
                "lastest_volume": 31,
                "price_trend": -50,
                "review_trend": 0,
                "sale_trend": 0
            },
            {
                "_id": "62dd906378ea02001ac738dd",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/4000682878774.html?pdp_npi=2%40dis%21USD%2112.50%219.75%21%21%21%21%21%40214f89b716651910205418575e%2112000027522417471%21affd",
                "product_id": 4000682878774,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H921de92006de4da88fe1e706fc932dee1.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H921de92006de4da88fe1e706fc932dee1.jpg",
                        "https://ae04.alicdn.com/kf/Hdb74adcbef8848b29b3f0a1bfb5c6b97G.jpg",
                        "https://ae04.alicdn.com/kf/H5308e4e99a7e4ac3af09903ae56a707ak.jpg",
                        "https://ae04.alicdn.com/kf/Ha1707bcbf6754870818076c0ac438049F.jpg",
                        "https://ae04.alicdn.com/kf/H15f3f59ba8484a729f3b5940fc4f913eV.jpg",
                        "https://ae04.alicdn.com/kf/H3f6ef9c5d0b7475a9c61e195688fdd71q.jpg"
                    ]
                },
                "product_title": "Portable Mini Washing Machine Easy Operation Personal Rotating Turbine Washer Suitable For Travel Home Business Trip",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXxEymgXSru0h0IWJpw2AZ1jPFwSmy8Pl587tB30jG9tnbbsFHq11ij7X0o7mj6uZ3SlsO4xzl5caQybLHaKWKucdKdeQhRUij9XIHp9DooeH39AW9KSQR6A2YJbx7UFdFi8OnxlK0Q0uJO1ioOFlphMFQM8DgEVMcm4Uha6C5t218n8IELepGDJW5xbgqCgWaGMvSFRbMV5HBvO3myxxvUXQWAWEu7lLN0fNrx2l33FzJ9sqYT0tdmLenXVL7jl7oafRJdJYSXljjTZkXu2k5J4toZz549dRw3QYygZXNnNxTeJyIaEYOGsusAMjKBaHKCUrvIVEdDnn1dhDsmHrYhaZgX0fIKuw4Ax527Omra3NOP1D1rbV6chHwUpAQWcM9EGHKUVqjNVDxAAgLK1nphRqoqyR02lfdI2bEkH4CnJ8Hz6abN10lks8BoaoES3D48DfhCy5VhbzQFigvd9zU4UQw9I4nNxMnH9LggxpN03SR9d6tEPioxkx2fsznkpLwUEH6h3DdhT54YD5APzgkxPZDmEFDBqqIXdB3aKgKXLQKToIBAuXckIHITDh3JsLpQ9NzUndBPbyhRQatAGDzXQS8EicT",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 9.75,
                "app_sale_price_currency": "USD",
                "original_price": 12.5,
                "sale_price": 9.75,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 17,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": -37.03703703703704
            },
            {
                "_id": "630d1906e657bf001978d175",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005002930537440.html?pdp_npi=2%40dis%21USD%2126.45%2123.80%21%21%21%21%21%40214fbade16651910186938938e%2112000022852912732%21affd",
                "product_id": 1005002930537440,
                "product_main_image_url": "https://ae04.alicdn.com/kf/Hc3e0dc25ec794293902691e88095c63a5.png",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/Hc3e0dc25ec794293902691e88095c63a5.png",
                        "https://ae04.alicdn.com/kf/Hf56b7ebcbb124aeb8bbd13cad3e1dbabV.jpg",
                        "https://ae04.alicdn.com/kf/H87317e0151714bfdbf13f43235b182206.jpg",
                        "https://ae04.alicdn.com/kf/Hbce4a5badb374ac9b70cfef1a05d9e2fu.jpg"
                    ]
                },
                "product_title": "220V 3000W Home Mini Electric Shower Kitchen Tankless Water Heater Instantaneous Storage-free Hot Water Heating Machine",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTYbpwTl3MakcgF67IdQIEJTTKhs96TTEAYF9p3YaRq8ARPqGXrmG2x9fOI4GloNmbPZcJs4eBruUeNBE5OCyWGgmxmxuvLyZH3sCHd6uwm0Qr1o2KHVEHoAEFiBDWoVaLSdV532XIu2K8qrpHlJgFniMITBqOd0dg4JVCgGdwlMUyvGlRxrDY8ZtKs4Sd4iw5QaKANWYNI4wg9h5VJXxjMsziPGWLd5w6FHs1WwWxle6SnAmpxdkmkmdQwb0yYQKwmdXU7IpqiMaU0blyPudQYrUTyNcQbVyqs54PbtqhHsfnz41c6qyPgVRtO5ldazVkAJDdtyek7UAkSwtIUfqH5j082Rp2Kfs8d7gW2X0SoSX16ohojgnRyDVN2AZqGoj3Gu27q4IJKczMB3DX1O3TccHPMSVAMq8piE0owT3galPH3XwLw1jieLnMopN8t106lzZcOwyksRwyf5PxFphT2OwsNZH8oVVEOzwh8WtSItg4ZsQwsc1ece5mkftblCfDTshzEQjUzXqkq6mRO0btjbIJCfqsr6wTsYS0XF6uKBQhEU7QSceQNpwlNjpmK8hsOYs8cR509UWUsXjXqs8zCQTv4xQwB",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 23.8,
                "app_sale_price_currency": "USD",
                "original_price": 26.45,
                "sale_price": 23.8,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 27,
                "price_trend": 1.1045029736618588,
                "review_trend": 0,
                "sale_trend": 92.85714285714286
            },
            {
                "_id": "62dd90cc78ea02001ac73b5f",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005004246741186.html?pdp_npi=2%40dis%21USD%2113.31%217.99%21%21%21%21%21%40214f8a5416627718345526398e%2112000028511613434%21affd",
                "product_id": 1005004246741186,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H62972af6aa6142648a96f0dca7112958Q.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H62972af6aa6142648a96f0dca7112958Q.jpg",
                        "https://ae04.alicdn.com/kf/He5bdae769b00401c8a3b1812f9331042J.jpg",
                        "https://ae04.alicdn.com/kf/Ha997ff4814444d4c999f33afa51d68fbr.jpg",
                        "https://ae04.alicdn.com/kf/Ha44c7bf6cb7b4d589202f965e93b915ew.jpg",
                        "https://ae04.alicdn.com/kf/Ha3b213eebf614e7eb10d9cdae9d57e1a1.jpg",
                        "https://ae04.alicdn.com/kf/H31c30ae4e2e7430da541326d1c132b043.jpg"
                    ]
                },
                "product_title": "Silicone Ice Mold Tray Box Wine Drinks 2 in 1 Ice Cube Maker Bucket Fruit Iced Cooler Beer Container Whiskey Freeze Kitchen Tool",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXQFz39aoS08SkU581jWbIskBSCkCt10mFJHO3wR6vTdZDp9P5pTLmeXYV9dtL36F7O36k3PutLWDgrVn8pjtgTNHia9Z0GRyMvwgjsb5gDiJ2VRObsaxKlNJ2zlRpXEyW3KAL8GDbSNEygFzFPxydxr1RS6uogMGvIfqlSYGynSmmRvdYrmiQD16JMfKhzDAZKKGHOSFRZAR1KAzAd2XBMl8OL8gNJIL5iMuy2CUHsdJIlVbq3d39m19YoCy0ia1Xsr2O3KUSOwheTiLawwyleVbiRNoHz2bgRPiQbf1f79XrZWFrTUZovVFsY4I0WRic93EbSiyxv9Klm1NuOyM4HFgm3cDaYPk5MLLTb3Ve3u3Hm1s4W1y8VPb00MiFGM1e95SUZ0KfElVHMaLefkjtB8b2pUnW97D3GapNHMMNciuTtduC27Iho0bVFd3KRXdOzmKAzTJxz9vuXtH2Yk1hQeych1mPAwFhSWcYt7xPgp22MxYvsxH0yMeEQlm84S0pikHKuMSsKifNTZbPvGdw1Yslu2FtMjbfiLAGgcSoz8VvUiGpwp44IXEuvZ2O8bHnBaQk7jEKus3LPD5OsXYpP60kY3W3",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 7.99,
                "app_sale_price_currency": "USD",
                "original_price": 13.31,
                "sale_price": 7.99,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 23,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 109.09090909090908
            },
            {
                "_id": "630d1942e657bf001978d299",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005003257040335.html?pdp_npi=2%40dis%21USD%2115.80%2112.64%21%21%21%21%21%40214f89b716651910205418575e%2112000024882264158%21affd",
                "product_id": 1005003257040335,
                "product_main_image_url": "https://ae04.alicdn.com/kf/Hc6023f3c02ab49898d1815ba5877d63bV.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/Hc6023f3c02ab49898d1815ba5877d63bV.jpg",
                        "https://ae04.alicdn.com/kf/Hd2b8cff638ea48e484e1bb5d0c12e8e7r.jpg",
                        "https://ae04.alicdn.com/kf/H89592962edfe4fac9e201729c5cf365bm.jpg"
                    ]
                },
                "product_title": "Water Heater LED display Household Electric Instant Heating Faucet Hot Cold Dual-use Tankless Water Quickly Heating Tap EU",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTYaVNg4Uz8sNiRnCACPj2G1koN2WDHLM51k5kS9jFTjvnjO2xhokspJhpjkk0OElnbNiGNhw6TYbFYJ2j2O6Y6ijtrtDoCqORdRvvwhR3VC5jdhs829bob5VGQXEzlpWK41SfW6XqZUmGNxTz1xrF9pur5p40h5EFGr1th4NBEIeBuIY0amtmI0HdomdbHHi91xtgo3S27nr8th4Owc7kpbkSBuIQvKGalX2TkA3u8i6AgN7M67zONqRfULEgr3n8RfmDvQLPLseMfV2c8MFNKCOZaAWdf7ZnTdGAHd7KIz8wdSjUgTkFsadv5F94TiXfIeeYxJSOfoDnFXDv7Bmk8M1jLDzle9y0jijpyOx3WWvn2wBYxn8oUAfqYbcFgAbci5zV4HGbiqT0JRJ4PWsTPPW4K4vUrVJiIUyOp1AQsdTRsnDTWVyvGUJ9gbhewAGywtagnCJP7t2eRtIqRRRHLGXNlGYrvBik4Hiou8S36nSjgNnpqf9RPQ5r0RZrKC7H6AEkytK0p0op99uGeyvSdPOaOmcqeUftn2vUfmUROrPnQwo2giOZWI5x429I52DygkBRC5HRV9VNK8UK4rnun6nosm1gP",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 12.64,
                "app_sale_price_currency": "USD",
                "original_price": 15.8,
                "sale_price": 12.64,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 17,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 70
            },
            {
                "_id": "62dd906c78ea02001ac73919",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005003190010521.html?pdp_npi=2%40dis%21USD%2116.98%218.66%21%21%21%21%21%40214f8a5416627718345526398e%2112000024580135126%21affd",
                "product_id": 1005003190010521,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H3a545b30c5bd404cb73b947aa82f714fT.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H3a545b30c5bd404cb73b947aa82f714fT.jpg",
                        "https://ae04.alicdn.com/kf/H25eece62165c46eb8ba7edf10365b7e5M.jpg",
                        "https://ae04.alicdn.com/kf/H63963cbc430a4dd5a9b8706b362baedbo.jpg",
                        "https://ae04.alicdn.com/kf/H5fa70715b18d4d06ae756fc3e07a36e8j.jpg",
                        "https://ae04.alicdn.com/kf/Hbe5c450fc3f94f46a2de8094ac1857d4D.jpg",
                        "https://ae04.alicdn.com/kf/H0918f65a316d479bbaf18be799cb0827s.jpg"
                    ]
                },
                "product_title": "DIY Ice Ball Tray Mold Maker Kettle Portable Ice Cubic Cube Round Mould Bottle Box Cocktails Cooling Iced Drinks Kitchen Tool",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTYbnVYWDzIOmYPkpe4EymBFTBzzClHxnvCj9vDBdndZgCXOuqFB9bTm9HnDWz1v3sdtQXcE6oEDZaNptL3o37fdGL0u34DPNpBgElsjTErrFw4ttjU4ETmPoQUUCBPZrjqpS2p6idjYDMap62xUA4cFdzM26O6cYn3uz8jyHB85t526oZvsvK9yPsZ6v7QNRFAJbYZYbOOCmVUB9yBqyxWsO7SV3VnVzQID9GDU7GZVl0M3fUOjGwEPu1TuhaGlbEkmQGDqUhU812Dc1JzdRE3PLnTXVyKLUR1cAQ6qbTs9KLfenznETvu8mB7Tw5MUPek8lWRRoT9zknVve5Qyisf1iTlI3i84UxBWDm59GjKp54bYmd61XzX4FbETGVxNXm0bfzNro5OKzdMTGKip6I4gSj2ppS6AtIH1qbxrLSDIVzoJupsIoAyZ4hO5lNzHLkbJXKKzlryB1qKDzFditnRbL5hvCTSrR3ywzQJB1eHsUjjXlI7plI0NtWRcRohizDU2CUpmhjQW9vj5QtLo2Mwu45RRY4qj9WSTeiZJ1O8mEzvt3h5kpiCwgpx9B209HYp8jbKYhwk7gg9OmHQe67cnFlcdOHl",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 8.66,
                "app_sale_price_currency": "USD",
                "original_price": 16.98,
                "sale_price": 8.66,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 22,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": -18.51851851851852
            },
            {
                "_id": "62dd909e78ea02001ac73a45",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/32966183092.html?pdp_npi=2%40dis%21USD%2134.88%2127.90%21%21%21%21%21%40214fbac116645862228856654e%2166602544778%21affd",
                "product_id": 32966183092,
                "product_main_image_url": "https://ae04.alicdn.com/kf/HLB12RhlasTxK1Rjy0Fgq6yovpXa4.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/HLB12RhlasTxK1Rjy0Fgq6yovpXa4.jpg",
                        "https://ae04.alicdn.com/kf/HLB1.WNlayDxK1RjSsphq6zHrpXaR.jpg",
                        "https://ae04.alicdn.com/kf/HLB10wdkasfrK1RjSszcq6xGGFXa0.jpg",
                        "https://ae04.alicdn.com/kf/HLB1r6VkasvrK1Rjy0Feq6ATmVXaY.jpg",
                        "https://ae04.alicdn.com/kf/HTB1Ki4yasnrK1RjSspkq6yuvXXan.jpg",
                        "https://ae04.alicdn.com/kf/H93838a3544b54b41bb301e6596e236b8F.jpg"
                    ]
                },
                "product_title": "LJXH Water Heater Element with Plug Head Nut 3KW/4.5KW/6KW/9KW/12KW 304SS for Water Tankless dn40",
                "promotion_link": "https://s.click.aliexpress.com/s/hvZ0wBqeusjS7glVE5yzEB5c1tCCM0q84yBktAk78J3YAWXLUwgFMnTwxhmuP5GnUblpUMAasTxRCiTxfc1YT2cEVKo2BJJFyg6moM4BjIYSw1p2kDdJ7pQTkP3dPZ2uaOdlvkqKjCja6cOZ4OW7SDyYY0Zi8Nq5X7bIaHYccsC9UAqGCnysZl7WD89wHsIJQYnatQUvgwzyF2SqUhz5fEj3z58L4Me6vRraDrGs4wxlrFfIcJXZzEZ9mQFccrYJyoSVIgu5yt0luoJrZA1r1E7u0jGZFBabkQ38gxkUvDwnXOQQDOu8gKSfvqKodic7kcq8VgxtVjuRNa1SHhHFiJbhgG3SkiTJnr6S0UdmCyPujX7LoizwXPlypevDagO1Ss3RDRXfJLGsCes8vaLXONaX1l5pB7H8LO9I6rEch1PI5C6EJhKkVeZRMqcPFosifzomrv89KvMxyZxXNcijKnFTGgY56IQpVXi6WNmP9JPM5glmLOdh2M9mvKyDNUpaA7GzWvij1sjo1xoiN3t6rTVY5PgYRWnDcNVmyT4byW822baGwhKJ0HuTQLrUuHZpSd1uY4VwPWxds6j9uKQAj4RCLtSUxl7yBKmXj8NhXRkLxoqghQYo1OLLosgvfF7gLSEweEw5HcfXoho4wQkXGHXNjUz8CLBgVgWeFcEYjCo0Tm9nTUqqmVushUzw9ZSTsv2fHpd9p2Qpf0sRh6IFI9Ci2gQTQNL5xWu6P0STYRztDtOPCTXwnJkj9gw3FMKumiADTPTsIrDuAFLydrXhaLxzcxTsxxnM6qD6RiMxAOglVQHCqkztEh9QAknRJfOHN0WFDFjEHXgGo8unWjtl7xlzigiMmBSadRfxyFDcDNJXXq34Ck3mdIi0AuML",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 27.9,
                "app_sale_price_currency": "USD",
                "original_price": 34.88,
                "sale_price": 27.9,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 8,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": -33.33333333333333
            },
            {
                "_id": "62dd900078ea02001ac73685",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005003194663142.html?pdp_npi=2%40dis%21USD%2136.07%2123.45%21%21%21%21%21%40214f88e216627718405751613e%2112000024602603453%21affd",
                "product_id": 1005003194663142,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H0b29309545894fd4a9e4e3493a0ff826G.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H0b29309545894fd4a9e4e3493a0ff826G.jpg",
                        "https://ae04.alicdn.com/kf/Hc4154d0e438b44df89d0e0a3c4267ca55.jpg",
                        "https://ae04.alicdn.com/kf/H4a704530fcbf49ad905b5ba8a3efa8f08.jpg",
                        "https://ae04.alicdn.com/kf/H53c8f1ced0784cda91f3e5daf9e8944cN.jpg",
                        "https://ae04.alicdn.com/kf/H55e809a19c9940bb93bacab03f4bf6dez.jpg"
                    ]
                },
                "product_title": "Portable Electric Juicer Blender Usb Mini Fruit Mixers Juicers Fruit Extractors Food Milkshake Multifunction Juice Maker Machine",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXxmIPFAqhslPu6gyqy11hDWGmIYhGryDc8UaRHdDcGePm9nXnvn1CngYVHaGNTsx9CONLcO5boyHfwfwmsrd9LkEVfmrrc0zVD3dSb6qzbrO71xWa9e7OpCNlfPlPkeEhMIMIF4keT3u9Jn5RJfEkPi89a7N0xv7LwiTGGgxYbMhBgVsLfA3iCvSjFAa4x2hB8zMSZlEPoHPLbWFO5cpMBzhAxhVTPQpittUb3uKyWAdQyFcPrW0QCdXlczsVec2nnpGAoDEU8F54ytapUkeXUwxEeYyXfsl6saKnc0vtCEsddt9f8vbykTB6KtS5ZORgbOc8aOccjyitVsD3D4lgLJ88vgQLNluP3wltnykjYQrJRoE6bjrPqcNPoYJfO23B4JbVAmNugzRrOmEueS4GJXNIQZ8lg49tyxDDQufknCSkAGeNozPOjx4C5R2KtAvudJzGnwpDOLbjCSAkOfjj3dqEfY5Yea166WBPAafftRvuB7RnwRthdrL47tdokkqTiN8PMl7cx1t23SRJR0p9ACTbp3r3TTP6gNOAUEBmFCzsGawJN6D0ZUJyvzuZJFJE3fmvuMnWkiLZkL3FRF3m68kwcqgL",
                "second_level_category_id": 100000041,
                "second_level_category_name": "Kitchen Appliances",
                "app_sale_price": 23.45,
                "app_sale_price_currency": "USD",
                "original_price": 36.07,
                "sale_price": 23.45,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 158,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": -9.195402298850574
            },
            {
                "_id": "630d2238e657bf001979020f",
                "first_level_category_id": "7",
                "first_level_category_name": "Computer & Office",
                "product_detail_url": "https://www.aliexpress.com/item/1005003534143775.html?pdp_npi=2%40dis%21USD%2128.72%2126.71%21%21%21%21%21%40214fbba316627733379107675e%2112000026202086359%21affd",
                "product_id": 1005003534143775,
                "product_main_image_url": "https://ae04.alicdn.com/kf/Haab63a39ce7d4a13bd2c719d265462edo.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/Haab63a39ce7d4a13bd2c719d265462edo.jpg",
                        "https://ae04.alicdn.com/kf/Ha3ba323f001548b09620bc695c94022aw.jpg",
                        "https://ae04.alicdn.com/kf/H26a613e0957449be974e1711d4242faaY.jpg",
                        "https://ae04.alicdn.com/kf/H107ec0bc1c2447b692e1bfb67af420812.jpg",
                        "https://ae04.alicdn.com/kf/Hbde655fb94b5414181bf4b228adebb50n.jpg",
                        "https://ae04.alicdn.com/kf/H913a401f96fc450a9f1449d0a52f591bp.jpg"
                    ]
                },
                "product_title": "MECO 45000RPM Wireless Air Duster USB Dust Blower Handheld Compressed Cleaning Tool PC Laptop Car Keyboard Electronics 6000mAh",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXzjYPPzkMgDlOzKzrGkEzpr6VpHXHcS7nGj1tCexl0kXVRJRRihZrM5tMMU5bedCPwjxzLUNnoKnzLjLezk9uSZEoCQHoJR4CXD3jCBLT9a632sGWCIkz3SPCdMhUJVSKIDvoa2oBDip9cS5meIu73xlYV8kC3DwhuUgcu3rZxGSybozBp6CpzcNxHQmdotwl4E8QsZJN7f7YEj8UPXRNO1lFi8eyilp6b5Y4OT1OBUHCMTEVlh5Pbu7lurxgN8HcffvsxfofrkH1JzlLQ2aUI8T9ZEBS6Ic4F4RaKrwr95Gj3Gh2GWw70JCFUuhZBlIPOq56UfimeVoePVAgOAM8m6xO6tWcfvH9IAmCmSjKfMapqJukQFCeqg6S4qng8n5IDguNzgtqzzf6A08b7hvqAuuW9bM3IO6pndWaculzMQcydYj9HBMTGqxghQVjtVQE0jQptF5KgcYdyiWTEbuK1y62xWRWA9jq5tHpuCmUKn2iGLh8fNVqYppefuIgT0Jzx72ijQCD9pmpqMdoUp8IeXvDPpy8RO8jtZhBxSnb9QDTIZdFYiis3KCjm2MQlerA6mTC48fzQXwhpzu5uNT2IjBOkZhh",
                "second_level_category_id": 708022,
                "second_level_category_name": "Computer Cleaners",
                "app_sale_price": 26.71,
                "app_sale_price_currency": "USD",
                "original_price": 28.72,
                "sale_price": 26.71,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 36,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 16.129032258064516
            },
            {
                "_id": "62dd90c478ea02001ac73b2f",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/4001264031089.html?pdp_npi=2%40dis%21USD%2148.13%2125.99%21%21%21%21%21%40214f89b716651910205418575e%2110000015513664314%21affd",
                "product_id": 4001264031089,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H2289f62e8f4748e2a9f68103367145973.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H2289f62e8f4748e2a9f68103367145973.jpg",
                        "https://ae04.alicdn.com/kf/H3432c3ce05fe4215ad4261e30eb56c525.jpg",
                        "https://ae04.alicdn.com/kf/H302d688d8502439abd264aa0c7bcb41eP.jpg",
                        "https://ae04.alicdn.com/kf/H466d62d047af443da47414f3c8c1b746r.jpg",
                        "https://ae04.alicdn.com/kf/H822bab0d2c8d4739a0723a84a8b154ab1.jpg",
                        "https://ae04.alicdn.com/kf/H8c6b80f468bc47f0ae50c5a41355ae18G.jpg"
                    ]
                },
                "product_title": "Water Heater for Pool 3000W Stainless Steel Immersion Heater Suspension Electric Water Heater s EU Plug",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTYaigqJrt9et3Ge9R0cVpM0kE1fXxI7xxPNWrCmqHrqqt70dNkef4PeXgC1XuRSobpTE0NJb4Pbwx8gnVKAW0xxtlSnadneyNGaDKrUgcJ6z2scoHLrtmzKje66YuMo2PicnXHrwPxotig3y985Hpm4I7xiR3RipGhx7FNlbNb0cZ17NXGHAQ5gbfa6EYJEpQ7qbdhJkJPau3kx56QQcKABOJyBUAryhmtsyGnLSmYI29hZ4e9LCDMnPi0qfoiZiwae6aoRSAT18SxAdsVE5DKXLCoAi7qXH1ngBdxiT4Qzo3LTyifTqplTbYpJBE67cyQuPKOPHKY8BGOvneQD09vWhUWM9DE11SQdDDkVSu2mAnZl5s2T4ByrXdajAXhWFclu3wEgYVEgs6WLYgvm4mNSUkMuCiNADYMuraUNvuzAMz32IFY2z0AFifLGR7FqQZvfSmesoHP9FyAs2jIJGUpq8MMSxr9nxoYbRSk4JAqllRTxhmvD5PI7haEmWru3c6ZTW0Os3v2Hdop1uUxavPAkAXhyNxM2bQP4gmKeDf1vaDLL6Fs4v1ftlXp3rqhaNFqX9lvw2lO6p0CQg3G1yMVFLAIh9oX",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 25.99,
                "app_sale_price_currency": "USD",
                "original_price": 48.13,
                "sale_price": 25.99,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 20,
                "price_trend": 10.831556503198291,
                "review_trend": 0,
                "sale_trend": 42.857142857142854
            },
            {
                "_id": "630d1d3de657bf001978dfa5",
                "first_level_category_id": "7",
                "first_level_category_name": "Computer & Office",
                "product_detail_url": "https://www.aliexpress.com/item/1005004324493188.html?pdp_npi=2%40dis%21USD%2138.56%2123.14%21%21%21%21%21%40214fba6316627733439978019e%2112000029603911677%21affd",
                "product_id": 1005004324493188,
                "product_main_image_url": "https://ae04.alicdn.com/kf/Sfc089edca7f14a7a8e85ce389e0c1ad7s.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/Sfc089edca7f14a7a8e85ce389e0c1ad7s.jpg",
                        "https://ae04.alicdn.com/kf/S8c9109a8956b4e749f04d7a1af3fa4287.jpg",
                        "https://ae04.alicdn.com/kf/S101c7535a3954c97bbba9bc67e80fe81u.jpg",
                        "https://ae04.alicdn.com/kf/S5336a928c5464fd796176378a476e3b20.jpg",
                        "https://ae04.alicdn.com/kf/S5c7847bc55f24a91ad7b172f9b2505361.jpg",
                        "https://ae04.alicdn.com/kf/S91548f167069411c83c5dd669259cdbbb.jpg"
                    ]
                },
                "product_title": "Remax 65W GaN Wall Charger Fast Charging PD4.0 3.0 Type C  USB Charge with QC 4.0 3.0 Portable Chargers Laptop Power Adapter",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXJNdOUYen4886b1YTtcsOmvXWCuiu1yCZnZMeusL2hFXl3Q1Hfiludq6RDGvQTaXbNLkrdlwhnR9LUA6VvIhuWBxiFWdyQLjsqJUcX97tRoakDNnkAq584dqIeJywrcg8ONozYK1x4rivzJ45kHG7evqzBSAkd19RTAFsIGQadpXHO24eeCP97fECqMZdiwUnhoScpSMgq1phClI6hsWWR7JP93GBlPjOfrCEibe04Xf5aL2qWQQzo9EW2XuKZdZrjsuPzsu2gBVEtaIM62dAb6zZKp6QwPIV0LxVUxzkvOSDP86OJ8ENaURSKNmleSNXp6SV5lNozy2exMjTBfvfymU3gSDGb5uwpMeQlnqCTyvKmPXIYNHpDItGftBVnkK7HeuhLoWreQy453hBw79KFGRKX0sQkTzw0oQQWoUF7UOwrPx1ERxTm3jACLNG3yTOX9uUTsgr4xebVXE6SI4b7d4susEbMxqEIy745la5i50SfO2aGWRQbMbARJVtHPJXUF4TUS1imewTTSUYps2KcaE6FJfEBTv7T7rCbDqJDATi64kNfvEf9HprEKaAT4Km6du0oydjfYm4YQNOSrRZIj3bvrUJ",
                "second_level_category_id": 200001083,
                "second_level_category_name": "Laptop Parts & Accessories",
                "app_sale_price": 23.14,
                "app_sale_price_currency": "USD",
                "original_price": 38.56,
                "sale_price": 23.14,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 283,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 0.3546099290780142
            },
            {
                "_id": "630d226ae657bf0019790389",
                "first_level_category_id": "7",
                "first_level_category_name": "Computer & Office",
                "product_detail_url": "https://www.aliexpress.com/item/1005003553229138.html?pdp_npi=2%40dis%21USD%2112.29%218.85%21%21%21%21%21%40214fbb9716651923045916379e%2112000026261176500%21affd",
                "product_id": 1005003553229138,
                "product_main_image_url": "https://ae04.alicdn.com/kf/H449964d19c3641e9b3aecad7bd352a91H.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/H449964d19c3641e9b3aecad7bd352a91H.jpg",
                        "https://ae04.alicdn.com/kf/H9e32514330c2420eb979373dc4d84433J.jpg",
                        "https://ae04.alicdn.com/kf/He634192fb24c4ddb9349f893221e58fbr.jpg",
                        "https://ae04.alicdn.com/kf/H9c614ddf1d35476dbe5e3147ba834512a.jpg"
                    ]
                },
                "product_title": "10PCS Fan Grill 120mm Metal Wire Finger Guards Chrome 12cm CPU PC Cooling Fan Grill",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXzIW4s3O6bVRuVAM0Ug2OVcXUZh9NbVxVyWdq0nSKBTErzYCDb3ElfdDy8VntOsKjkHHwm8PMUV4dx6qNg7boMUgIPgkk7DiBoc6HvO3P3VKgWUjK2nQ9JdDROnEVxAoHP6yxUq8eYNwuFL8n094nA3NVmSekL71NzkhIp5b6lDvdwAxwiIWufR6YaCMV3eeSKtBP5OmiuCFus9Ii1xoyrmk72APvnS95wCKafXo812adgdwUkxTrEtRLPi9LC0TqAVHWOqnvYAM4cRYQZ9YeLIGJJ5x3tSULzWXV5YYzbkmVNUMSl9iUQ6evgWHtPo9U1UVzwSao5SNvf1wavx4E93NlyElNbERebuoG2GIQPjhePapsPmXJcI9GfDgCVWraUnq0nSXz1z0z0LeKIIhFLQycDMoDGfUWpe6kMyX47ewhAt47dh4GI6Ujkz1acXNwrjlJIdYJluWpyAgRbp8e6Q7dneDsg8UvpL7LhyHb2KdfdOkfqWTrSxIHmORCBp9PCBUT2vlqoaTR8GMQmFJPAzTbbt91tXLKtBgYbQAajFpDQWJI5Zuz1a7Rq5q9wu6cGhwIFOtevMpwwILYZ1flBP30kdjV",
                "second_level_category_id": 708022,
                "second_level_category_name": "Computer Cleaners",
                "app_sale_price": 8.85,
                "app_sale_price_currency": "USD",
                "original_price": 12.29,
                "sale_price": 8.85,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 15,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": -6.25
            },
            {
                "_id": "630d2251e657bf00197902cf",
                "first_level_category_id": "7",
                "first_level_category_name": "Computer & Office",
                "product_detail_url": "https://www.aliexpress.com/item/1005001452925941.html?pdp_npi=2%40dis%21USD%2151.12%2127.60%21%21%21%21%21%40214f88bd16651923027851843e%2112000016168058066%21affd",
                "product_id": 1005001452925941,
                "product_main_image_url": "https://ae04.alicdn.com/kf/Hf60b36ab14f74f7684a31d8ead76e22cS.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/Hf60b36ab14f74f7684a31d8ead76e22cS.jpg",
                        "https://ae04.alicdn.com/kf/H73c13948b93b40cc9c194d4df12bf20a5.jpg",
                        "https://ae04.alicdn.com/kf/H4c75709b0532485fa6b761bce2df74ccj.jpg",
                        "https://ae04.alicdn.com/kf/Hf8e85be7d2d04875bcf95095cb3d66ddD.jpg",
                        "https://ae04.alicdn.com/kf/Hf94f9437d98f4f85b110947c3ae53d4cN.jpg",
                        "https://ae04.alicdn.com/kf/Haa6448e3636d43c6ac59a95b2d5845556.jpg"
                    ]
                },
                "product_title": "Oimaster He-2006 4 Slots Sata Internal Rack 2.5 Inch Hard Drive Case Internal Mobile Rack With Led Indicator Built-In Fan",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXwM4XpyHBNft2eWVZyPM4P3jU0nAQwLNGeS3gTE4SRBPwGBCJNDFwambmHr5qvzuf8Dp7r8nw7DnvBkD9gxfoCmwRrb0F1QTp4M6NtxYX9zwOE7TENUK4Nh53FYvZ0OYoojvB6RVVa9WWkCLExIKXGcqs4JQUhaRq90Ytb0KMlgFWsXGi4Y8h25lmwfY6J9q0koMTDNL8u2eEUTKaUPNl90CG8I0x0YVj61zTvwREvW584rzPJdflikPovr9FQjGSwNNkMZPddwBepP4lLRlF1BOv7uq8LgiXfhYx7hwFhfsCKp3wYRIIp6o7uQjkD6oikahUPRBXApANQpAuEJtCL4DY5RqH6SLFULHw33U4i7oxTq8tIMJMVOhWMUJSucXr7sqQ4xvnr03DM8ydFWYKbTxlXPxzawxyS5Qk6do7dAWcIRT63bz1lnWLySCHxuKgla7ODWcsFSn4wMz5tV2KfaWayBI5SDYz2E0RUeOJYIp13GLR8Bo7RYrOf9gDf1a5eUfj0hhl8NGwddzIxJL74s7tZQFiqVz0ymrJnUqKebEgjtYccB3AbAwoCfO7vMiSJEwHplOrmuGAAukLyZX8F7MyDLxV",
                "second_level_category_id": 708022,
                "second_level_category_name": "Computer Cleaners",
                "app_sale_price": 27.6,
                "app_sale_price_currency": "USD",
                "original_price": 51.12,
                "sale_price": 27.6,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 26,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 30
            },
            {
                "_id": "630d2239e657bf001979021b",
                "first_level_category_id": "7",
                "first_level_category_name": "Computer & Office",
                "product_detail_url": "https://www.aliexpress.com/item/33002643944.html?pdp_npi=2%40dis%21USD%2114.27%2110.13%21%21%21%21%21%40214f89c516651923009954580e%2166935895966%21affd",
                "product_id": 33002643944,
                "product_main_image_url": "https://ae04.alicdn.com/kf/Hb164a4244cc744ac8fa3c2459a5cce726.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/Hb164a4244cc744ac8fa3c2459a5cce726.jpg",
                        "https://ae04.alicdn.com/kf/H1b615eb0842748eda09d261bbbe68de9R.jpg",
                        "https://ae04.alicdn.com/kf/H9747a1a971c54acabfda0fceea65242bE.jpg",
                        "https://ae04.alicdn.com/kf/H9a25d2bc53724514a350fc39a025ce98A.jpg",
                        "https://ae04.alicdn.com/kf/H50ff8300ad134e22bb85edf2d52a2537O.jpg",
                        "https://ae04.alicdn.com/kf/H17ce6d1aac0b429ebec39abdad4684605.jpg"
                    ]
                },
                "product_title": "100pcs 5.1\" Square Head Cleaning Swab Foam Tips Sponge Stick for Inkjet Printer Print Head Camera Optical Lens Optical Equipment",
                "promotion_link": "https://s.click.aliexpress.com/s/hvZ0wBqeusjS7glVE5yzEB5c1tCCM0q84yBktAk78J3YAWXLUwgFMnTwxhmuP5GnUblpUMAasTxRCiTxfc1YT2cEVKo2BJJFyg6moM4BjIYSw1p2kDdJ7pQTkP3dPZ2uaOdlvkqKjCja6cOZ4OW7SDyYY0Zi8Nq5X7bIaHYccsC9UAqGCnysZl7WD89wHsIJQYnatQUvgwzyF2SqUhz5fEj3z58L4Me6vRraDrGs4wxlrFfIcJXZzEZ9mQFccrYJyoSVIgu5yt0luoJrZA1r1E7u0jGZFBabkQ38gxkUvDwnXOQQDOu8gKSfvqKeGdRgsbXbgIoSj64cO9dk5ts8CAirgnGrpI8jM2lcXIFpZ8t28UNkarUBvfvFjngh6S78L8UbJ0B817DNWcYmTy6CyUOTZD43lll6Ljykn6lN39mSE1YfsTNXzGzdNCmO8MJJuvd4E0ZGA7VNAuMSiOt9asVC9h2wzdLBCzawVWiRxB0WDu1ZjJIQAPkyXpHN5xAbaqxHzEGR58MtKNyRwS9cV9Y8mEgXIsa6ZWCo7aZxsoVL8nKwzaB7tFImTae6SxlzWDOUtKpIK2xvGycUBPi7ZJ3yqgpBZXsd5mz5Oun29R2HBfncNvtldPeCtB2nSN1kfTj5SP5gZlyw6nXbaGPPchpSLx8qzO6f6tFYJdGMVaw5ueO4c8aSScnYIyjKnGbTbroKx60wS23YR8N6oVrrc36FYRR8RRecSIL8NZWmcL3CLyTci1WqWPuGCqkfn9iUfv7NABG0zfqwqvG6nXRSMYKWy355lib5e6GJ07swi7X5HVLRK2IvlGuRwtxrLMKfG0bXeBkcnAxnS67YTlzl1LHrfaq9huxQyuBAXqfysViiYDiQ1hGZrGxW6WDN",
                "second_level_category_id": 708022,
                "second_level_category_name": "Computer Cleaners",
                "app_sale_price": 10.13,
                "app_sale_price_currency": "USD",
                "original_price": 14.27,
                "sale_price": 10.13,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 35,
                "price_trend": 1.4014014014014071,
                "review_trend": 0,
                "sale_trend": 16.666666666666664
            },
            {
                "_id": "630d2237e657bf0019790209",
                "first_level_category_id": "7",
                "first_level_category_name": "Computer & Office",
                "product_detail_url": "https://www.aliexpress.com/item/1005004149184424.html?pdp_npi=2%40dis%21USD%2110.10%217.07%21%21%21%21%21%40214f88bd16651923027851843e%2112000028199530756%21affd",
                "product_id": 1005004149184424,
                "product_main_image_url": "https://ae04.alicdn.com/kf/S0f0165c6b6814dcf9731e238f0b8be99L.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/S0f0165c6b6814dcf9731e238f0b8be99L.jpg",
                        "https://ae04.alicdn.com/kf/Sc9953541b618401d821eeea10c8a7cc9m.jpg",
                        "https://ae04.alicdn.com/kf/S95c3d51ab2da455fba7131fed9d61759f.jpg",
                        "https://ae04.alicdn.com/kf/S5b57e6021ebb49d9a2d319fce6f7e4dc6.jpg",
                        "https://ae04.alicdn.com/kf/Se2922a95dc054a519add2ea5bd746683l.jpg",
                        "https://ae04.alicdn.com/kf/Sa078b85d589b4903ad94356e5f650bedY.jpg"
                    ]
                },
                "product_title": "Hot Selling Computer Keyboard Mini USB Vacuum Cleaner For PC Laptop Laptop Desktop Laptop Electronic Devices Brush Cleaning",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXw0zq2CdKRM11ifrVEly9mrBFpjYbHRTscl6PhzJi0MxEZbN8rRFbFXBKzVQ3pyMOq7zO1Jqiy8wefzTsfHJ0MRwqiToFOAJc2xu6et4bPySGH4M0NXnuU1E3fpD68RsCNIGJINnFt82w1uodZ2gmsmwAIVGKFqbboFjolaMSrnPCWPKEN4txRD1mEQ8wxeS1tgdWHO7GnxCJDBvuc4IsFU849aqhZTnIVr9R6oFl0qzclzwcJRsVWkQEWCUNUnSjdBuZTp7SASTd71z2A1H5EjJgHaWyQPrHIsds8Q0iyPp7FHQKMPJc1GmyzwBaBEDgmnyChU9tkGtuO3gvoXaCHViyZCOGzjz9p8m20HB3yWIo92c2NSxqGOK0tnnimY8manAybYGKU6lNKMhMi62MpLbde6J9r1SFBpaXXkdzgt0LfpY1QHDumtbGhepeGsGSmDBrF5cYshzfanFPmMnkIO3EM5clXixK5ZMhKUmi7ZCdizSxTcZiQaxjwfIAsCNFm9suYSi4LuP30nTv7lcDp6Uj0Ar9RpHNmX0tMQwHcmJINjnaJMEwjGkzkVx3ZGKg7pnuyjcrQ0rumzesMH8rJSn1wanD",
                "second_level_category_id": 708022,
                "second_level_category_name": "Computer Cleaners",
                "app_sale_price": 7.07,
                "app_sale_price_currency": "USD",
                "original_price": 10.1,
                "sale_price": 7.07,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 25,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": -3.8461538461538463
            },
            {
                "_id": "630d192ee657bf001978d217",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/32908664585.html?pdp_npi=2%40dis%21USD%2132.80%2127.22%21%21%21%21%21%40214fbabb16651910224717808e%2165853239718%21affd",
                "product_id": 32908664585,
                "product_main_image_url": "https://ae04.alicdn.com/kf/HTB1nWmJc6rguuRjy0Feq6xcbFXam.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/HTB1nWmJc6rguuRjy0Feq6xcbFXam.jpg",
                        "https://ae04.alicdn.com/kf/HTB1lzxYnljTBKNjSZFDq6zVgVXak.jpg",
                        "https://ae04.alicdn.com/kf/HTB1ZqyNKhWYBuNjy1zkq6xGGpXaA.jpg",
                        "https://ae04.alicdn.com/kf/HTB17lM7BRyWBuNkSmFPq6xguVXaK.jpg",
                        "https://ae04.alicdn.com/kf/HTB1mwDTBLiSBuNkSnhJq6zDcpXaL.jpg",
                        "https://ae04.alicdn.com/kf/HTB1g33XJ25TBuNjSspcq6znGFXa9.jpg"
                    ]
                },
                "product_title": "DERNORD Home Brewing Heater 2\"Tri-clamp(OD64MM) 240V 2500W SUS304 Water Heating Element Heater With Stainless Steel Cover",
                "promotion_link": "https://s.click.aliexpress.com/s/hvZ0wBqeusjS7glVE5yzEB5c1tCCM0q84yBktAk78J3YAWXLUwgFMnTwxhmuP5GnUblpUMAasTxRCiTxfc1YT2cEVKo2BJJFyg6moM4BjIYSw1p2kDdJ7pQTkP3dPZ2uaOdlvkqKjCja6cOZ4OW7SDyYY0Zi8Nq5X7bIaHYccsC9UAqGCnysZl7WD89wHsIJQYnatQUvgwzyF2SqUhz5fEj3z58L4Me6vRraDrGs4wxlrFfIcJXZzEZ9mQFccrYJyoSVIgu5yt0luoJrZA1r1E7u0jGZFBabkQ38gxkUvDwnXOQQDOu8gKSfvqKpOjZD9QCAclGC7ui2mcfivXjyfnnrxfZRHquqzJ93ZRe684WKGhOZ6Z8BQ2Wgl0KnZjRnEbaeqvLiWeUGltFJmdhzRY1M2kFy4yFbZzi3QfijilbtVMqazDLiifAlAA6lsPubPbneV6wMHdVX9w88WJlFc38FWTgBQWogK09ZiZTcR2ooWAlb7ogvnVu0NGxo9mf08TcxYVslfmuGGM0MXTaoMh9h3XBxauDmtYwLIy52se1hJwbTtd3Nv2OOu31fWbT0PdXrDsQGWXBiVtWsr0rEEe7hbW2s31Jr5DCrTeD5W14L5PZRsuAaWomBMj5Lygu3jgbPRCMisD4QlOX9PNEiItlIqRcxlTpguYiaxiEgcd3bEgIaYj8jqgt91cigJt8cZeYcQaWyJ9vpaXYiShEwVOPMGSgcivLxVAL4C9jFobTMJvi0sItKmeZBFJdIWs3HzipSYAiv0FxtuJVgNyLiQks0ZmsgIA8M265QZfwpnHf1niGit519KO5s3sLMGO9blkk7Cg2n27fTei0BVFlPsij9RiSNBGLyL4hGFnnWpzSL9HkSfahsYZxCnxAL",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 27.22,
                "app_sale_price_currency": "USD",
                "original_price": 32.8,
                "sale_price": 27.22,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 11,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 0
            },
            {
                "_id": "62dd90b178ea02001ac73abd",
                "first_level_category_id": "6",
                "first_level_category_name": "Home Appliances",
                "product_detail_url": "https://www.aliexpress.com/item/1005003761022973.html?pdp_npi=2%40dis%21USD%2136.25%2129.00%21%21%21%21%21%40214f89b716651910205418575e%2112000027077030193%21affd",
                "product_id": 1005003761022973,
                "product_main_image_url": "https://ae04.alicdn.com/kf/S0c08b5b8707044eab1ed02073b9fe888X.jpg",
                "product_small_image_urls": {
                    "string": [
                        "https://ae04.alicdn.com/kf/S0c08b5b8707044eab1ed02073b9fe888X.jpg",
                        "https://ae04.alicdn.com/kf/Sb9edf03611d34ffa9c3666e75363c5b4y.jpg",
                        "https://ae04.alicdn.com/kf/S5b86bfe27d2d461699e9cf8c50506295i.jpg"
                    ]
                },
                "product_title": "Household Electric Instant Heating Faucet Hot Cold Dual-use Tankless Water Quickly Heating Tap Water Heater LED display",
                "promotion_link": "https://s.click.aliexpress.com/s/OnU3FS57cvSTUbHDIXP1rj4FXerTkM7osVL2mN0niVLHU2HRNYyWfvqTIy8sKNuiW39cGBW7rsoe4NhJx1gFO1N0AlMAT3lUHPyQmWNmzPpDcEquvBBwmohLJsCnJGhkO1HVv05wn9XfL2Km0JGmUSvQh0fiU8R3hz0cLrnsnsnVrjnrki9eNHhSEGUNdDi8UJHs8QPEDQR1Dnw8kP3RJTMVMaDBTB7vBAVHSzT7yxxA8e0poSUaEuw22INqjAj0PmeLYfdZjVzStMyapXufRdpKwi25OIIbJsYodXdxsKE4R83gYg0DZeJwKTXJH67OTZFFDuULFUDAQX7mZz4rFbzOKu2vpII57d6D3bX9ZmFtQZl6FHMs4by4qwssXpWGX6SKuYGnGe8hGvevde33s0oRWC3PxLaRWrQlFqoGyMNbqTJvgReFvAyTP6uunx0L3QjykmgvsctBdUtYWJa5ufo2pz3jHysugihzwHNaiCulvNrpXAEKVPr6CAIhvmaJjABZltc66JCB9zgll2L856dzroX5REHwlepFkXikvyZg4CGWYil1pOkvYsP9IRet9V3xKMT4Wu9CyT1BcFRxkgrrYSk2VnVKlaqoE2yyLHi28uOw6Oad7j2L9dALsM6PBVKeAZm6QUuuKYXFSc8neSYU4sdbN0YY4j1y2DWV60M1NN3i8gQpPQIZJBsrwAu8gIPMMPMIPZbitQ3zsUem446ptEKXOE5l3P9nTZNSyqw1pp2d4SzfVOx90hB851bRvJfFp0EAqRKUTfvbaq2watPodm1pGNY6ncnekqxuc1hYb9VRrUimjwSbUPVD1f1P5tOyEFMan7m82Vx3NDbQu11lMzJcsKLeMd0kqgOUANHDvBSWcQ82s5p1LWEom9vIgDSjTcDN5T0Cyr7U2AtFztt",
                "second_level_category_id": 200293142,
                "second_level_category_name": "Major Appliances",
                "app_sale_price": 29,
                "app_sale_price_currency": "USD",
                "original_price": 36.25,
                "sale_price": 29,
                "sale_price_currency": "USD",
                "evaluate_rate": 100,
                "lastest_volume": 19,
                "price_trend": 0,
                "review_trend": 0,
                "sale_trend": 46.15384615384615
            }
        ],
        hasNextPage: false,
        nextPage: 0,
        page: 0,
    }
};



const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const callNewBestSalesData = (pageNum = 1) => {
        const options = {
            method: 'GET',
            url: 'https://magic-aliexpress1.p.rapidapi.com/api/bestSales/products',
            params: {page: pageNum, priceMax: '30', priceMin: '5', sort: 'EVALUATE_RATE_ASC'},
            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setState({
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

    // useEffect(() => {
    //     if (state.bestSalesData.docs.length === 0){
    //         callNewBestSalesData()
    //     }
    // }, [])


    return {
        state,
        callNewBestSalesData
    }
}

export default useInitialState