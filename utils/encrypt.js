const crypto   = require('crypto');
const config  = require('../config/config');

/**
 * @param {string} algorithm
 * @param {any} content
 *  @return {string}
 */
const encrypt = (algorithm, content) => {
    let hash = crypto.createHash(algorithm)
    hash.update(content)
    return hash.digest('hex')
}

/**
 * @param {any} content
 *  @return {string}
 */
 const sha1 = (content) => encrypt('sha1', content)

/**
 * @param {any} content
 *  @return {string}
 */
 const md5 = (content) => encrypt('md5', content)

const checkSumUrl =  (url) =>{
    let encryptData =  url.split(config.app)[1].replace("?","")+config.secret;
    let newUrl = url + `&checksum=${sha1(encryptData)}`;
    return newUrl;
};

module.exports =  checkSumUrl;
