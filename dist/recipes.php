<!-- We don't need full layout here, because this page will be parsed with Ajax-->
<!-- Top Navbar-->
<div class="navbar">
  <div class="navbar-inner">
  		<div class="center sliding">KITCHEN CLOUD</div>
       	<div class="right">
       		<a href="#" data-panel="right" class="link icon-only open-panel">
           		<div class="num-notices"><span>2</span></div>
              	<i class="fa fa-bullhorn fa-lg"></i>
           	</a>
      	</div>
  </div>
</div>

<div class="pages">
  	<div data-page="recipes" class="page">
        <!-- Search bar -->
        <!--<form data-search-list="list-block-search" data-search-in="item-title" class="searchbar">
        	<div class="categories">
       			<a href="#" data-panel="left" class="link icon-only open-panel">
        			<i class="fa fa-th-large fa-2x"></i>
        		</a>
       		</div>
        
            <div class="searchbar-input">	
                <input type="search" placeholder="Search for Recipes"><a href="#" class="searchbar-clear"></a>
            </div>
            
            <div class="vocal-search">
            	<a class="link activate" href="#" >
          			<i class="fa fa-microphone fa-lg"></i>
               	</a>
          	</div>
        </form>-->
  
        <div class="popup voice-search">
            <div class="content-block">
                <a href="" class="right close-popup"><i class="fa fa-close fa-lg"></i></a>
                <p>Ask "What's for Dinner?"</p>
                
                <center>
                	<i class="fa fa-microphone fa-5x"></i>
                    <div class="dot"></div>
                </center>
            </div>
        </div>
 
  <div class="clear" style="height: 50px;"></div>
  
  <div class="page-content">
    <!-- This block will be displayed if anything found, and this list block is used a searbar target -->
    <div class="list-block">
    	<?php
			include(PATH . 'http://imagincorp.com/kitchencloud/wp-load.php'); // Source material
			
			if (have_posts()) : the_post(); {
	
				echo 	'<div id="card" class="left">';
				echo 	'<img src="http://placehold.it/300x300" />';
				echo 	'<div class="information">
							<h4>'. the_title() .'</h4>
							<div class="dificulty left">
								<i class="fa fa-signal">&nbsp;'. $recipe_difficulty->name .'</i>
							</div>';
				echo	'</div>';//End of information DIV
				echo 	'</div>';//End of Card
			}
			
			endif;
		?>
    </div>
    
    <div class="clear" style="height: 40px;"></div>
  </div>
  
  	<!-- Bottom Toolbar-->
  	<div class="toolbar tabbar">
  		<div class="toolbar-inner">
       		<a href="index.html" class="link active"><img src="img/icon-pantry.png" width="25" height="29"></a>
            <a href="list.html" class="link"><img src="img/icon-list.png" width="21" height="29"></a>
            <a href="analytics.html" class="link analytics"><img src="img/icon-analytics.png" width="40" height="40"></a>
            <a href="recipes.html" class="link"><img src="img/icon-recipes.png" width="29" height="29"></a>
            <a href="user-settings.html" class="link"><img src="img/icon-user.png" width="29" height="29"></a>
      	</div>
	</div>
</div>  
</div>