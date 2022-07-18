const tree = {
  value: 1,
  left: {
    value: 1,
    left: {
      value: 1,
      left: {
        value: 1
      },
      right: {
        value: 1
      }
    },
    right: {
      value: 1
    }
  },
  right: {
    value: 1,
    left: {
      value: 1,
      left: {
        value: 1
      },
      right: {
        value: 1
      }
    },
    right: {
      value: 1,
      left: {
        value: 1,
        right: {
          value: 1
        }
      }
    }
  }
};

const getSumOfATreeValues = (tree) => {
  if (!tree || !tree.value) return 0;

  let sum = 0;

  const readBranch = (branch) => {
    if (!branch || !branch.value) return;

    sum += branch.value;

    if (branch.hasOwnProperty("right")) readBranch(branch.right);
    if (branch.hasOwnProperty("left")) readBranch(branch.left);
  };

  readBranch(tree);

  return sum;
};

console.log(getSumOfATreeValues(tree));
