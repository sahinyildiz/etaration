/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const additional_extensions = require("metro-config/src/defaults/defaults").assetExts;

module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
    resolver: {
        assetExts: [ 'png', ...additional_extensions ],
    }
};
