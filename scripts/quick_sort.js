function Quick(){
	quick_sort(0, array_size - 1);
	enable_buttons();
}
function partition(low, high){
	var pivot = div_sizes[high];
	div_update(divs[high], div_sizes[high], "black");
	var i = (low - 1);
	for(var j=low; j<=high-1; j++){
		div_update(divs[j], div_sizes[j], "yellow");
		if(div_sizes[j]<pivot){
			
			i++;
			div_update(divs[i], div_sizes[i], "red");
			div_update(divs[j], div_sizes[j], "red");
			var temp = div_sizes[i];
			div_sizes[i] = div_sizes[j];
			div_sizes[j] = temp;
			/* div_update(divs[i], div_sizes[i], "red");
			div_update(divs[j], div_sizes[j], "red"); */
			div_update(divs[i], div_sizes[i], "blue");
			
			
		}
		
		div_update(divs[j], div_sizes[j], "blue");
	}
	div_update(divs[i+1], div_sizes[i+1], "red");
	div_update(divs[high], div_sizes[high], "red");
	var temp = div_sizes[i+1];
	div_sizes[i+1] = div_sizes[high];
	div_sizes[high] = temp;
	//div_update(divs[high], div_sizes[high], "green");
	div_update(divs[i+1], div_sizes[i+1], "green");
	return (i+1);
	
}
function quick_sort(low , high){
	if(low < high){
		var pi = partition(low, high);
		quick_sort(low, pi-1);
		quick_sort(pi+1, high);
	}
	div_update(divs[high], div_sizes[high], "green");
}
























































