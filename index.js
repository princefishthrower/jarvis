var google_speech = require('google-speech');

google_speech.ASR({
    developer_key: 'AIzaSyCJIQuzAfgjh0YjQGfEKAhcskTZ_U4O2wM',
    file: 'test.m4a',
  }, function(err, httpResponse, xml){
    if(err){
        console.log(err);
      }else{
        console.log(httpResponse.statusCode, xml)
      }
    }
);
