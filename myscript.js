
  window.wxOConfiguration = {
    orchestrationID: '713c783d9a507a53135fe6793c24249a_6d322ff4-c015-4dba-8fc5-c1e5c6fdfe64',
    hostURL: 'https://us-south.watson-orchestrate.cloud.ibm.com',
    rootElementID: 'root',
    deploymentPlatform: 'ibmcloud',
    showLauncher: true,
    crn: 'crn:v1:bluemix:public:watsonx-orchestrate:us-south:a/713c783d9a507a53135fe6793c24249a:6d322ff4-c015-4dba-8fc5-c1e5c6fdfe64::',
    chatOptions: {
        agentId: 'e96d6c3d-5232-4389-9f37-c86af9546efa'
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
