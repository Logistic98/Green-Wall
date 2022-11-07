import splitbee from '@splitbee/web'

export function numberWithCommas(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const isDev: boolean = !!process && process.env.NODE_ENV === 'development'

export function trackEvent(
  event: string,
  data?: {
    [key: string]: string | number | boolean | undefined | null
  }
): void {
  if (isDev) {
    return
  }

  splitbee.track(event, data)
}
