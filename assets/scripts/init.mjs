import Module from "./module.mjs";
import { VueApplicationMixin } from './libs/VueApplicationMixin.mjs';
import { vueGetTemplate } from './libs/VueGetTemplate.mjs';
import { logger as l } from './logger.mjs';

const { ApplicationV2 } = foundry.applications.api;
class VueUserConfig extends VueApplicationMixin(ApplicationV2) {
	static DEFAULT_OPTIONS = foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
		id: `app-${Math.random().toString(36).substr(2, 9)}`,
		window: {
			title: `${Module.id}.title`,
			icon: "fa-solid fa-triangle-exclamation"
		},
		position: {
			width: 680,
			height: "auto"
		},
		actions: { }
	}, { inplace: false });

	static PARTS = {
		app: {
			id: "app",
			component: vueGetTemplate(`/modules/${Module.id}/templates/UserConfig.vue`)
		}
	}
}

class VueApplication extends VueApplicationMixin(ApplicationV2) {
	static DEFAULT_OPTIONS = foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
		id: `app-${Math.random().toString(36).substr(2, 9)}`,
		window: {
			title: `${Module.id}.title`,
			icon: "fa-solid fa-triangle-exclamation"
		},
		position: {
			width: 680,
			height: "auto"
		},
		actions: { }
	}, { inplace: false });

	static PARTS = {
		app: {
			id: "app",
			component: vueGetTemplate(`/modules/${Module.id}/templates/App.vue`)
		}
	}
}

Hooks.once('ready', async () => {
	l.log("Hook.Ready | ESM Vue Application | Use VueUserConfig() to render the Vue Sample usign VueApplicationMixin.")
	window.VueUserConfig = async () => await new VueUserConfig().render(true);

	l.log("Hook.Ready | ESM Vue Application | Use VueApp() to render the Vue Sample using VueApplicationMixin.")
	window.VueApp = async () => await new VueApplication().render(true);
});