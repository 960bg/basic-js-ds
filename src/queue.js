// const { NotImplementedError } = require( '../extensions/index.js' );

// const { ListNode } = require( '../extensions/list-node.js' );

// /**
//  * Implement the Queue with a given interface via linked list (use ListNode extension above).
//  *
//  * @example
//  * const queue = new Queue();
//  *
//  * queue.enqueue(1); // adds the element to the queue
//  * queue.enqueue(3); // adds the element to the queue
//  * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
//  * queue.getUnderlyingList() // returns { value: 3, next: null }
//  */
// class Queue {
//   constructor() {
//     this.queue = [];
//     this.base = null;
//     console.debug( '-----------------constructor()' );
//   }

//   getUnderlyingList() {
//     console.debug( '++++++++ getUnderlyingList() this.base',
//       this.base );
//     // return this.queue[0];
//     return this.base;
//   }

//   enqueue( val ) {
//     console.debug( '[+] enqueue( val )' );

//     const newItem = new ListNode( val );

//     if ( this.base === null ) {
//       this.base = newItem;
//       return;
//     }

//     const elPred = this.base.next;
//     elPred.next = newItem;

//     // newItem.next = elPred;
//     this.base = elPred;
//     return;
//   }
//   dequeue() {
//     console.debug( '[-] dequeue()' );

//     if ( this.base === null ) {
//       console.debug( `no data` );
//       return `no data`;
//     }


//     const items = findFirst( this.base );
//     if ( items.second === null ) {
//       return items.first.value;
//     }

//     items.second.next = null;
//     return items.first.value;

//     function findFirst( list ) {
//       if ( list.next === null ) {
//         const ob = {
//           first: list,
//           second: null
//         };
//         return ob;
//       }

//       if ( list.next.next === null ) {
//         const ob = {
//           first: list.next,
//           second: list
//         };
//         return ob;
//       }


//       return findFirst( list.next );
//     }


//   }
// }
// module.exports = {
//   Queue
// };
