// 5 kyu | PaginationHelper
// https://www.codewars.com/kata/515bb423de843ea99400000a

/*

For this exercise you will be strengthening your page-fu mastery. You will
complete the PaginationHelper class, which is a utility class helpful for
querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating
how many items will be allowed per each page. The types of values contained
within the collection/array are not relevant.

The following are some examples of how this class is used:

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// // TODO: complete this object/class

// // The constructor takes in an array of items and a integer indicating how many
// // items fit within a single page
// function PaginationHelper(collection, itemsPerPage) {}

// // returns the number of items within the entire collection
// PaginationHelper.prototype.itemCount = function () {};

// // returns the number of pages
// PaginationHelper.prototype.pageCount = function () {};

// // returns the number of items on the current page. page_index is zero based.
// // this method should return -1 for pageIndex values that are out of range
// PaginationHelper.prototype.pageItemCount = function (pageIndex) {};

// // determines what page an item is on. Zero based indexes
// // this method should return -1 for itemIndex values that are out of range
// PaginationHelper.prototype.pageIndex = function (itemIndex) {};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

class PaginationHelper {
  /**
   * The constructor takes in an array of items and a integer indicating how
   * many items fit within a single page
   *
   * @param {any[]} collection
   * @param {number} itemsPerPage
   * @memberof PaginationHelper
   */
  constructor(collection, itemsPerPage) {
    this.arr = collection;
    this.ipp = itemsPerPage;
  }

  /**
   * Returns the number of items within the entire collection
   *
   * @returns {number}
   * @memberof PaginationHelper
   */
  itemCount() {
    return this.arr.length;
  }

  /**
   * Returns the number of pages
   *
   * @returns {number}
   * @memberof PaginationHelper
   */
  pageCount() {
    return Math.ceil(this.itemCount() / this.ipp);
  }

  /**
   * Returns the number of items on the current page. page_index is zero based.
   * this method should return -1 for pageIndex values that are out of range
   *
   * @param {number} pageIndex
   * @returns {number}
   * @memberof PaginationHelper
   */
  pageItemCount(pageIndex) {
    if (pageIndex < 0 || this.pageCount() - 1 < pageIndex) return -1;
    if (pageIndex < this.pageCount() - 1 || 0 === this.itemCount() % this.ipp)
      return this.ipp;
    return this.itemCount() % this.ipp;
  }

  // Determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  pageIndex(itemIndex) {
    if (itemIndex < 0 || this.itemCount() - 1 < itemIndex) return -1;
    return Math.floor(itemIndex / this.ipp);
  }
}

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

let helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);

strictEqual(helper.pageCount(), 2);
strictEqual(helper.itemCount(), 6);
strictEqual(helper.pageItemCount(0), 4);
strictEqual(helper.pageItemCount(1), 2);
strictEqual(helper.pageItemCount(2), -1);

// pageIndex takes an item index and returns the page that it belongs on
strictEqual(helper.pageIndex(5), 1);
strictEqual(helper.pageIndex(4), 1);
strictEqual(helper.pageIndex(3), 0);
strictEqual(helper.pageIndex(2), 0);
strictEqual(helper.pageIndex(20), -1);
strictEqual(helper.pageIndex(-10), -1);

helper = new PaginationHelper(['a', 'b', 'c', 'd'], 4);
strictEqual(helper.pageItemCount(0), 4);
