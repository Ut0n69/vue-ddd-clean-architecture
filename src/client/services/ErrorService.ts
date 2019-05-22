export default class ErrorService {
  private _errorMessage: string

  constructor(errorMessage: string) {
    this._errorMessage = errorMessage
  }

  public showErrorMessage(): void {
    alert(this._errorMessage)
  }
}
