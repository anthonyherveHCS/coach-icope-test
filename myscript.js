<script>
  window.wxOConfiguration = {
    orchestrationID: '713c783d9a507a53135fe6793c24249a_6d322ff4-c015-4dba-8fc5-c1e5c6fdfe64',
    hostURL: 'https://us-south.watson-orchestrate.cloud.ibm.com',
    rootElementID: "root",
    deploymentPlatform: "ibmcloud",
    crn: 'crn:v1:bluemix:public:watsonx-orchestrate:us-south:a/713c783d9a507a53135fe6793c24249a:6d322ff4-c015-4dba-8fc5-c1e5c6fdfe64::',
    chatOptions: {
        agentId: 'e96d6c3d-5232-4389-9f37-c86af9546efa', 
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

/*    
window.wxOConfiguration = {
    orchestrationID: 
'f665a69257a9fbe8b8bf0f77bcee465e_cb18e62f-3b09-4337-a728-3693e9a8f16f',
    hostURL: 'https://us-south.watson-orchestrate.cloud.ibm.com',
    rootElementID: "root",
    showLauncher: true,
    crn: 
'crn:v1:bluemix:public:watsonx-orchestrate:us-south:a/f665a69257a9fbe8b8bf0f77bcee465e:cb18e62f-3b09-4337-a728-3693e9a8f16f::',
    deploymentPlatform: 'ibmcloud',
    chatOptions: {
      agentId: 'b753ff4e-e695-4a83-b1d7-20732c48b6ca',
      agentEnvironmentId: '3075c23e-744b-426a-9b64-fea574ce34fb'
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
*/
