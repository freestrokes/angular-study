// import {CommonConstant} from '../constant/common-constant';
// import * as _ from 'lodash';

// /**
//  * 공통 Value
//  */
// export class AbstractValue {
//
//   // 작성자
//   public createdUser: string;
//
//   // 작성자 id - email
//   public createdUserId: string;
//
//   // 작성자 부서
//   public createdDept: string;
//
//   // 작성시간
//   public createdDt: string;
//
//   // 수정자
//   public updatedUser: string;
//
//   // 수정자 id - email
//   public updatedUserId: string;
//
//   // 수정자 부서
//   public updatedDept: string;
//
//   // 수정시간
//   public updatedDt: string;
//
// }

// /**
//  * Result
//  */
// export class Result<T = object> {
//
//   // Code
//   public code: string;
//
//   // 메시지
//   public message: string;
//
//   // 데이터
//   public data: T;
//
//   constructor(result) {
//
//     if (!result) {
//       return;
//     }
//
//     this.code = result.code;
//     this.message = result.message;
//     this.data = result.data;
//   }
//
//   public hasCode() {
//     return _.negate(_.isNil)(this.code);
//   }
//
//   public isFail() {
//
//     if (!this.hasCode()) {
//       throw new Error(`Code is missing. Please check it`);
//     }
//
//     return this.code === CommonConstant.RESULTCODE.FAIL;
//   }
//
//   public isPanPublishFail() {
//
//     if (!this.hasCode()) {
//       throw new Error(`Code is missing. Please check it`);
//     }
//
//     return this.code === CommonConstant.RESULTCODE.PAN_PUBLISH_FAIL;
//   }
//
//   public isPanDisabled() {
//
//     if (!this.hasCode()) {
//       throw new Error(`Code is missing. Please check it`);
//     }
//
//     return this.code === CommonConstant.RESULTCODE.PAN_DISABLED;
//   }
//
//   // noinspection JSUnusedGlobalSymbols
//   public isSuccess() {
//
//     if (!this.hasCode()) {
//       throw new Error(`Code is missing. Please check it`);
//     }
//
//     return this.code === CommonConstant.RESULTCODE.SUCCESS;
//   }
//
// }

// SelectValue Class
export class SelectValue {
  public label: string;
  public value: any;
  public checked: boolean;

  constructor(label: string, value: any, checked: boolean) {
    this.label = label;
    this.value = value;
    this.checked = checked;
  }
}

// Page Class
export class Page {
  public itemsPerPage: number;
  public currentPage: number;
  public totalItems: number;

  constructor() {
    this.itemsPerPage = 0;
    this.currentPage = 0;
    this.totalItems = 0;
  }

  // constructor(page: Pageable = null) {
  //   if (page) {
  //     this.totalElements = page.totalElements;
  //     this.totalPages = page.totalPages;
  //     this.last = page.last;
  //     this.numberOfElements = page.numberOfElements;
  //     this.first = page.first;
  //     this.last = page.last;
  //     this.size = page.size;
  //     this.number = page.number;
  //   }
  // }
  //
  // // 전체 목록 개수
  // public totalElements: number;
  //
  // // 전체 페이지 개수
  // public totalPages: number;
  //
  // // 마지막 페이지 여부
  // public last: boolean;
  //
  // // 현재 페이지의 목록 개수
  // public numberOfElements: number;
  //
  // // 첫 페이지 여부
  // public first: boolean;
  //
  // // Sort 정보
  // public sort: Sort;
  //
  // // 한 페이지당 최대목록 개수
  // public size: number = 20;
  //
  // // 현재 페이지 번호
  // public number: number;
  //
  // // Data 목록
  // public content: Object;
  //
  // public range: number;
}

// /**
//  * Sort
//  */
// export class Sort {
//
//   // 방향 (ASC or DESC)
//   public direction: string;
//
//   // Order by
//   public property: string;
//
//   // ignore 여부
//   public ignoreCase: boolean;
//
//   // nullHandling
//   public nullHandling: string;
//
//   // ASC 여부
//   public ascending: boolean;
// }
//
// export enum Direction {
//   DESC = 'DESC',
//   ASC = 'ASC'
// }
//
// /**
//  * Tree item
//  */
// export class Tree {
//
//   text: string;
//   value: any;
//   children: Tree[];
//   // option
//   disabled?: boolean;
//   checked?: boolean;
//   collapsed?: boolean;
//
// }
//
// export class People {
//   dept: string = '정치부';
//   name: string = '한국일보';
//   userId: string = '';
//   email: string = '';
//   jobName: string = '';
// }
//
// export enum Y_N {
//   Y = 'Y',
//   N = 'N'
// }
