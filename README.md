<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <img src = "DTE_Bank_wxO.png"
    	width="auto" height="1200"
         alt = "New Watson Assistant Bank" />

</head>
<!--
<script>
  window.wxOConfiguration = {
    orchestrationID: "f665a69257a9fbe8b8bf0f77bcee465e_cb18e62f-3b09-4337-a728-3693e9a8f16f",
    hostURL: "https://us-south.watson-orchestrate.cloud.ibm.com",
    rootElementID: "root",
    deploymentPlatform: "ibmcloud",
    crn: "crn:v1:bluemix:public:watsonx-orchestrate:us-south:a/f665a69257a9fbe8b8bf0f77bcee465e:cb18e62f-3b09-4337-a728-3693e9a8f16f::",
    chatOptions: {
        agentId: "b753ff4e-e695-4a83-b1d7-20732c48b6ca", 
        agentEnvironmentId: "3075c23e-744b-426a-9b64-fea574ce34fb",
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
-->

<script>
  window.watsonAssistantChatOptions = {
  integrationID: "48fd1e33-17cf-4bcc-96a9-8f82141ab263", // The ID of this integration.
  region: "wxo-us-south", // The region your integration is hosted in.
  serviceInstanceID: "cb18e62f-3b09-4337-a728-3693e9a8f16f", // The ID of your service instance.
  orchestrateUIAgentExtensions: false, // If you wish to enable optional UI Agent extensions.
  onLoad: async (instance) => { await instance.render(); }
};
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
</script>

<body></body>

</html>
