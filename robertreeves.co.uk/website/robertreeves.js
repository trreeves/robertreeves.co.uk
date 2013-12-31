function SetupMenu() {
	var menuItems = document.getElementById("menu");

	var menuItem = "";
	for(var i = 0; i < menuItems.childNodes.length; i++) {	
	
		if (menuItems.childNodes[i].className) {
			menuItem = menuItems.childNodes[i];
			if (menuItem.className.search("active") < 0) {
				menuItem.onmouseover = function(){
					this.style.backgroundImage = 'url(images/menu_highlight.png)';
				};
				menuItem.onmouseout = function(){
					this.style.backgroundImage = 'url(images/menu.png)';
				};
			}
		}
	}
}

function Load()
{
	SetupMenu();
}
