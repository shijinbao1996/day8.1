<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <!-- 点击弹出输入框 -->
          <input
            class="tag-input form-control"
            style="width: 100px"
            v-focus
            type="text"
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
            v-model="scope.row.inputValue"
            v-if="scope.row.inputVisible"
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            v-for="(item, index) in scope.row.tags"
            :key="index"
            class="badge badge-warning"
            style="margin-right: 8px"
          >
            {{ item }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(scope.row.id)">
            删除
          </button>
          <button v-confirm="identity" style="display: none">修改</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [],
      identifys: ["admin", "developer", "manager"],
      identity: "admin",
    };
  },
  created() {
    this.$axios({
      url: "/api/goods",
    }).then((res) => {
      console.log(res.data.data);
      this.list = res.data.data;
    });
  },
  methods: {
    del(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    enterFn(obj) {
      // 回车
      // console.log(obj.inputValue);
      if (obj.inputValue.trim().length === 0) {
        alert("请输入数据");
        return;
      }
      obj.tags.push(obj.inputValue); // 表单里的字符串状态tags数组
      obj.inputValue = "";
    },
  },
  directives: {
    confirm: {
      inserted(el, binding, vnode) {
        console.log(el);
        console.log(binding);
        console.log(vnode);
        vnode.context[binding.expression] = binding.value;
        const aaa = vnode.context.identifys;
        const bbb = binding.value;
        console.log(aaa);
        console.log(bbb);
        console.log(bbb.indexOf(aaa));
        if (aaa.indexOf(bbb) != -1) {
          el.style.display = "block";
        }
      },
    },
  },
};
</script>

<style></style>
