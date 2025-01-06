const { NotImplementedError } = require( '../extensions/index.js' );

const { ListNode } = require( '../extensions/list-node.js' );

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( node, k ) {
  // throw new NotImplementedError( 'Not implemented' );
  // remove line with error and write your code here

  const obj = {};


  function getMas( node, mas = [] ) {
    if ( node.next === null ) {
      mas.push( node.value );
      return mas;
    }
    mas.push( node.value );
    return getMas( node.next, mas );
  }

  const mas = getMas( node );
  const filt = mas.filter( el => el !== k );
  console.debug( 'getMas(node)' );
  console.debug( mas );
  console.debug( 'filt' );
  console.debug( filt );
  console.debug( 'k' );
  console.debug( k );

  const l = rec();

  console.debug( 'L' );
  console.debug( l );

  function rec( n = 0 ) {
    if ( n > filt.length - 1 ) return null;

    const list = new ListNode( filt[n] );

    list.next = rec( ++n );
    return list;


  }



  return l;



  // let mas = {};
  // if ( node !== null ) {

  //   if ( ( node.value == k ) ) {
  //     if ( node.next == null ) {
  //       node = null;
  //       return node;
  //     } else {
  //       node = node.next;
  //       removeKFromList( node.next, k );
  //     }


  //   }
  // } else {
  //   return null;
  // }
  // console.log( node );
  // console.log( k );

  // // return removeKFromList(node.next, k);
  // return node;

}

module.exports = {
  removeKFromList
};
