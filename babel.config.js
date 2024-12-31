module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						"@assets": "./src/assets",
						"@components": "./src/components",
						"@hooks": "./src/hooks",
						"@interfaces": "./src/interfaces",
						"@stores": "./src/stores",
						"@themes": "./src/themes",
						"@utils": "./src/utils",
						"@views": "./src/views",
					},
				},
			],
			"@babel/plugin-proposal-export-namespace-from",
			"react-native-reanimated/plugin",
		],
	};
};
