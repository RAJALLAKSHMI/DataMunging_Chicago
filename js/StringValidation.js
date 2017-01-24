module.exports = function(st) {
    try {
        return st.length;
    } catch (e) {
        return null;
    }
}
