export default class Utils {
    // 设置cookie
    static setCookie(key, value, expiremHours) {
        var exdate = new Date();
        exdate.setTime(exdate.getTime() + expiremHours * 60 * 60 * 1000);
        document.cookie = key + "=" + escape(value) + ((expiremHours == null) ? "" : ";expires=" + exdate.toUTCString());
    }

    // 读取cookie
    static getCookie(key) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(key + "=");
            if (c_start != -1) {
                c_start = c_start + key.length + 1;
                var c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1)
                    c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }

    // 删除cookie
    static delCookie(key) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(key);
        if (cval != null) {
            document.cookie = key + "=" + cval + ";expires=" + exp.toUTCString();
        }
    }

}