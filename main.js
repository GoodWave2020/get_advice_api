const { TRANSLATE_API_URL, ADVICE_API_URL } = require('./const');
const axios = require('axios');

/**
 * 気の利いた言葉を返すAPIを日本語に翻訳してコンソールに出力する。
 * 
 * @param {string} target 出力したい言語
 */
const getAdvice = async (target) => {
    // 英語の文章を返却するAPI
    const adviceRes = await axios.get(ADVICE_API_URL);
    const advice = adviceRes.data.slip.advice;
    console.log(advice)
    // 日本語に翻訳するAPI(GASによる簡易的なもの)
    const translateRes = await axios.get(`${TRANSLATE_API_URL}?text=${advice}&source=en&target=${target}`)
    console.log(translateRes.data)
}

getAdvice('ja')