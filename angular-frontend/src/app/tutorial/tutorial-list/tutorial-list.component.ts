import {Component, ElementRef, Host, HostBinding, Injector, OnInit} from '@angular/core';
// import {AbstractComponent} from '@common/component/abstract.component';
// import {CommonConstant} from '@common/constant/common-constant';
// import {UrlPath} from '@common/constant/url-path';
// import {Utils} from '@common/utils/utils';
// import {Alert} from '@common/utils/alert-util';
// import {MeshList, SearchConfig} from '@mesh/mesh.value';
// import {MeshAnalyzerService} from '@analyzer-mesh/mesh-analyzer.service';
// import DateUtil = Utils.DateUtil;

import * as _ from 'lodash';

@Component({
  selector: 'tutorial-list',
  templateUrl: './tutorial-list.component.html'
})
export class TutorialListComponent implements OnInit {

  // // flex-container 클래스 추가
  // @HostBinding('class.flex-container') someClass: Host = true;
  //
  // // 검색어
  // public searchText: string = '';
  // // 검색 기준 리스트
  // public searchConfigList: SearchConfig = new SearchConfig();
  // // 선택된 검색 기준
  // public searchConfigSelected: string = '이름';
  // // 검색 input focus 여부
  // public searchboxFocused: boolean = false;
  // // 검색 list show 여부
  // public searchConfigListShow: boolean = false;
  //
  // // 화면에 보여줄 mesh list
  // public showMeshList: MeshList[] = [];
  // // 백엔드에서 받아온 mesh list
  // public gotMeshList: MeshList[] = [];
  // // 검색 mesh list
  // public searchedMeshList: MeshList[] = [];
  //
  // constructor(protected readonly elementRef: ElementRef,
  //             protected readonly injector: Injector,
  //             protected readonly  meshAnalyzerService: MeshAnalyzerService,) {
  //   super(elementRef, injector);
  // }
  //
  // public ngOnInit() {
  //   this.getMeshList();
  // }
  //
  // /**
  //  * @description: mesh 검색어 삭제
  //  */
  // public deleteSearchText() {
  //   this.searchText = '';
  //   this.searchMesh();
  //   this.safelyDetectChanges();
  // } // func - deleteSearchText
  //
  // /**
  //  * @description: search config 선택후 select invisible, 선택 된 값 변경
  //  * @param config - 선택된 search config
  //  */
  // public searchConfigItemClicked(config) {
  //   this.searchConfigList.id = config.id;
  //   this.searchConfigList.value = config.value;
  //   this.searchConfigList.list.forEach(configItem => {configItem.selected = false});
  //   config.selected = true;
  // } // func - searchConfigItemClicked
  //
  // /**
  //  * @description: mesh list 검색
  //  */
  // public searchMesh() {
  //   const trimmedSearchText = _.isEmpty(this.searchText) ? '' : this.searchText.trim();
  //   if(_.isEmpty(trimmedSearchText) || _.isNil(trimmedSearchText)) { this.getMeshList(); return; }
  //
  //   this.searchedMeshList = [];
  //   this.meshAnalyzerService.searchMeshList(this.searchConfigList.id, trimmedSearchText)
  //     .subscribe(response => {
  //       if(response.code === CommonConstant.RESULTCODE.SUCCESS) {
  //         this.gotMeshList = response.data['items'];
  //         this.calculateModifyTime();
  //         this.showMeshList = this.gotMeshList;
  //         this.setMeshImg(this.showMeshList);
  //       } else {
  //         Alert.error('Error: ' + response.message);
  //       }
  //       this.safelyDetectChanges();
  //     });
  // } // func - searchMesh
  //
  // /**
  //  * @description: Mesh List 클릭시 페이지 이동
  //  */
  // public onClickMoveDetail(item: object) {
  //   this.router.navigate([`${UrlPath.MESH_ANALYZER.DETAIL.replace(':meshId', item['meshId'])}`]);
  // } // func - onClickMoveDetail
  //
  // /**
  //  * @description: Mesh List 정보 조회
  //  */
  // public getMeshList() {
  //   this.meshAnalyzerService.getMeshList()
  //     .subscribe(response => {
  //       if(response.code === CommonConstant.RESULTCODE.SUCCESS) {
  //         this.gotMeshList = response.data['items'];
  //         this.calculateModifyTime();
  //         this.showMeshList = this.gotMeshList;
  //         this.setMeshImg(this.showMeshList);
  //       } else if(response.code === CommonConstant.RESULTCODE.FAIL) {
  //         Alert.error('Error: ' + response.message);
  //       }
  //       this.changeDetect.detectChanges();
  //     });
  // } // func - getMeshList
  //
  // /**
  //  * @description: 수정 날짜 계산(어제, 2일전, 3일전, 2020-00-00)
  //  */
  // public calculateModifyTime(): void {
  //   for(let i=0; i<this.gotMeshList.length; i++) {
  //     this.gotMeshList[i]['updatedDt'] = DateUtil.getFormattedDate(this.gotMeshList[i]['updatedDt']);
  //     //TODO: 2020-09-15 updatedBy 확인 필요
  //     if(this.gotMeshList[i]['updatedBy'] === undefined) this.gotMeshList[i]['updatedBy'] = '###';
  //   }
  // } // func - calculateModifyTime
  //
  // /**
  //  * @description: set image of mesh list
  //  */
  // public setMeshImg(meshList: MeshList[]) {
  //   meshList.forEach(meshItem => {
  //     meshItem.meshBgName = meshItem.name.substring(0,1).toUpperCase();
  //     meshItem.meshBgType = CommonConstant.BACKGROUND_TYPE_LIST[Math.floor(Math.random() * 10)];
  //   });
  //   this.safelyDetectChanges();
  // } // func - setMeshImg

}
