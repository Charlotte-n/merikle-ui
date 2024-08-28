<script setup lang="ts">
import {TreeNode, TreeOptions, TreeProps, treeProps} from "@merikle-ui/components/tree";
import {ref, watch} from "vue";
defineOptions({
  name:'m-tree'
})

const props = defineProps()

//定义数据源，将传入来的data格式化之后放进去
const tree = ref<TreeNode[]>([])

function createTreeOptions (key:string,label:string,children:string){
  return {
    getKey(node:TreeOptions){
      return node[key] as string
    },
    getLabel(node:TreeOptions){
      return node[label] as string
    },
    getChildren(node:TreeOptions){
      return node[children] as TreeOptions[]
    }
  }
}
const treeOptions = createTreeOptions(props.KeyFiled,props.labelField,props.childrenField)
function createTree(data:TreeOptions[]):TreeNode[]{
  function traversal(data:TreeOptions[],parent:TreeNode | null = null):TreeNode[]{
    return data.map(node=>{
      let children = treeOptions.getChildren(node) || []
      const treeNode =  {
        //不确定就是用户传递进来的是什么
        key:treeOptions.getKey(node),
        label:treeOptions.getLabel(node),
        children:treeOptions.getChildren(node),
        level:parent?parent.level + 1:0,
        rawNode:node,
        //查看是否为叶子节点，如果自带了叶子节点那么就是，如果没有自带，那么判断是否有children
        //按需加载需要,标记不是叶子节点但是没有孩子来进行按需加载
        isLeaf:node.isLeaf ?? children.length === 0
      }
      if(children.length){
        treeNode.children = traversal(children,treeNode)
      }

      return treeNode
    })
  }


  return traversal(data)

}
watch(()=>props.data,(data:TreeOptions[])=>{
  tree.value = createTree(data)
},{
  immediate:true
})
</script>

<template></template>

<style scoped></style>
