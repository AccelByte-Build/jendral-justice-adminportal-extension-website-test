/*
 * Copyright (c) 2019 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import enUS from "./translations/en-US.json";
import zhCN from "./translations/zh-CN.json";

const loadedLanguages: { [key: string]: { [key: string]: string } } = {
  "en-US": enUS,
  "zh-CN": zhCN,
};

export default loadedLanguages;

export const languageMap: { [key: string]: string } = {
  "en-US": "English",
  "zh-CN": "Chinese",
};
