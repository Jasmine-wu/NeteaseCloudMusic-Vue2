// 4.3 统一导出api
import { recommendMusic, newestMusic } from "@/api/home"
import { searchHotKw, searchResult } from "@/api/search"
import { getSongById, getLyricById } from '@/api/Play'


export const recommendMusicAPI = recommendMusic;
export const newestMusicAPI = newestMusic;
export const searchHotKwAPI = searchHotKw;
export const searchResultAPI = searchResult;


export const getSongByIdAPI = getSongById // 歌曲 - 播放地址
export const getLyricByIdAPI = getLyricById // 歌曲 - 歌词数据