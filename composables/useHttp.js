// /composables/useHttp.js

import { useFetch } from "#imports";
import { hash } from "ohash";
import { useRuntimeConfig, useNuxtApp } from "#app";
import { isRef } from "vue";

// 處理錯誤
function handleError(method, response) {
  console.log("處理錯誤", method, response);
}

// 檢查是否有 ref
function checkRef(obj) {
  return Object.keys(obj).some((key) => isRef(obj[key]));
}

// fetch 函數
function fetch(url, opts) {
  const { key, params, watch } = opts;
  if (!key && ((params && checkRef(params)) || (watch && checkRef(watch))))
    console.error(
      "\x1B[31m%s\x1B[0m %s",
      "[useHttp] [error]",
      "The `key` option is required when `params` or `watch` has ref properties, please set a unique key for the current request."
    );

  const options = { ...opts };
  options.lazy = options.lazy ?? true;

  const { apiBase } = useRuntimeConfig().public;

  const cookie = useCookie("lang"); //語系切換

  return useFetch(url, {
    // 請求攔截
    onRequest({ options }) {
      // 設置 baseURL
      options.baseURL = apiBase;
      // 設置請求 headers
      const { $i18n } = useNuxtApp();
      const locale = $i18n.locale.value;
      options.headers = new Headers(options.headers);
      options.headers.set("Content-Language", locale);
      options.headers.set("Accept-Language", cookie.value);
    },
    // 響應攔截
    onResponse(_context) {
      // 處理響應邏輯
    },
    // 錯誤攔截
    onResponseError({ response, options: { method } }) {
      handleError(method, response);
    },
    // 設置 cache key
    key: key ?? hash(["api-fetch", url, JSON.stringify(options)]),
    // 合併選項
    ...options,
  });
}

// useHttp 封裝
export const useHttp = {
  get: (url, params, option) => {
    return fetch(url, { method: "get", params, ...option });
  },

  post: (url, body, option) => {
    return fetch(url, { method: "post", body, ...option });
  },

  put: (url, body, option) => {
    return fetch(url, { method: "put", body, ...option });
  },

  delete: (url, body, option) => {
    return fetch(url, { method: "delete", body, ...option });
  },
};
