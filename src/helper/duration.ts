export function duration(minutes: number): string {
    if (minutes < 60) {
      return `${minutes} Minutes`;
    }
  
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    if (remainingMinutes === 0) {
      return `${hours} Hour`;
    }
  
    return `${hours} Hour ${remainingMinutes} Minutes`;
  }