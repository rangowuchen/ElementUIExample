<!--
 * @Author: wuchen
 * @Date: 2019-09-09 10:53:38
 * @LastEditors: wuchen
 * @LastEditTime: 2019-09-09 13:34:58
 * @Description: 
 * @Email: rangowu@163.com
 -->
 <template>
  <div>
      <tree-table :data="data" :columns="columns" border @getAuth="getAuth"></tree-table>
  </div>
</template>

<script>
import treeTable from './components/tree';

export default {
  name: 'treeTableDemo',
  components: { treeTable },
  data () {
    return {
      columns: [
        {
          text: '菜单列表',
          value: 'description',
          width: 200,
          option: 'sonData1'
        },
        {
          text: '功能权限',
          value: 'sonData1',
          option: 'sonData1',
          act: 'act'
        }
      ],
      data: [
        {
          type: 0,
          'checked': false,
          'id': '1',
          'description': '用户管理',
          isIndeterminate: false,
          checkAll: false,
          act: '全选',
          children: [
            {
              type: 1,
              'id': '6',
              'description': '用户列表',
              'parentId': '1',
              'checked': false,
              selectchecked: ['7','8','9'],
              checkAll: false,
              isIndeterminate: false,
            //   7,8,9
              'sonData1': [
                {
                  type: 2,
                  'description': '用户新增',
                  'parentId': '6',
                  'checked': false,
                  'id': '7'
 
                },
                {
                  type: 2,
                  'description': '用户修改',
                  'parentId': '6',
                  'checked': false,
                  'id': '8'
                },
                {
                  type: 2,
                  'description': '用户删除',
                  'parentId': '6',
                  'checked': false,
                  'id': '9'
                }
              ]
            },
            {
              type: 1,
              'id': '13',
              'description': '角色列表',
              'parentId': '1',
              'checked': false,
              selectchecked: ['10', '11', '12'],
              checkAll: false,
              isIndeterminate: false,
              'sonData1': [
                {
                  type: 2,
                  'description': '角色授权',
                  'parentId': '13',
                  'checked': false,
                  'id': '10'
 
                },
                {
                  type: 2,
                  'description': '角色修改',
                  'parentId': '13',
                  'checked': false,
                  'id': '11'
                },
                {
                  type: 2,
                  'description': '角色删除',
                  'parentId': '13',
                  'checked': false,
                  'id': '12'
                }
              ]
            }
          ]
        },
        // {
        //   type: 0,
        //   'checked': false,
        //   'id': '2',
        //   'description': '设备管理',
        //   isIndeterminate: false,
        //   checkAll: false,
        //   act: '全选',
        //   children: [
        //     {
        //       type: 1,
        //       'id': '6',
        //       'description': '设备列表',
        //       'parentId': '-1',
        //       'checked': false,
        //       selectchecked: [],
        //       checkAll: false,
        //       isIndeterminate: false,
        //       'sonData1': [
        //         {
        //           type: 2,
        //           'description': '设备新增',
        //           'parentId': '6',
        //           'checked': false,
        //           'id': '17'
 
        //         },
        //         {
        //           type: 2,
        //           'description': '设备修改',
        //           'parentId': '6',
        //           'checked': false,
        //           'id': '18'
        //         },
        //         {
        //           type: 2,
        //           'description': '设备删除',
        //           'parentId': '6',
        //           'checked': false,
        //           'id': '19'
        //         }
        //       ]
        //     }
        //   ]
        // }
      ]
    }
  },
  created () {
 
  },
  methods: {
    getAuth (data) {
      let opt = []
      data.forEach(val => {
        opt.push(val.id)
        if (val.children) {
          val.children.forEach(el => {
            console.log(val.id)
            if (el.selectchecked.length) {
              opt.push(el.id)
              opt.push(el.selectchecked)
            }
          })
        }
      })
      console.log(data)
      opt = opt.join().split(',').filter(n => { return n })
      console.log(opt)
    }
  }
}
</script>