import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {PhotoService} from '../../../../services/photo.service';

declare var BMap;

@Component({
  selector: 'app-modal-map',
  templateUrl: './modal-map.page.html',
  styleUrls: ['./modal-map.page.scss'],
})
export class ModalMapPage implements OnInit {
// Data passed in by componentProps
  /*public opts: MapOptions;
  public marker: { point: Point; options?: MarkerOptions };
  public markers: Array<{ point: Point; options?: MarkerOptions }>;*/
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;

  @ViewChild('mapcon', {static: false}) map_container: ElementRef;
  // 展示百度地图
  longitude: any; //经度
  latitude: any; //纬度
  addressName: any;
  map: any; //地图对象
  marker: any; //标记

  constructor(navParams: NavParams, public modalController: ModalController, public element: ElementRef) {
    // componentProps can also be accessed at construction time using NavParams
    console.log(navParams.get('firstName'));
    /*this.opts = {
      centerAndZoom: {
        lng: 121.506191,
        lat: 31.245554,
        zoom: 15
      }
    };
    this.marker = {
      options: {
        icon: {
          imageUrl: '/assets/img/markerIcon.png',
          size: {
            height: 35,
            width: 25
          },
          imageSize: {
            height: 35,
            width: 25
          }
        }
      },
      point: {
        lat: 31.244604,
        lng: 121.51606
      }
    };*/
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  /*setAnimation(marker: BMarker): void {
    marker.setAnimation(Animation.BMAP_ANIMATION_BOUNCE);
  }*/

  /*let geolocation = new window.BMap.Geolocation();
  geolocation.getCurrentPosition(function(r){
    if(this.getStatus() == BMAP_STATUS_SUCCESS){
      let mk = new window.BMap.Marker(r.point);
      this.marker.point = {
        lat: r.point.lat,
        lng: r.point.lng
      };
    }
    else {
      alert('failed'+this.getStatus());
    }
  },{enableHighAccuracy: true});*/

  /*showWindow({marker, map}: { marker: BMarker; map: BMapInstance }): void {
    map.openInfoWindow(
      new window.BMap.InfoWindow('地址：浦东南路360号', {
        offset: new window.BMap.Size(0, -30),
        title: '新上海国际大厦'
      }),
      marker.getPosition()
    );
  }*/

  mapClick(e: any) {
    e;
    /*this.marker.point = {
      lat: e.point.lat,
      lng: e.point.lng
    };*/
  }

  ionViewDidEnter() {

    console.log('ionViewDidLoad HomeMapPage');

    /*this.longitude = '108.959122';
    this.latitude = '34.219873';
    this.addressName = '大雁塔位置';*/
    let map = this.map = new BMap.Map(this.map_container.nativeElement, {enableMapClick: true});//创建地图实例
    map.addControl(new BMap.MapTypeControl());
    map.addControl(new BMap.NavigationControl());
    map.enableScrollWheelZoom(false);//启动滚轮放大缩小，默认禁用
    map.enableContinuousZoom(true);//连续缩放效果，默认禁用
    map.disableDragging(true);     //禁止拖拽
    /**/
    let gc = new BMap.Geocoder();
    /*try {
      navigator.geolocation.getCurrentPosition((p) => {
        let pointer = new BMap.Point(p.coords.longitude, p.coords.latitude);
        // alert(p.coords.longitude + '    ' + p.coords.latitude);
        new BMap.Convertor().translate([pointer], 1, 5, (convRst) => {
          let pointer = convRst.points[0];
          map.centerAndZoom(pointer, 14);
          this.marker = new BMap.Marker(pointer, {icon: new BMap.Icon('assets/img/markerIcon.png', new BMap.Size(23, 'auto')),});
          map.addOverlay(this.marker);
          gc.getLocation(pointer, (r) => {
            this.addressName = r.address;
          });
          // this.addressName = `${r.address.province}${r.address.city}${r.address.district}${r.address.street}`;
        });
      });
    } catch (e) {
      alert('failed' + e.message);
    }*/
    let geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition((r) => {
      try {
        // map.panTo(r.point);
        let pointer = new BMap.Point(r.point.lng, r.point.lat);
        map.centerAndZoom(pointer, 14);
        this.marker = new BMap.Marker(r.point, {icon: new BMap.Icon('assets/img/markerIcon.png', new BMap.Size(23, 'auto')),});
        map.addOverlay(this.marker);
        this.addressName = `${r.address.province}${r.address.city}${r.address.district}${r.address.street}`;
        // alert('您的位置：' + r.point.lng + ',' + r.point.lat);
        // alert('您的位置：' + this.addressName);
      } catch (e) {
        e;
        alert('failed' + e.message);
      }
    }, {enableHighAccuracy: true});
    // map.clearOverlays();
    //单击获取点击的经纬度
    map.addEventListener('touchend', function (e) {
      //touchend时禁止拖拽，click事件生效
      map.disableDragging(true);
    });
    map.addEventListener('touchmove', function (e) {
      //touchmove时，拖拽生效，click失效
      map.enableDragging(true);
    });
    this.map.addEventListener('click', (e) => {
      // alert(e.point.lng + '' + e.point.lat);
      let pointer = new BMap.Point(e.point.lng, e.point.lat);
      this.marker.setPosition(pointer);
      gc.getLocation(pointer, (r) => {
        this.addressName = r.address;
      });
      /*$.get("{:url('admin/baidumap/getpagecontent')}",{link:get_address_url},function(data){
        data = JSON.parse(data);
        let location_url = data.result.formatted_address;
        let isw = window.parent.$('#address').val(location_url);
        if(isw){
          window.parent.close_f();
        }
      });*/
    });

    /*========*/
    // 百度地图API功能
    /*function G(id) {
      return document.getElementById(id);
    }*/
    let ac = new BMap.Autocomplete(    //建立一个自动完成的对象
      {
        'input': 'suggestId'
        , 'location': map
      });

    ac.addEventListener('onhighlight', function (e) {  //鼠标放在下拉列表上的事件
      let str = '';
      let _value = e.fromitem.value;
      let value = '';
      if (e.fromitem.index > -1) {
        value = _value.province + _value.city + _value.district + _value.street + _value.business;
      }
      str = 'FromItem<br />index = ' + e.fromitem.index + '<br />value = ' + value;

      value = '';
      if (e.toitem.index > -1) {
        _value = e.toitem.value;
        value = _value.province + _value.city + _value.district + _value.street + _value.business;
      }
      str += '<br />ToItem<br />index = ' + e.toitem.index + '<br />value = ' + value;
      // G("searchResultPanel").innerHTML = str;
    });

    let myValue;
    ac.addEventListener('onconfirm', (e) => {
      //鼠标点击下拉列表后的事件
      let _value = e.item.value;
      myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
      // G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
      setPlace(this);
      this.addressName = myValue;
    });

    function setPlace(that) {
      // map.clearOverlays();    //清除地图上所有覆盖物
      function myFun() {
        let pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
        that.marker.setPosition(pp);
        /*gc.getLocation(pointer, (r) => {
          this.addressName = r.address;
        });*/
        map.centerAndZoom(pp, 18);
        map.addOverlay(new BMap.Marker(pp));    //添加标注
        let v = that.element.nativeElement.querySelector('#suggestId')
        v.blur();
      }

      let local = new BMap.LocalSearch(map, { //智能搜索
        onSearchComplete: myFun
      });
      local.search(myValue);
    }
  }

}
