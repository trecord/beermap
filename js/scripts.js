var vueApp = new Vue({
  el: '#fullMap',
  data: {
    advToggled: false,
    advButtonText: 'Show Options&ensp;<i class="fa fa-chevron-circle-down"></i>'
  },
  methods: {
    toggleAdvanced: function () {
    	if(this.advToggled){
    		this.advToggled = false;
    		this.advButtonText = 'Show Options&ensp;<i class="fa fa-chevron-circle-down"></i>';
		} else {
			this.advToggled = true;
			this.advButtonText = 'Hide Options&ensp;<i class="fa fa-chevron-circle-up"></i>';
		}
    }
  }
})
// function toggleAdvanced(){
// 	if($("#toggleableStuff").hasClass("active")){
// 		$("#toggleableStuff").removeClass("active");
// 		$("#advOptBtn").html('Show Options&ensp;<i class="fa fa-chevron-circle-down"></i>').removeClass("active");
// 	} else {
// 		$("#toggleableStuff").addClass("active");
// 		$("#advOptBtn").html('Hide Options&ensp;<i class="fa fa-chevron-circle-up"></i>').addClass("active");
// 	}
// }