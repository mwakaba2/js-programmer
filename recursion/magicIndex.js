
function findMagicDistinct(arr, start, end) {
	if(end < start){
		return -1;
	}
	let mid = Math.floor((start+end) / 2);
	if(arr[mid] === mid) {
		return mid;
	} else if(arr[mid] > mid) {
		return findMagic(arr, start, mid-1);
	} else {
		return findMagic(arr, mid+1, end);
	}
}

// works for distinct values
let arr = [-1, 0, 2, 4, 6, 7];
console.log(`Magic Index:${findMagicDistinct(arr, 0, arr.length-1)}`);

function findMagic(arr, start, end) {
	if(end < start) {
		return -1;
	}
	let midIndex = Math.floor((start+end) / 2);
	let midValue = arr[midIndex];
	if(midIndex === midValue) {
		return midIndex;
	}
	// Search left
	let leftIndex = Math.min(midIndex-1, midValue);
	let left = findMagic(arr, start, leftIndex);
	if(left >= 0){
		return left;
	}

	// Search right
	let rightIndex = Math.max(midIndex+1, midValue);
	let right = findMagic(arr, rightIndex, end);
	return right;
}

// works for non distinct values
arr = [5, 5, 5, 5, 5, 5, 5];
console.log(`Magic Index:${findMagic(arr, 0, arr.length-1)}`);