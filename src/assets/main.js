  $(function() {
  // your code will go here. Add ajax call to codeschool badges;  
	 $.ajax({
      url: 'https://www.codeschool.com/users/1404115.json',
      dataType: 'jsonp',
      success: function(response) {
          for (var i = 0; i < response.courses.completed.length; i++) {
          var title = response.courses.completed[i].title;
          var url = response.courses.completed[i].url;
          var badge = response.courses.completed[i].badge;
          $("#badges").append('<div class="course"><h3>' + title + '</h3><img src="' + badge + '"><a href="' + url + '" target="_blank" class="btn btn-primary">See Course</a></div>');
        }
      }
    });
  
  });
