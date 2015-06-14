Meteor.startup(function() {
  AutoForm.setDefaultTemplate('semanticUI');

  $('body').on('click', '[data-action=logout]', function(event) {
    event.preventDefault();
    AccountsTemplates.logout();
  });
});
