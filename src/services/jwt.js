const ACCESS_TOKEN_KEY ="token";
const REFRESH_TOKEN_KEY="refresh_token";

const jwt ={
/**
 *Lưu access tokken và refresh token 
 * @param {string} accessToken - token truy cập (JWT)
 * @param {string} refreshToken - token sẽ được làm mới 
 * 
 */
 setTokens (accessToken, refreshToken) {
    if (accessToken) localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    if ( refreshToken) localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
 },

 /**
  *Get access token hiện tại  
  * @returns {string|null}
  * 
  */
 getToken(){
    return localStorage.getItem(ACCESS_TOKEN_KEY);
 },
/**
 * Lấy refresh token hiện tại 
 * @returns {string|null}
 */
 getRefreshToken(){
    return localStorage.getItem(REFRESH_TOKEN_KEY);
 },
 /**
  * Cập nhật token mới sau khi đã refresh
  * @param {string} newToken
  */
 setToken(newToken) {
    if (newToken) localStorage.setItem(ACCESS_TOKEN_KEY);
 },

/**
 * Xóa Token khi logout hoặc refresh thất bại 
 *  
 */
removeToken(){
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
},
};
export default jwt;