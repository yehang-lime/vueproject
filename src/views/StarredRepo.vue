<template>
	<div class="StarredRepo">
		<v-nav>
			<img src="../assets/back.png" @click="$router.back(-1)" />
			<span> StarredRepo</span>
		</v-nav>
		<span v-if="flag" class="v-tips">No StarredRepo</span>
		<div>
			<v-star></v-star>
		</div>

	</div>
</template>

<script>
	import VNav from '../components/navbar/VNav'
	import VStar from '../components/users/VStar'
	export default{
		name:'StarredRepo',
		components: {
			VNav,
			VStar
		},
		data(){
			return{
				item:[],
				flag:false
			}
		},
		created() {
			this.getStarredRepo()
		},
		methods: {
			getStarredRepo() {
				this.$axios.get("api/users/" + this.$route.query.login + "/starred")
					.then(resp => {
						if(resp.data.length!=0){
							this.item = resp.data
						}else{
							this.flag=true
						}

						console.log(resp)
					})
			}
		}
	}
</script>

<style>
</style>