_SMS.OnlineSimApi.prototype.getRawSite = function(site){
	var sites = {
        "Other": "7",
        "VK": "vkcom",
        "WhatsApp": "whatsapp",
        "Viber": "viber",
        "Telegram": "telegram",
        "WeChat": "wechat",
        "Google": "google",
        "Facebook": "3223",
        "Instagram": "instagram",
        "Microsoft": "microsoft",
        "KakaoTalk": "kakaotalk",
        "Twitter": "twitter",
        "Uber": "uber",
        "Mail.ru": "mailru",
        "Yahoo": "yahoo",
        "Tinder": "tinder",
        "Aol": "aol",
        "Naver": "naver",
        "Ok.ru": "odklru",
        "Avito": "avito",
        "Yandex": "yandex",
        "Steam": "steam",
        "Mamba": "mamba",
        "Imo": "imo",
        "TikTok": "tiktok",
        "DrugVokrug": "fastfriend",
        "Discord": "discord",
        "ProtonMail": "proton",
        "Grindr": "grindr",
        "Gett": "gett",
        "OLX": "olx",
        "Airbnb": "airbnb",
        "LINE Messenger": "line",
        "5ka": "pyaterochka",
        "Tencent QQ": "tencentqq",
        "Netflix": "netflix",
        "Amazon": "amazon",
        "CityMobil": "citymobil",
        "OZON": "ozon",
        "BlaBlaCar": "blablacar",
        "Alibaba": "alibaba",
        "Nike": "nike",
        "Youla": "youla",
        "LinkedIN": "linkedin",
        "Magnit": "magnit",
        "Yalla": "yalla",
        "Skout": "skout",
        "Perekrestok": "perekrestok",
        "AliPay": "alipay",
        "Drom.ru": "dromru",
        "DiDi": "didi",
        "McDonalds": "mcdonalds",
        "Delivery Club": "deliveryclub",
        "SEOsprint": "seosprint",
        "Zoho": "zoho",
        "SportMaster": "sportmaster",
        "Careem": "careem",
        "Snapchat": "snapchat",
        "Bolt": "bolt",
        "FoodPanda": "foodpanda",
        "Papara": "papara",
        "eBay": "ebay",
        "Blizzard": "battle_net",
        "Adidas": "adidas",
        "Samokat": "smart_space",
        "HQ Trivia": "hqtrivia",
        "MeetMe": "meetme",
        "POF.com": "pof_com",
        "ICQ": "icq",
        "MiChat": "michat",
        "BIGO LIVE": "bigo_live",
        "Wildberries": "wildberries",
        "Shopee": "shopee",
        "Burger King": "burgerking",
        "inDriver": "indriver",
        "Lenta": "lenta",
        "DodoPizza": "dodopizza",
        "Craigslist": "craigslist",
        "Grab": "grab",
        "Tango": "tango",
        "MVideo": "m_video",
        "Taobao": "taobao",
        "Aliexpress": "aliexpress",
        "Hezzl": "hezzl",
        "Dent": "dent",
        "Wolt": "wolt",
        "Rambler": "rambler_ru",
        "PGbonus": "pgbonus",
        "MEGA": "mega",
        "Keybase": "keybase",
        "NTT Game": "nttgame",
        "Truecaller": "truecaller",
        "Globus": "globus",
        "Prom.ua": "prom_ua",
        "Karusel": "karusel",
        "Happn": "happn",
        "Weibo": "weibo",
        "Wish": "wish",
        "PaddyPower": "paddypower",
        "РСА": "pca",
        "Foody": "foody",
        "888casino": "888casino_com",
        "WestStein": "weststein",
        "OfferUp": "offerup",
        "Amasia": "amasia",
        "1xBet": "1xbet",
        "Vernyi": "vernyi",
        "Apple": "apple",
        "BitClout": "bitclout",
        "Glovo": "glovo",
        "Premium.one": "premium_one",
        "Kufar.by": "kufar",
        "Pyro Music": "pyr_music",
        "CliQQ": "cliqq",
        "Ticketmaster": "ticketmaster",
        "Miratorg": "miratorg",
        "InboxLv": "inboxlv",
        "MyLove": "mylove",
        "RuTube": "rutube",
        "Quipp": "quipp",
        "YouStar": "youstar",
        "OffGamers": "offgamers",
        "Hily": "hily",
        "Dostavista": "dostavista",
        "Rediffmail": "rediffmail",
        "Mercado": "mercado",
        "Hopi": "hopi",
        "JustDating": "justdating",
        "Pairs": "pairs",
        "Touchance": "touchance",
        "Tosla": "tosla",
        "Ininal": "ininal",
        "CDKeys": "cdkeys",
        "AVON": "avon",
        "MyFishka": "myfishka",
        "Zalo": "zalo",
        "LiveScore": "livescore",
        "Global24": "global24",
        "Haraj": "haraj",
        "Taksheel": "taksheel",
        "Getir": "getir",
        "Faberlic": "faberlic",
        "Auchan": "auchan",
        "IQOS": "iqos",
        "1688": "taobao",
        "Clubhouse": "clubhouse",
        "Kwai": "kwai",
        "Goods": "goods_ru",
        "Vkusvill": "vkusvill",
        "KazanExpress": "kazanexpress",
        "SberMarket": "sbermarket",
        "ZdravCity": "zdravcity",
        "Kolesa.kz": "kolesa_kz",
        "Onliner.by": "onliner_by",
        "Ukrnet": "ukrnet",
        "Q12 Trivia": "q12_trivia",
        "SSOid.net": "ssoidnet",
        "Olacabs": "olacabs",
        "MyMusicTaste": "mymusictaste",
        "Surveytime": "surveytime",
        "IVI": "ivi",
        "BillMill": "billmill",
        "Okta": "okta",
        "Fiqsy": "fiqsy",
        "KuCoinPlay": "kucoinplay",
        "Icrypex": "icrypex",
        "Baidu": "baidu",
        "GlobalTel": "globaltel",
        "Socios": "socios",
        "Wmaraci": "wmaraci",
        "myGLO": "myglo",
        "CoinField": "coinfield",
        "Airtel": "airtel",
        "SnappFood": "snappfood",
        "NCsoft": "ncsoft",
        "JKF": "jkf",
        "Gamer": "gamer",
        "99app": "99app",
        "CAIXA": "caixa",
        "hamrahaval": "hamrahaval",
        "Gamekit": "gamekit",
        "Agroinform": "agroinform",
        "HumbleBundle": "humblebundle",
        "CafeBazaar": "cafebazaar",
        "Gittigidiyor": "gittigidiyor",
        "mzadqatar": "mzadqatar",
        "Algida": "algida",
        "Dream11": "dream11",
        "Oriflame": "oriflame",
        "Bykea": "bykea",
        "Immowelt": "immowelt",
        "Digikala": "digikala",
        "Yaay": "yaay",
        "GameArena": "gamearena",
        "PaxFuL": "paxful",
        "MOMO": "momo",
        "Eneba": "eneba_com",
        "Douyu": "douyu",
        "Uklon": "uklon",
        "MapleSEA": "maplesea",
        "TradingView": "tradingview",
        "Fiverr": "fiverr",
        "DetskiyMir": "detskiymir",
        "FACEIT": "faceit",
        "ELDORADO": "eldorado",
        "METRO": "metro",
        "Twitch": "twitch",
        "Bitaqaty": "bitaqaty",
        "OnTaxi": "ontaxi",
        "Tatneft": "tatneft",
        "LYKA": "lyka",
        "Stoloto": "stoloto",
        "Blockchain": "blockchain",
        "Fotostrana": "fotostrana",
        "Likee": "likee",
        "Switips": "switips",
        "GameFlip": "gameflip",
        "Nimses": "nimses",
        "Okey": "okey",
        "Signal": "signal",
        "TanTan": "tantan",
        "TaxiMaxim": "taximaxim",
        "Beget": "beget",
        "Badoo": "badoo",
        "Azino777": "azino777",
        "Azino888": "azino888",
        "Dixy": "dixi",
        "IOST": "iost",
        "Oracle": "oracle",
        "YouDo": "youdo_com",
        "Pandao": "pandao",
        "1Cupis": "1cupis_ru",
        "KFC": "kfc",
        "Steemit": "steemit",
        "Gorzdrav": "gorzdrav",
        "Akelni": "akelni",
        "Dukascopy": "dukascopy",
        "Electroneum": "electroneum",
        "Lianxin": "lianxin",
        "PokerMaster": "pokermaster",
        "PUBG": "pubg",
        "Winston": "winston",
        "Zomato": "zomato",
        "1xStavka": "1xstavka",
        "Benzuber": "benzuber",
        "GPNbonus": "gpnbonus_ru",
        "Guideh": "guideh",
        "Kontur": "kontur",
        "Okko": "okko",
        "RESO": "www_reso_ru",
        "T7 TAXI": "t7-taxi",
        "TamTam": "tamtam",
        "Vulkan": "vulkan",
        "Почта России": "russianpost",
        "Hotmail": "hotmail",
        "PP.UA": "ppua",
        "Pikabu": "pikabu",
        "FetLife": "fetlife",
        "PapaJohns": "papajohns",
        "G2A": "g2a",
        "LocalBitcoins": "localbitcoins",
        "Lyft": "lyft",
        "E-NUM": "e-num",
        "Lino.network": "lino_network",
        "Appbonus": "appbonus",
        "Sipnet": "sipnet",
        "WOG.ua": "wog_ua",
        "Zadarma": "zadarma",
        "Plenty of Fish": "plenty_of_fish",
        "Skype": "skype",
        "Auto.ru": "auto_ru",
        "GetResponse": "getresponse",
        "Spaces": "spaces_ru",
        "Qrooto": "qrooto",
        "iHerb": "iherb",
        "Sunlight": "sunlight",
        "tabor.ru": "tabor_ru",
        "LDinfo": "ldinfo",
        "4game": "4game",
        "Yandex.Eda": "yandex_eda",
        "QIP": "qip",
        "Loveplanet": "loveplanet",
        "PetrI": "petri",
        "Gem4me": "gem4me",
        "ProDoctorov": "prodoctorov",
        "FarPost": "farpost",
        "Taxify": "taxify",
        "ihc.ru": "wwwihcru",
        "Sprinthost": "sprinthost",
        "Vscale": "vscale",
        "Lukoil": "club-lukoil",
        "Sony": "sony",
        "PMSM": "pmsm",
        "Parimatch": "parimatch",
        "Studwork": "studwork",
        "ALLES Bonus": "alles_bonus",
        "Bumble": "bumble",
        "GoGo": "gogo"
    };
	return sites.hasOwnProperty(site) ? sites[site] : sites["Other"];
};