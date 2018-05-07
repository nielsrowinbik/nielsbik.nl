/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/fonts/Inter-UI-Bold.woff2",
    "revision": "8506a8d02c2e819508bc53d65de6795a"
  },
  {
    "url": "assets/fonts/Inter-UI-Regular.woff2",
    "revision": "ada67516bfcb321d3af9a10b5ac85969"
  },
  {
    "url": "assets/fonts/Ubuntu-Bold.woff2",
    "revision": "62bb77d9478cf2158a3f59ae69f88d19"
  },
  {
    "url": "index.html",
    "revision": "2ad2bd83cff87a5120e048a68a4f1b81"
  },
  {
    "url": "manifest.json",
    "revision": "852b45cc93e6d308a150dd0661bbb173"
  },
  {
    "url": "workbox-config.js",
    "revision": "b2c2e1b183081a1131eef0c1a10b617e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
