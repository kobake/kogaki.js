(function () {
    // ひらがな→カタカナ変換
    var hira2kata_table = {};
    window.hira2kata = function (str) {
        if (Object.keys(hira2kata_table).length == 0) {
            // console.log("init table1");

            var seed1 = "ぁぃぅぇぉあいうえおゕかきくけゖこがぎぐげごさしすせそざじずぜぞたちつってとだぢづでどなにぬねのはひふへほばびぶべぼぱぴぷぺぽまみむめもやゃゆゅよょらりるれろわをん";
            var seed2 = "ァィゥェォアイウエオヵカキクケヶコガギグゲゴサシスセソザジズゼゾタチツッテトダヂヅデドナニヌネノハヒフヘホバビブベボパピプペポマミムメモヤャユュヨョラリルレロワヲン";
            for (var i = 0; i < seed1.length; i++) {
                hira2kata_table[seed1[i]] = seed2[i];
            }
        }
        return str.replace(/./g, function (e) {
            if (e in hira2kata_table) return hira2kata_table[e];
            else return e;
        });
    }

    // カタカナ→小書き変換
    var kana2kogaki_table = {};
    window.kana2kogaki = function (str) {
        str = hira2kata(str);
        if (Object.keys(kana2kogaki_table).length == 0) {
            // console.log("init table2");

            var seed = {};
            seed['アあ'] = 'ァ';
            seed['イい'] = 'ィ';
            seed['ウう'] = 'ゥ';
            seed['エえ'] = 'ェ';
            seed['オお'] = 'ォ';

            seed['カか'] = 'ヵ';
            // seed['キ'] = '';
            seed['クく'] = 'ㇰ';
            seed['ケけ'] = 'ヶ';
            // seed['コ'] = '';

            // seed['サ'] = '';
            seed['シし'] = 'ㇱ';
            seed['スす'] = 'ㇲ';
            // seed['セ'] = '';
            // seed['ソ'] = '';

            // seed['タ'] = '';
            // seed['チ'] = '';
            seed['ツつっ'] = 'ッ';
            // seed['テ'] = '';
            seed['トと'] = 'ㇳ';

            // seed['ナ'] = '';
            // seed['ニ'] = '';
            seed['ヌぬ'] = 'ㇴ';
            // seed['ネ'] = '';
            // seed['ノ'] = '';

            seed['ハは'] = 'ㇵ';
            seed['ヒひ'] = 'ㇶ';
            seed['フふ'] = 'ㇷ';
            seed['ヘへ'] = 'ㇸ';
            seed['ホほ'] = 'ㇹ';

            // seed['パ'] = '';
            // seed['ピ'] = '';
            seed['プぷ'] = 'ㇷ゚';
            // seed['ペ'] = '';
            // seed['ポ'] = '';

            // seed['マ'] = '';
            // seed['ミ'] = '';
            seed['ムむ'] = 'ㇺ';
            // seed['メ'] = '';
            // seed['モ'] = '';

            seed['ヤやゃ'] = 'ャ';
            seed['ユゆゅ'] = 'ュ';
            seed['ヨよょ'] = 'ョ';

            seed['ラら'] = 'ㇻ';
            seed['リり'] = 'ㇼ';
            seed['ルる'] = 'ㇽ';
            seed['レれ'] = 'ㇾ';
            seed['ロろ'] = 'ㇿ';

            seed['ワわゎ'] = 'ヮ';
            // seed['ヲ'] = '';

            // table構築
            //   table['ア'] = 'ァ';
            //   table['あ'] = 'ァ';
            //   table['イ'] = 'ィ';
            //   table['い'] = 'ィ';
            //   ....
            kana2kogaki_table = {};
            for (var k in seed) {
                for (var i = 0; i < k.length; i++) {
                    kana2kogaki_table[k[i]] = seed[k];
                }
            }
        }
        return str.replace(/./g, function (e) {
            if (e in kana2kogaki_table) return kana2kogaki_table[e];
            else return e;
        });
    }
})();
