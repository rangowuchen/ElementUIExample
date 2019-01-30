const list = {
    data() {
        return {
            pageSize: 5,
            pageNum: 1,
            totalSize: 12,
            tableData: []
        }
    },
    methods: {
        // 每页多少条
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageNum = 1;
            this.pageSize = val;
            this.list();
        },
        // 当前页
        handleCurrentChange(val) {
            this.pageNum = val;
            this.list();
            console.log(`当前页: ${val}`);
        }
    },
}
export default list