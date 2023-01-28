import React, { useEffect, useRef } from "react";
import "./sortablejs.less";
import Sortable from 'sortablejs';
const Sortablejs = () => {
    useEffect(() => {
        initSortable()
    }, [])
    const sortableRef = useRef(null);
    const initSortable = () => {
        const sortable = Sortable.create(sortableRef.current, {
            animation: 200,
            group: "name",
            dataIdAttr: 'data-id', //指定获取拖动后排序的属性
            onEnd: function (evt) {
                // 拖动结束,获取拖动后的排序，arr数组里的值是 data-id 的顺序
                let arr = sortable.toArray();
                console.log({ evt, arr })
            },
        });
    }
    return (
        <div className="sortable-js" ref={sortableRef}>
            <div className="list-item" data-id="a">a</div>
            <div className="list-item" data-id="b">b</div>
            <div className="list-item" data-id="c">c</div>
        </div>
    )
}
export default Sortablejs

/**
 * group: "name",
  //2种group写法选一种就可以了
  group: { 
    name: 'name',
    pull: 'clone', //克隆元素
  },
  //是否允许元素内部排序，如果为false当有多个排序组时,多个组之间可以拖拽，本身不能拖拽（默认true）
  sort: true,
  //是否禁用拖拽和排序
  disabled: false,
  //动画效果持续时间（不设置或0都没有过渡效果）
  animation: 150,
  //点击指定class类的元素才能拖拽（比如点击元素内的图标才能拖拽元素，可以给图标设置my-handle class）
  //class可以定义在元素本身上，也可以定义在子元素上
  handle: ".my-handle",
  // class为ignore的元素不能拖动
  filter: ".ignore",
  //含有item 类的元素可以被拖拽（class只能定义在元素本身上）
  draggable: ".item",
  //指定获取拖动后排序的属性
  dataIdAttr: 'data-id',
  //给停靠位置添加的class（可以给这个class定义样式）
  ghostClass: "ghost",
  //选中元素添加的类（包括悬浮的元素和停靠位置的元素）
  chosenClass: "chosen",
  //拖拽对象移动时添加的类
  dragClass: "drag",
  //禁用html5原生拖拽
  forceFallback: false,
  ...
  //克隆事件
  onClone: function (evt) {
      //被克隆的对象（被移到另外地方的那个元素）
      var origEl = evt.item;
      //克隆后的对象（还是在原来位置的元素）
      var cloneEl = evt.clone;
      cloneEl.innerHTML = "clone出的元素";
  }
 */