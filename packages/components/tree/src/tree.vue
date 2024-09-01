<script setup lang="ts">
import {TreeNode, TreeOptions} from "@merikle-ui/components/tree";
import {treeProps} from './tree'
import {ref, watch} from "vue";
defineOptions({
  name:'m-tree'
})

const props = defineProps(treeProps)

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

//监听数据变化，格式化数据。
watch(()=>props.data,(data:TreeOptions[])=>{
  tree.value = createTree(data)
  console.log(tree.value)
},{
  immediate:true
})

//希望将一棵树进行拍平，并且还能展开。
//还希望有一个默认展开
const expandedSetKeys = ref(new Set(props.defaultExpandedKeys))
function flattenTree(){
  const expandedKeys = expandedSetKeys.value
  const flattenNodes:TreeNode[] = []//被拍平的结果

  const nodes = tree.value || []//被格式化的节点
  const stack:TreeNode[] = []//被遍历的节点

  //深度遍历树
  for(let i = nodes.length - 1;i >= 0;i--){
    stack.push(nodes[i])
  }
  while (stack.length){
    const node = stack.pop()
    if(!node)continue
    flattenNodes.push(node)
    if(expandedKeys.has(node.key)){
      const children = node.children
      if(children){
        for(let i = children.length - 1;i >=0;i--){
          stack.push(node.children[i])
        }
      }
    }
  }
  return flattenNodes
}

console.log(flattenTree())

</script>

<template></template>

<style scoped></style>
