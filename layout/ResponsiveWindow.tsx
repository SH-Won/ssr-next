import { useBreakPoints } from '@/hooks'
interface ResponsiveWindowProps {
  children: JSX.Element[] | JSX.Element
}
export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

const checkMobile = () => isMobile()
const ResponsiveWindow = ({ children }: ResponsiveWindowProps) => {
  const { breakPointsClass } = useBreakPoints()
  const isMobile = checkMobile() || breakPointsClass === 'mobile'
  return <div className={`main-container ${breakPointsClass}`}>{children}</div>
}

export default ResponsiveWindow
