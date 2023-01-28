import React, { useState } from "react";
import pyjs from 'js-pinyin';
const citys = [ "成都", "重庆", "北京", "上海", "北海", "石家庄" ]
const Pinyinjs = () => {
    const [ cityList, setCityList ] = useState([]);
    const oChange = () => {
        let d = {};//分好组的城市对象
        citys.forEach(item => {
            // 将获取的全部城市的汉字转为拼音，且小写，只取首字母
            const pinyin = pyjs.getFullChars(item).toLocaleLowerCase().slice(0, 1);
            //将每个字母转为 Unicode 编码。判断是否属于a-z字母
            const unicode = pinyin.charCodeAt(0);
            if (unicode > 96 && unicode < 123) {
                if (!d[ pinyin ]) d[ pinyin ] = []
                d[ pinyin ].push(item)
            }
        })
        console.log(d);
        //将所有的键由小写字母转为大写字母
        for (let [ k, v ] of Object.entries(d)) {
            cityList.push({
                title: k.toUpperCase(),
                city: v
            })
        }
        //将分好组的城市列表，按照字母大小排序
        cityList.sort((a, b) => {
            a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        setCityList(() => cityList)
    }
    return (
        <div onClick={oChange}>根据城市名称首字母排序</div>
    )
}
export default Pinyinjs