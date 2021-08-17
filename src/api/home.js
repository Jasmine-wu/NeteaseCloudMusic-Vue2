import request from '@/utils/request'

// 4.2 封装API
// 推荐歌单
export const recommendMusic = params => request({
    url: '/personalized',
    params: params // 参数:limit,默认为30
});

// 推荐最新音乐
export const newestMusic = params => request({
    url: '/personalized/newsong',
    params: params, //参数limit,默认为10
});