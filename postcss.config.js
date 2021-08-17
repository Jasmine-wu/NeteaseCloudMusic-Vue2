module.exports = {
    plugins: {
        // 能够把所有元素的px单位转成Rem
        'postcss-pxtorem': {
            // 以iphone6为基准:375/10 = 37.5 = 1rem
            rootValue: 37.5,
            // 所有属性
            propList: ['*']
        }
    }
}