import axios from 'axios'
import { AjaxRequest } from './AjaxRequest'
import ErrorService from '@/services/ErrorService'

export class Ajax {
  static shared = new Ajax()

  baseURL: string = ''
  timeout: number = 10 * 1000

  async get<T>(request: AjaxRequest): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      axios({
        method: 'get',
        baseURL: request.baseURL || this.baseURL,
        url: this.baseURL,
        params: request.params,
        timeout: this.timeout
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          this.errorHandler(err)
          reject(err)
        })
    })
  }

  // TODO: Add POST, PUT and DELETE methods.

  private errorHandler(errorMessage: string): void {
    const error = new ErrorService(errorMessage)
    error.showErrorMessage()
  }
}
