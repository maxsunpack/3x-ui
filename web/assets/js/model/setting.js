class AllSetting {

    constructor(data) {
        this.webListen = "";
        this.webDomain = "";
        this.webPort = 2053;
        this.webCertFile = "/root/.acme.sh/xxx_ecc/xxx.cer";
        this.webKeyFile = "/root/.acme.sh/xxx_ecc/xxx.key";
        this.webBasePath = "/";
        this.sessionMaxAge = "";
        this.pageSize = 50;
        this.expireDiff = "";
        this.trafficDiff = "";
        this.remarkModel = "-ieo";
        this.datepicker = "gregorian";
        this.tgBotEnable = false;
        this.tgBotToken = "";
        this.tgBotProxy = "";
        this.tgBotChatId = "";
        this.tgRunTime = "@daily";
        this.tgBotBackup = false;
        this.tgBotLoginNotify = false;
        this.tgCpu = "";
        this.tgLang = "zh-Hans";
        this.xrayTemplateConfig = "";
        this.secretEnable = false;
        this.subEnable = false;
        this.subListen = "";
        this.subPort = "2096";
        this.subPath = "/sub/";
        this.subJsonPath = "/json/";
        this.subDomain = "";
        this.subCertFile = "";
        this.subKeyFile = "";
        this.subUpdates = 0;
        this.subEncrypt = true;
        this.subShowInfo = false;
        this.subURI = "";
        this.subJsonURI = "";
        this.subJsonFragment = "";
        this.subJsonMux = "";
        this.subJsonRules = "";

        this.timeLocation = "Asia/Shanghai";

        if (data == null) {
            return
        }
        ObjectUtil.cloneProps(this, data);
    }

    equals(other) {
        return ObjectUtil.equals(this, other);
    }
}
