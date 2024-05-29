// /api/news.js

const API = {
  NEWS: "/news",
};

// NewsDetailModel 定義
// 將 TypeScript 的 interface 轉換成 JSDoc 註釋
/**
 * @typedef {Object} NewsDetailModel
 * @property {string} content
 * @property {string} createAt
 * @property {number} id
 * @property {string} language
 * @property {string} summary
 * @property {string} title
 * @property {string} titleUrl
 * @property {string} updateAt
 * @property {string|null} url
 */

/**
 * @typedef {Object} NewsListParams
 * @property {number} [_limit]
 * @property {number} [_page]
 */

/**
 * @typedef {Object} PaginationMeta
 * @property {number} count
 * @property {number} limit
 * @property {number} page
 */

/**
 * @typedef {Object} NewsListResponse
 * @property {NewsDetailModel[]} items
 * @property {PaginationMeta} meta
 */

// 從 useHttp 模塊中導入
import { useHttp } from "~/composables/useHttp";

/**
 * 獲取新聞列表
 * @param {NewsListParams} [params]
 * @param {HttpOption<NewsListResponse>} [option]
 * @returns {Promise<AsyncData<NewsListResponse, FetchError<ResOptions<NewsListResponse>> | null>>}
 */
export async function getNewsList(params, option) {
  return await useHttp.get(API.NEWS, params, { ...option });
}
