module.exports={
	publicPath:'/',
	devServer:{
		open:true,
		port:'8080',
		proxy:{
			'/api':{
				target:'https://api.github.com',
				changeOrigin:true,
				pathRewrite:{
					'^/api':''
				}
			}
		}
	}
}