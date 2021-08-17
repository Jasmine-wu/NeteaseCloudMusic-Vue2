import request from '@/utils/request'

// 搜索关键字
export const searchHotKw = () => request({
    url: '/search/hot'
});
// 搜索结果
export const searchResult = (params) => request({
    url: '/search',
    params,
})