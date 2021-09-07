var twoSum = function (nums, target) {
  // Create a new map
  let map = new Map();

  // Loop over the nums array
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];
    if (map.has(remainder)) return [map.get(remainder), i];
    map.set(nums[i], i);
  }
};
console.log(twoSum([3, 2, 4], 6));
