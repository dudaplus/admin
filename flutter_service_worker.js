'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "457153a473dd884de8e8a9c6167a0af2",
".git/config": "4c2ab6ea412ea1564254f0323201d39a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "e6f82e9116aa65676a3406cf760227de",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1060dfdf28b2342a0cf63231f0ce567e",
".git/logs/refs/heads/main": "9027acec040de350a5a8c64b5773b679",
".git/logs/refs/remotes/origin/main": "3af28ee7130322dfe96d624658e5e9b9",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/07/c4690d0ed8386a938b9e3b67ec8a9b2966d6a7": "20414d8b523ab1d380e9b73882c57afa",
".git/objects/0c/d99a2837ac6a11388fac9177a6733d0b263412": "30bafa827d1a49ed7c7655012235f5e4",
".git/objects/10/610ddae785926662d135192487e15399a54b3b": "ff5f74dcf70a538eaada10a2455c48e3",
".git/objects/10/8a27e69993f7e09b80cf5fee13e1aac9b2dffb": "ed2b676fc7c4ebf7e5bc8540a25ab5ea",
".git/objects/12/555e16b0be4d97df23d8bb71b1f9f3537dbaa7": "980bee1467ce44862d3dc94a2af225d0",
".git/objects/1a/9d4443a9f3ac31dcde6da890d2728999b01e8a": "db856369ef93ff024225e3147e61b11d",
".git/objects/1e/82fd30d7c6562c9019af9c7fbeae4ac906b856": "c4e6c595edd17f1e886fd55d5c67df65",
".git/objects/21/b472c3fcf52ead9d75b4caeca2e5904217368b": "218827ddede550d52c53cff566abb2bc",
".git/objects/2b/679c1125ae198f2c80721a1f948c5d4a79df92": "d45024822fa1b00fdbad0e1b2f5045e9",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/31157cf2a03763a23c7bd953a1ed123b0a94f1": "379685ac8ceced0be33eb7cede14e62d",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3f/8e39b63b07796e3948e8dc5f4f7e18dc6e2994": "209fcd4e8699a4fa840c98241e02eb26",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/984be359fcec691f3879090e5ceda055481e45": "8ba4d59bdf7223e215d336901686305d",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/8f9d55b545809a22abd93d3bebc0149d21f0f4": "bb6c39403fc23029ef3f2cdf67bad10a",
".git/objects/57/fd1c0df5274ea46a96bf028fffdd88e65b7b99": "1799ec45037e5b520cd45aef47f56a84",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5b/e5dd8deb0cf5685575a89265310772043d7059": "95a44022fc355a3ba4ef89bc55fd752e",
".git/objects/5d/e51ec21243ef6ac4a68cdfcc970936c15b5d93": "07a2bf3459ef1fc08511adb6b8f37ab5",
".git/objects/5e/82c8223635ce63dfdc79f9e7786be120cb0063": "7642bfe937483686d3e0daea9313eab5",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/51de79c424c74df2740af80d70d454088a7dfc": "aa3a9056e493d467507a39e6b3fb380b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/90/8b09b4a21883a01229bcd04ce1ddf5ed4f26e8": "37e51388598c1a86b779c257c93ec874",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9a/3acf65bb9f1db5e3fb762897848758272c388e": "5ae77a8a20a260c005346e04a56f60a0",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b4/a8d8c766a7b504442f2fcfb21df4da1baef8ac": "98cffef9e7a3a7a9aacef9d169147de7",
".git/objects/c3/58d34b856b38408393d0a53d464a4e0f63a090": "3cc4ade80d98314fc2b5b881fc46b82b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/de/0538ce2c89df8b98b8e89b65935739fe6f70d6": "048d524e31daa925f6a74ed447c3a17a",
".git/objects/e4/84d6b6962782e005bc473ed7196295591a941c": "7db794580edfb0d4f9fa451f069bf390",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/e2781d94ce1baf022e0dc86cc104e950390212": "9639628922792d4266df121476b0f3f4",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fa/a152812dcd310b4dcbd3fbf0a07a744532135c": "0268a9cc708f55e37264f68b81593094",
".git/refs/heads/main": "e9e52b9beb68cf00c63f009339b7981f",
".git/refs/remotes/origin/main": "e9e52b9beb68cf00c63f009339b7981f",
"assets/AssetManifest.bin": "5b55b328aeb7f59daafb9dc05a0f60a4",
"assets/AssetManifest.bin.json": "e1776b003f4d8f8a52c556e3d34d35d2",
"assets/AssetManifest.json": "81e4d3b6b9b2a1fa48f552dd19cd7f36",
"assets/assets/appbar.png": "857180b620081eb5561b26de6696f2c2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1e4a8ff8939e699d976f16142ff76c19",
"assets/NOTICES": "80e390fcd87550a668cd0b8a953efe20",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "ae7a30e9e6ef044c4542acd05c574e79",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3dcd7604cef1f9f066944836be0e0d04",
"icons/Icon-192.png": "31cb292d1d8ced488654ccfdafc34d13",
"icons/Icon-512.png": "6a60bf4e0c47b5ef969334a74a74aa7c",
"icons/Icon-maskable-192.png": "31cb292d1d8ced488654ccfdafc34d13",
"icons/Icon-maskable-512.png": "6a60bf4e0c47b5ef969334a74a74aa7c",
"index.html": "df3b36c4a4422833443f1f12fd436e63",
"/": "df3b36c4a4422833443f1f12fd436e63",
"main.dart.js": "3a73cb1920abe06e161f37c41173648c",
"manifest.json": "48e8d786e9300b8eaac96109e778c45b",
"version.json": "676acc8d0b18ffa9b0cf6a6e72ed3dc8"};
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
