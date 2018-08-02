// 活动类栏目(activity)
{
	//id:(string);//系统默认ID
	createDate:(number); //创建时间，毫秒
	creator: {
		userName: (string); //发布者名称
		userImgs: (string); //发布者头像
	};	//创建者
	activityDate:{
		from:(number);	//活动起始时间，毫秒
		to:(number);	//活动终止时间，毫秒
	}
	title:(string);	//活动标题
	content:(string);	//活动内容
	address: (string);	//活动地址
	city: (string);	//城市
	website: (string); //官网地址
	imgs:[(string)];	//图片
	numsLike: (number);	//点赞数
	numsRead: (number);	//浏览量
	numsParticipate: (number); //签到人数
	actiCategories:[(string)]; //活动类型
	comments: [
		{
			userImg: (string); //用户头像
			userName: (string);  //用户名
			numsLike: (number); //评论点赞
			content: (string); //评论内容
			time: (string); //评论时间
		}
	] //评论


}
// 非活动类栏目: 专家讲座(lectures), 妈妈攻略(strategies), 交易平台(expenses)
{
	//_id: (string); 系统默认ID
	category: (number); //栏目子类型
	createDate: (number); //创建时间，单位毫秒
	title: (string); //标题
	content: (string);  //正文内容
	imgs: [(string)];  //图片urls
	numsLike: (number); //点赞
	numsRead: (number); //浏览量
	comments: [
		{
			userImg: (string); //用户头像
			usreName: (string);  //用户名
			numsLike: (number); //评论点赞
			content: (string) //评论内容
		}
	] //评论

}
