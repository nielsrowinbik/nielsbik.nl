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

workbox.skipWaiting();
workbox.clientsClaim();

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
    "revision": "43c7f6f36c61349edfd8334eb71a7989"
  },
  {
    "url": "manifest.json",
    "revision": "790b30a8e400c25f5828f0fa1f981a26"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
