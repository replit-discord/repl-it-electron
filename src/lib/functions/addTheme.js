function addTheme(windowObj, CSSString) {
    //windowObj.webContents.stop();
    for (let i = 0; i <= 3; i++) {
        try {
        
            windowObj.webContents.insertCSS(CSSString);
        
            console.debug(`Theme Added for ${windowObj.InternalId}`);
        } catch (e) {
            console.error(`Error adding dark theme on ${e}`);
        }
    }
    windowObj.setBackgroundColor('#FFF');
}

module.exports = addTheme;Z