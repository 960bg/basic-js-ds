const { NotImplementedError } = require( '../extensions/index.js' );

const { ListNode } = require( '../extensions/list-node.js' );

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = [];
    this.head = null;
    this.tail = null;
    console.debug( '-----------------constructor()' );
  }

  getUnderlyingList() {
    console.debug( '++++++++ getUnderlyingList()' );
    console.debug( 'this.head: ', this.head );
    console.debug( 'this.tail: ', this.tail );
    // return this.queue[0];
    return this.tail;
  }

  enqueue( val ) {
    console.debug( '[+] enqueue( val )', val );


    const newNode = new ListNode( val );

    if ( this.head === null ) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.tail;
    this.tail = newNode;

    // const lastNode = this.tail;
    // this.tail = newNode;
    // lastNode.next = newNode;

    console.debug( '[+][+][+][+][+][+] enqueue( val )' );

    this.getUnderlyingList();

    return;

    function getTail( node ) {
      if ( node.next === null ) {
        return node;
      }

    }

  }



  dequeue() {
    console.debug( '[-] dequeue()' );

    if ( this.head === null ) {
      console.debug( `no data` );
      return `no data`;
    }

    const items = findFirst( this.tail );
    if ( items.second === null ) {
      return items.first.value;
    }

    items.second.next = null;
    console.debug( '[-] dequeue()', items.first.value );
    return items.first.value;

    function findFirst( list ) {
      if ( list.next === null ) {
        const ob = {
          first: list,
          second: null
        };
        return ob;
      }

      if ( list.next.next === null ) {
        const ob = {
          first: list.next,
          second: list
        };
        return ob;
      }


      return findFirst( list.next );
    }


  }
}
module.exports = {
  Queue
};
