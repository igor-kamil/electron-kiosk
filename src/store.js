import Store from 'electron-store'

const store = new Store({
	watch: true, // watch config changes https://github.com/sindresorhus/electron-store#watch
	schema: {
		settings: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					default: 'https://www.zelenamisia.sk'
				},
				autoLoad: {
					type: 'boolean',
					default: false
				},
				dark: {
					type: 'boolean',
					default: true
				},
				cacheLimit: {
					type: 'number',
					default: 500
				},
				autoReload: {
					type: 'boolean',
					default: false
				},
				autoReloadMode: {
					type: 'string',
					default: 'every'
				},
				autoReloadHour: {
					type: 'number',
					default: 0
				},
				autoReloadEvery: {
					type: 'string',
					default: '1h30m'
				},
				disableExternalLinks: {
					type: 'boolean',
					default: true
				}
			}
		}
	},
	defaults: {
		settings: {
			url: 'https://www.zelenamisia.sk',
			autoLoad: false,
			dark: true,
			cacheLimit: 500,
			autoReload: false,
			autoReloadMode: 'every',
			autoReloadHour: 0, // midnight
			autoReloadEvery: '1h30m',
			disableExternalLinks: true
		}
	}
})

export default store
