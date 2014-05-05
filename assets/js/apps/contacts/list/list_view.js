ContactManager.module("ContactsApp.List", function(List, ContactManager, framework, utils){
  List.Contact = framework.mixItemView({
    tagName: "ul",
    template: "contact-list-item",
    events: {
      "click li": "alertPhoneNumber"
    },
    alertPhoneNumber: function(){
      alert(this.model.get("phoneNumber"));
    }
  });

  List.Contacts = framework.mixCollectionView({
    tagName: "ul",
    itemView: List.Contact
  });

});
