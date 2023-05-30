var longestCommonPrefix = function (strs) {

    for (i = 0; i < strs.length - 1; i++) {

        //I need to look at each element in the array one by one
        //I need to to look at each character in the string and compare it to the every element in the array
        let prefix = "";

        if (strs[i].charAt(i) == strs[i + 1].charAt(i) || strs[i].charAt(i) == strs[i + 2].charAt(i) || strs[i].charAt(i) == strs[i + 3].charAt(i)) {
            prefix += str[i];
        }
        

        else {
   

        return prefix;
        }
    }
};