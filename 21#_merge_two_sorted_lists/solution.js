var mergeTwoLists = function (list1, list2) {

	if(!list1) return list2;
	if(!list2) return list1;

	if (list1.val > list2.val){
		list2.next = mergeTwoLists(list2.next, list1);
		return list2;
	}else{
		list1.next = mergeTwoLists(list1.next, list2);
		return list1;
	}
};
