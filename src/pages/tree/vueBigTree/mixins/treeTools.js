/*
 * @Author: wuchen
 * @Date: 2019-12-16 13:51:15
 * @LastEditors: wuchen
 * @LastEditTime: 2019-12-16 13:52:13
 * @Description: 
 * @Email: rangowu@163.com
 */
import generateData from "./generateTreeData";
export default {
  computed: {
    tree() {
      return generateData();
    },
    flattenTree() {
      const flatten = function(node) {
        let arr = [];
        node.forEach(item => {
          arr.push(item);
          if (item.children) {
            arr.push(...flatten(item.children));
          }
        });
        return arr;
      };
      return flatten(this.tree);
    }
  }
};