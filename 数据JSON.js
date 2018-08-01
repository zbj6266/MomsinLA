// 活动类栏目(activity)
{
	//id:(string);
	createDate:(number); 
	creator: (string);
	activityDate:{
		from:(number);
		to:(number);
	}
	title:(string);
	content:(string);
	address: (string);
	
	imgs:[(string)];
	numsLike: (number);
	numsRead: (number);
	keywords:[];


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
