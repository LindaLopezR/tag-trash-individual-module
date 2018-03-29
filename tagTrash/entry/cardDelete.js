import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import { Locations } from 'meteor/igoandsee:locations-collection';
import { TagCategories } from 'meteor/igoandsee:tag-categories-collection';

import moment from 'moment';

import './cardDelete.html';

Template.cardDelete.helpers({
	getCardClass(type) {
		return type == 1?'rojoItem':'amarilloItem';
	},

	getCategory(categoryId) {
		return TagCategories.findOne(categoryId).name;
	},

	getLocation(locationId) {
		return Locations.findOne(locationId).name;
	},

	formatDateDelete(date) {
		return moment(date).format('DD MMM YYYY');
	},
});

Template.cardDelete.events({
	'click #btnRestoreCard'(e) {
		e.preventDefault();
		let id = $(e.target).closest('a').data('id');

		console.log(id);

		Session.set('OPTIONS_MESSAGE', TAPi18n.__('restore_card'));

		$('modalOptions').modal({
			closable  : false,
			onDeny() {

			},
			onApprove() {

				let cardId  = template.data._id;

				Meteor.call('restoreCard', cardId, function(error, result){

						if(error){
							Session.set('ERROR_MESSAGE', TAPi18n.__('error_restore_card'));
							$('#modalError').modal('show');
						}else if(result){
							Session.set('SUCCESS_MESSAGE', TAPi18n.__('card_restored'));
							$('#modalSuccess').modal('show');
						}
				});
			}
		}).modal('show');
	},

	'click #btnDeleteCard'(e) {
		e.preventDefault();
		let id = $(e.target).closest('a').data('id');

		console.log(id);

		Session.set('OPTIONS_MESSAGE', TAPi18n.__('delete_card_permanently'));

		$('modalOptions').modal({
			closable  : false,
			onDeny() {

			},
			onApprove() {

				let cardId  = template.data._id;

				Meteor.call('deleteCardPermanently', cardId, function(error, result){

						if(error){
							Session.set('ERROR_MESSAGE', TAPi18n.__('error_delete_card'));
							$('#modalError').modal('show');
						}else if(result){
							Session.set('SUCCESS_MESSAGE', TAPi18n.__('card_deleted'));
							$('#modalSuccess').modal('show');
						}
				});
			}
		}).modal('show');
	},

});