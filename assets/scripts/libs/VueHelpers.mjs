const localize = (stringId, data={}) => {
	return game.i18n.format(stringId, data);
};

const formField = (field, options) => {
	return HandlebarsHelpers.formGroup(field, options);
}

export { localize, formField };
