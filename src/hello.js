/**
 * 挨拶クラス
 * (ECMAScript 6 スタイル)
 * Helloクラスがdefaultのexport対象とする
 */
export default class Hello {

    //コンストラクタ
    constructor() {
    }

    /**
     * 挨拶をする
     * @returns {string}
     */
    sayHello() {
        
        const hello = 'Hi, there!';
        console.log(hello);

        return hello;
    }
}