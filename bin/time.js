//时间 数据进行操作



//时间戳转为格式化时间
export const formatDate =(timestamp, formats) => {
　　/*
　　formats格式包括
　　1. Y-M-D
　　2. Y-M-D h:m:s
　　3. Y年M月D日
　　4. Y年M月D日 h时m分
　　5. Y年M月D日 h时m分s秒
　　示例：console.log(formatDate(1500305226034, 'Y年M月D日 h:m:s')) ==> 2017年07月17日 23:27:06
　　*/
　　formats = formats || 'Y-M-D';
　　var myDate = timestamp ? new Date(timestamp) : new Date();
　　var year = myDate.getFullYear();
　　var month = formatDigit(myDate.getMonth() + 1);
　　var day = formatDigit(myDate.getDate());
　　var hour = formatDigit(myDate.getHours());
　　var minute = formatDigit(myDate.getMinutes());
　　var second = formatDigit(myDate.getSeconds());
　　return formats.replace(/Y|M|D|h|m|s/g, function(matches) {
　　　　return ({
　　　　　　Y: year,
　　　　　　M: month,
　　　　　　D: day,
　　　　　　h: hour,
　　　　　　m: minute,
　　　　　　s: second
　　　　})[matches];
　　});
};
//获取当前时间年月日是分秒，以数组形式传值
export const now = ()=> {
		var date = new Date(); //实例一个时间对象；
		var Year = date.getFullYear(); //获取系统的年；
		var Month = date.getMonth() + 1; //获取系统月份，由于月份是从0开始计算，所以要加1
		var Dates = date.getDate(); //获取系统日期,
		var week = date.getDay(); //星期 
		var Hour = date.getHours(); //获取系统时
		//当数值为个数时，在前面加0
		if (Hour < 10) {
			Hour = '0' + Hour;
		} else {
			Hour = Hour;
		}
		var Minute = date.getMinutes(); //分
		if (Minute < 10) {
			Minute = '0' + Minute;
		} else {
			Minute = Minute;
		}
		var Second = date.getSeconds(); //秒
		if (Second < 10) {
			Second = '0' + Second;
		} else {
			Second = Second;
		}
		//判断星期几 
		var weeks = ["日", "一", "二", "三", "四", "五", "六"];
		var getWeek = "星期" + weeks[week];
		// console.log(Year, Month, Dates, Hour, Minute, Second, getWeek)
		return [Year, Month, Dates, Hour, Minute, Second, getWeek]
	}

