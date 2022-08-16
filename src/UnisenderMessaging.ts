import { request } from "./client";
import { CheckEmail, CheckEmailResult, CheckSms, CheckSmsResult, CreateEmailMessage, CreateSmsMessage, DeleteMessage, GetActualMessageVersion, SendEmail, SendSms, SendSmsResult, SendTestEmail, UpdateEmailMessage } from "./DTO";
import { stringifyArray } from "./utils";

export default class UnisenderMessaging {
  constructor() {
  }
  public async createEmailMessage(payload: CreateEmailMessage) {
    return await request<{ message_id: number }>('createEmailMessage', payload)
  }
  public async updateEmailMessage(payload: UpdateEmailMessage) {
    return await request<{ message_id: number }>('updateEmailMessage', payload)
  }
  public async deleteMessage(payload: DeleteMessage) {
    return await request<void>('deleteMessage', payload)
  }
  public async getActualMessageVersion(payload: GetActualMessageVersion) {
    return await request<{ message_id: number, actual_version_id: number }>('getActualMessageVersion', payload)
  }
  public async sendTestEmail(payload: SendTestEmail) {
    payload.email = stringifyArray(payload.email)
    return await request<void>('sendTestEmail', payload)
  }
  public async sendEmail(payload: SendEmail) {
    return await request<void>('sendEmail', payload)
  }
  public async checkEmail(payload: CheckEmail) {
    payload.email_id = stringifyArray(payload.email_id)
    return await request<CheckEmailResult>('checkEmail', payload)
  }
  public async createSmsMessage(payload: CreateSmsMessage) {
    return await request<{ message_id: number }>('createSmsMessage', payload)
  }
  public async sendSms(payload: SendSms) {
    return await request<SendSmsResult>('sendSms', payload)
  }
  public async checkSms(payload: CheckSms) {
    return await request<CheckSmsResult>('checkSms', payload)
  }
}