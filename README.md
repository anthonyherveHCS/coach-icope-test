<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <img src = "DTE_Bank_wxO.png"
    	width="auto" height="1200"
         alt = "New Watson Assistant Bank" />

</head>

<body>
<div id="root"></div>
    
<script>
  window.wxOConfiguration = {
    orchestrationID: "f665a69257a9fbe8b8bf0f77bcee465e_cb18e62f-3b09-4337-a728-3693e9a8f16f",
    hostURL: "https://us-south.watson-orchestrate.cloud.ibm.com",
    rootElementID: "root",
    deploymentPlatform: "ibmcloud",
    crn: "crn:v1:bluemix:public:watsonx-orchestrate:us-south:a/f665a69257a9fbe8b8bf0f77bcee465e:cb18e62f-3b09-4337-a728-3693e9a8f16f::",
    chatOptions: {
        agentId: "47370a18-ff6b-42a1-93a3-d0fe19ea1ab3", 
    }
  };
  setTimeout(function () {
    const script = document.createElement('script');
    script.src = `${window.wxOConfiguration.hostURL}/wxochat/wxoLoader.js?embed=true`;
    script.addEventListener('load', function () {
        wxoLoader.init();
    });
    document.head.appendChild(script);
  }, 0);                     
</script>

</body>

</html>
