var { Hotkey } = require("sdk/hotkeys"),
    clipboard = require("sdk/clipboard");

var pasteHotKet = Hotkey({
    combo: "accel+V",
    onPress: function () {
        console.log('teste');
    }
});
