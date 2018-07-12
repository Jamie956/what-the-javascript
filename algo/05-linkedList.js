//链表
function LinkedList() {
  var Node = function(element) {
    this.element = element;
    this.next = null;
  };
  var length = 0;
  var head = null;

  //链表转字符串
  this.toString = function() {
    var current = head;
    var items = [];
    while (current) {
      items.push(current.element);
      current = current.next;
    }
    return items;
  };

  //插入元素
  this.append = function(element) {
    var node = new Node(element);
    var current;
    if (head === null) {
      //链表首位加入节点
      head = node;
    } else {
      current = head;
      //遍历链表,直到找到最后一项
      while (current.next) {
        current = current.next;
      }
      current.next = node; //找到最后一项,与node建立链接
    }
    length++; //更新链表的长度
  };

  this.insert = function(position, element) {
    //检查是否越界
    if (position >= 0 && position <= length) {
      var node = new Node(element);
      var current = head;
      var previous;
      var index = 0;

      if (position === 0) {
        //在首部插入元素
        node.next = current;
        head = node;
      } else {
        //遍历索引，直到找到指定的位置
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++; //更新链表长度
      return true;
    } else {
      return false; //越界
    }
  };

  this.removeAt = function(position) {
    //检查越界值
    if (position > -1 && position < length) {
      // {1}
      var current = head, // {2}
        previous, // {3}
        index = 0; // {4}
      //移除第一项
      if (position === 0) {
        // {5}
        head = current.next;
      } else {
        while (index++ < position) {
          // {6}
          previous = current;
          // {7}
          current = current.next; // {8}
        }
        //将previous与current的下一项链接起来:跳过current,从而移除它
        previous.next = current.next; // {9}
      }
      length--; // {10}
      return current.element;
    } else {
      return null; // {11}
    }
  };
  this.remove = function(element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };
  this.indexOf = function(element) {
    var current = head, //{1}
      index = -1;
    while (current) {
      //{2}
      if (element === current.element) {
        return index;
        //{3}
      }
      index++;
      //{4}
      current = current.next; //{5}
    }
    return -1;
  };
  this.isEmpty = function() {
    return length === 0;
  };
  this.size = function() {
    return length;
  };

  this.print = function() {};
  this.getHead = function() {
    return head;
  };
}

var list = new LinkedList();
list.append(15);
list.append(10);
list.toString();
console.log(list.toString());
