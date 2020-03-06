var that;
class Tab {
  constructor (id) {
    that = this
    this.main = document.querySelector(id);
    this.addBtn = this.main.querySelector('#HeaderRight');
    this.ul = this.main.querySelector('.hearder ul:first-child');
    this.content = this.main.querySelector('.content')
    this.init()
  }
  // 获取所有的li和section
  allLiSection () {
    this.lis = this.main.querySelectorAll('li');
    this.sections = this.main.querySelectorAll('section');
    this.removeSpan = this.main.querySelectorAll('li span:nth-child(2)');
    this.liSpan = this.main.querySelectorAll('.hearder ul li span:first-child')
  }
  init () {
    this.allLiSection()
    // 增加
    this.addBtn.onclick = this.add
    console.log(this.liSpan)
    // 删除
    //切换
    for (var i =0; i< this.lis.length; i++) {
      this.lis[i].index = i
      this.lis[i].onclick = this.toggleTab
      this.removeSpan[i].onclick = this.remove
      this.liSpan[i].ondblclick = this.edit
      this.sections[i].ondblclick = this.edit
    }
  }
  clearClass () {
    for (var i =0; i< this.lis.length; i++) {
      this.lis[i].className = ''
      this.sections[i].className = ''
    }
  }
  toggleTab () {
    that.clearClass()
    this.className = 'liShow'
    that.sections[this.index].className = 'sectionShow'
  }
  add () {
    that.clearClass()
    var random = (Math.random() * 10).toFixed(1)
    var newLi = '<li><span>'+random+'</span><span class="icon"></span></li>'
    var newSection = '<section class="text sectionShow">测试'+random+'</section>'
    that.ul.insertAdjacentHTML('beforeend', newLi)
    that.content.insertAdjacentHTML('beforeend', newSection)
    // 点击添加后需要重新获取li 和section
    that.init()
  }
  remove (event) {
    var index = this.parentNode.index;
    event.stopPropagation()
    that.lis[index].remove()
    that.sections[index].remove()
    that.init()
    // 删除的不是选中的那个li就不用重新在执行下边点击了
    if (document.querySelector('.liShow')) return;
    index--
    // click()可以让事件自动调用点击一遍
    that.lis[index] && that.lis[index].click();
  }
  edit () {
    var str = this.innerHTML;
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    console.log('iii') 
    this.innerHTML = '<input class="inputStyle" type="text" />'
    var input = this.children[0]
    input.value = str
    input.select()   // 文本框自动处于选中状态
    // 失去焦点时 input的值赋给span
    input.onblur = function () { 
      this.parentNode.innerHTML = this.value
    }
    input.onkeyup = function (e) {
      if (e.keyCode === 13) {
        this.onblur()
      }
    }
  }
}
new Tab('#box')