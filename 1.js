   var req = new XMLHttpRequest();
   req.onload = reqListener;
   req.open('get','http://goodrives.com',true);
   req.withCredentials = true;
   req.send();
