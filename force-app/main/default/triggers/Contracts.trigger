trigger Contracts on Contract (before insert) {
	System.debug('handles before insert only 1000 {!Environment.API_KEY} ROLL THIS BACK');
}