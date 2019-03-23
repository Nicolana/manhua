var login_module = {
	config: {

	},
	init: function(){
		var left = (window.innerWidth - 650)/2;
		var top = (window.innerHeight - 462)/2;

		console.log(top);

		var html = `	<div class="login-context" style="display:none;left:${left}px;top:${top}px">
		<div class="login-title">
			<i class="icon-login-large icon-mini-logo"></i>
			<label class="login-title-text">欢迎成为ACG一员</label>
		</div>
		<form method="post" action="" class="login-classic" id="1233123123">
			<div class="row">
				<input type="text" name="username" placeholder="请输入登录账号" id="username">
			</div>
			<div class="row">
				<input type="password" name="password" placeholder="请输入密码" id="password">
			</div>
			<div class="row row-line">
				<div class="row-left">
				<i class="icon-checkbox icon-checked" value="false"></i>
				<label class="aggrement" for="agreement"><a href="#">我同意ACG服务条款</a></label>
				</div>
				<a href="#" target="_blank" class="row-right">忘记密码？</a>
			</div>
			<div class="row">
				<button class="u-btn u-btn-green">登录</button>
			</div>
			<div class="row">
				<a href="#">没有账号？免费注册 ></a>
			</div>
		</form>
		<div class="login-switch row">
			<ul>
				<li><a href="#"><i class="icon-login icon-wechat"></i></a></li>
				<li><a href="#"><i class="icon-login icon-qq"></i></a></li>
				<li><a href="#"><i class="icon-login icon-weibo"></i></a></li>
			</ul>
		</div>
	</div>`
		$('body').append(html);
		this.listen()
	},
	listen: function(){
		$(".login-context").on("click", function(e){
			var target = $(e.target);
			if (target.hasClass("icon-checkbox")){
				var status = target.attr('value');
				if (status === 'false'){
					target.removeClass("icon-uncheck");
					target.addClass("icon-checked");
					target.attr('value', 'true');
				} else {
					target.removeClass("icon-checked");
					target.addClass("icon-uncheck");
					target.attr('value', 'false');
				}
			}
		});

		$(".login-context").on("click", function(e){
			e.stopPropagation();
		})

		$(document).on("click", function(e){
			var target = $(e.target);
			if (!target.hasClass('login-context')){
				$(".login-context").first().css('display', 'none');
			}
		})

		$(".login").on("click", function(e){
			e.stopPropagation();
			$(".login-context").first().css('display', 'block');
		})

		$(window).resize(function(){
			console.log(window.innerHeight);
			console.log(window.innerWidth);
			var left = (window.innerWidth - 650)/2;
			var top = (window.innerHeight - 462)/2;

			$(".login-context").first().css('top', top + 'px');
			$(".login-context").first().css('left', left + 'px');
		});


	}
}

login_module.init()