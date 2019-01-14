// Found on Bill Buchanan's Security Site 
// https://asecuritysite.com/encryption/js10
// JavaScript Encryption with CryptoJS
//
// edited by gp on 1/13/19
//

<script type="text/javascript" src="/scripts/md5.js"></script>
<script type="text/javascript" src="/scripts/sha1.js"></script>
<script type="text/javascript" src="/scripts/sha3.js"></script>
<script type="text/javascript" src="/scripts/sha256.js"></script>
<script type="text/javascript" src="/scripts/sha512.js"></script>
<script type="text/javascript" src="/scripts/aes.js"></script>
<script type="text/javascript" src="/scripts/rabbit.js"></script>
<script type="text/javascript" src="/scripts/hmac-md5.js"></script>
<script type="text/javascript" src="/scripts/hmac-sha1.js"></script>
<script type="text/javascript" src="/scripts/hmac-sha3.js"></script>
<script type="text/javascript" src="/scripts/hmac-sha256.js"></script>
<script type="text/javascript" src="/scripts/pbkdf2.js"></script>
<script type="text/javascript" src="/scripts/rc4.js"></script>
<script type="text/javascript" src="/scripts/ripemd160.js"></script>
<script type="text/javascript" src="/scripts/tripledes.js"></script>
<script type="text/javascript">

    function t1(message) {
        var digest = CryptoJS.MD5(message);
        document.getElementById("hash").innerHTML = "Type:\t\tMD5";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;
        document.getElementById("hash").innerHTML += "\nHex:\t" + digest;
        document.getElementById("hash").innerHTML += "\nBase64:\t" + CryptoJS.enc.Base64.parse(String(digest));
    }
</script>





<script type="text/javascript">
    function t2(message) {
        var digest = CryptoJS.SHA1(message);
        document.getElementById("hash").innerHTML = "Type:\t\tSHA1";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;

        document.getElementById("hash").innerHTML += "\nHex:\t" + digest;
        document.getElementById("hash").innerHTML += "\nBase64:\t" + CryptoJS.enc.Base64.parse(String(digest));

    }
</script>



<script type="text/javascript">
    function t3(message) {
        var digest = CryptoJS.SHA256(message);

        document.getElementById("hash").innerHTML = "Type:\t\tSHA256";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;

        document.getElementById("hash").innerHTML += "\nHex:\t" + digest;
        document.getElementById("hash").innerHTML += "\nBase64:\t" + CryptoJS.enc.Base64.parse(String(digest));

    }

</script>
<script type="text/javascript">
    function t3b(message) {
        var digest = CryptoJS.SHA512(message);

        document.getElementById("hash").innerHTML = "Type:\t\tSHA512";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;

        document.getElementById("hash").innerHTML += "\nHex:\t" + digest;
        document.getElementById("hash").innerHTML += "\nBase64:\t" + CryptoJS.enc.Base64.parse(String(digest));

    }

</script>


<script type="text/javascript">

    function t3a(message) {
        var hash1 = CryptoJS.SHA3(message, { outputLength: 224 }).toString();
        var hash2 = CryptoJS.SHA3(message, { outputLength: 256 }).toString();
        var hash3 = CryptoJS.SHA3(message, { outputLength: 384 }).toString();
        var hash4 = CryptoJS.SHA3(message, { outputLength: 512 }).toString();

        document.getElementById("hash").innerHTML = "Type:\t\tSHA3 (Keccak)";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;

        document.getElementById("hash").innerHTML += "\nHex (224-bit):\t" + hash1;
        document.getElementById("hash").innerHTML += "\nHex (256-bit):\t" + hash2;
        document.getElementById("hash").innerHTML += "\nHex (384-bit):\t" + hash3;
        document.getElementById("hash").innerHTML += "\nHex (512-bit):\t" + hash4;
    }
</script>
<script type="text/javascript">
    function t3c(message) {
        var digest = CryptoJS.RIPEMD160(message);

        document.getElementById("hash").innerHTML = "Type:\t\tRIPEM160";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;

        document.getElementById("hash").innerHTML += "\nHex:\t" + digest;
        document.getElementById("hash").innerHTML += "\nBase64:\t" + CryptoJS.enc.Base64.parse(String(digest));

    }

</script>
<script type="text/javascript">



    function t4(message, password) {
        document.getElementById("hash").innerHTML = "Type:\t\tAES (CBC)";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;

        var crypted = CryptoJS.AES.encrypt(message, password, "{ mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }");

        var plain = CryptoJS.AES.decrypt(crypted, password, "{ mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }");

        var saltHex = crypted.salt.toString();     // random salt
        var ivHex = crypted.iv.toString();
        var key = crypted.key.toString();

        document.getElementById("hash").innerHTML += "\nSalt:\t\t" + saltHex;
        document.getElementById("hash").innerHTML += "\nIV:\t\t" + ivHex;
        document.getElementById("hash").innerHTML += "\nKey:\t\t" + key;

        document.getElementById("hash").innerHTML += "\nEncrypted:\t" + crypted;
        document.getElementById("hash").innerHTML += "\nDecrypted:\t" + plain.toString(CryptoJS.enc.Utf8);

    }
</script>
<script type="text/javascript">



    function t4a(message, password) {
        document.getElementById("hash").innerHTML = "Type:\t\tAES (ECB)";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;

        var crypted = CryptoJS.AES.encrypt(message, password, "{ mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }");


        var plain = CryptoJS.AES.decrypt(crypted, password, "{ mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }");
        // Other padding: Pkcs7; Iso97971; AnsiX923; Iso10126; ZeroPadding; and NoPadding -->

        var saltHex = crypted.salt.toString();     // random salt
        var ivHex = crypted.iv.toString();
        var ivHex = crypted.key.toString();
        document.getElementById("hash").innerHTML += "\nSalt:\t\t" + saltHex;
        document.getElementById("hash").innerHTML += "\nIV:\t\t" + ivHex;


        document.getElementById("hash").innerHTML += "\nEncrypted:\t" + crypted;
        document.getElementById("hash").innerHTML += "\nDecrypted:\t" + plain.toString(CryptoJS.enc.Utf8);

    }
</script>
<script type="text/javascript">



    function t4b(message, password) {
        document.getElementById("hash").innerHTML = "Type:\t\tAES (CFB)";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;

        var crypted = CryptoJS.AES.encrypt(message, password, "{ mode: CryptoJS.mode.CFB, padding: CryptoJS.pad.AnsiX923 }");

        var plain = CryptoJS.AES.decrypt(crypted, password, "{ mode: CryptoJS.mode.CFB, padding: CryptoJS.pad.AnsiX923 }");
        // Other padding: Pkcs7; Iso97971; AnsiX923; Iso10126; ZeroPadding; and NoPadding -->

        var saltHex = crypted.salt.toString();     // random salt
        var ivHex = crypted.iv.toString();

        document.getElementById("hash").innerHTML += "\nSalt:\t\t" + saltHex;
        document.getElementById("hash").innerHTML += "\nIV:\t\t" + ivHex;

        document.getElementById("hash").innerHTML += "\nEncrypted:\t" + crypted;
        document.getElementById("hash").innerHTML += "\nDecrypted:\t" + plain.toString(CryptoJS.enc.Utf8);

    }
</script>
<script type="text/javascript">



    function t4c(message, password) {
        document.getElementById("hash").innerHTML = "Type:\t\tAES (CRT)";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;

        var crypted = CryptoJS.AES.encrypt(message, password, "{ mode: CryptoJS.mode.CRT, padding: CryptoJS.pad.AnsiX923 }");

        var plain = CryptoJS.AES.decrypt(crypted, password, "{ mode: CryptoJS.mode.CRT, padding: CryptoJS.pad.AnsiX923 }");
        // Other padding: Pkcs7; Iso97971; AnsiX923; Iso10126; ZeroPadding; and NoPadding -->
        var saltHex = crypted.salt.toString();     // random salt
        var ivHex = crypted.iv.toString();

        document.getElementById("hash").innerHTML += "\nSalt:\t\t" + saltHex;
        document.getElementById("hash").innerHTML += "\nIV:\t\t" + ivHex;

        document.getElementById("hash").innerHTML += "\nEncrypted:\t" + crypted;
        document.getElementById("hash").innerHTML += "\nDecrypted:\t" + plain.toString(CryptoJS.enc.Utf8);

    }
</script>
<script type="text/javascript">



    function t4d(message, password) {
        document.getElementById("hash").innerHTML = "Type:\t\tAES (OFB)";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;

        var crypted = CryptoJS.AES.encrypt(message, password, "{ mode: CryptoJS.mode.OFB, padding: CryptoJS.pad.AnsiX923 }");

        var plain = CryptoJS.AES.decrypt(crypted, password, "{ mode: CryptoJS.mode.OFB, padding: CryptoJS.pad.AnsiX923 }");
        // Other padding: Pkcs7; Iso97971; AnsiX923; Iso10126; ZeroPadding; and NoPadding -->

        var saltHex = crypted.salt.toString();     // random salt
        var ivHex = crypted.iv.toString();

        document.getElementById("hash").innerHTML += "\nSalt:\t\t" + saltHex;
        document.getElementById("hash").innerHTML += "\nIV:\t\t" + ivHex;
        document.getElementById("hash").innerHTML += "\nEncrypted:\t" + crypted;
        document.getElementById("hash").innerHTML += "\nDecrypted:\t" + plain.toString(CryptoJS.enc.Utf8);

    }
</script>



<script type="text/javascript">


    function t5(message, password) {
        document.getElementById("hash").innerHTML = "Type:\t\tRabbit";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;

        var crypted = CryptoJS.Rabbit.encrypt(message, password);

        var plain = CryptoJS.Rabbit.decrypt(crypted, password);

        var saltHex = crypted.salt.toString();     // random salt
        var ivHex = crypted.iv.toString();

        document.getElementById("hash").innerHTML += "\nSalt:\t\t" + saltHex;
        document.getElementById("hash").innerHTML += "\nIV:\t\t" + ivHex;
        document.getElementById("hash").innerHTML += "\nEncrypted:\t" + crypted;
        document.getElementById("hash").innerHTML += "\nDecrypted:\t" + plain.toString(CryptoJS.enc.Utf8);

    }
</script>


<script type="text/javascript">



    function t6(message, password) {
        var crypted = CryptoJS.RC4.encrypt(message, password);

        var plain = CryptoJS.RC4.decrypt(crypted, password);
        document.getElementById("hash").innerHTML = "Type:\t\tRC4";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;

        var saltHex = crypted.salt.toString();     // random salt
        var ivHex = crypted.iv.toString();

        document.getElementById("hash").innerHTML += "\nSalt:\t\t" + saltHex;
        document.getElementById("hash").innerHTML += "\nIV:\t\t" + ivHex;

        document.getElementById("hash").innerHTML += "\nEncrypted:\t" + crypted;
        document.getElementById("hash").innerHTML += "\nDecrypted:\t" + plain;

    }

</script>
<script type="text/javascript">



    function t6b(message, password) {
        var crypted = CryptoJS.DES.encrypt(message, password);

        var plain = CryptoJS.RC4.decrypt(crypted, password);
        document.getElementById("hash").innerHTML = "Type:\t\t3DES";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;

        var saltHex = crypted.salt.toString();     // random salt
        var ivHex = crypted.iv.toString();

        document.getElementById("hash").innerHTML += "\nSalt:\t\t" + saltHex;
        document.getElementById("hash").innerHTML += "\nIV:\t\t" + ivHex;

        document.getElementById("hash").innerHTML += "\nEncrypted:\t" + crypted;
        document.getElementById("hash").innerHTML += "\nDecrypted:\t" + plain;

    }

</script>

<script type="text/javascript">
    function t7(message, password) {

        var hash = CryptoJS.HmacMD5(message, password);
        var output = hash.toString(CryptoJS.enc.Hex);

        document.getElementById("hash").innerHTML = "Type:\t\tHMAC-MD5";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;

        document.getElementById("hash").innerHTML += "\nHex:\t" + output;
        document.getElementById("hash").innerHTML += "\nBase64:\t" + CryptoJS.enc.Base64.parse(String(output));

    }
</script>

<script type="text/javascript">

    function t8(message, password) {
        var hash = CryptoJS.HmacSHA1(message, password);
        var output = hash.toString(CryptoJS.enc.Hex);

        document.getElementById("hash").innerHTML = "Type:\t\tHMAC-SHA1";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;

        document.getElementById("hash").innerHTML += "\nHex:\t" + output;
        document.getElementById("hash").innerHTML += "\nBase64:\t" + CryptoJS.enc.Base64.parse(String(output));

    }

</script>

<script type="text/javascript">

    function t9(message, password) {
        var hash = CryptoJS.HmacSHA512(message, password);
        var output = hash.toString(CryptoJS.enc.Hex);

        document.getElementById("hash").innerHTML = "Type:\t\tHMAC-SHA512";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;

        document.getElementById("hash").innerHTML += "\nHex:\t" + output;
        document.getElementById("hash").innerHTML += "\nBase64:\t" + CryptoJS.enc.Base64.parse(String(output));

    }

</script>
<script type="text/javascript">

    function t9a(message, password) {
        var hash = CryptoJS.HmacSHA3(message, password);
        var output = hash.toString(CryptoJS.enc.Hex);

        document.getElementById("hash").innerHTML = "Type:\t\tHMAC-SHA3";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;

        document.getElementById("hash").innerHTML += "\nHex:\t" + output;
        document.getElementById("hash").innerHTML += "\nBase64:\t" + CryptoJS.enc.Base64.parse(String(output));

    }

</script>
<script type="text/javascript">

    function t9b(message, password) {
        var hash = CryptoJS.HmacRIPEMD160(message, password);
        var output = hash.toString(CryptoJS.enc.Hex);

        document.getElementById("hash").innerHTML = "Type:\t\tHMAC-RIPEMD160";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;

        document.getElementById("hash").innerHTML += "\nHex:\t" + output;
        document.getElementById("hash").innerHTML += "\nBase64:\t" + CryptoJS.enc.Base64.parse(String(output));

    }

</script>

<script type="text/javascript">

    function t10(message) {

        salt = CryptoJS.lib.WordArray.random(128 / 8);

        var key128Bits = CryptoJS.PBKDF2(message, salt, { keySize: 128 / 32 });

        var key256Bits = CryptoJS.PBKDF2(message, salt, { keySize: 256 / 32 });
        var key512Bits = CryptoJS.PBKDF2(message, salt, { keySize: 512 / 32 });

        //       var key512bit1000 = CryptoJS.PBKDF2(message, salt, 64, { iterations: 1000 });
        document.getElementById("hash").innerHTML = "Type:\t\tPBKDF2";
        document.getElementById("hash").innerHTML += "\nMessage:\t" + message;

        document.getElementById("hash").innerHTML += "\nSalt:\t\t" + salt;
        document.getElementById("hash").innerHTML += "\n128-bit:\t" + String(key128Bits);
        document.getElementById("hash").innerHTML += "\n256-bit:\t" + String(key256Bits);
        document.getElementById("hash").innerHTML += "\n512-bit:\t" + String(key512Bits);
        //        document.getElementById("hash").innerHTML += "\n512-bit (1000:\t" + key512bit1000;
    }

</script>
<script type="text/javascript">

    function t10a(password) {

        salt = CryptoJS.lib.WordArray.random(128 / 8);

        var key1 = CryptoJS.EvpKDF(password, salt, { keySize: 4 });
        var key2 = CryptoJS.EvpKDF(password, salt, { keySize: 8 });

        document.getElementById("hash").innerHTML = "Type:\t\tEvpKDF";
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;

        document.getElementById("hash").innerHTML += "\nSalt:\t\t" + salt;
        document.getElementById("hash").innerHTML += "\n128-bit key:\t" + String(key1);
        document.getElementById("hash").innerHTML += "\n256-bit key:\t" + String(key2);
        //        document.getElementById("hash").innerHTML += "\n512-bit (1000:\t" + key512bit1000;
    }

</script>

<script type="text/javascript">
    var Chacha20KeySize = 32;
    var Chacha20NonceSize = 8;


    var Chacha20Ctx = function () {
        this.input = new Array(16);
    };

    function load32(x, i) {
        return x[i] | (x[i + 1] << 8) | (x[i + 2] << 16) | (x[i + 3] << 24);
    }

    function store32(x, i, u) {
        x[i] = u & 0xff; u >>>= 8;
        x[i + 1] = u & 0xff; u >>>= 8;
        x[i + 2] = u & 0xff; u >>>= 8;
        x[i + 3] = u & 0xff;
    }

    function rotl32(v, c) {
        return (v << c) | (v >>> (32 - c));
    }

    function chacha20_round(x, a, b, c, d) {
        x[a] += x[b]; x[d] = rotl32(x[d] ^ x[a], 16);
        x[c] += x[d]; x[b] = rotl32(x[b] ^ x[c], 12);
        x[a] += x[b]; x[d] = rotl32(x[d] ^ x[a], 8);
        x[c] += x[d]; x[b] = rotl32(x[b] ^ x[c], 7);
    }

    function chacha20_init(key, nonce) {
        var x = new Chacha20Ctx();

        x.input[0] = 1634760805;
        x.input[1] = 857760878;
        x.input[2] = 2036477234;
        x.input[3] = 1797285236;
        x.input[12] = 0;
        x.input[13] = 0;
        x.input[14] = load32(nonce, 0);
        x.input[15] = load32(nonce, 4);

        for (var i = 0; i < 8; i++) {
            x.input[i + 4] = load32(key, i * 4);
        }
        return x;
    }

    function chacha20_keystream(ctx, dst, src, len) {
        var x = new Array(16);
        var buf = new Array(64);
        var i = 0, dpos = 0, spos = 0;

        while (len > 0) {
            for (i = 16; i--;) x[i] = ctx.input[i];
            for (i = 20; i > 0; i -= 2) {
                chacha20_round(x, 0, 4, 8, 12);
                chacha20_round(x, 1, 5, 9, 13);
                chacha20_round(x, 2, 6, 10, 14);
                chacha20_round(x, 3, 7, 11, 15);
                chacha20_round(x, 0, 5, 10, 15);
                chacha20_round(x, 1, 6, 11, 12);
                chacha20_round(x, 2, 7, 8, 13);
                chacha20_round(x, 3, 4, 9, 14);
            }
            for (i = 16; i--;) x[i] += ctx.input[i];
            for (i = 16; i--;) store32(buf, 4 * i, x[i]);

            ctx.input[12] += 1;
            if (!ctx.input[12]) {
                ctx.input[13] += 1;
            }
            if (len <= 64) {
                for (i = len; i--;) {
                    dst[i + dpos] = src[i + spos] ^ buf[i];
                }
                return;
            }
            for (i = 64; i--;) {
                dst[i + dpos] = src[i + spos] ^ buf[i];
            }
            len -= 64;
            spos += 64;
            dpos += 64;
        }
    }

    //--------------------------- test -----------------------------//
    function bytes2hex(blk, dlm) {
        return Array.prototype.map.call(new Uint8Array(blk.buffer || blk),
        function (s) { return ('00' + s.toString(16)).slice(-2); }).join(dlm || '');
    }
    function toHexString(byteArray) {
        return Array.from(byteArray, function (byte) {
            return ('0' + (byte & 0xFF).toString(16)).slice(-2);
        }).join('')
    }
    function from_Hex(h) {

        h.replace(' ', '');
        var out = [], len = h.length, w = '';
        for (var i = 0; i < len; i += 2) {
            w = h[i];
            if (((i + 1) >= len) || typeof h[i + 1] === 'undefined') {
                w += '0';
            } else {
                w += h[i + 1];
            }
            out.push(parseInt(w, 16));
        }
        return out;
    }

    function bytesEqual(a, b) {
        var dif = 0;
        if (a.length !== b.length) return 0;
        for (var i = 0; i < a.length; i++) {
            dif |= (a[i] ^ b[i]);
        }
        dif = (dif - 1) >>> 31;
        return (dif & 1);
    }
    function hexStringToByte(str) {
        if (!str) {
            return new Uint8Array();
        }

        var a = [];
        for (var i = 0, len = str.length; i < len; i += 2) {
            a.push(parseInt(str.substr(i, 2), 16));
        }

        return new Uint8Array(a);
    }

    function ascii_to_hexa(str) {
        var arr1 = [];
        for (var n = 0, l = str.length; n < l; n++) {
            var hex = Number(str.charCodeAt(n)).toString(16);
            arr1.push(hex);
        }
        return arr1.join('');
    }



    function xor(a, b) {

        var res = []
        if (a.length > b.length) {
            for (var i = 0; i < b.length; i++) {
                res.push(a[i] ^ b[i])
            }
        } else {
            for (var i = 0; i < a.length; i++) {

                res.push(a[i] ^ b[i])
            }
        }
        return res;
    }
    function t11(word, password) {

        n = '0000000000000000';
        k = String(CryptoJS.SHA256(password));

        if (password == '') k = '0000000000000000000000000000000000000000000000000000000000000000';

        n1 = hexStringToByte(n);


        k1 = hexStringToByte(k);


        var ctx, out;


        out = new Array(word.length);

        ctx = chacha20_init(k1, n1);

        chacha20_keystream(ctx, out, out, word.length);

        document.getElementById("hash").innerHTML = "Type:\t\tChaCha20";
        document.getElementById("hash").innerHTML += "\nInput:\t\t" + word;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;
        document.getElementById("hash").innerHTML += "\nKey seed: " + k + "\n (based on SHA-256 of " + password + ")";

        document.getElementById("hash").innerHTML += "\nKey stream:\t" + bytes2hex(out) + " (based on length of " + word + ")";
        document.getElementById("hash").innerHTML += "\nText stream:\t" + ascii_to_hexa(word);


        var dat = [];
        for (var i = 0; i < word.length; i++) {
            dat.push(word.charCodeAt(i));
        }


        val1 = xor(dat, out);

        document.getElementById("hash").innerHTML += "\nOutput stream:\t" + toHexString(val1);
    }

    var poly1305 = function (key) {
        this.buffer = new Uint8Array(16);
        this.r = new Uint16Array(10);
        this.h = new Uint16Array(10);
        this.pad = new Uint16Array(8);
        this.leftover = 0;
        this.fin = 0;

        var t0, t1, t2, t3, t4, t5, t6, t7;

        t0 = key[0] & 0xff | (key[1] & 0xff) << 8; this.r[0] = (t0) & 0x1fff;
        t1 = key[2] & 0xff | (key[3] & 0xff) << 8; this.r[1] = ((t0 >>> 13) | (t1 << 3)) & 0x1fff;
        t2 = key[4] & 0xff | (key[5] & 0xff) << 8; this.r[2] = ((t1 >>> 10) | (t2 << 6)) & 0x1f03;
        t3 = key[6] & 0xff | (key[7] & 0xff) << 8; this.r[3] = ((t2 >>> 7) | (t3 << 9)) & 0x1fff;
        t4 = key[8] & 0xff | (key[9] & 0xff) << 8; this.r[4] = ((t3 >>> 4) | (t4 << 12)) & 0x00ff;
        this.r[5] = ((t4 >>> 1)) & 0x1ffe;
        t5 = key[10] & 0xff | (key[11] & 0xff) << 8; this.r[6] = ((t4 >>> 14) | (t5 << 2)) & 0x1fff;
        t6 = key[12] & 0xff | (key[13] & 0xff) << 8; this.r[7] = ((t5 >>> 11) | (t6 << 5)) & 0x1f81;
        t7 = key[14] & 0xff | (key[15] & 0xff) << 8; this.r[8] = ((t6 >>> 8) | (t7 << 8)) & 0x1fff;
        this.r[9] = ((t7 >>> 5)) & 0x007f;

        this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
        this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
        this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
        this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
        this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
        this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
        this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
        this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
    };
    poly1305.prototype.update = function (m, mpos, bytes) {
        var i, want;


        if (this.leftover) {
            want = (16 - this.leftover);
            if (want > bytes)
                want = bytes;
            for (i = 0; i < want; i++)
                this.buffer[this.leftover + i] = m[mpos + i];
            bytes -= want;
            mpos += want;
            this.leftover += want;
            if (this.leftover < 16)
                return;
            this.blocks(this.buffer, 0, 16);
            this.leftover = 0;
        }

        if (bytes >= 16) {
            want = bytes - (bytes % 16);
            this.blocks(m, mpos, want);
            mpos += want;
            bytes -= want;
        }


        if (bytes) {
            for (i = 0; i < bytes; i++)
                this.buffer[this.leftover + i] = m[mpos + i];
            this.leftover += bytes;
        }

    };
    poly1305.prototype.blocks = function (m, mpos, bytes) {
        var hibit = this.fin ? 0 : (1 << 11);
        var t0, t1, t2, t3, t4, t5, t6, t7, c;
        var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;

        var h0 = this.h[0],
            h1 = this.h[1],
            h2 = this.h[2],
            h3 = this.h[3],
            h4 = this.h[4],
            h5 = this.h[5],
            h6 = this.h[6],
            h7 = this.h[7],
            h8 = this.h[8],
            h9 = this.h[9];

        var r0 = this.r[0],
            r1 = this.r[1],
            r2 = this.r[2],
            r3 = this.r[3],
            r4 = this.r[4],
            r5 = this.r[5],
            r6 = this.r[6],
            r7 = this.r[7],
            r8 = this.r[8],
            r9 = this.r[9];

        while (bytes >= 16) {
            t0 = m[mpos + 0] & 0xff | (m[mpos + 1] & 0xff) << 8; h0 += (t0) & 0x1fff;
            t1 = m[mpos + 2] & 0xff | (m[mpos + 3] & 0xff) << 8; h1 += ((t0 >>> 13) | (t1 << 3)) & 0x1fff;
            t2 = m[mpos + 4] & 0xff | (m[mpos + 5] & 0xff) << 8; h2 += ((t1 >>> 10) | (t2 << 6)) & 0x1fff;
            t3 = m[mpos + 6] & 0xff | (m[mpos + 7] & 0xff) << 8; h3 += ((t2 >>> 7) | (t3 << 9)) & 0x1fff;
            t4 = m[mpos + 8] & 0xff | (m[mpos + 9] & 0xff) << 8; h4 += ((t3 >>> 4) | (t4 << 12)) & 0x1fff;
            h5 += ((t4 >>> 1)) & 0x1fff;
            t5 = m[mpos + 10] & 0xff | (m[mpos + 11] & 0xff) << 8; h6 += ((t4 >>> 14) | (t5 << 2)) & 0x1fff;
            t6 = m[mpos + 12] & 0xff | (m[mpos + 13] & 0xff) << 8; h7 += ((t5 >>> 11) | (t6 << 5)) & 0x1fff;
            t7 = m[mpos + 14] & 0xff | (m[mpos + 15] & 0xff) << 8; h8 += ((t6 >>> 8) | (t7 << 8)) & 0x1fff;
            h9 += ((t7 >>> 5)) | hibit;

            c = 0;

            d0 = c;
            d0 += h0 * r0;
            d0 += h1 * (5 * r9);
            d0 += h2 * (5 * r8);
            d0 += h3 * (5 * r7);
            d0 += h4 * (5 * r6);
            c = (d0 >>> 13); d0 &= 0x1fff;
            d0 += h5 * (5 * r5);
            d0 += h6 * (5 * r4);
            d0 += h7 * (5 * r3);
            d0 += h8 * (5 * r2);
            d0 += h9 * (5 * r1);
            c += (d0 >>> 13); d0 &= 0x1fff;

            d1 = c;
            d1 += h0 * r1;
            d1 += h1 * r0;
            d1 += h2 * (5 * r9);
            d1 += h3 * (5 * r8);
            d1 += h4 * (5 * r7);
            c = (d1 >>> 13); d1 &= 0x1fff;
            d1 += h5 * (5 * r6);
            d1 += h6 * (5 * r5);
            d1 += h7 * (5 * r4);
            d1 += h8 * (5 * r3);
            d1 += h9 * (5 * r2);
            c += (d1 >>> 13); d1 &= 0x1fff;

            d2 = c;
            d2 += h0 * r2;
            d2 += h1 * r1;
            d2 += h2 * r0;
            d2 += h3 * (5 * r9);
            d2 += h4 * (5 * r8);
            c = (d2 >>> 13); d2 &= 0x1fff;
            d2 += h5 * (5 * r7);
            d2 += h6 * (5 * r6);
            d2 += h7 * (5 * r5);
            d2 += h8 * (5 * r4);
            d2 += h9 * (5 * r3);
            c += (d2 >>> 13); d2 &= 0x1fff;

            d3 = c;
            d3 += h0 * r3;
            d3 += h1 * r2;
            d3 += h2 * r1;
            d3 += h3 * r0;
            d3 += h4 * (5 * r9);
            c = (d3 >>> 13); d3 &= 0x1fff;
            d3 += h5 * (5 * r8);
            d3 += h6 * (5 * r7);
            d3 += h7 * (5 * r6);
            d3 += h8 * (5 * r5);
            d3 += h9 * (5 * r4);
            c += (d3 >>> 13); d3 &= 0x1fff;

            d4 = c;
            d4 += h0 * r4;
            d4 += h1 * r3;
            d4 += h2 * r2;
            d4 += h3 * r1;
            d4 += h4 * r0;
            c = (d4 >>> 13); d4 &= 0x1fff;
            d4 += h5 * (5 * r9);
            d4 += h6 * (5 * r8);
            d4 += h7 * (5 * r7);
            d4 += h8 * (5 * r6);
            d4 += h9 * (5 * r5);
            c += (d4 >>> 13); d4 &= 0x1fff;

            d5 = c;
            d5 += h0 * r5;
            d5 += h1 * r4;
            d5 += h2 * r3;
            d5 += h3 * r2;
            d5 += h4 * r1;
            c = (d5 >>> 13); d5 &= 0x1fff;
            d5 += h5 * r0;
            d5 += h6 * (5 * r9);
            d5 += h7 * (5 * r8);
            d5 += h8 * (5 * r7);
            d5 += h9 * (5 * r6);
            c += (d5 >>> 13); d5 &= 0x1fff;

            d6 = c;
            d6 += h0 * r6;
            d6 += h1 * r5;
            d6 += h2 * r4;
            d6 += h3 * r3;
            d6 += h4 * r2;
            c = (d6 >>> 13); d6 &= 0x1fff;
            d6 += h5 * r1;
            d6 += h6 * r0;
            d6 += h7 * (5 * r9);
            d6 += h8 * (5 * r8);
            d6 += h9 * (5 * r7);
            c += (d6 >>> 13); d6 &= 0x1fff;

            d7 = c;
            d7 += h0 * r7;
            d7 += h1 * r6;
            d7 += h2 * r5;
            d7 += h3 * r4;
            d7 += h4 * r3;
            c = (d7 >>> 13); d7 &= 0x1fff;
            d7 += h5 * r2;
            d7 += h6 * r1;
            d7 += h7 * r0;
            d7 += h8 * (5 * r9);
            d7 += h9 * (5 * r8);
            c += (d7 >>> 13); d7 &= 0x1fff;

            d8 = c;
            d8 += h0 * r8;
            d8 += h1 * r7;
            d8 += h2 * r6;
            d8 += h3 * r5;
            d8 += h4 * r4;
            c = (d8 >>> 13); d8 &= 0x1fff;
            d8 += h5 * r3;
            d8 += h6 * r2;
            d8 += h7 * r1;
            d8 += h8 * r0;
            d8 += h9 * (5 * r9);
            c += (d8 >>> 13); d8 &= 0x1fff;

            d9 = c;
            d9 += h0 * r9;
            d9 += h1 * r8;
            d9 += h2 * r7;
            d9 += h3 * r6;
            d9 += h4 * r5;
            c = (d9 >>> 13); d9 &= 0x1fff;
            d9 += h5 * r4;
            d9 += h6 * r3;
            d9 += h7 * r2;
            d9 += h8 * r1;
            d9 += h9 * r0;
            c += (d9 >>> 13); d9 &= 0x1fff;

            c = (((c << 2) + c)) | 0;
            c = (c + d0) | 0;
            d0 = c & 0x1fff;
            c = (c >>> 13);
            d1 += c;

            h0 = d0;
            h1 = d1;
            h2 = d2;
            h3 = d3;
            h4 = d4;
            h5 = d5;
            h6 = d6;
            h7 = d7;
            h8 = d8;
            h9 = d9;

            mpos += 16;
            bytes -= 16;
        }
        this.h[0] = h0;
        this.h[1] = h1;
        this.h[2] = h2;
        this.h[3] = h3;
        this.h[4] = h4;
        this.h[5] = h5;
        this.h[6] = h6;
        this.h[7] = h7;
        this.h[8] = h8;
        this.h[9] = h9;
    };
    poly1305.prototype.finish = function (mac, macpos) {

        var g = new Uint16Array(10);
        var c, mask, f, i;

        if (this.leftover) {
            i = this.leftover;
            this.buffer[i++] = 1;
            for (; i < 16; i++) this.buffer[i] = 0;
            this.fin = 1;
            this.blocks(this.buffer, 0, 16);
        }

        c = this.h[1] >>> 13;
        this.h[1] &= 0x1fff;
        for (i = 2; i < 10; i++) {
            this.h[i] += c;
            c = this.h[i] >>> 13;
            this.h[i] &= 0x1fff;
        }
        this.h[0] += (c * 5);
        c = this.h[0] >>> 13;
        this.h[0] &= 0x1fff;
        this.h[1] += c;
        c = this.h[1] >>> 13;
        this.h[1] &= 0x1fff;
        this.h[2] += c;

        g[0] = this.h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 0x1fff;
        for (i = 1; i < 10; i++) {
            g[i] = this.h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 0x1fff;
        }
        g[9] -= (1 << 13);

        mask = (c ^ 1) - 1;
        for (i = 0; i < 10; i++) g[i] &= mask;
        mask = ~mask;
        for (i = 0; i < 10; i++) this.h[i] = (this.h[i] & mask) | g[i];

        this.h[0] = ((this.h[0]) | (this.h[1] << 13)) & 0xffff;
        this.h[1] = ((this.h[1] >>> 3) | (this.h[2] << 10)) & 0xffff;
        this.h[2] = ((this.h[2] >>> 6) | (this.h[3] << 7)) & 0xffff;
        this.h[3] = ((this.h[3] >>> 9) | (this.h[4] << 4)) & 0xffff;
        this.h[4] = ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)) & 0xffff;
        this.h[5] = ((this.h[6] >>> 2) | (this.h[7] << 11)) & 0xffff;
        this.h[6] = ((this.h[7] >>> 5) | (this.h[8] << 8)) & 0xffff;
        this.h[7] = ((this.h[8] >>> 8) | (this.h[9] << 5)) & 0xffff;

        f = this.h[0] + this.pad[0];
        this.h[0] = f & 0xffff;
        for (i = 1; i < 8; i++) {
            f = (((this.h[i] + this.pad[i]) | 0) + (f >>> 16)) | 0;
            this.h[i] = f & 0xffff;
        }

        mac[macpos + 0] = (this.h[0] >>> 0) & 0xff;
        mac[macpos + 1] = (this.h[0] >>> 8) & 0xff;
        mac[macpos + 2] = (this.h[1] >>> 0) & 0xff;
        mac[macpos + 3] = (this.h[1] >>> 8) & 0xff;
        mac[macpos + 4] = (this.h[2] >>> 0) & 0xff;
        mac[macpos + 5] = (this.h[2] >>> 8) & 0xff;
        mac[macpos + 6] = (this.h[3] >>> 0) & 0xff;
        mac[macpos + 7] = (this.h[3] >>> 8) & 0xff;
        mac[macpos + 8] = (this.h[4] >>> 0) & 0xff;
        mac[macpos + 9] = (this.h[4] >>> 8) & 0xff;
        mac[macpos + 10] = (this.h[5] >>> 0) & 0xff;
        mac[macpos + 11] = (this.h[5] >>> 8) & 0xff;
        mac[macpos + 12] = (this.h[6] >>> 0) & 0xff;
        mac[macpos + 13] = (this.h[6] >>> 8) & 0xff;
        mac[macpos + 14] = (this.h[7] >>> 0) & 0xff;
        mac[macpos + 15] = (this.h[7] >>> 8) & 0xff;
    };


    function t12(word, password) {


        k = String(CryptoJS.SHA256(password));

        k1 = hexStringToByte(k);



        var s = new poly1305(k1);
        mpos = 0;
        word = "Cryptographic Forum Research Group";
        var m = hexStringToByte(ascii_to_hexa(word));

        s.update(m, mpos, m.length);

        out = new Uint16Array(16);
        s.finish(out, 0);

        document.getElementById("hash").innerHTML = "Type\t\tPoly1305";
        document.getElementById("hash").innerHTML += "\nInput:\t\t" + word;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;
        document.getElementById("hash").innerHTML += "\nInput (Hex):\t" + k;
        document.getElementById("hash").innerHTML += "\nPassword (Hex):\t" + ascii_to_hexa(word);
        document.getElementById("hash").innerHTML += "\nTag:\t\t" + toHexString(out);


    }

    function t13(word, password) {



        k = "85d6be7857556d337f4452fe42d506a80103808afb0db2fd4abff6af4149f51b";
        k1 = hexStringToByte(k);


        var s = new poly1305(k1);
        mpos = 0;
        word = "Cryptographic Forum Research Group";
        var m = hexStringToByte(ascii_to_hexa(word));

        s.update(m, mpos, m.length);

        out = new Uint16Array(16);
        s.finish(out, 0);

        document.getElementById("hash").innerHTML = "Type\t\tPoly1305";
        document.getElementById("hash").innerHTML += "\nInput:\t\t" + word;
        document.getElementById("hash").innerHTML += "\nPassword:\t" + password;
        document.getElementById("hash").innerHTML += "\nInput (Hex):\t" + k;
        document.getElementById("hash").innerHTML += "\nPassword (Hex):\t" + ascii_to_hexa(word);
        document.getElementById("hash").innerHTML += "\nTag:\t\t" + toHexString(out);


    }


</script>
    



