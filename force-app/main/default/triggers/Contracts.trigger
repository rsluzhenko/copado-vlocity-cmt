trigger Contracts on Contract (before insert) {
	System.debug('handles before insert only {!Environment.API_KEY}');
}