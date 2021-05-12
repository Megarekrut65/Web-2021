let countriesList = [{
        name: "Ukraine",
        flag: "https://i.pinimg.com/originals/c2/b2/75/c2b2757203f9b9e1b86986aad502d2d5.jpg",
        landmark: [{
                img: "https://lp-cms-production.imgix.net/2019-06/58ee91794d8c3e23c4fc19d8137074b3-kyevo-pecherska-lavra.jpg",
                title: "KYIV PECHERSK LAVRA",
                text: "Outstanding Orthodox monastery that started as a cave monastery in 1015, developed as a center of Eastern Orthodox church.",
                price: 100
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/%D0%9B%D0%B0%D1%81%D1%82%D0%BE%D1%87%D0%BA%D0%B8%D0%BD%D0%BE_%D0%B3%D0%BD%D0%B5%D0%B7%D0%B4%D0%BE.jpg",
                title: "SWALLOW’S NEST",
                text: "Folly of a castle – Neo-Gothic villa perched on a 40 m tall cliff over the Black Sea. Constructed in 1911 – 1912.",
                price: 59
            },
            {
                img: "https://discover-ukraine.info/uploads/i/i/4ff6cb3aa5fd32.50565084.789.jpg",
                title: "PALANOK CASTLE",
                text: "Large, well preserved castle on the top of extinct volcano. Constructed by Hungarians in the 14th century. Castle has some 140 rooms with numerous underground passages.",
                price: 145
            }
        ]
    },
    {
        name: "Poland",
        flag: "https://i.pinimg.com/originals/de/55/59/de5559cbd15e332af38407150ab8b406.jpg",
        landmark: [{
                img: "https://media-cdn.tripadvisor.com/media/photo-s/14/83/76/a0/auschwitz-birkenau-concentrati.jpg",
                title: "Auschwitz-Birkenau Concentration Camp",
                text: "One of the most infamous locations in Poland was built by Germans in World War II and became a symbol of one of humankind’s darkest moments.",
                price: 79
            },
            {
                img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A17/production/_117511367_gettyimages-528751146.jpg",
                title: "Białowieza Forest",
                text: "The Białowieża Forest is a vast forest complex that straddles the border of Poland and Belarus and consists of the relics of several primeval forests.",
                price: 34
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Wroc%C5%82aw_-_Jahrhunderthalle1.jpg/1200px-Wroc%C5%82aw_-_Jahrhunderthalle1.jpg",
                title: "Centennial Hall",
                text: "The Centennial Hall, previously named Hala Ludowa, is a celebrated building in Wrocław envisioned according to the plans of architect Max Berg.",
                price: 126
            }
        ]
    },
    {
        name: "UK",
        flag: "https://besthqwallpapers.com/Uploads/30-12-2020/149632/thumb2-united-kingdom-flag-4k-silk-wavy-flags-european-countries-uk-flag.jpg",
        landmark: [{
                img: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/aab7fb5d-2c04-4b1e-b6de-f420186724dc-London_Eye_resized.jpg",
                title: "Defining British landmarks",
                text: "Britain is bursting at the seams with beautiful buildings steeped in history, places of extraordinary natural beauty and striking ultra-modern structures.",
                price: 40
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg",
                title: "Stonehenge",
                text: "Rising from Wilshire’s Salisbury Plain, this mighty circle of stones is one of England’s most recognised sights. ",
                price: 220
            },
            {
                img: "https://www.britainexpress.com/images/attractions/editor3/St-Davids-Cathedral-1113.jpg",
                title: "St Davids Cathedral",
                text: "Considered one of the most breathtaking places of worship in Wales, St Davids Cathedral can be found in its namesake city in Pembrokeshire.",
                price: 150
            }
        ]
    },
    {
        name: "USA",
        flag: "https://besthqwallpapers.com/Uploads/23-1-2021/153605/thumb2-usa-flag-4k-silk-wavy-flags-national-symbols-flag-of-usa.jpg",
        landmark: [{
                img: "https://www.fodors.com/wp-content/uploads/2019/03/01_10AllAmericanLandmarks__TheStatueofLiberty_shutterstock_435299704-768x512.jpg",
                title: "Statue of Liberty",
                text: "For millions of immigrants, the first glimpse of America was the Statue of Liberty, and today it remains a powerful symbol of American ideals.",
                price: 10
            },
            {
                img: "https://3m4r5618el913vtfz3jffby9-wpengine.netdna-ssl.com/wp-content/uploads/usa-landmarks-devils-tower-wyoming-1024x683.jpg",
                title: "DEVILS TOWER",
                text: "Devils Tower was named America’s first national monument in 1906 by President Roosevelt.",
                price: 160
            },
            {
                img: "https://3m4r5618el913vtfz3jffby9-wpengine.netdna-ssl.com/wp-content/uploads/us-landmarks-1024x683.jpg",
                title: "HOOVER DAM",
                text: "The dam is a colossal 700 feet tall concrete structure, which forms an arch-gravity dam.",
                price: 50
            }
        ]
    },
    {
        name: "Germany",
        flag: "https://i.pinimg.com/originals/34/a6/09/34a609bae4b99a2a8108f34e8829fa9c.jpg",
        landmark: [{
                img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhUYGBgaGhwaGBgZGhwcGBgZHBoaHBgaGhgcIS4lHB4rIRoaJjgmKzExNTU1HCQ7QDszPy40NTEBDAwMEA8QHxISHjQrJCs2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAL4BCgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EAEUQAAIBAgQEAgYHBgQEBwEAAAECEQAhAwQSMQVBUWEicQYygZGhsRMUQlLB0fAjcoKSsuEVYqLxM1NjwiRDVHOTs9IW/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAQEAAgMBAQEBAAAAAAAAARECITEDEkFRInEy/9oADAMBAAIRAxEAPwD1Oa6kpwNAKDXFqSuigOmkNKaaaZOmumkiumgOrpps0tAcTTCacaY1MENJXUhNAIaSKWuFMGFaSKeRTCKARjUTVIy1G1OFTSadUeI0R+8BSuaZEdqhZqVmpk1UibSE0xzStiVAz1cibSNTDXO1RmqkLTjTCaaz1Cz1c5TalIqJgacDTHaqhUntpkGrThmVV5LCY2HKi/8ADMPoffWd+Wc3KqfHbGimkpKWuJ0uml1UlITTBWpBSE0hNBHFqaTSTSigOFLXGkoBCaa1ONMNMGUsUsV1AJXGlpKAaxqM1KaYaYNamE09jURNOJD5yPBP31jboetSuap/SLNaPoO+Ok+VwfnVoWpwUxqjapyJqFxVxNQstMepmoTFNacoprNUbPTWalTDmrzEaiY0kUa2Eq0M7VUu+hZiOa4xTTep8PKuRIW1Fyeym0dwbGuVgn5Dzq40Gg+FZfQkkXJo7VXH8ll6dPEyC5pZpK6s1F10uqmEUk0BIaYRXIacaAaopwFKBXE0AlIWpCa6gFNNrjTTTB011NNJNAONNpJppNAcTTDSmkZqYMeomqRmqJjVRLI+neMVXCjcPq9wMfKtSjSAet6xXpy8uo6R8ifxrVcHxdWBhN1w0nz0gH40QqOionNcXpparkK1BivQrtRGKKgIrXlnUWmTRCCKaqxTWNVfJTw7GeaHIqVqgzeIFRidgDT/APM0vdImKh2dTy3FWuBiIIDYi2G2pfzrKYDq6jEQeFtx91vtKfbRAQdR2rlvzXqejt+txs/r2F/zEH8a/nTfruF/zU/nX86yKx1HvFR/SL/zU/kP51l11IufJb+NXw/0nyzqmrECOR4gwIAb7Q1ERvPOrTLZ3DxJ0Or6TB0kGD3rxPL8RKuUHhWArESYHmO5PY1rPRziv1diSocPqLEMAxtKG+4tudpb24c/LdyttekUlQZTMDERXAIDAGDuOx71LW4PUU6kWlmgOJppNKaaRQDaWaSuph1dXTSE0AppprpppNAcaaWrmag8hnUfUFIlWYEc41GGjoaYFMaY1PNMaiJRmo2qRhVdxrMDDwmcnmg85dfwmqDF+lrzin94j+VVFaT0UxZyyX2LL/qMfMVlfSIy4O8s5nzIo/0fzujLETcY+H/KXSfkaIVbOonNPZpqJhWkRUTCo9qmYVGVrSIpjGmmn6aQkTEid4m8eVVpBMzj6IsTO8cqq/SDOKMExIm1+8z8NVdxriITMYaE+AjS/wDFs3sImqr0keCmH+8T7jH9J99c3yfLdvP4055/1Kl9EsAnCxS11ImDtrKs0+4D4UxMBfuj3Cr7guW0ZMdWV3PkUbT/AKQPjVSq1ny0qIYUXAG/Sn/VV7/zN+dOx5CkiTsNzYcz7KpP8RYW1Pb9ferPv5JKIfwrNADSBJG0EGTMWtcUd9bAGoAGTBDD19twbfPYULlhhoVOnSYgduh1ezepOJ6GBYvBEQokljawv+FcNz7bD/FpluO4y6SjQUw9A/zKCTDKZB3se1a7hPpKMVwjKqDQviZgpZzYaU2gmRvNeXYeIQDqmO/faBvVtw3FOpSrFSl5I1RE3Kjz9knvWvPXXPXvwObtyvX5rqgymZXERXQyrCQfgbHuDUjMACSYAuTyA612KRZV3JcONnIU8isKRz7keyiKxr+l6o7qqFgWJBsOg2/h+NOHpn/0j7xTxOxrzTTWT/8A7T/pH3j86YfTT/pH3ijBsajGzCIVDMFLHSoJ9Y9BUlZXK+kyYuLhq6aAHkMSCASpVfiwvWqJoN1JXUzExAoLMQANydhQFP6W/SfVX+jJ1eHYSSNQkDvWQ9DPpfrK3bTDhpWAVABEGOZKkdga0HH+PAoUwwZJEOY+yQxIU+zfrtVLwfOPhuuIWLqBp0HTOkDSIMcqeX2Vsb9jTBQeQ4ph4w8DXG6mzD2cx3FG0Ea9Zf05f9gq/exB8Fb+1adqyHp3iWw1/fbz9UDmO9PcgzWb4pjaikEzpn30Bg5ggFRsSCfNdvn8KNTKu8BjISQI3AJmD7T+HSoMXIlGLEi9o5i95OwqJ3DvNenYbSoYcwD7xNI00PwqRgYYLajoW/st8KJNdHNZVE1Rk1K1RkVcTTJqjzmMr4zJ9pFVh3UmGHsOn+ar4JWJyz689qmASy+YII+MCs/mv+cVxzuh81hfS5kINtWgdtlJ+Zo30iwR9YIAA9YD+Qi1O9HsuPrOpmiNbFjFvAv5k0vpAQ2NKnwsCQZvBSQZ32NczaTGgTHBwdCJ4Ew2BfkXGGRpH3ovJ2ERe4FJrgGx2rU5lAuWAUAfszAH/tnlWWeQpjeOfWqlzm0qrVxGduaMY8ojmPL596h+i6THL1NuX2qJx81rWLCxDAmLH5t+dArksWBCYUcpImOU+OuG9TfZ4HzmGioBr+3cRcX5TeL/AApXyusrJHW0KSdJGxtJIHOhjnCrlSq2P2dxI9boZkGKJyvENThGQNzBBtHeBRnUmpQ5pHUHwm0dwDIBk8qly2ai0gHsal4zhlwqq+rQTr+8FO8dfmKp8B16eEExc/M71fP+uRW54F6SPgkIFJQkEoY2P3W5G/PpWi43xpcXDCoToI1Odjb7HwM15tl2J9UyZ3Pw9laVDpwShKyW5ROkgN+MVp8Vu/USgMO9+5nzm/zqUU3Kr4SGKzqbn1vU509R7x+ddG6eIA8++KS9dlj60keuYvytHzqW367USjEDnwtHK3xFb30T4t9NhaWMukBp3Zfst+B7jvXn52cFlMmRB5SLHvRHCuIHAxFxFvFmH3lO4/XMCnujMeq1ifSvjE4pwgfDhxPdyJ+AMec1pRnlbGwNBJXEw8RgRMfYIkdfWFefcff9tjNv+0fz9YgfhRM0r6D8WzR1oo2VB7ySSflTcvmLVDmRre3ML/SJqTSFIAB0kW8+YqvtJnJfXfJcvnmR9aHSymR+PsNemZDNDEw0cWDKDHQ8x7DIryfCWWbzivRPQ7HVssqyNSFgRNwCxKyOX9qfVgi6ash6XYE4gn7WGomYCkOxtbc3raBKyfpkYdB1UfAvHzNZd3wvmeWUzCqWbxACQdJeQs7WK0qiQyyCbbtOnn050Hn8kQsz67AtPKbr8APfTslhkYj94/Ks88avXpOQH7JDYeBbDbYVIzVFkP8AhJ+4vyFT6a6+fTmqHSTSqlTaaeqVV6E5V/EZGG5BIMcvMVhuFYUY6G5h1+Lxf2VveMCMJ/Z8xWG4as5hJ5YimOU67msPku1pzMiw9HsAPmYYSviMciQqRPUdqb6Qafp2ZmCqCRPMkgABRzP6NC4PEvq7llGrEaQiC5uFEkezb5UNx7DJxkd9WoYcsAb6vowTA2Bmayq1ljcadnIZ9KhGUJyC2F+5PPkD7agzWPqBUR3M3Ec4i/65VTcPCszuwldMIJ03JX8/0NlxEUKS86TI0xdiG5t58+1YdXqTLfZLDHcqVMhEPivd1WBAgntv50J/iqdB7z+VEu84aydWsnSFuNOn1Z5kAdr1n9WF90/zf2rCTfcADHcu4LRIAAgXjl5mp8JCpBA7Ttbn7am4xlgoV0XwmAzST3AI6Hr2qPDxHIlCCIuOfw/Vq6d2eErXERnh8Nm1TDINN+cgnb+9VWbw2VyGBEmWB5Ewb++j8g7rLGNN5AMEdyDtQGbzep7kmQCCTNh2i0e3zrPmWXAPyGHEKQbixm/97VaYuOyhWw2JQ22HhIEEXE7D4VWq9gdM9D8/z9lE5XMADxEwAdUb2BO9VzbLpSpsPNOutixEMfAFG+3K1SZfOu4MkjnaDtePOmPlQ0MjSreK/fvSrgkbCCN/YJ6b1vbZ4ayRBgZtxqLOFvPqiCQYgQPWiDU+Xzzt9sjfTYXPQ8hVWcMs+k2uSel4jy3o/wCitAsedFokMTN4wLEmL/dEdZNoJj5Uz/EmW2kNc7oPhNQI2osDtqJI8vlR2Ww10nUoM7T9nmI6Wp7SxZej3H9GKhZfANSiCYXWNwp2vFRYQ1KQRLMYJ6atj/pHvqpzOFpvfv8Ah+Puo7hwZtQJgK2mx6TF6VvjTkOyqEeI7khBPuPyFFYyagU7al7Rvf3058msnSxi94m8nmPZTfqnUt7j3/Xtqb1vWnOcmKzDUxI5ksfIGtn6CDxY/fQffrP41ksxhjUQjWuIJ5dKO4NiZlXIwg7Fl8WgKSApsTP71XOtv/U2ZHp1ZD0xxAMRJE+AW/jJ3O1CfXM7pDaMxBMToTcmIiZmbedU2czWI7uHTEDrpn6RQDb14Cn7o+Ap9ei59hczmNaNqEy4m99j0Hf4UozCs5ItaCDyIY+/eh8XKuUnmX1AFfsgdPb867BfFVwUAIa8kbyTy9tRFV6bw8ThYf7i/wBIokJWY9BsxjuX+kOlFnSkDxEGC0G4HlvWyCVvOvDP6oESnnDqYLTcRwKX2tPFVxpYwn9n9QrAZDPL9YREGpmddTR4VGsyF6ncT2t1O+4y84T+z5ivP+FYf/iE/fBtz8Z361HZ8q4v9Fia1kMHaG3KzhpMA87mrfjBlkJ54d//AIlqtzyFiYGzncwB4cPc1a8YXxJ1+jAECx/ZqKi01JwkMExSpZRos5sD4gNN9lv8utPzGKjoupYYSINgWvy3Piqy4eWRC7XdlKsDBKiQQunl6s+/pVbmcJWKnV606pjkIJMwRz2rHrqfZNA/RssKHKAm43jaYA322t5V3+G4H/qD/Kv/AOq7M46KNKBgQdIMCwI3A79e5qH6u3Rfj+VHklpjOAIi32S0EMN4nnYc+vWqjJuAT4SoawC8j2PSatcXEw3QuQxuQR2a5kdIHPa1VOPgtg3ViU3Wbgjci3MfGp49YBeTMalkg7yeYuACR7KDgF+VrEbRO4BPKZ6UdlszYlmiVmI5GY/GgcXDwgAASGtYAwY3PUf71UnmgUwlCsm3KNoAj3zRXDWLSJOrbY0CuJpAYmSDCkeqw/HyPSj8tmdDKy2N7zt+rUWeCWaZkIFU3Uky49VT0foe9MzGMZBU+EyAR5QfhUjIMZFMnWQwY2VjewvZrHbtVFi4ONgwvrINUi8LeRqBuprfjqWY0zxsGuY0kAQSFPvEz3p5xyR7B/Se/agU4gFBLpK2NjsZsdqMgQbjYf0NTsglC4IENebn9dtzRuHmDA8r/wCn+/vp2Fl9a2ABBiPV5Egz5e+islgojw2mVVTdoBYxcWvGmlsGJHyJOES1iQCBzChp95HwruFZWdZ1kDWxG2xuJJ7GjmzyG0pfq4vNV+WcYb2hgYmCCZBMaetoml1fHhXPvysMLLofWcgn/MfbzpWymHFnJ9p/Oq/FzDAkjwwjQT10bjyIqXguYZkOtixDwCbnkd9+dRtzdVM9E+rA/bI9sj3Gn4GYzGXYhHA1AE7Cd9NtJ6miMtlDiOJsgILEjcCZUTzNvYTU3FV1YhKlYgDcVfHn2nrx6Qf43mttYiZjVz1atU6Ot/PtQi4jkuTp8ckkEkmd5sKXM4bBTpImLRBv5G1R5TDbQASJAi5q7JU7TCjEAFhEnbeLQB8am6RyuOxGxFQZxX8IU85O0GIjv1qcCea++q5khXV/6DodeJqckhFCjwgRJ2AHKB7+9bJm6V5hg4pRgyOFYbEMJFbH0f4wjomGzjWoC3I8cWBBm5iO9LC1cPiGmqhNPNU3FuMFDow41faY7L2Henesgk1NxvSMNl1DUYIXmQCJMdKwvCY+nWeTW/marjCaWYs0kgyxMncSTVfkeJZdcVcPBQu7NDYjcpJmOnOs719l/XEScGdzreETVql9yNK7L/Cd4oni3GsDLN4UL4mkQYsAFEQTtaNqzXEsXHxmIfEMSRpWRaFOw/e52qw9IcOHG0jD5gH/AMtORkGp/TSZHiL5lMRmXSAhYjZD4gu45xE+VUfGVg7djzWTzF6P4BrcYgLaoQEDUIHiAMDb2UzPOJOkXv626i+ox7r1n146TVA+ZCkBQTp2YwJjmRfla9TfW36P7h+dRMjogY2mYYC9jtP6+NDaWN9bXvvV+ELFs+AxRZI5N6p3hgbeIQTU7oWwiqASLEEapUiJHORaDVeudDxKw0yWHPkPbv8Ao0VlyNLFHCnqbrE8zeOX+01necBOHOB4Cy3AKiTv2PL/AGqHNZUB9JETdYMi5ve1+1Q4DIwCxpIO5/tRvEMJWXWNcgCSIK/vciDMfOq9UI1Zha0CZFjYdjRaYgFyAByjraT/AGqmwnjeSOo+N6MwcwGaN1Fg2xj30+onGjfNKESDBBIb+JrUUmZJJVhP7QooN9ILECCNotzigc9gyiAsNIYEMqyYM/ZtzpqYbTOE6v4g4SYaRf1Gjn0quZLPbbzBueyaI6oXhWSWLKpAuReADFhQeNhgEi1vumQfC1welR5rOviOA6FX0lYAN9zsb0xyb+Uf6Wpzmy+TtlnhZ4jIjKCCFKKzC+qdJ20kQDtf30Dll1tpVAR1YatPUAn8uVOzJJKE7lAGBtt4VuLi0U/IZpxpSFIC/bB1BgTP+20UTxSvpJj8PCqW0KYOxXcd6BzDoDOgEEDwxYWAt050Zg51irMIIAJhlXdrctxee1VnEMQ6pFoUNzgNpBtO29GyjMHZdNWnSNKswWZJiTcaWJER2rRLlQFIXSBvIUW772rIZZFKEtbnq5C0j5n3URg5QMAQSRFjYiD7NqWyfhyW+llxDDCm4ZuRv4Z5m21uXtoTN4SLpYIpDiRN9on5kUVx2wmTZiPgfyoTMMdGFPRvw5cqrPY/hGw0VVfQpDzAPKDS5VELLKKVgkyBY779I5VBmnhMEAndv61FRkt9Bq7gE25ge3rSsEojM5rDLeDDSBzgeIUTl2wX+wsxtA98+6qRPIHpM2/UiiMs3jUhr8zfpt7qc8FfK2xxgYdigAkRBLEn28qvPRzCT6yh0LEMV8PPTY/OsjxvM6mUwPVOx7VZ4fEQipDlWiJUmQIgxF5ItV7Pacvpt+N8eTDQqhBfbwmdPK8bH5Vjs/miyBp0AkzJHiiN5HnQWAcR5VUgH7TXPaB7alHD0uzNqKi9/VkbdhWfXU1pzzcGcDzStKKCfAxL8jcWHvoXgqf+JWI9Y8r+s3OrDhtsRkCgAYck2mSwAA93xFBcFA+sDf1j5bvSl2FZlV2I4V2J78geWHFiY9pqx9I7v/B/2JQ2ChbEMCd+QMeFY3Ij31bcY4diYuIdKW0gajYXVBad9jS/R+M9k0GHrR2hmQFo2iQdM9bzI6VHktDvpYAkBisgkEWAMm9r1qcDhP0OBiTB8IvaZ1C8cveaq1fy84vT553zU2KbO8MdmFywk9lC8hva++9R/wCDMLaRbv8A3q+J712rvVfWFjzo4rKe3KpMHMsFYTY8v7U36Msojf8AD21CLW/XvFPxQMwnBMkwY6c6Mw843q3AsBeY/tVWCZ2tRiMx5E9OdTYWDMrhC8+rBgd+nWjcjhAlyouoaAOcg2oJCY6bk9+1WfB81Gt9M6QCVPP1rVKuZKOzLeBZ+89v4noHUh+1sF36wgO/tqw4pjh0DBBYxpnocQG/8NVgxUiDhnZWJVjJB0+GO0/CnzJfautnpZcOzDhx42hRIiG0mBBAaYoXiD6ndiZkzMRMq145U3LYKO40l12Pi0xpgRfrTc+IdhMi0HqNLQackl8UW2zyTWdQbcwkSd4tad6LyFmgfdMEWBuYvzoOQAsWaJm9uh5mrvIZvDVAGTU32mCWJmTExaiwaq8o37N/4f6hTM9gFkVlAJ9XYTZJknnvHkB0rQYeewJICEkbgIDQ2LmUGpgpSWJsvqwoAOkdoPS/OiQqrMjhTpDDkJHksctr+2ncMeEQXFiCDafEany+MoNizCBeDtJ5HzHvoBMSYvvaiw5VvxlSwG27SSVG4IFjv7KDzh8GECRYNzHUbXo/MMNvfNrXig8w108jGr2Dn2FP+l/A2cwycPBNt25iPWBtSNhkZYgxP0ieW0HaicZNSItrajc9+XWh86Yy9oPjG07ySd450fo/FanlyXr/AJIozhy/tAI5f9qTf2mq9H6dv+38qKyGJDjyPyX8qYE8Vwy7gQ0aeV95HOaIyKanUlY8QBkbgD+4p2JhuSAiixWbE2kk7zRGWwI0a4DACeV5NTb/AJVPYs4hO1vCpA6Sxkx5VGUtigjcz57b9fVFHDCUhQPL2bj50pWJ/V4rHWuI8lh/t2MMF+jgsNoLCfM1NwzN5bXowkdmmCzAgXk3mO/Kn5NYLEzGm/WNQn21XcKzmX+nCph4kkwGZl3A5qPOr58xn14obF4+ynSMMKBzLGOX2UC1P6Q8UzCvCYmkQpgKv3NRuRNAZjiyK9sqmkWl2LG8xy7UfxvjGKjhUVFnQNWmWuoP9qrE6g4PmsV1xy7Ow+jWC0x/xF2mn6u3ypeF8VxcbCxg7Awi/ZAvrTpUKsarn0VL9J2O9d9L2PwpnUzTJpkxeAtmtsNqFmi8FiHgiNQIqLGy7KqsykK0wYPIxQREe/b2UQjmYA91NwMsxQuPVB637093KNA3G8X72il7LFkmGQtwZqThSMS6gXIi0mTBj2UnB8BsYHViKhnSNRAv5dOXtmjcqHQO4sfBBXcSY/GlmLkwRnyyqsgwZMRJElyNvOqxWe4CHkF8Jki2/erR3ZkOoliSkX2N58uZoHSZF7wL+w0+Z/YXV/h+C+IGsnRdiNwJ90V2e1BydLSIHKLA9+8e2n5fAYj194mSSZ1C47xT8wyyoMTCxNzyn50Z58Q/+h9cIrHlINtr/OxqbjYE+Gy6ZgWnnenZgAMEFoIO0jqZ5flUuYwyRDFVIJm4aBuJEGBHxp4GfwHYMCphptG9aDiWZL4CPMFtwLSRIN6gXD0gPKwCRICibxyvRSMBhgSpgnY85NBIsifCP3bdd+tV+RcwhJ3Fz1NWUd46maC+kQGAJUbTv8KVOUZxzFPsmD3i9CcRxjowe6Ge8Eb0YOIJeTPO6z81NIc3hnTJFpnwAi8WAK29lPYQTM47HBwr/fn+Yb0/BQvl9PMuI90x0or6zhEDxC0/+WIuekQPZSYueQDwgNDA6Y0gxvYCKWwAE4TjW8A/mTt3qbK8OxEcM6QADPiU8h0NSf4mY/4an2/2p659mhVRCWBOmTqETtKxyHvo05EzZrQZRZNrT53MzUzYusBjb1bSDHiM/rvVZiZh1IlL77zO/MCpUxS8to06QBFz17eVK+lT20yg+DxczPOYB/Ghnd/HLGPolbnuRiS3nt7q7IY4VSTeFk2k7NIE/q9S5LMriLqZQAZUiNgJ8Plc++sMs8ttlJlwS5Jn/gtb+NLkdaB4VhD6wpIPrGDy9QTPuq3QDxt/kIHYStqpMljxmMMRzbtHhHv51fN8Mu55B4uEuqWHhJQT3uBz/wA1Hcbwy2KsCbofdhrQGbxQIkTDoSJjpF/OrLiTj6USQPV/+sVdtTJNx3DcBVwsWAPEgJid/pMPqTQop3BARhZiTMgMPa+HUEGavmJqRmFJIpjr3pmvvVYWs1mkO+giCPFEfH20euMXVUKkoORgieotberL6ADvUqZcVPk1OuWaNIHh+B8xROWyoEAonn/tVwmUHaply4owKZ1ZMQKhVQwuNM3veKJy3DmEg4jmYsYIt2NW+Hkl3gefOp1wVHWmSnHCwW1EvNvujbtXZvJIiNiOCY5amknYARtJgVoMPC8qdj8NXEWG2kGB22pGy/Dsuz4IcMqOGJJENoBaAAJMHT1q7TgiHp8KnwuC4QELK7TpgTBm8b361ZjCgbk/Cl5CuXgOHzAPsH5VIvBcIT4fWse4G1Hg+fvpS1GAEOEYURoBHeTTk4ZhDbDT+VfyqwRfDqPuFMLdLD9c6WAP9RQfZUeQE005NPu1PFLpFGAN9TTpXfVF/RNEhRXRTw0Iyi9wfMx/akbKAbg+8/nUxFPGJyIkfEeVLAFGUXofefzoduHA4ivHhVGG51SxXnO0A++rTFWI71GH7UZDDnJr395/A1wySxET5z+NE0k0vqAmPlPC0SDBiPKqn0cyTJggu0ljqER4QQLW5yCfbWhY+dNYR3oz8Ghih0ss7iPK4O1V+X4WEcPqkgzfyjpardj2ppwx1NLMHtnG4K5MkqbiwPTb413FsjiO8qhKgr4uXhQA/EVfvhx/vTNHc++jRimy2CUw8UFTJVbQSfXQxQEt9x/5G/KtOyH7xppZuo91V9j+rMnV9x/5T+VJf7jfy1pGxG5x8aT6Y9B+vZR9qPrH/9k=",
                title: "Aachen Cathedral",
                text: "Aachen Cathedral is one of the most famous architectural and historical landmarks in Germany.",
                price: 40
            },
            {
                img: "https://www.annees-de-pelerinage.com/wp-content/uploads/2019/06/bastei-early-morning.jpg",
                title: "Bastei Bridge",
                text: "The Basteibrücke (Bastei Bridge) forms the central piece in an impressive rock formation that towers high above the Elbe River in the Saxon Switzerland region.",
                price: 89
            },
            {
                img: "https://tourscanner.com/blog/wp-content/uploads/2019/05/Berlin-TV-Tower-tickets.png",
                title: "Berlin TV Tower",
                text: "The Berlin TV Tower is one of the most iconic sights of this already ridiculously iconic city.",
                price: 110
            }
        ]
    }
]
var ticket = { count: 0, price: 0 }
let selectID = "countries"
let basketID = "basket"
let mainDivId = "main-div"