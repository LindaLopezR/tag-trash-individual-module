import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';

import './entry/cardDelete.js';
import './tagTrash.html';

Template.tagTrash.helpers({
	showDeleteCards() {
		return false;
	},

	getCardDelete() {
		return true;
	}
});