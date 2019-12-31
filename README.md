
<p style="font:normal 700 30px/50px ''" align="center">dispark-kits - 基于JavaScript的工具库</p>
<p align="center"><b>常用于数据校验、日期格式化等</b></p>



# 目录

- [安装](#安装)
- [用法](#用法)
- [示例](#示例)
- [文档](#文档)
- [贡献者们](#贡献者们)
- [维护者](#维护者)
- [License](#license)



## 安装

```shell
npm i dispark-kits --save
# or
yarn add dispark-kits
```

## 用法

```javascript
import dispark from 'dispark-kits'

//使用
dispark.time.now();

//输出
[2019,12,31,'23',59,59,'星期二']

```

## 示例

```javascript
 import dispark from 'dispark-kits'
    export default {
        data() {
            return {
            };
        },
        created() {
            console.log(dispark.time.now())
        }

    };
```

## 文档

#### dispark.time

```
<!--格式化时间戳-->
1.  formatDate(timestamp, formats)
        formats格式包括
        1. Y-M-D
        2. Y-M-D h:m:s
        3. Y年M月D日
        4. Y年M月D日 h时m分
        5. Y年M月D日 h时m分s秒
<!--获取当前时间-->
2.  now()
    注：没有参数 返回值为数组
    [Year, Month, Dates, Hour, Minute, Second, getWeek]
```
#### dispark.tools
```
<!--身份证打码-->
1.  idCardMask(idCard)
        idCard:身份证号码
        返回示例：1*************1111

```

#### dispark.validation
```
 <--是否字符串  -->  
isString(o) 
<--是否数字     -->  
isNumber(o) 
<--是否boolean  -->  
isBoolean(o) 
 <--是否函数     -->  
isFunction(o) 
<--是否为null--> 
isNull(o)
 <--是否undefined   -->  
isUndefined(o)
    <--是否对象--> 
isObj(o) 
   <--是否数组  --> 
isArray(o)
     <--是否时间--> 
isDate(o)
   <--是否正则  --> 
isRegExp(o)
    <--是否错误对象--> 
isError(o)
  <--是否Symbol函数   --> 
isSymbol(o)
    <--是否Promise对象--> 
isPromise(o) 
<--是否Set对象    --> 
isSet(o) 
    
<--是否为false --> 
isFalse(o)
<--是否为true--> 
isTrue(o)
 <--是否为ios--> 
isIos()
 <--  是否是电脑--> 
isPC()
```

## 贡献者们

<table>
    <tbody>
        <tr>
            <td>
                <a target="_blank" href="https://github.com/sunxingheng"><img width="60px" src="https://avatars3.githubusercontent.com/u/22905197?s=460&v=4"></a>
            </td>
        </tr>
    </tbody>
</table>



## 维护者

- [sunxingheng](https://github.com/sunxingheng)

## License

- [MIT](https://opensource.org/licenses/MIT)

        