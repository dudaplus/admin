'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d859ab5332381dd094f6cdd5371193d3",
".git/config": "4c2ab6ea412ea1564254f0323201d39a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "986c8c3ef9d14a3d481b9a6e9eae7602",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "69772cf89d13714fc4bd60bc61966b77",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7aa29744c420a4428ac75b6590328cc8",
".git/logs/refs/heads/main": "cf6539272aa3f67834729b96a788a948",
".git/logs/refs/remotes/origin/main": "e8367b91e95482adcab245008bef2672",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/06/0c1ca51b49021e9619edcecc99ad3ae2883a3e": "15280caf345b49f34d0a69c001d89e5e",
".git/objects/07/c4690d0ed8386a938b9e3b67ec8a9b2966d6a7": "20414d8b523ab1d380e9b73882c57afa",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/c4520213c7a1289211311eb21bef8958c9f301": "0b38dfb72d1e99757fdd6ae166644b4d",
".git/objects/0c/d99a2837ac6a11388fac9177a6733d0b263412": "30bafa827d1a49ed7c7655012235f5e4",
".git/objects/10/610ddae785926662d135192487e15399a54b3b": "ff5f74dcf70a538eaada10a2455c48e3",
".git/objects/10/8a27e69993f7e09b80cf5fee13e1aac9b2dffb": "ed2b676fc7c4ebf7e5bc8540a25ab5ea",
".git/objects/10/a0f7641c65d5feaa051c4d1e9bbed77c130500": "a30fb33c11fd99380bff345ef146dd94",
".git/objects/11/d42c17da4ad9417802bdc94b0a28b82d06824e": "25ab78e34e09c5db78905ff4ce855824",
".git/objects/12/555e16b0be4d97df23d8bb71b1f9f3537dbaa7": "980bee1467ce44862d3dc94a2af225d0",
".git/objects/1a/9d4443a9f3ac31dcde6da890d2728999b01e8a": "db856369ef93ff024225e3147e61b11d",
".git/objects/1e/82fd30d7c6562c9019af9c7fbeae4ac906b856": "c4e6c595edd17f1e886fd55d5c67df65",
".git/objects/21/b472c3fcf52ead9d75b4caeca2e5904217368b": "218827ddede550d52c53cff566abb2bc",
".git/objects/28/f12031086db60f9212132888a11a0f26750ea4": "a3455bfcf8f8660be31e90f6fa413f4b",
".git/objects/2b/679c1125ae198f2c80721a1f948c5d4a79df92": "d45024822fa1b00fdbad0e1b2f5045e9",
".git/objects/2f/7533fa68fa8492e38af162224eedbd38c152be": "77a05fc656246de3ceb4e7f83b85490d",
".git/objects/2f/7ac8c859f410198fd64a63744c6dd57d884441": "8b70c332b82c98c40dabfdf5241dca01",
".git/objects/33/1d89b5f583f448000a2a79c6787476ab3de074": "e485f2c27e1668d386cf77770da0cf05",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/31157cf2a03763a23c7bd953a1ed123b0a94f1": "379685ac8ceced0be33eb7cede14e62d",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/2cd7ca9752a04a97ce4e905f05545396b779c1": "16eb8d59eb4fcf8420d717472dafccdf",
".git/objects/39/ab446a2502a146efedbbea719d942611233601": "a37cac3af5f1215ab156404f18c98ca9",
".git/objects/39/d0224f7ac5f3e01dd7bcc624d2bea91cf3cf41": "63753ccce1dc6568ec6d9d0768b0377f",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3f/8e39b63b07796e3948e8dc5f4f7e18dc6e2994": "209fcd4e8699a4fa840c98241e02eb26",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/c025d25b4aca5df666b5785c263832c69ab696": "f2b8a4b3ee967dee91a1bd514ad2150d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/45c25d11644b27ba7bd1327a089ebac251313e": "d38910c85f3056e7a14364eaa3d83dbd",
".git/objects/4a/aede9cbe2573274ff0adcb90454bb41a03bb14": "d4436a0662a5561793a97e161b2b90e0",
".git/objects/4b/e03ff8072fba891448420e4713823cfc1988c9": "98ee90becc653d6e4adf52454fcaae88",
".git/objects/4d/d7bd47a078dfc08dfab983029b561ef7a59766": "b2eb1a7ef69b7c1b9b16a2526f049c3f",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/984be359fcec691f3879090e5ceda055481e45": "8ba4d59bdf7223e215d336901686305d",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/6f1fc40ffedc136e28562ffa9eb5a7fc423f41": "299603df0ee1a43d2d4f877dcaccb571",
".git/objects/56/db55beca1d5fe3c7559199cf348637dd1bd1e3": "1afe6448f44350f4d40c4a6e088e5cd4",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/8f9d55b545809a22abd93d3bebc0149d21f0f4": "bb6c39403fc23029ef3f2cdf67bad10a",
".git/objects/57/fd1c0df5274ea46a96bf028fffdd88e65b7b99": "1799ec45037e5b520cd45aef47f56a84",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5a/28ad80c6f362c306bf54b9174b4e8b5b0caeab": "7de251252f172ee08950ba9db30389a6",
".git/objects/5a/82c82cd0c87ae08021dfa72ed0fca33546c232": "13a5d291ec253d287391b67d1553d88c",
".git/objects/5b/e5dd8deb0cf5685575a89265310772043d7059": "95a44022fc355a3ba4ef89bc55fd752e",
".git/objects/5d/ae0be30d9656bedeb64909b9b37722d1983200": "b132498881fd6993edf9fcb482be0f53",
".git/objects/5d/e51ec21243ef6ac4a68cdfcc970936c15b5d93": "07a2bf3459ef1fc08511adb6b8f37ab5",
".git/objects/5e/82c8223635ce63dfdc79f9e7786be120cb0063": "7642bfe937483686d3e0daea9313eab5",
".git/objects/5f/b2f772a45df6dde3d2b6c3302936ad9fe1ef9a": "f8b4d10b34e21e33f1da359c0db7d4d5",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/e9172767db6032ce6383e25265d9c84549f7ec": "701e49a83958b9a42d62ac4256f65683",
".git/objects/68/119fd2fcaabae90b42ccd5d1d0a8d57e72c820": "5a304cdb024b3310625ed734ff68e934",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/07532dab6604a569b8cbb1bc8d585ed9c8f46d": "4f2ac9ff9ce5913036b80633d82cc473",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/51de79c424c74df2740af80d70d454088a7dfc": "aa3a9056e493d467507a39e6b3fb380b",
".git/objects/76/84670c255afe4ff549a4b74c047ffe669a21c6": "e7cb654f813487ec63367164809e61c7",
".git/objects/7a/d29a6d305c835b4cd086087e1f006700454228": "6c2ca943d96c9f90c16b09e5f1383792",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7e/2f8eed20b6f1a981e1c016b22aebcd01b201b8": "2b9b50d26dd73c986ab6acdb29efce3f",
".git/objects/81/0d778df8e6bf1bda0fd25e817cc195df2b0cd0": "f10f342ce2017553bd8799b9e6233df4",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/8501734b8f9a13a6d5e8856ae2dc620444d0ed": "85f990fd8984b045476ea97d8ff0834b",
".git/objects/89/d67537811f2726a64ab56a1a3ec68037081c2e": "9476350ca95c0e42ead1d3fa28c250dd",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8b/6964d25ea8c22fc44c0f0f3cce008d82146fe1": "6f5c6e80113e982cece32ebeb51f105b",
".git/objects/8e/bd3dd079c44a6ae9e473c1d94c3e2feb93ff8c": "f1a87477a00d1165d3e9cda4bd35b86a",
".git/objects/90/8b09b4a21883a01229bcd04ce1ddf5ed4f26e8": "37e51388598c1a86b779c257c93ec874",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/93/f4f10c5e52da4e6414f8f23a4ff7a2cded2a94": "a1366f032ddf7f467488d7eb42bf9038",
".git/objects/95/16946a412e4476b869c7e996e12bd896fbcde7": "6383c82f02cf29434b29399aa50ebd34",
".git/objects/96/5e63d31f2c2024601e260a4bba4746c9e2ff1b": "501aa87beaedccb9987eb862fbca210f",
".git/objects/9a/3acf65bb9f1db5e3fb762897848758272c388e": "5ae77a8a20a260c005346e04a56f60a0",
".git/objects/9c/14f7824062ce520cc6e66764d12027a28a2a65": "6f023d7a157cc2f68e6cd3681fa9798c",
".git/objects/a2/9af60d6d83e158334af04479b5135419823cb5": "d3e1efb744b260627759f11ebbeea4f5",
".git/objects/a4/7d49e1af33022ef1e2b0795bf23e30b5c408ad": "614bdf3e74bf160cc903b50c3845e59d",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/01cdfde7936f775e419eda5b7ad659f5e06452": "4e77ee58642d627d4458d02401eebb5d",
".git/objects/ac/776ba6b7a214083868356e8a1865579550223a": "4b0b01be4a56f15b43e3c75293ff4e1e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/c75a7e80c0fbc21457d3f504869c88527ae660": "068fcbb588332830afa39131369c3d55",
".git/objects/b0/d2835bc7b766d479e7a62709a6a2e735b4794d": "711371c7b6c4bcda1ad3864ea0371fcb",
".git/objects/b4/a8d8c766a7b504442f2fcfb21df4da1baef8ac": "98cffef9e7a3a7a9aacef9d169147de7",
".git/objects/b6/010c5e107b578b6d3d139bf1ea690f40c2fadc": "9c2214146062b9a6ad1c89d2cbad91da",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/9d4f482cd8aca9ab03ff062af33b00796c7626": "b5a385db030fac6703796d1f52b47fc3",
".git/objects/c1/d3383b5a7deb83e9a7b854ad1b289f2873d2a4": "5fff04a45cfe5743c1f476a3d5887d0a",
".git/objects/c3/58d34b856b38408393d0a53d464a4e0f63a090": "3cc4ade80d98314fc2b5b881fc46b82b",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/308774c1e551f815c53056744baee4ac780f39": "d2985b72b496e564bc4dbb0880023396",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/eb06f9d3ea3d2279cdb8e9b5be6a7e58b8a6a1": "62e3ad74e5b81d72c72de2c34192aff2",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/4f63acdbaee34e9fe91154f3329460529fba69": "71cd2474bf700bda25789215382a4ac1",
".git/objects/de/0538ce2c89df8b98b8e89b65935739fe6f70d6": "048d524e31daa925f6a74ed447c3a17a",
".git/objects/e2/ce7faa9914cd48ed00fef872366d11c95c5012": "47f60b4c333c36ed3fcfd76604c0d029",
".git/objects/e4/84d6b6962782e005bc473ed7196295591a941c": "7db794580edfb0d4f9fa451f069bf390",
".git/objects/e4/d272db89fd37a2dc4d7f7757023affdcab9e17": "4b09d378d13fb5e12dbf229faae39699",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/1857bf8bdabb24b83a18e155f7b55d438fa4b9": "da1d15e40e271ad22af95d82dd5f4d94",
".git/objects/ed/c753d6c1d4c3c271ecd89a1387c8ea633e0eab": "21b399c774a4a4831a4546bfbc008ab9",
".git/objects/ed/fa1da7f0231d482ce57dc4dc5066fbe142d5f7": "d12f8630ea10a5348177f3af628afd2a",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/6e21812b364059f4e4df4d34e39cdb0d1aea62": "e8989a7c151b6d8031e72cba47200977",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/e2781d94ce1baf022e0dc86cc104e950390212": "9639628922792d4266df121476b0f3f4",
".git/objects/f4/c0142fbe7b24ca006da6ace003d36945610c83": "facbd9041260b8c38ea1c05bbe76b59a",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/de4a03939261fc30b1b3b7fc1252be191c8bf0": "70f414714d112da0080f7c0898474502",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fa/a152812dcd310b4dcbd3fbf0a07a744532135c": "0268a9cc708f55e37264f68b81593094",
".git/objects/fa/cc15ebf72eb26db0c3faf63ae2f13aa9f283e5": "0316818d256eb604c2c86ba51c629fed",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/ORIG_HEAD": "97a7e498eaa160bd668a5cc19d729dca",
".git/refs/heads/main": "acd7576fe9b47ef69edbf1cb392752cf",
".git/refs/remotes/origin/main": "acd7576fe9b47ef69edbf1cb392752cf",
"assets/AssetManifest.bin": "5b55b328aeb7f59daafb9dc05a0f60a4",
"assets/AssetManifest.bin.json": "e1776b003f4d8f8a52c556e3d34d35d2",
"assets/assets/appbar.png": "857180b620081eb5561b26de6696f2c2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8b2e76d038f4e479943ca7246c252ba7",
"assets/NOTICES": "d242d36740bc82b5381e917e795fe3fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "ae7a30e9e6ef044c4542acd05c574e79",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "c0b798b3bc1a1825356a2fefa502bb64",
"icons/Icon-192.png": "31cb292d1d8ced488654ccfdafc34d13",
"icons/Icon-512.png": "6a60bf4e0c47b5ef969334a74a74aa7c",
"icons/Icon-maskable-192.png": "31cb292d1d8ced488654ccfdafc34d13",
"icons/Icon-maskable-512.png": "6a60bf4e0c47b5ef969334a74a74aa7c",
"index.html": "f37ffb8ae0d1a5dd3ae238f740c29936",
"/": "f37ffb8ae0d1a5dd3ae238f740c29936",
"main.dart.js": "79e61605769e4020969e77dc37a1a646",
"manifest.json": "48e8d786e9300b8eaac96109e778c45b",
"version.json": "ff38efb2e1058fa4bc4bc33b700dfc36"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
