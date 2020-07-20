window.fbAsyncInit = function() {
    FB.init({
      appId            : '1350186405171884',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v7.0'
    });
  };

function downloadVideo(){
  FB.api(
        "/1323909461276605",
        function (response) {
          if (response && !response.error) {
            console.log(response)
          }
        }
    );
  }

