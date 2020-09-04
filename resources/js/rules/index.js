/**
 * this function makes sure that value passed in
 * if field has a value then return true otherwise
 * return the custom message
 *
 * این فاکنشن الزامی بودن فیلد را برسی میکند
 * اگر پاس داده شده بود مقدار true را بازگشت میدهد
 * در غیر این صورت متنی که به عنوان پارامتر قبول کرده را نمایش میدهد
 *
 * @param {string} text
 * @returns {function(*): (boolean|string)}
 */
export function required(text) {
    return value => !! value || text;
}

/**
 *
 * this function verify value passed in is a valid email or not
 * if the value is valid then return true otherwise
 * return the message accepted as parameter or custom message
 *
 * این فاکشن برسی میکند که مقدار پاس داده شده یک ایمیل درست هست یا ن
 * اگه درست بود مقدار true را بازگشت میدهد
 * در غیر این صورت متنی که به عنوان پارامتر قبول کرده را نمایش میدهد
 *
 * @param {string} text
 * @returns {function(*): (boolean|string)}
 */
export function verifyEmail(text = 'یک ایمیل درست را وارد کنید') {
    return value => /^([a-zA-Z0-9]([\.\w]*)@([\w]{2,9}[\.])[a-zA-Z]{2,4})$/.test(value) || text
}

/**
 *
 * this function verify value passed in is a valid username or not
 * if the value is valid then return true otherwise
 * return the message accepted as parameter or custom message
 *
 * این فاکشن برسی میکند که مقدار پاس داده شده یک نام کاربری درست هست یا ن
 * اگه درست بود مقدار true را بازگشت میدهد
 * در غیر این صورت متنی که به عنوان پارامتر قبول کرده را نمایش میدهد
 *
 * @param {string} text
 * @returns {function(*): (boolean|string)}
 */
export function verifyUsername(text = 'یک نام کاربری درست را وارد کنید') {
    return value => /^[a-z0-9_-]{3,15}$/.test(value) || text
}

/**
 *
 * this function in first place checks is value passed in or not
 * so its is some way do required function job
 * then checks the length of value less than custom number
 *
 * این فانکشن اول برسی میکند که مقداری پاس داده شده یا نه
 * بنابراین کار متد required را هم انجام میدهد
 * بعد چک میکند که مقدار پاس داده شده از یک مقداری خاص که به عنوان پارامتر قبول شده کمتر باشد
 *
 * @param {number} length
 * @param {string} field
 * @param {boolean} nullable
 * @returns {function(*): (boolean|string)}
 */
export function lessThan(length, field, nullable = false) {

    return value => {
        if (! value) {
            if (nullable) {
                return true;
            }
            return field + ' الزامیست '
        }

        return (value ? value.length <= length : false) || `طول ${field} نباید بیشتر از ${length} کاراکتر باشد`
    }
}

/**
 *
 * this function in first place checks is value passed in or not
 * so its is some way do required function job
 * then checks the length of value more than custom number
 *
 * این فانکشن اول برسی میکند که مقداری پاس داده شده یا نه
 * بنابراین کار متد required را هم انجام میدهد
 * بعد چک میکند که مقدار پاس داده شده از یک مقداری خاص که به عنوان پارامتر قبول شده بیشتر باشد
 *
 * @param {number} length
 * @param {string} field
 * @param {boolean} nullable
 * @returns {function(*): (boolean|string)}
 */
export function moreThan(length, field, nullable = false) {
    return value => {
        if (! value) {
            if (nullable) {
                return true;
            }
            return field + ' الزامیست '
        }

        return (value ? value.length >= length : false) || `طول ${field} باید بیشتر از ${length} کاراکتر باشد`
    }
}
