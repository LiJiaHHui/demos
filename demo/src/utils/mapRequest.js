import React from 'react'
import axios from 'axios'
// import QQMap from 'qqmap';
// import QMap from 'QMap';
// interface IOptions{
//     hostkey:string,
//     [key:string]:any
// }
class mapRequest extends React.Component {
    // public options: IOptions

    constructor(props) {
        super(props)
        this.state = {
            addressArr: '',
            data: Object.assign({}, {
                // keyword: '长沙',
                // key: this.hostkey,
                // output:"jsonp"
                location: "28.222054,112.894945",
                key: 'UQPBZ-RCU36-K2YS3-EMV6Y-JI6JJ-3WBUM',
                referer:"myapp"
                // get_poi: 1,
                // output: 'jsonp',
                // callback: 'jsonhandle',
            })
        }
    }
    componentDidMount() {
        this.getData();
    }
    
    //地图初始化的方法
    // initQQMap = () => {
    //     //设置中心坐标
    //     let tarLat = 39.90736606309809;
    //     let tarLng = 116.39774322509766;
    //     //初始化地图
    //     console.log(QQMap)
    //     let map=new QMap.Map()
    //     console.log(map)
    //     QQMap.init('UQPBZ-RCU36-K2YS3-EMV6Y-JI6JJ-3WBUM', () => {
           
    //         let qq = null
    //         let lat,lng
    //         if (window) {
    //             qq = window.qq
    //         }
    //         // let geolocation = new qq.maps.Geolocation("UQPBZ-RCU36-K2YS3-EMV6Y-JI6JJ-3WBUM", "myapp");
    //         // console.log(geolocation.getLocation())
            
    //         // let g=new GeoInfo()
    //         // console.log(g)
    //         // 逆地址解析(经纬度到地名转换过程)
    //         // let geocoder    
    //         // geocoder = new qq.maps.CityService ({
    //         //     complete: function(res) {
    //         //         console.log(res)    
    //         //     }
    //         // })
    //         // console.log(geocoder)
    //         // var geolocation = new qq.maps.Geolocation();
    //         console.log(qq)
    //        let  citylocation = new qq.maps.CityService();
    //         //请求成功回调函数
    //         citylocation.setComplete(function(result) {
    //             let a= JSON.parse(JSON.stringify(result.detail.latLng))
    //             console.log(a);
    //             let {lat,lng}= a;
    //             console.log(lat+','+lng)
    //        this.setState({
    //             location:lat+','+lng
    //         })
    //         });
    //         //请求失败回调函数
    //         citylocation.setError(function() {
    //             alert("出错了，请输入正确的经纬度！！！");
    //         });
    //         citylocation.searchLocalCity();
    //     })
    // }


    getData = () => {
        // this.initQQMap()
        // var options = {timeout: 1000};
        let QMap=window.QMap
        let geolocation=new QMap.Geolocation()
        geolocation.getLocation(showPosition, showErr);
        function showPosition(position) {
            console.log(position) 
        };
        function showErr() {
          console.log("err!!!!")
        };

        axios.get("/api", {
            params: this.state.data
        })
            .then(res => {
                // var geolocation = new qq.maps.Geolocation();
                // console.log(geolocation)
                let data = res.data
                console.log(data.result.address)
                this.setState(  {
                    addressArr: res.data.result.address
                })
                // console.log(data)
            })
            .catch(err => {
                console.log("catch", err);
            });


    };


    render() {
        return (
            <div>
                {this.state.addressArr}
            </div>
        )
    }
};


export default mapRequest
