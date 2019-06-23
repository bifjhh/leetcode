function LinkedList () {
  //辅助类 表示要加入链表的项
  function Node(element) {
    this.element = element
    this.next = null //指向链表中下一个节点项的指针
  }

  var length = 0
  var head = null
  
  //向链表尾部添加一个新的项
  this.append = function (element) {
    let node = new Node(element),current
    // 如果当前链表为空,则直接赋值
    if (head === null) {
      head = node
    }
    else {
      // 暂存当前的链表
      current = head

      // 循环链表.找到链表的最后一项
      while (current.next) {//当current.next为null时,则表示找到了链表的最后一项
        // 继续用current存储当前的链表项
        current = current.next
      }
      //找到最后一项，将其next赋为node，建立指向连接
      current.next = element
    }
    length++
  } 
  
  //向链表特定位置插入一个新的项
  this.insert = function (position, element) {
    // 检查是否越界
    if (position < 0 || position > length) return false

    // if (position>=0 && position<=length) {
    let node = new Node(element),
    current = head, //当前的链表
    index = 0,// 索引
    oldNode // 之前的链表

    // 如果需要插入的位置是第一项
    if (position === 0) { 
      node.next = current
      head = node
    }
    else { // 如果不是第一个则需要寻找了
      while (index++ < position) {
        oldNode = current // 存储当前索引的链表
        current = current.next // 记录下一个的链表信息
      }
      // 将需要插入的值 插入到oldNodecurrent之间
      node.next = current
      oldNode.next = node
    }
    length++
    return true

  } 

  //从链表特定位置移除一项
  this.removeAt = function (position) {
    // 检查是否越界
    if (position < 0 || position >= length) return null

    let current = head,
        index = 0,
        oldNode
        
        // 如果是移除第一项
        if (position === 0) {
          head = current.next
        }
        else {
          while (index++ < position) {
            oldNode = current
            current = current.next
          }
          // 将之前的链表 和 当前链表的下一个链接, 跳过当前链表--达到移除效果
          oldNode.next = current.next
        }
        length--
        return cuuent.element // 返回当前被删除的元素
  } 

  //返回元素在链表中的索引，如果没有则返回-1
  this.indexOf = function (element) {
    let current = head,
        index = 0
    
    while (current) {
      // 如果找到当前值所在的位置,则返回当前索引
      if (current.element === element) return index
      index++
      current = current.next
    }
    // 如果未找到,则返回-1
    return -1
  } 

  //从链表中移除一项
  this.remove = function (element) {
    let index = this.indexOf(element) // 查找当前值所在的索引位置
    this.removeAt(index) // 调用删除指定位置方法,删除该链表
  } 

  //判断链表是否为空
  this.isEmpty = function () {
    return length === 0
  } 

  //返回链表包含元素个数
  this.size = function () {
    return length
  } 

  //head是一个私有变量，当需要在类的实现外部循环访问链表时，就可以使用getHead方法获取类的第一个元素
  this.getHead = function () {
    return head
  } 

  //只输出元素的值
  this.toString = function () {
    let current = head,
        string = ''
    while (current) {
      string += `
        ${current.element}
      `
      current = current.next
    }
    return string
  } 

  //打印元素的值
  this.print = function () {
    console.log(this.toString())
  } 

}