module.exports = {
    // the default encoding ()
    encoding: "utf8",// "ascii",

    // Dexcalibur src location
    dexcaliburPath: "/Users/salade/Documents/repos/dexcalibur/src",
    
    // workspace location : folder where analyzed APK and data are stored
    workspacePath: "/Users/salade/Tools/dxc/workspace/", 
    
    // ADB location
    adbPath: "/Users/salade/Library/Android/sdk/platform-tools/adb",
    androidSdkPath: "/Users/salade/Library/Android/sdk/",

    // APKTool location
    apktPath: "/Users/salade/Tools/apktool",

    // Optional : SDB location
    sdbPath: null,

    // do not modified
    deviceId: null,
    useEmulator: false,

    // temporary files location
    tmpDir: "/tmp/",

    // default bridge
    bridge: "adb",

    // Default web server config
    web_port: 8000,

    
    // Android API version 
    platform_target: "android:7.0.0",

    // additional platforms can be add here
    platform_available: {
        "android:7.0.0": {
            name: "android",
            version : "7.0.0",
            apiVersion: 24,
            // Default path is APIS/<name>_<apiVersion> 
            // Custom path can be defined as follow
            // binaryPath: "/tmp/android_custom/"
        }
    }
};
