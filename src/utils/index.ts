export function consoleLog(message?: any, ...optionalParams: any[]): void {
  if (__DEV__) {
    console.log(message, ...optionalParams);
  }
}
