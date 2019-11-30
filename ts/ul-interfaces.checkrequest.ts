import * as plugins from './ul-interfaces.plugins';

export type TCheckResultStatus = 'ok' | 'not ok' | 'timed out';

export interface IRequest_PageCheck_PWA  {
  method: 'pwa';
  request: {
    intervalMs: number,
    domain: string;
  };
  response: {
    timeStarted: number;
    timeEnded: number;
    duration: number;
    status: TCheckResultStatus;
    data: {
      lhr: any;
      reports: any[];
    };
    checkLog: string[];
  };
}

export interface IRequest_PageCheck_Function  {
  method: 'checkPwa';
  request: {
    intervalMs: number,
    domain: string;
    functionDef: string;
  };
  response: {
    timeStarted: number;
    timeEnded: number;
    duration: number;
    status: TCheckResultStatus;
    data: any;
    checkLog: string[];
  };
}

export interface IRequest_PageCheck_Assumption {
  method: 'assumption';
  request: {
    intervalMs: number,
    domain: string;
    title?: string;
    statusCode?: string;
    description?: string;
    dnsRecordMx?: string;
    dnsRecordTxt?: string;
  };
  response: {
    timeStarted: number;
    timeEnded: number;
    duration: number;
    status: TCheckResultStatus;
    data: {
      domain: string;
      title?: string;
      statusCode?: string;
      description?: string;
      dnsRecordMx?: string;
      dnsRecordTxt?: string;
    };
    checkLog: string[];
  };
}