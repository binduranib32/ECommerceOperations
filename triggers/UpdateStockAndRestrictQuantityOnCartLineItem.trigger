trigger UpdateStockAndRestrictQuantityOnCartLineItem on CartLineItem__c (before insert) {
    Set<Id> productIdsToUpdate = new Set<Id>();
    Map<Id, Decimal> productIdToQuantityMap = new Map<Id, Decimal>();

    for (CartLineItem__c cartItem : Trigger.new) {
        if (cartItem.Product_Custom__c != null && cartItem.Cart_Line_Item_Quantity__c != null && cartItem.Cart_Line_Item_Quantity__c > 0) {
            productIdsToUpdate.add(cartItem.Product_Custom__c);
            productIdToQuantityMap.put(cartItem.Product_Custom__c, cartItem.Cart_Line_Item_Quantity__c);
        }
    }

    if (!productIdsToUpdate.isEmpty()) {
        List<ProductMaster__c> productsToUpdate = [SELECT Id, Product_Quantity_Stock__c FROM ProductMaster__c WHERE Id IN :productIdsToUpdate];

        for (ProductMaster__c product : productsToUpdate) {
            Decimal selectedQuantity = productIdToQuantityMap.get(product.Id);
            Decimal availableStock = product.Product_Quantity_Stock__c;

            if (selectedQuantity != null && selectedQuantity <= availableStock) {
                product.Product_Quantity_Stock__c -= selectedQuantity;
            } else {
                for (CartLineItem__c cartItem : Trigger.new) {
                    if (cartItem.Product_Custom__c == product.Id) {
                        cartItem.addError('Quantity exceeds available stock for the selected product');
                    }
                }
            }
        }

        update productsToUpdate;
    }
}