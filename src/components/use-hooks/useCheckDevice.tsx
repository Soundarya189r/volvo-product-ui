import { useEffect, useState } from "react"


const useCheckDevice = () => {
    const [deviceType, setDeviceType] = useState('')

    useEffect(() => {
        const checkDevice = () => {
            const isMobile = /Mobile|Android/i.test(navigator.userAgent)
            setDeviceType(isMobile ? 'mobile' : 'desktop')
        }
        checkDevice()
        window.addEventListener('resize', checkDevice)
        return (() => window.removeEventListener('resize', checkDevice))
    }, [])

    return { deviceType }
}

export default useCheckDevice