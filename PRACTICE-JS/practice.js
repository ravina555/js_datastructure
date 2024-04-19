
class Node{
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

function linkedListValues(head1, head2){
  let tail = head;
  let current1 = head1.next;
  let current2 = head2;

  while(current1 !== null && current2 !== null){
    let count = 0;
    if(count % 2===0){
      tail.next = current2;
      current2 = current2.next;
    }else{
      tail.next = current1;
      current1 = current1.next;
    }
    tail=tail.next;
    count++;
  }
  return tail;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

console.log(linkedListValues(a))
