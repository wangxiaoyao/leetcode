// 方法1
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
};

// 方法2
var twoSum = function (nums, target) {
  let maps = new Map();
  for (let i = 0; i < nums.length; i++) {
    maps.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let left = target - nums[i];
    if (maps.get(left) != i && maps.has(left)) {
      return [maps.get(left), i];
    }
  }
  return [];
};
