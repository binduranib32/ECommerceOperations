trigger duplicateEmailtriggeronLead on Lead (before insert, before update) {
  Set<String> emailSet = new Set<String>();

    // Collect all email addresses from Lead records
    for (Lead leadRecord : Trigger.new) {
        if (leadRecord.Email != null && leadRecord.Email != '') {
            emailSet.add(leadRecord.Email.toLowerCase());
        }
    }

    // Check for duplicate email addresses
    Map<String, List<Lead>> emailToLeadsMap = new Map<String, List<Lead>>();
    for (Lead leadRecord : [SELECT Id, Email FROM Lead WHERE Email IN :emailSet]) {
        if (!emailToLeadsMap.containsKey(leadRecord.Email.toLowerCase())) {
            emailToLeadsMap.put(leadRecord.Email.toLowerCase(), new List<Lead>());
        }
        emailToLeadsMap.get(leadRecord.Email.toLowerCase()).add(leadRecord);
    }

    // Display custom error message for duplicate email addresses
    for (Lead leadRecord : Trigger.new) {
        if (leadRecord.Email != null && leadRecord.Email != '' && emailToLeadsMap.containsKey(leadRecord.Email.toLowerCase())) {
            leadRecord.Email.addError('Another Lead record already has this email address: ' + leadRecord.Email);
        }
    }
}